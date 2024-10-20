// components/ui/typography.tsx

import { cn } from "@/lib/utils"; // Utility function to merge classNames if you have one
import { ComponentProps } from "react";

interface TypographyProps extends ComponentProps<"p"> {
  as?: React.ElementType;
  variant?: "h1" | "h2" | "h3" | "h4" | "body1" | "body2" | "caption";
}

const typographyStyles = {
  h1: "text-4xl font-bold leading-tight",
  h2: "text-3xl font-bold leading-snug",
  h3: "text-2xl font-semibold leading-normal",
  h4: "text-xl font-medium leading-relaxed",
  body1: "text-base leading-relaxed",
  body2: "text-sm leading-relaxed",
  caption: "text-xs leading-snug text-muted-foreground",
  quote: "text-lg italic leading-relaxed text-gray-500",
};

export const Typography: React.FC<TypographyProps> = ({
  as: Component = "p",
  variant = "body1",
  className,
  ...props
}) => {
  return (
    <Component
      className={cn(typographyStyles[variant], className)}
      {...props}
    />
  );
};
