import { useRef } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../config/i18n';

/* eslint-disable react-hooks/rules-of-hooks */
export function WCWrapper(
  Component: React.FC<any>,
  type?: 'drawer' | 'modal' | 'children'
) {
  const styles = (
    document.querySelector('link[href$="atlas.css"]') as HTMLLinkElement
  )?.href;

  return (props: any) => {
    const ref = useRef(null);

    const renderContent = () => {
      switch (type) {
        case 'drawer':
          return (
            <div ref={ref}>
              <Component
                portalContainerRef={ref}
                trigger={<slot name="trigger" />}
                {...props}
              >
                <slot name="children" />
              </Component>
            </div>
          );
        case 'modal':
          return (
            <div ref={ref}>
              <Component portalContainerRef={ref} {...props}>
                <slot />
              </Component>
            </div>
          );
        case 'children':
          return (
            <Component {...props}>
              <slot />
            </Component>
          );
        default:
          return <Component {...props} />;
      }
    };

    return (
      <I18nextProvider i18n={i18n}>
        <link
          rel="stylesheet"
          href={styles || '/Users/shyqa/Desktop/example-atlas-wc/output.css'}
        />
        {renderContent()}
      </I18nextProvider>
    );
  };
}
