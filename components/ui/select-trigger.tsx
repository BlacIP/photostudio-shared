'use client';

import * as React from 'react';
import * as SelectPrimitives from '@radix-ui/react-select';
import { Slottable } from '@radix-ui/react-slot';
import { RiArrowDownSLine } from '@remixicon/react';
import type { PolymorphicComponentProps } from '../../utils/polymorphic';
import { selectVariants } from './select-variants';
import { useSelectContext } from './select-context';

const SELECT_TRIGGER_ICON_NAME = 'SelectTriggerIcon';

export const SelectTrigger = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitives.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitives.Trigger>
>(({ className, children, ...rest }, forwardedRef) => {
  const { size, variant, hasError } = useSelectContext();

  const { triggerRoot, triggerArrow } = selectVariants({
    size,
    variant,
    hasError,
  });

  return (
    <SelectPrimitives.Trigger
      ref={forwardedRef}
      className={triggerRoot({ class: className })}
      {...rest}
    >
      <Slottable>{children}</Slottable>
      <SelectPrimitives.Icon asChild>
        <RiArrowDownSLine className={triggerArrow()} />
      </SelectPrimitives.Icon>
    </SelectPrimitives.Trigger>
  );
});

SelectTrigger.displayName = 'SelectTrigger';

export function TriggerIcon<T extends React.ElementType = 'div'>({
  as,
  className,
  ...rest
}: PolymorphicComponentProps<T>) {
  const Component = as || 'div';

  const { size, variant, hasError } = useSelectContext();
  const { triggerIcon } = selectVariants({ size, variant, hasError });

  return <Component className={triggerIcon({ class: className })} {...rest} />;
}
TriggerIcon.displayName = SELECT_TRIGGER_ICON_NAME;
