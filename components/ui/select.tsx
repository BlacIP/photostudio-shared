// AlignUI Select v0.0.0

'use client';

import * as SelectPrimitives from '@radix-ui/react-select';

export { selectVariants } from './select-variants';
export { SelectRoot as Root } from './select-context';
export { SelectContent as Content, SelectItem as Item, SelectItemIcon as ItemIcon } from './select-content';
export { SelectTrigger as Trigger, TriggerIcon } from './select-trigger';

const SelectGroup = SelectPrimitives.Group;
SelectGroup.displayName = 'SelectGroup';

const SelectValue = SelectPrimitives.Value;
SelectValue.displayName = 'SelectValue';

const SelectSeparator = SelectPrimitives.Separator;
SelectSeparator.displayName = 'SelectSeparator';

const SelectGroupLabel = SelectPrimitives.Label;
SelectGroupLabel.displayName = 'SelectGroupLabel';

export {
  SelectGroup as Group,
  SelectGroupLabel as GroupLabel,
  SelectSeparator as Separator,
  SelectValue as Value,
};
