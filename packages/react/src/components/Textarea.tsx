import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const textareaVariants = cva(
  'flex cursor-pointer focus:cursor-text w-full border-none bg-surface-100 rounded-lg p-3 placeholder:text-typography-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-surface-300 disabled:cursor-not-allowed disabled:opacity-50 group-hover/input:shadow-none transition duration-400',
  {
    variants: {
      size: {
        sm: 'min-h-[46px] max-h-[200px] text-sm',
      },
    },
    defaultVariants: {
      size: 'sm',
    },
  },
);

export type TextareaVariants = VariantProps<typeof textareaVariants>;

function Textarea({
  className,
  size,
  onChange,
  defaultValue,
  ...props
}: Omit<React.ComponentProps<'textarea'>, 'defaultValue'> & {
  defaultValue?: string;
} & TextareaVariants) {
  const [value, setValue] = React.useState<string>(defaultValue || '');

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    onChange?.(e);
  };

  return (
    <span className="relative w-full">
      <textarea
        data-slot="textarea"
        className={textareaVariants({ size, className })}
        onChange={handleChange}
        defaultValue={value}
        {...props}
      />
      <span className="text-typography-50 pointer-events-none absolute right-2 bottom-1 font-medium">
        {value.length}
      </span>
    </span>
  );
}

export { Textarea };
