import { CheckboxCheckmarkIcon } from "@/assets/icons/ui/CheckboxCheckmark";
import { CheckboxIndeterminateIcon } from "@/assets/icons/ui/CheckboxIndeterminate";
import { RadioOrCheckboxVariantProps, radioOrCheckbox } from "@/components/ui/inputs/shared/radioOrCheckboxStyles";

interface CheckboxCheckmarkProps {
  variant: RadioOrCheckboxVariantProps["variant"];
  className?: string;
}

export const CheckboxCheckmark = ({ variant, className }: CheckboxCheckmarkProps) => {
  return (
    <div
      className={radioOrCheckbox({
        variant,
        className: `relative h-4 w-4 flex-shrink-0 rounded-xs p-1 ${className}`,
      })}
    >
      <CheckboxCheckmarkIcon className="absolute hidden h-3 w-3 text-interactive-icon-on group-selected:block" />
      <CheckboxIndeterminateIcon className="absolute hidden h-3 w-3 text-interactive-icon-on group-indeterminate:block" />
    </div>
  );
};
