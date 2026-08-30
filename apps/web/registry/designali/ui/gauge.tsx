"use client";

import { Slot as SlotPrimitive } from "radix-ui";
import * as React from "react";
import { cn } from "@workspace/ui/lib/utils";

const GAUGE_NAME = "Gauge";
const INDICATOR_NAME = "GaugeIndicator";
const TRACK_NAME = "GaugeTrack";
const RANGE_NAME = "GaugeRange";
const VALUE_TEXT_NAME = "GaugeValueText"; 

const DEFAULT_MAX = 100;
const DEFAULT_START_ANGLE = 0;
const DEFAULT_END_ANGLE = 360;
const DEFAULT_SEGMENTS = 60;
const DEFAULT_GAP = 4;
const DEFAULT_THICKNESS = 2;

type GaugeState =
  | "indeterminate"
  | "complete"
  | "loading";

interface DivProps
  extends React.ComponentProps<"div"> {
  asChild?: boolean;
}

interface GaugeContextValue {
  value: number | null;
  valueText: string | undefined;

  max: number;
  min: number;

  state: GaugeState;

  radius: number;
  thickness: number;

  size: number;
  center: number;

  percentage: number | null;

  startAngle: number;
  endAngle: number;

  segments: number;
  gap: number;

  tickInnerRadius: number;
  tickOuterRadius: number;

  valueTextId?: string;
  labelId?: string;
}

const GaugeContext =
  React.createContext<GaugeContextValue | null>(
    null,
  );

function useGaugeContext(
  consumerName: string,
) {
  const context =
    React.useContext(GaugeContext);

  if (!context) {
    throw new Error(
      `\`${consumerName}\` must be used within \`${GAUGE_NAME}\``,
    );
  }

  return context;
}

/* -------------------------------------------------------------------------- */
/* Validation                                                                 */
/* -------------------------------------------------------------------------- */

function getGaugeState(
  value: number | undefined | null,
  maxValue: number,
): GaugeState {
  if (value == null) {
    return "indeterminate";
  }

  if (value === maxValue) {
    return "complete";
  }

  return "loading";
}

function getIsValidNumber(
  value: unknown,
): value is number {
  return (
    typeof value === "number" &&
    Number.isFinite(value)
  );
}

function getIsValidMaxNumber(
  max: unknown,
): max is number {
  return (
    getIsValidNumber(max) &&
    max > 0
  );
}

function getIsValidValueNumber(
  value: unknown,
  min: number,
  max: number,
): value is number {
  return (
    getIsValidNumber(value) &&
    value >= min &&
    value <= max
  );
}

function getDefaultValueText(
  value: number,
  min: number,
  max: number,
) {
  const percentage =
    max === min
      ? 100
      : ((value - min) /
          (max - min)) *
        100;

  return Math.round(
    percentage,
  ).toString();
}

function getInvalidValueError(
  propValue: string,
  componentName: string,
) {
  return `Invalid prop \`value\` of value \`${propValue}\` supplied to \`${componentName}\`.`;
}

function getInvalidMaxError(
  propValue: string,
  componentName: string,
) {
  return `Invalid prop \`max\` of value \`${propValue}\` supplied to \`${componentName}\`. Only numbers greater than 0 are valid.`;
}

/* -------------------------------------------------------------------------- */
/* Geometry                                                                   */
/* -------------------------------------------------------------------------- */

function polarToCartesian(
  centerX: number,
  centerY: number,
  radius: number,
  angleInDegrees: number,
) {
  const angleInRadians =
    ((angleInDegrees - 90) *
      Math.PI) /
    180;

  return {
    x:
      centerX +
      radius *
        Math.cos(angleInRadians),

    y:
      centerY +
      radius *
        Math.sin(angleInRadians),
  };
}

/*
 * Calculate the number of ticks that can
 * physically fit around the circle based
 * on the requested pixel gap.
 *
 * This makes `gap` an actual visual gap
 * rather than a degree value.
 */
function getEffectiveSegments(
  radius: number,
  thickness: number,
  requestedGap: number,
  requestedSegments: number,
) {
  const circumference =
    2 * Math.PI * radius;

  const minimumSpacing =
    Math.max(
      1,
      thickness +
        requestedGap,
    );

  const maxPossibleSegments =
    Math.max(
      1,
      Math.floor(
        circumference /
          minimumSpacing,
      ),
    );

  /*
   * Keep the requested number of segments
   * when possible. If the requested gap
   * cannot physically fit, reduce the
   * number of segments.
   */
  return Math.min(
    requestedSegments,
    maxPossibleSegments,
  );
}

