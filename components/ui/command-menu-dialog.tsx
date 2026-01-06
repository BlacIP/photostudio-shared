// AlignUI CommandMenu v0.0.0

'use client';

import * as React from 'react';
import { Command } from 'cmdk';
import { cn } from '../../utils/cn';
import * as Modal from './modal';
import { type DialogProps } from '@radix-ui/react-dialog';

export const CommandDialogTitle = Modal.Title;
export const CommandDialogDescription = Modal.Description;

export const CommandDialog = ({
  children,
  className,
  overlayClassName,
  ...rest
}: DialogProps & {
  className?: string;
  overlayClassName?: string;
}) => {
  return (
    <Modal.Root {...rest}>
      <Modal.Content
        overlayClassName={cn('justify-start pt-20', overlayClassName)}
        showClose={false}
        className={cn(
          'flex max-h-full max-w-[600px] flex-col overflow-hidden rounded-2xl',
          className,
        )}
      >
        <Command
          className={cn(
            'divide-y divide-stroke-soft-200',
            'grid min-h-0 auto-cols-auto grid-flow-row',
            '[&>[cmdk-label]+*]:!border-t-0',
          )}
        >
          {children}
        </Command>
      </Modal.Content>
    </Modal.Root>
  );
};

export const CommandInput = React.forwardRef<
  React.ComponentRef<typeof Command.Input>,
  React.ComponentPropsWithoutRef<typeof Command.Input>
>(({ className, ...rest }, forwardedRef) => {
  return (
    <Command.Input
      ref={forwardedRef}
      className={cn(
        'w-full bg-transparent text-paragraph-sm text-text-strong-950 outline-none',
        'transition duration-200 ease-out',
        'placeholder:[transition:inherit]',
        'placeholder:text-text-soft-400',
        'group-hover/cmd-input:placeholder:text-text-sub-600',
        'focus:outline-none',
        className,
      )}
      {...rest}
    />
  );
});
CommandInput.displayName = 'CommandInput';

export const CommandList = React.forwardRef<
  React.ComponentRef<typeof Command.List>,
  React.ComponentPropsWithoutRef<typeof Command.List>
>(({ className, ...rest }, forwardedRef) => {
  return (
    <Command.List
      ref={forwardedRef}
      className={cn(
        'flex max-h-min min-h-0 flex-1 flex-col',
        '[&>[cmdk-list-sizer]]:divide-y [&>[cmdk-list-sizer]]:divide-stroke-soft-200',
        '[&>[cmdk-list-sizer]]:overflow-auto',
        className,
      )}
      {...rest}
    />
  );
});
CommandList.displayName = 'CommandList';

export const CommandGroup = React.forwardRef<
  React.ComponentRef<typeof Command.Group>,
  React.ComponentPropsWithoutRef<typeof Command.Group>
>(({ className, ...rest }, forwardedRef) => {
  return (
    <Command.Group
      ref={forwardedRef}
      className={cn(
        'relative px-2 py-3',
        '[&>[cmdk-group-heading]]:text-label-xs [&>[cmdk-group-heading]]:text-text-sub-600',
        '[&>[cmdk-group-heading]]:mb-2 [&>[cmdk-group-heading]]:px-3 [&>[cmdk-group-heading]]:pt-1',
        className,
      )}
      {...rest}
    />
  );
});
CommandGroup.displayName = 'CommandGroup';
