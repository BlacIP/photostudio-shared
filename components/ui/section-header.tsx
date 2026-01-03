import * as React from 'react';

import { cn } from '../../lib/utils';

type SectionHeaderProps = React.HTMLAttributes<HTMLDivElement> & {
  title: string;
  description?: string;
  eyebrow?: string;
  action?: React.ReactNode;
};

const SectionHeader = React.forwardRef<HTMLDivElement, SectionHeaderProps>(
  ({ title, description, eyebrow, action, className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex flex-wrap items-start justify-between gap-3', className)}
      {...props}
    >
      <div className="space-y-1">
        {eyebrow ? (
          <p className="text-xs uppercase tracking-[0.2em] text-text-sub-600">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="text-xl font-semibold text-text-strong-950 md:text-2xl">
          {title}
        </h2>
        {description ? (
          <p className="text-sm text-text-sub-600">{description}</p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  ),
);
SectionHeader.displayName = 'SectionHeader';

export { SectionHeader };
