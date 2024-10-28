import { Button } from "@/components/ui/buttons/Button/Button";
import { Typography } from "@/components/ui/text/Typography/Typography";

import { Modal, ModalProps } from "./Modal";

export type ActionModalProps = {
  heading: string;
  description: string;
  primaryAction: {
    label: string;
    onPress: () => void;
  };
  secondaryAction?: {
    label: string;
    onPress: () => void;
  };
} & ModalProps;

export const ActionModal = ({
  heading,
  description,
  primaryAction,
  secondaryAction,
  ...modalProps
}: ActionModalProps) => {
  return (
    <Modal {...modalProps}>
      <Typography size="title-5" variant="prominent-1" as="h2" className="mb-4">
        {heading}
      </Typography>
      <Typography size="body-3" className="mb-4">
        {description}
      </Typography>

      <div className="flex flex-wrap gap-4 py-1">
        <Button
          variant="secondary"
          size="small"
          onPress={primaryAction.onPress}
          className="min-w-[10rem] flex-1 flex-shrink-0"
        >
          {primaryAction.label}
        </Button>

        {secondaryAction && (
          <Button
            variant="outlined"
            size="small"
            onPress={secondaryAction?.onPress}
            className="min-w-[10rem] flex-1 flex-shrink-0"
          >
            {secondaryAction?.label}
          </Button>
        )}
      </div>
    </Modal>
  );
};
