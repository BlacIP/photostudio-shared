// AlignUI Badge v0.0.0

import * as React from 'react';
import type { VariantProps } from '../../utils/tv';
import { recursiveCloneChildren } from '../../utils/recursive-clone-children';
import type { PolymorphicComponentProps } from '../../utils/polymorphic';
import { Slot } from '@radix-ui/react-slot';
import { badgeVariants } from './badge-variants';

const BADGE_ROOT_NAME = 'BadgeRoot';
const BADGE_ICON_NAME = 'BadgeIcon';
const BADGE_DOT_NAME = 'BadgeDot';

export { badgeVariants };

type BadgeSharedProps = VariantProps<typeof badgeVariants>;

type BadgeRootProps = VariantProps<typeof badgeVariants> &
  React.HTMLAttributes<HTMLDivElement> & {
    asChild?: boolean;
  };

const BadgeRoot = React.forwardRef<HTMLDivElement, BadgeRootProps>(
  (
    {
      asChild,
      size,
      variant,
      color,
      disabled,
      square,
      children,
      className,
      ...rest
    },
    forwardedRef,
  ) => {
    const uniqueId = React.useId();
    const Component = asChild ? Slot : 'div';
    const { root } = badgeVariants({ size, variant, color, disabled, square });

    const sharedProps: BadgeSharedProps = {
      size,
      variant,
      color,
    };

    const extendedChildren = recursiveCloneChildren(
      children as React.ReactElement[],
      sharedProps,
      [BADGE_ICON_NAME, BADGE_DOT_NAME],
      uniqueId,
      asChild,
    );

    return (
      <Component
        ref={forwardedRef}
        className={root({ class: className })}
        {...rest}
      >
        {extendedChildren}
      </Component>
    );
  },
);
BadgeRoot.displayName = BADGE_ROOT_NAME;

function BadgeIcon<T extends React.ElementType>({
  className,
  size,
  variant,
  color,
  as,
  ...rest
}: PolymorphicComponentProps<T, BadgeSharedProps>) {
  const Component = as || 'div';
  const { icon } = badgeVariants({ size, variant, color });

  return <Component className={icon({ class: className })} {...rest} />;
}
BadgeIcon.displayName = BADGE_ICON_NAME;

type BadgeDotProps = BadgeSharedProps &
  Omit<React.HTMLAttributes<HTMLDivElement>, 'color'>;

function BadgeDot({ size, variant, color, className, ...rest }: BadgeDotProps) {
  const { dot } = badgeVariants({ size, variant, color });

  return <div className={dot({ class: className })} {...rest} />;
}
BadgeDot.displayName = BADGE_DOT_NAME;

export { BadgeRoot as Root, BadgeIcon as Icon, BadgeDot as Dot };
