"use client"

/**
 * Dialog built on UI SDK (@ui-sdk/react/dialog), styled to match the shadcn
 * Dialog in @workspace/ui. Same export names and props, so switching is an
 * import-path change.
 *
 * Differences from the Base UI version:
 *   - No portal. UI SDK renders the content in the browser's top layer
 *     (popover API), so `DialogPortal` is a pass-through kept for compatibility.
 *   - The browser centers top-layer content (`inset: 0; margin: auto`), so we
 *     don't use the translate-50% trick.
 *   - Enter/exit use CSS transitions on `data-starting-style` and
 *     `data-ending-style`; UI SDK keeps the dialog mounted until they finish.
 *   - UI SDK sets its own `data-slot` names (e.g. `dialog-backdrop`).
 */

import * as React from "react"
import {
  Dialog as DialogRoot,
  DialogBackdrop,
  DialogClose as DialogClosePrimitive,
  DialogContent as DialogContentPrimitive,
  DialogDescription as DialogDescriptionPrimitive,
  DialogTitle as DialogTitlePrimitive,
  DialogTrigger as DialogTriggerPrimitive,
} from "@ui-sdk/react/dialog"
import { XIcon } from "lucide-react"

import { cn } from "@workspace/ui/lib/utils"
import { Button } from "@workspace/ui/components/button"

/** UI SDK `className` can be a string or a function of the part's state. */
type ClassName<S> = string | ((state: S) => string | undefined) | undefined

function withBase<S>(base: string, className: ClassName<S>): ClassName<S> {
  if (typeof className === "function") {
    return (state: S) => cn(base, className(state))
  }
  return cn(base, className)
}

type StateOf<P> = P extends { className?: ClassName<infer S> } ? S : never

function Dialog(props: React.ComponentProps<typeof DialogRoot>) {
  return <DialogRoot {...props} />
}

function DialogTrigger(props: React.ComponentProps<typeof DialogTriggerPrimitive>) {
  return <DialogTriggerPrimitive {...props} />
}

/** Kept for API compatibility. UI SDK uses the top layer instead of a portal. */
function DialogPortal({ children }: { children?: React.ReactNode }) {
  return <>{children}</>
}

function DialogClose(props: React.ComponentProps<typeof DialogClosePrimitive>) {
  return <DialogClosePrimitive {...props} />
}

type DialogOverlayProps = React.ComponentProps<typeof DialogBackdrop>

function DialogOverlay({ className, ...props }: DialogOverlayProps) {
  return (
    <DialogBackdrop
      className={withBase<StateOf<DialogOverlayProps>>(
        // Reset popover UA sizing, then cover the viewport.
        "fixed inset-0 isolate z-50 m-0 size-full max-h-none max-w-none bg-black/10 transition-opacity duration-100 supports-backdrop-filter:backdrop-blur-xs data-starting-style:opacity-0 data-ending-style:opacity-0 motion-reduce:transition-none",
        className
      )}
      {...props}
    />
  )
}

type DialogContentProps = React.ComponentProps<typeof DialogContentPrimitive> & {
  showCloseButton?: boolean
}

function DialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}: DialogContentProps) {
  return (
    <>
      <DialogOverlay />
      <DialogContentPrimitive
        className={withBase<StateOf<DialogContentProps>>(
          "fixed inset-0 z-50 m-auto grid h-fit max-h-[calc(100dvh-2rem)] w-full max-w-[calc(100%-2rem)] gap-4 overflow-y-auto rounded-none bg-popover p-4 text-xs/relaxed text-popover-foreground ring-1 ring-foreground/10 outline-none transition-[opacity,scale] duration-100 ease-out sm:max-w-sm data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 motion-reduce:transition-none",
          className
        )}
        {...props}
      >
        {(state) => (
          <>
            {typeof children === "function" ? children(state) : children}
            {showCloseButton && (
              <DialogClosePrimitive
                aria-label="Close"
                render={
                  <Button
                    variant="ghost"
                    className="absolute top-2 end-2"
                    size="icon-sm"
                  />
                }
              >
                <XIcon aria-hidden="true" />
              </DialogClosePrimitive>
            )}
          </>
        )}
      </DialogContentPrimitive>
    </>
  )
}

function DialogHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-header"
      className={cn("flex flex-col gap-1 text-start", className)}
      {...props}
    />
  )
}

function DialogFooter({
  className,
  showCloseButton = false,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  showCloseButton?: boolean
}) {
  return (
    <div
      data-slot="dialog-footer"
      className={cn(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        className
      )}
      {...props}
    >
      {children}
      {showCloseButton && (
        <DialogClosePrimitive render={<Button variant="outline" />}>
          Close
        </DialogClosePrimitive>
      )}
    </div>
  )
}

type DialogTitleProps = React.ComponentProps<typeof DialogTitlePrimitive>

function DialogTitle({ className, ...props }: DialogTitleProps) {
  return (
    <DialogTitlePrimitive
      className={withBase<StateOf<DialogTitleProps>>(
        "font-heading text-sm font-medium",
        className
      )}
      {...props}
    />
  )
}

type DialogDescriptionProps = React.ComponentProps<
  typeof DialogDescriptionPrimitive
>

function DialogDescription({ className, ...props }: DialogDescriptionProps) {
  return (
    <DialogDescriptionPrimitive
      className={withBase<StateOf<DialogDescriptionProps>>(
        "text-xs/relaxed text-muted-foreground *:[a]:underline *:[a]:underline-offset-3 *:[a]:hover:text-foreground",
        className
      )}
      {...props}
    />
  )
}

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
}