/* -------------------------------------------------------------------------- */
/* Gauge Props                                                                */
/* -------------------------------------------------------------------------- */

interface GaugeProps
  extends DivProps {
  value?: number | null | undefined;

  getValueText?(
    value: number,
    min: number,
    max: number,
  ): string;

  min?: number;
  max?: number;

  size?: number;

  /**
   * Thickness of each tick in pixels.
   */
  thickness?: number;

  /**
   * Gap between adjacent ticks in pixels.
   */
  gap?: number;

  startAngle?: number;
  endAngle?: number;

  /**
   * Maximum / preferred number of ticks.
   *
   * The actual number can be reduced
   * automatically when the requested
   * gap needs more space.
   */
  segments?: number;

  /**
   * Distance between the center
   * and the inner edge of each tick.
   */
  tickInnerRadius?: number;

  /**
   * Distance between the center
   * and the outer edge of each tick.
   */
  tickOuterRadius?: number;
}

/* -------------------------------------------------------------------------- */
/* Gauge                                                                      */
/* -------------------------------------------------------------------------- */

function Gauge(
  props: GaugeProps,
) {
  const {
    value: valueProp = null,

    getValueText =
      getDefaultValueText,

    min: minProp = 0,
    max: maxProp,

    size = 200,

    thickness =
      DEFAULT_THICKNESS,

    gap = DEFAULT_GAP,

    startAngle =
      DEFAULT_START_ANGLE,

    endAngle =
      DEFAULT_END_ANGLE,

    segments =
      DEFAULT_SEGMENTS,

    tickInnerRadius,
    tickOuterRadius,

    asChild,
    className,
    ...rootProps
  } = props;

  /* ------------------------------------------------------------------------ */
  /* Max validation                                                           */
  /* ------------------------------------------------------------------------ */

  if (
    (maxProp || maxProp === 0) &&
    !getIsValidMaxNumber(maxProp)
  ) {
    if (
      process.env.NODE_ENV !==
      "production"
    ) {
      console.error(
        getInvalidMaxError(
          `${maxProp}`,
          GAUGE_NAME,
        ),
      );
    }
  }

  const rawMax =
    getIsValidMaxNumber(maxProp)
      ? maxProp
      : DEFAULT_MAX;

  const min =
    getIsValidNumber(minProp)
      ? minProp
      : 0;

  const max =
    rawMax <= min
      ? min + 1
      : rawMax;

  /* ------------------------------------------------------------------------ */
  /* Safe values                                                              */
  /* ------------------------------------------------------------------------ */

  const safeThickness =
    getIsValidNumber(
      thickness,
    ) && thickness > 0
      ? thickness
      : DEFAULT_THICKNESS;

  const safeGap =
    getIsValidNumber(gap) &&
    gap >= 0
      ? gap
      : DEFAULT_GAP;

  const safeRequestedSegments =
    Number.isInteger(
      segments,
    ) && segments > 0
      ? segments
      : DEFAULT_SEGMENTS;

  /* ------------------------------------------------------------------------ */
  /* Geometry                                                                 */
  /* ------------------------------------------------------------------------ */

  const center =
    size / 2;

  const radius =
    Math.max(
      0,
      (size -
        safeThickness) /
        2,
    );

  const effectiveSegments =
    getEffectiveSegments(
      radius,
      safeThickness,
      safeGap,
      safeRequestedSegments,
    );

  const percentage =
    getIsValidNumber(valueProp)
      ? Math.max(
          0,
          Math.min(
            1,
            (valueProp - min) /
              (max - min),
          ),
        )
      : null;

  const defaultOuterRadius =
    radius;

  const defaultInnerRadius =
    radius - 24;

  const finalOuterRadius =
    tickOuterRadius ??
    defaultOuterRadius;

  const finalInnerRadius =
    tickInnerRadius ??
    defaultInnerRadius;

  /* ------------------------------------------------------------------------ */
  /* Value                                                                    */
  /* ------------------------------------------------------------------------ */

  const value =
    getIsValidValueNumber(
      valueProp,
      min,
      max,
    )
      ? valueProp
      : getIsValidNumber(
            valueProp,
          ) &&
          valueProp > max
        ? max
        : getIsValidNumber(
              valueProp,
            ) &&
            valueProp < min
          ? min
          : null;

  if (
    valueProp !== null &&
    valueProp !== undefined &&
    !getIsValidValueNumber(
      valueProp,
      min,
      max,
    )
  ) {
    if (
      process.env.NODE_ENV !==
      "production"
    ) {
      console.error(
        getInvalidValueError(
          `${valueProp}`,
          GAUGE_NAME,
        ),
      );
    }
  }

  const valueText =
    getIsValidNumber(value)
      ? getValueText(
          value,
          min,
          max,
        )
      : undefined;

  const state =
    getGaugeState(
      value,
      max,
    );

  const labelId =
    React.useId();

  const valueTextId =
    React.useId();

  /* ------------------------------------------------------------------------ */
  /* Context                                                                  */
  /* ------------------------------------------------------------------------ */

  const contextValue =
    React.useMemo(
      () => ({
        value,
        valueText,

        min,
        max,

        state,

        radius,

        thickness:
          safeThickness,

        size,
        center,

        percentage,

        startAngle,
        endAngle,

        segments:
          effectiveSegments,

        gap:
          safeGap,

        tickInnerRadius:
          finalInnerRadius,

        tickOuterRadius:
          finalOuterRadius,

        valueTextId,
        labelId,
      }),
      [
        value,
        valueText,

        min,
        max,

        state,

        radius,
        safeThickness,

        size,
        center,

        percentage,

        startAngle,
        endAngle,

        effectiveSegments,
        safeGap,

        finalInnerRadius,
        finalOuterRadius,

        valueTextId,
        labelId,
      ],
    );

  const RootPrimitive =
    asChild
      ? SlotPrimitive.Slot
      : "div";

  return (
    <GaugeContext.Provider
      value={contextValue}
    >
      <RootPrimitive
        role="meter"
        aria-describedby={
          valueText
            ? valueTextId
            : undefined
        }
        aria-labelledby={
          labelId
        }
        aria-valuemax={max}
        aria-valuemin={min}
        aria-valuenow={
          getIsValidNumber(
            value,
          )
            ? value
            : undefined
        }
        aria-valuetext={
          valueText
        }
        data-state={state}
        data-value={
          value ?? undefined
        }
        data-max={max}
        data-min={min}
        data-percentage={
          percentage
        }
        {...rootProps}
        className={cn(
          "relative inline-flex flex flex-col w-fit items-center justify-center",
          className,
        )}
      />
    </GaugeContext.Provider>
  );
}

