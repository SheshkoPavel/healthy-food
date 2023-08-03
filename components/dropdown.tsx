import React, { useState } from 'react';
import Select, { components as ReactSelectComponents } from 'react-select';
import classNames from 'classnames';
import { ThemeConfig } from 'react-select/dist/declarations/src/theme';

function emptyEventHandler(event: any) {
  //
}

interface Option {
  label: any;
  value: any;
}

interface Properties {
  autofocus?: boolean;
  blurInputOnSelect?: boolean;
  className?: string;
  classNamePrefix?: string;
  closeMenuOnSelect?: boolean;
  components?: any;
  defaultValue?: any;
  hideSelectedOptions?: boolean;
  isClearable?: boolean;
  isDisabled?: boolean;
  isMulti?: boolean;
  isSearchable?: boolean;
  menuPortalTarget?: any;
  menuShouldBlockScroll?: boolean;
  onBlur?: any;
  onChange?: any;
  onFocus?: any;
  openAfterFocus?: boolean;
  options?: Option[];
  placeholder?: string;
  styles?: any;
  title?: string;
  value?: any;
  filterFn?: any;
  inputId?: string;
  instanceId?: string;
  theme?: ThemeConfig;
}

const Input = (props: any) => {
  return (
    <ReactSelectComponents.Input
      {...props}
      title={(props.selectProps.value || {}).label || ''}
    />
  );
};

const ValueContainer = ({ children, ...props }: any) => {
  return (
    <ReactSelectComponents.ValueContainer {...props}>
      <div className="r-react-select__multi-value">
        {children[0] && React.cloneElement(children[0])}
        {React.cloneElement(children[1])}
      </div>
    </ReactSelectComponents.ValueContainer>
  );
};

const DropdownIndicator = ({ isFocused, theme }: any) => {
  const iconCl = classNames(
    'c-icon',
    'c-icon--caret-down',
    'r-react-select__caret-icon',
  );
  return (
    <span className={iconCl} />
  );
};

export const BaseDropdown = (props: Properties) => {
  const {
    autofocus = false,
    blurInputOnSelect = true,
    className,
    classNamePrefix,
    closeMenuOnSelect = true,
    components = {},
    defaultValue,
    hideSelectedOptions = false,
    isClearable = true,
    isDisabled = false,
    isMulti = false,
    isSearchable = true,
    menuShouldBlockScroll = true,
    onBlur = emptyEventHandler,
    onChange = emptyEventHandler,
    onFocus = emptyEventHandler,
    openAfterFocus = false,
    options = [],
    placeholder,
    styles = {},
    title = '',
    value = '',
    filterFn,
    inputId,
    instanceId,
    theme,
  } = props;

  const [isOpened, setIsOpened] = useState<boolean>(false);
  const selectCl = classNames(
    className || 'r-react-select',
    isOpened && 'r-react-select--is-opened',
  );

  return (
    <Select
      inputId={inputId}
      instanceId={instanceId}
      className={selectCl}
      classNamePrefix={classNamePrefix || ('r-react-select')}
      closeMenuOnSelect={closeMenuOnSelect}
      components={{
        Input,
        ValueContainer,
        DropdownIndicator,
        IndicatorSeparator: () => null,
        ClearIndicator: () => null,
        ...components,
      }}
      defaultValue={defaultValue}
      hideSelectedOptions={hideSelectedOptions}
      isClearable={isClearable}
      isDisabled={isDisabled}
      isMulti={isMulti}
      isSearchable={false}
      menuPlacement="bottom"
      menuPosition="absolute"
      menuShouldBlockScroll={menuShouldBlockScroll}
      onBlur={() => setIsOpened(false)}
      // onBlur={onBlur}
      onChange={onChange}
      onFocus={() => setIsOpened(true)}
      // onFocus={onFocus}
      options={options}
      placeholder={placeholder}
      styles={styles}
      value={options.find(o => JSON.stringify(o.value) === JSON.stringify(value))}
      blurInputOnSelect={blurInputOnSelect}
      filterOption={filterFn}
      theme={theme}
    />
  );
};
