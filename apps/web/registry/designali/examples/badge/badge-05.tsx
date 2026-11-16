import { Badge } from "@workspace/ui/components/badge";

export default function BadgeCustomColors() {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge className="bg-primary/5 text-chart-3 dark:bg-primary/10 dark:text-chart-1">
        Blue
      </Badge>
      <Badge className="bg-primary/5 text-chart-3 dark:bg-primary/10 dark:text-chart-1">
        Green
      </Badge>
      <Badge className="bg-primary/5 text-chart-3 dark:bg-primary/10 dark:text-chart-1">
        Sky
      </Badge>
      <Badge className="bg-primary/5 text-chart-3 dark:bg-primary/10 dark:text-chart-1">
        Purple
      </Badge>
      <Badge className="bg-destructive/5 text-destructive dark:bg-destructive/15 dark:text-destructive">
        Red
      </Badge>
    </div>
  );
}