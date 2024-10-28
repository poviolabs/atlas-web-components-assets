import { PropsWithChildren, useEffect } from 'react';
import {
  Dialog as AriaDialog,
  Modal as AriaModal,
  ModalOverlay as AriaModalOverlay,
} from 'react-aria-components';

import { CloseIcon } from '@/assets/icons/general/Close';
import { InlineIconButton } from '@/components/ui/buttons/InlineIconButton/InlineIconButton';

export type ModalProps = {
  isOpen: boolean;
  portalContainerRef?: React.RefObject<HTMLElement>;
  onClose: () => void;
};

export const Modal = ({
  isOpen,
  portalContainerRef,
  onClose,
  children,
}: PropsWithChildren<ModalProps>) => {
  useEffect(() => {
    if (portalContainerRef?.current) {
      console.warn(
        'WARNING: The `portalContainerRef` prop is unstable feature from React Aria Components. Please note that this feature might not work as expected.'
      );
    }
  }, []);

  return (
    <AriaModalOverlay
      UNSTABLE_portalContainer={portalContainerRef?.current || undefined}
      className="global-modal fixed inset-0 z-10 flex h-[--visual-viewport-height] w-screen items-center justify-center bg-elevation-surface-2 bg-opacity-80 p-4"
      isDismissable
      shouldCloseOnInteractOutside={() => {
        return false;
      }}
      isOpen={isOpen}
      onOpenChange={(open) => {
        if (!open) {
          onClose();
        }
      }}
    >
      <AriaModal className="w-full max-w-modal">
        <AriaDialog className="relative w-full rounded-ml border border-elevation-outline-1 bg-elevation-background p-8 pt-10">
          <InlineIconButton
            onPress={onClose}
            icon={CloseIcon}
            className="absolute right-0 top-0 p-2"
            label={'Close'}
          />

          {children}
        </AriaDialog>
      </AriaModal>
    </AriaModalOverlay>
  );
};
