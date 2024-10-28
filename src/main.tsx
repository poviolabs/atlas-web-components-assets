// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import App from './App.tsx';
// import './index.css';

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );

/* eslint-disable react-refresh/only-export-components */
import r2wc from 'react-to-webcomponent';
import React from 'react';
import * as ReactDOM from 'react-dom/client';
import * as icons from '@/assets/icons/index';
import './index.css';

import { Button } from './components/ui/buttons/Button/Button';
import { TextInputForWebComponent } from './components/ui/inputs/TextInput/TextInput';
import { Typography } from './components/ui/text/Typography/Typography';
import { WCWrapper } from './components/WCWrapper';
import { Modal } from './components/ui/overlays/Modal/Modal';
import { Link } from './components/ui/text/Link/Link';
import { DrawerForWebComponent } from './components/ui/overlays/Drawer/Drawer';
import { Toggle } from './components/ui/inputs/Toggle/Toggle';
import { Tooltip } from './components/ui/overlays/Tooltip/Tooltip';
import { Slider } from './components/ui/inputs/Slider/Slider';
import { RadioGroup } from './components/ui/inputs/RadioGroup/RadioGroup';
import { Dropdown } from './components/ui/inputs/Dropdown/Dropdown';
import { Checkbox } from './components/ui/inputs/Checkbox/Checkbox';
import { IconButton } from './components/ui/buttons/IconButton/IconButton';
import { InlineIconButton } from './components/ui/buttons/InlineIconButton/InlineIconButton';
import { PillButton } from './components/ui/buttons/PillButton/PillButton';
import { TextButton } from './components/ui/buttons/TextButton/TextButton';
import { ToggleButton } from './components/ui/buttons/ToggleButton/ToggleButton';
import { DatePicker } from './components/ui/inputs/DateTime/DatePicker/DatePicker';
import { TextArea } from './components/ui/inputs/TextInput/TextArea';

const globalizeIcons = () => {
  Object.keys(icons).forEach((icon) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    window[icon] = (icons as { [key: string]: React.FC })[icon];
  });
};

globalizeIcons();

//buttons
const ButtonWC = r2wc(WCWrapper(Button, 'children'), React, ReactDOM, {
  props: {
    id: 'string',
    variant: 'string',
    size: 'string',
    width: 'string',
    icon: 'function',
    onPress: 'function',
    isDisabled: 'boolean',
    isLoading: 'boolean',
    className: 'string',
    iconPosition: 'string',
    link: 'string',
    hideText: 'boolean',
    noDisableWhenLoading: 'boolean',
  },
  shadow: 'open',
});

const IconButtonWC = r2wc(WCWrapper(IconButton), React, ReactDOM, {
  props: {
    id: 'string',
    label: 'string',
    variant: 'string',
    size: 'string',
    link: 'string',
    className: 'string',
    isDisabled: 'boolean',
    icon: 'function',
    onPress: 'function',
    onBlur: 'function',
    onFocus: 'function',
  },
});

const InlineIconButtonWC = r2wc(WCWrapper(InlineIconButton), React, ReactDOM, {
  props: {
    id: 'string',
    label: 'string',
    link: 'string',
    className: 'string',
    isDisabled: 'boolean',
    icon: 'function',
    onPress: 'function',
    onBlur: 'function',
    onFocus: 'function',
  },
});

const PillButtonWC = r2wc(WCWrapper(PillButton, 'children'), React, ReactDOM, {
  props: {
    id: 'string',
    className: 'string',
    isDisabled: 'boolean',
    dismissable: 'boolean',
    toggle: 'boolean',
    onPress: 'function',
    onBlur: 'function',
    onFocus: 'function',
  },
  shadow: 'open',
});

const TextButtonWC = r2wc(WCWrapper(TextButton, 'children'), React, ReactDOM, {
  props: {
    id: 'string',
    link: 'string',
    color: 'string',
    className: 'string',
    iconPosition: 'string',
    isDisabled: 'boolean',
    isLoading: 'boolean',
    hideText: 'boolean',
    icon: 'function',
    onPress: 'function',
    onBlur: 'function',
    onFocus: 'function',
  },
  shadow: 'open',
});

const ToggleButtonWC = r2wc(
  WCWrapper(ToggleButton, 'children'),
  React,
  ReactDOM,
  {
    props: {
      id: 'string',
      className: 'string',
      width: 'string',
      size: 'string',
      isSelected: 'boolean',
      isDisabled: 'boolean',
      defaultSelected: 'boolean',
      onChange: 'function',
      onPress: 'function',
      onBlur: 'function',
      onFocus: 'function',
    },
    shadow: 'open',
  }
);

//inputs
const CheckboxWC = r2wc(WCWrapper(Checkbox, 'children'), React, ReactDOM, {
  props: {
    id: 'string',
    name: 'string',
    variant: 'string',
    value: 'string',
    defaultSelected: 'boolean',
    isSelected: 'boolean',
    isDisabled: 'boolean',
    isRequired: 'boolean',
    onChange: 'function',
    onFocus: 'function',
    onBlur: 'function',
  },
  shadow: 'open',
});

