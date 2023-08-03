import React from 'react';
import { usePopperTooltip } from 'react-popper-tooltip';
import { animated, useTransition } from 'react-spring';
import 'react-popper-tooltip/dist/styles.css';

interface PopupProps {
  trigger: any;
  ContentComponent: any;
  options?: any;
  onVisibleChange?: any;
  contentComponentProps?: any;
}

export const Popup = (props: PopupProps) => {
  const {
    trigger,
    contentComponentProps,
    ContentComponent,
    options = { className: 'r-react-popper-tooltip' },
    onVisibleChange,
  } = props;

  const [controlledVisible, setControlledVisible] = React.useState(false);

  const transitions = useTransition(controlledVisible, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: {
      duration: 100,
    }
  });

  const closePopup = () => {
    setControlledVisible(false);
  };

  const {
    getTooltipProps,
    setTooltipRef,
    setTriggerRef,
    visible,
  } = usePopperTooltip({
    trigger: 'click',
    closeOnOutsideClick: true,
    visible: controlledVisible,
    onVisibleChange: (value) => {
      setControlledVisible(value);
      if (onVisibleChange) {
        onVisibleChange(value);
      }
    },
    placement: 'bottom-start'
  });

  return (
    <>
      <div ref={setTriggerRef}>
        {trigger}
      </div>

      {transitions((styles, item) => {
        return item && (
          <animated.div
            ref={setTooltipRef}
            {...getTooltipProps({
              className: 'r-react-popper-container',
              style: styles,
              ...options,
            })}
          >
            <ContentComponent closePopup={closePopup} {...contentComponentProps} />
          </animated.div>
        );
      }
      )}
    </>
  );
};
