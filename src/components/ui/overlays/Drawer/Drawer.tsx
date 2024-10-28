import {
  Dialog,
  DialogTrigger,
  Modal,
  ModalOverlay,
} from 'react-aria-components';

type DrawerProps = {
  isOpen?: boolean;
  portalContainerRef?: React.RefObject<HTMLElement>;
  onOpenChange?: (isOpen: boolean) => void;
  trigger: React.ReactNode;
  children: (close: () => void) => React.ReactNode;
};

export const Drawer = ({
  isOpen,
  portalContainerRef,
  onOpenChange,
  trigger,
  children,
}: DrawerProps) => {
  return (
    <DialogTrigger isOpen={isOpen} onOpenChange={onOpenChange}>
      {trigger}
      <ModalOverlay
        UNSTABLE_portalContainer={portalContainerRef?.current || undefined}
        className="bg-transparent"
      >
        <Modal className="fixed bottom-0 right-0 top-0 w-screen bg-elevation-background entering:animate-drawer-enter exiting:animate-drawer-exit">
          <Dialog className="outline-none">
            {({ close }) => children(close)}
          </Dialog>
        </Modal>
      </ModalOverlay>
    </DialogTrigger>
  );
};

type DrawerForWebComponentProps = {
  children: React.ReactNode;
} & Omit<DrawerProps, 'children'>;

export const DrawerForWebComponent = ({
  children,
  ...rest
}: DrawerForWebComponentProps) => {
  return <Drawer {...rest}>{() => children}</Drawer>;
};