const DatePickerWC = r2wc(WCWrapper(DatePicker), React, ReactDOM, {
  props: {
    label: 'string',
    value: 'string',
    maxValue: 'string',
    minValue: 'string',
    defaultValue: 'string',
    errorMessage: 'string',
    placeholderValue: 'string',
    defaultOpen: 'boolean',
    hideTimeZone: 'boolean',
    isDisabled: 'boolean',
    isOpen: 'boolean',
    shouldForceLeadingZeros: 'boolean',
    onChange: 'function',
    onFocus: 'function',
    onBlur: 'function',
  },
});

const DropdownWC = r2wc(WCWrapper(Dropdown), React, ReactDOM, {
  props: {
    label: 'string',
    placeholder: 'string',
    selectionMode: 'string',
    variant: 'string',
    items: 'json',
    selectedItemIds: 'json',
    showAllOption: 'boolean',
    showSelectionBar: 'boolean',
    onChange: 'function',
  },
});

const RadioGroupWC = r2wc(WCWrapper(RadioGroup), React, ReactDOM, {
  props: {
    id: 'string',
    name: 'string',
    label: 'string',
    labelHidden: 'boolean',
    options: 'json',
    variant: 'string',
    value: 'string',
    defaultValue: 'string',
    isDisabled: 'boolean',
    isRequired: 'boolean',
    onChange: 'function',
    onFocus: 'function',
    onBlur: 'function',
  },
});

const SliderWC = r2wc(WCWrapper(Slider), React, ReactDOM, {
  props: {
    id: 'string',
    label: 'string',
    unit: 'string',
    minValue: 'number',
    maxValue: 'number',
    value: 'number',
    defaultValue: 'number',
    isDisabled: 'boolean',
    onChange: 'function',
    onChangeEnd: 'function',
  },
});

const TextInputWC = r2wc(WCWrapper(TextInputForWebComponent), React, ReactDOM, {
  props: {
    id: 'string',
    label: 'string',
    value: 'string',
    defaultValue: 'string',
    unit: 'string',
    type: 'string',
    placeholder: 'string',
    variant: 'string',
    className: 'string',
    error: 'string',
    isLoading: 'boolean',
    disabled: 'boolean',
    icon: 'function',
    iconAltText: 'string',
    onIconClick: 'function',
    onChange: 'function',
    onBlur: 'function',
  },
});

const TextAreaWC = r2wc(WCWrapper(TextArea), React, ReactDOM, {
  props: {
    id: 'string',
    label: 'string',
    value: 'string',
    defaultValue: 'string',
    placeholder: 'string',
    variant: 'string',
    className: 'string',
    error: 'string',
    disabled: 'boolean',
    onChange: 'function',
    onBlur: 'function',
  },
});

const ToggleWC = r2wc(WCWrapper(Toggle, 'children'), React, ReactDOM, {
  props: {
    id: 'string',
    name: 'string',
    variant: 'string',
    className: 'string',
    value: 'string',
    defaultSelected: 'boolean',
    isDisabled: 'boolean',
    isSelected: 'boolean',
    onChange: 'function',
  },
  shadow: 'open',
});

//overlays
const ModalWC = r2wc(WCWrapper(Modal, 'modal'), React, ReactDOM, {
  props: {
    isOpen: 'boolean',
    onClose: 'function',
  },
  shadow: 'open',
});

const DrawerWC = r2wc(
  WCWrapper(DrawerForWebComponent, 'drawer'),
  React,
  ReactDOM,
  {
    props: {
      isOpen: 'boolean',
      onOpenChange: 'function',
    },
    shadow: 'open',
  }
);

const TooltipWC = r2wc(WCWrapper(Tooltip, 'children'), React, ReactDOM, {
  props: {
    text: 'string',
    placement: 'string',
    className: 'string',
    isOpen: 'boolean',
    defaultOpen: 'boolean',
    onOpenChange: 'function',
  },
  shadow: 'open',
});

//text
const TypographyWC = r2wc(WCWrapper(Typography, 'children'), React, ReactDOM, {
  props: {
    id: 'string',
    as: 'string',
    variant: 'string',
    className: 'string',
    size: 'string',
    sizeMobile: 'string',
  },
  shadow: 'open',
});

const LinkWC = r2wc(WCWrapper(Link, 'children'), React, ReactDOM, {
  props: {
    id: 'string',
    className: 'string',
    href: 'string',
    target: 'string',
    rel: 'string',
  },
  shadow: 'open',
});

//buttons
customElements.define('atlas-button', ButtonWC);
customElements.define('atlas-icon-button', IconButtonWC);
customElements.define('atlas-inline-icon-button', InlineIconButtonWC);
customElements.define('atlas-pill-button', PillButtonWC);
customElements.define('atlas-text-button', TextButtonWC);
customElements.define('atlas-toggle-button', ToggleButtonWC);

//inputs
customElements.define('atlas-checkbox', CheckboxWC);
customElements.define('atlas-datepicker', DatePickerWC);
customElements.define('atlas-dropdown', DropdownWC);
customElements.define('atlas-radio-group', RadioGroupWC);
customElements.define('atlas-slider', SliderWC);
customElements.define('atlas-text-input', TextInputWC);
customElements.define('atlas-text-area', TextAreaWC);
customElements.define('atlas-toggle', ToggleWC);

//overlays
customElements.define('atlas-modal', ModalWC);
customElements.define('atlas-drawer', DrawerWC);
customElements.define('atlas-tooltip', TooltipWC);

//text
customElements.define('atlas-typography', TypographyWC);
customElements.define('atlas-link', LinkWC);
