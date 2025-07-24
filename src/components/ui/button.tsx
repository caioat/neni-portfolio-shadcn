import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  `inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm text-sm font-light cursor-pointer
  transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none
  [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 ring-purple-lighter/50 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50
  focus-visible:ring-4 focus-visible:outline-0 aria-invalid:focus-visible:ring-0`,
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-sm hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-xs hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-xs hover:bg-accent hover:text-accent-foreground",
        // secondary:
        //   "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        secondary: "bg-purple text-white shadow-xs hover:bg-purple-darker",
        ghostSecondary:
          "border-1 border-purple text-purple hover:bg-purple hover:text-white",
        ghost:
          "border-1 border-white ring-popover/25 hover:bg-accent hover:text-purple focus-visible:text-purple focus-visible:bg-accent",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-sm px-3 has-[>svg]:px-2.5",
        lg: "h-12 rounded-sm px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
