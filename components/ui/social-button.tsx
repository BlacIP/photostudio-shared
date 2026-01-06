// AlignUI SocialButton v0.0.0

import * as React from 'react';
import { recursiveCloneChildren } from '../../utils/recursive-clone-children';
import { Slot } from '@radix-ui/react-slot';
import { PolymorphicComponentProps } from '../../utils/polymorphic';
import type { VariantProps } from '../../utils/tv';
import { socialButtonVariants } from './social-button-variants';

const SOCIAL_BUTTON_ROOT_NAME = 'SocialButtonRoot';
const SOCIAL_BUTTON_ICON_NAME = 'SocialButtonIcon';

export { socialButtonVariants };

type SocialButtonSharedProps = VariantProps<typeof socialButtonVariants>;

type SocialButtonProps = VariantProps<typeof socialButtonVariants> &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    asChild?: boolean;
  };

const SocialButtonRoot = React.forwardRef<HTMLButtonElement, SocialButtonProps>(
  ({ asChild, children, mode, brand, className, ...rest }, forwardedRef) => {
    const uniqueId = React.useId();
    const Component = asChild ? Slot : 'button';
    const { root } = socialButtonVariants({ brand, mode });

    const sharedProps: SocialButtonSharedProps = {
      mode,
      brand,
    };

    const extendedChildren = recursiveCloneChildren(
      children as React.ReactElement[],
      sharedProps,
      [SOCIAL_BUTTON_ICON_NAME],
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
SocialButtonRoot.displayName = SOCIAL_BUTTON_ROOT_NAME;

function SocialButtonIcon<T extends React.ElementType>({
  brand,
  mode,
  className,
  as,
  ...rest
}: PolymorphicComponentProps<T, SocialButtonSharedProps>) {
  const Component = as || 'div';
  const { icon } = socialButtonVariants({ brand, mode });

  return <Component className={icon({ class: className })} {...rest} />;
}
SocialButtonIcon.displayName = SOCIAL_BUTTON_ICON_NAME;

export { SocialButtonRoot as Root, SocialButtonIcon as Icon };
