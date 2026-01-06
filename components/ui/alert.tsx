// AlignUI Alert v0.0.0

import * as React from 'react';
import { RiCloseLine } from '@remixicon/react';
import type { VariantProps, ClassValue } from '../../utils/tv';
import { recursiveCloneChildren } from '../../utils/recursive-clone-children';
import type { PolymorphicComponentProps } from '../../utils/polymorphic';
import { alertVariants } from './alert-variants';

const ALERT_ROOT_NAME = 'AlertRoot';
const ALERT_ICON_NAME = 'AlertIcon';
const ALERT_CLOSE_ICON_NAME = 'AlertCloseIcon';

export { alertVariants };

type AlertSharedProps = VariantProps<typeof alertVariants>;

export type AlertProps = VariantProps<typeof alertVariants> &
  React.HTMLAttributes<HTMLDivElement> & {
    wrapperClassName?: ClassValue;
  };

const AlertRoot = React.forwardRef<HTMLDivElement, AlertProps>(
  (
    { children, className, wrapperClassName, size, variant, status, ...rest },
    forwardedRef,
  ) => {
    const uniqueId = React.useId();
    const { root, wrapper } = alertVariants({ size, variant, status });

    const sharedProps: AlertSharedProps = {
      size,
      variant,
      status,
    };

    const extendedChildren = recursiveCloneChildren(
      children as React.ReactElement[],
      sharedProps,
      [ALERT_ICON_NAME, ALERT_CLOSE_ICON_NAME],
      uniqueId,
    );

    return (
      <div ref={forwardedRef} className={root({ class: className })} {...rest}>
        <div className={wrapper({ class: wrapperClassName })}>
          {extendedChildren}
        </div>
      </div>
    );
  },
);
AlertRoot.displayName = ALERT_ROOT_NAME;

function AlertIcon<T extends React.ElementType>({
  size,
  variant,
  status,
  className,
  as,
}: PolymorphicComponentProps<T, AlertSharedProps>) {
  const Component = as || 'div';
  const { icon } = alertVariants({ size, variant, status });

  return <Component className={icon({ class: className })} />;
}
AlertIcon.displayName = ALERT_ICON_NAME;

function AlertCloseIcon<T extends React.ElementType>({
  size,
  variant,
  status,
  className,
  as,
}: PolymorphicComponentProps<T, AlertSharedProps>) {
  const Component = as || RiCloseLine;
  const { closeIcon } = alertVariants({ size, variant, status });

  return <Component className={closeIcon({ class: className })} />;
}
AlertCloseIcon.displayName = ALERT_CLOSE_ICON_NAME;

export { AlertRoot as Root, AlertIcon as Icon, AlertCloseIcon as CloseIcon };
