import clsx from 'clsx';
import { forwardRef } from 'react';
import {
  Input as AriaInput,
  InputProps as AriaInputProps,
  TextField as AriaTextField,
} from 'react-aria-components';

import { InlineIconButton } from '@/components/ui/buttons/InlineIconButton/InlineIconButton';
import { Loader } from '@/components/ui/status/Loader/Loader';
import { Typography } from '@/components/ui/text/Typography/Typography';

import {
  TextInputVariantProps,
  TextInputWrapper,
  TextInputWrapperProps,
  textInput,
} from './TextInputWrapper';

type TextInputProps = {
  unit?: string;
  isLoading?: boolean;
  action?: {
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
    onClick: () => void;
    altText: string;
  };
} & Omit<TextInputVariantProps, 'element'> &
  Omit<TextInputWrapperProps, 'children'> &
  AriaInputProps;

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ variant, unit, isLoading, action, className, ...props }, ref) => {
    return (
      <TextInputWrapper {...props} className={className}>
        <AriaTextField isInvalid={!!props.error} className="relative w-full">
          <AriaInput
            {...props}
            ref={ref}
            className={textInput({
              variant,
              className: clsx((isLoading || !!action) && !unit && 'pr-11'),
            })}
            style={{
              paddingRight: unit
                ? `calc(1.25rem + ${unit.length}ch${
                    isLoading || !!action ? ` + 2rem` : ''
                  })`
                : undefined,
            }}
          />

          <div className="absolute right-input-side-spacing top-1/2 flex -translate-y-1/2 items-center gap-2">
            {unit && (
              <Typography
                as="span"
                size="label-2"
                variant="prominent-1"
                className="text-text-default-tertiary"
              >
                {unit}
              </Typography>
            )}

            {isLoading && (
              <div className="inline-flex">
                <Loader />
              </div>
            )}

            {!isLoading && action && (
              <InlineIconButton
                icon={action.icon}
                onPress={action.onClick}
                label={action.altText}
              />
            )}
          </div>
        </AriaTextField>
      </TextInputWrapper>
    );
  }
);
type TextInputForWebComponentProps = {
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  iconAltText?: string;
  onIconClick?: () => void;
} & TextInputProps;

export const TextInputForWebComponent = ({
  icon,
  iconAltText,
  onIconClick,
  ...rest
}: TextInputForWebComponentProps) => {
  const action =
    icon && onIconClick && iconAltText
      ? {
          icon,
          onClick: onIconClick,
          altText: iconAltText,
        }
      : undefined;
  return <TextInput {...rest} action={action} />;
};
