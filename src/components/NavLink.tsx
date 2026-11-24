import { Link } from "@tanstack/react-router";
import { forwardRef, type ComponentProps } from "react";
import { cn } from "@/lib/utils";

interface NavLinkCompatProps extends Omit<ComponentProps<typeof Link>, "className" | "to"> {
  to: string;
  className?: string;
  activeClassName?: string;
  pendingClassName?: string;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
  ({ className, activeClassName, pendingClassName: _pendingClassName, to, ...props }, ref) => {
    return (
      <Link
        ref={ref}
        to={to}
        className={cn(className)}
        activeProps={{ className: cn(className, activeClassName) }}
        {...props}
      />
    );
  },
);

NavLink.displayName = "NavLink";

export { NavLink };