/* -------------------------------------------------------------------------- */
/* Indicator                                                                  */
/* -------------------------------------------------------------------------- */

function GaugeIndicator(
  props: React.ComponentProps<"svg">,
) {
  const {
    className,
    ...indicatorProps
  } = props;

  const {
    size,
    state,
    value,
    max,
    min,
    percentage,
  } =
    useGaugeContext(
      INDICATOR_NAME,
    );

  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox={`0 0 ${size} ${size}`}
      width={size}
      height={size}
      data-state={state}
      data-value={
        value ?? undefined
      }
      data-max={max}
      data-min={min}
      data-percentage={
        percentage
      }
      {...indicatorProps}
      className={cn(
        "block overflow-visible",
        className,
      )}
      
    />
  );
}

/* -------------------------------------------------------------------------- */
/* Tick Positions                                                             */
/* -------------------------------------------------------------------------- */

function getTickAngles(
  startAngle: number,
  endAngle: number,
  segments: number,
) {
  const totalAngle =
    endAngle - startAngle;

  const step =
    totalAngle / segments;

  return Array.from(
    {
      length: segments,
    },
    (_, index) => {
      const centerAngle =
        startAngle +
        step *
          (index + 0.5);

      return {
        angle:
          centerAngle,
      };
    },
  );
}

/* -------------------------------------------------------------------------- */
/* Track                                                                      */
/* -------------------------------------------------------------------------- */

