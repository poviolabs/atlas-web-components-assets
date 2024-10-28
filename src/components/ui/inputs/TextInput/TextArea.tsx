import { forwardRef } from "react";
import { TextArea as AriaTextArea, TextAreaProps as AriaTextAreaProps } from "react-aria-components";

import { TextInputVariantProps, TextInputWrapper, TextInputWrapperProps, textInput } from "./TextInputWrapper";

type TextAreaInputProps = Omit<TextInputVariantProps, "element"> &
  Omit<TextInputWrapperProps, "children"> &
  AriaTextAreaProps;

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaInputProps>(({ variant, ...props }, ref) => {
  return (
    <TextInputWrapper {...props}>
      <AriaTextArea {...props} className={textInput({ variant })} ref={ref} />
    </TextInputWrapper>
  );
});
