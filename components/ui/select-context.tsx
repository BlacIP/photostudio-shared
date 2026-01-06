'use client';

import * as React from 'react';
import * as SelectPrimitives from '@radix-ui/react-select';
import type { VariantProps } from '../../utils/tv';
import { selectVariants } from './select-variants';

type SelectContextType = Pick<
  VariantProps<typeof selectVariants>,
  'variant' | 'size' | 'hasError'
>;

const SelectContext = React.createContext<SelectContextType>({
  size: 'medium',
  variant: 'default',
  hasError: false,
});

export const useSelectContext = () => React.useContext(SelectContext);

export const SelectRoot = ({
  size = 'medium',
  variant = 'default',
  hasError,
  ...rest
}: React.ComponentProps<typeof SelectPrimitives.Root> & SelectContextType) => {
  return (
    <SelectContext.Provider value={{ size, variant, hasError }}>
      <SelectPrimitives.Root {...rest} />
    </SelectContext.Provider>
  );
};
SelectRoot.displayName = 'SelectRoot';