function GaugeTrack(
  props: React.ComponentProps<"line">,
) {
  const {
    className,
    ...trackProps
  } = props;

  const {
    center,
    thickness,
    segments,
    startAngle,
    endAngle,
    tickInnerRadius,
    tickOuterRadius,
    state,
  } =
    useGaugeContext(
      TRACK_NAME,
    );

  const ticks =
    getTickAngles(
      startAngle,
      endAngle,
      segments,
    );

  return (
    <>
      {ticks.map(
        (tick, index) => {
          const inner =
            polarToCartesian(
              center,
              center,
              tickInnerRadius,
              tick.angle,
            );

          const outer =
            polarToCartesian(
              center,
              center,
              tickOuterRadius,
              tick.angle,
            );

          return (
            <line
              key={index}
              x1={inner.x}
              y1={inner.y}
              x2={outer.x}
              y2={outer.y}
              
              stroke="currentColor"
              strokeWidth={
                thickness
              }
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
              data-state={
                state
              }
              {...trackProps}
              className={cn(
                "text-muted-foreground/20",
                className,
              )}
            />
          );
        },
      )}
    </>
  );
}

/* -------------------------------------------------------------------------- */
/* Range                                                                      */
/* -------------------------------------------------------------------------- */

function GaugeRange(
  props: React.ComponentProps<"line">,
) {
  const {
    className,
    ...rangeProps
  } = props;

  const {
    center,
    thickness,
    segments,
    startAngle,
    endAngle,
    tickInnerRadius,
    tickOuterRadius,
    percentage,
    state,
    value,
    max,
    min,
  } =
    useGaugeContext(
      RANGE_NAME,
    );

  const ticks =
    getTickAngles(
      startAngle,
      endAngle,
      segments,
    );

  return (
    <>
      {ticks.map(
        (tick, index) => {
          const tickProgress =
            (index + 1) /
            segments;

          const isActive =
            state ===
              "complete" ||
            (percentage !== null &&
              percentage >=
                tickProgress);

          if (!isActive) {
            return null;
          }

          const inner =
            polarToCartesian(
              center,
              center,
              tickInnerRadius,
              tick.angle,
            );

          const outer =
            polarToCartesian(
              center,
              center,
              tickOuterRadius,
              tick.angle,
            );

          return (
            <line
              key={index}
              x1={inner.x}
              y1={inner.y}
              x2={outer.x}
              y2={outer.y}
              stroke="currentColor"
              strokeWidth={
                thickness
              }
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
              data-state={
                state
              }
              data-value={
                value ??
                undefined
              }
              data-max={max}
              data-min={min}
              data-percentage={
                percentage
              }
              {...rangeProps}
              className={cn(
                "text-primary transition-all duration-300",
                className,
              )}
            />
          );
        },
      )}
    </>
  );
}

/* -------------------------------------------------------------------------- */
/* Value Text                                                                 */
/* -------------------------------------------------------------------------- */

function GaugeValueText(
  props: DivProps,
) {
  const {
    asChild,
    className,
    children,
    ...valueTextProps
  } = props;

  const {
    valueTextId,
    state,
    valueText,
  } =
    useGaugeContext(
      VALUE_TEXT_NAME,
    );

  const ValueTextPrimitive =
    asChild
      ? SlotPrimitive.Slot
      : "div";

  return (
    <ValueTextPrimitive
      id={valueTextId}
      data-state={state}
      {...valueTextProps}
      className={cn(
        "absolute inset-0 flex items-center justify-center font-medium text-3xl",
        className,
      )}
    >
      {children ??
        valueText}
    </ValueTextPrimitive>
  );
}

/* -------------------------------------------------------------------------- */
/* Label                                                                      */
/* -------------------------------------------------------------------------- */

function GaugeLabel(props: DivProps) {
  const {
    asChild,
    className,
    ...labelProps
  } = props

  const LabelPrimitive = asChild
    ? SlotPrimitive.Slot
    : "div"

  return (
    <LabelPrimitive
      {...labelProps}
      className={cn(
        "font-medium text-muted-foreground text-sm",
        className,
      )}
    />
  )
}

/* -------------------------------------------------------------------------- */
/* Combined                                                                   */
/* -------------------------------------------------------------------------- */

function GaugeCombined(
  props: GaugeProps,
) {
  return (
    <Gauge {...props}>
      <GaugeIndicator>
        <GaugeTrack />
        <GaugeRange />
      </GaugeIndicator> 
      <GaugeValueText />
    </Gauge>
  );
}

/* -------------------------------------------------------------------------- */
/* Exports                                                                    */
/* -------------------------------------------------------------------------- */

export {
  Gauge,
  GaugeCombined,
  GaugeIndicator,
  GaugeLabel,
  GaugeRange,
  GaugeTrack,
  GaugeValueText,
  type GaugeProps,
};