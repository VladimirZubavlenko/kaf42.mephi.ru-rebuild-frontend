import React from 'react';
// @ts-ignore
import Chaffle from 'chaffle';

export interface IProps {
  isActive: boolean;
}

export const MenuItemText: React.FC<IProps> = ({ isActive, children }) => {
  const el = React.useRef(null);

  let chaffle: Chaffle;

  React.useEffect(() => {
    if (el.current !== null) {
      chaffle = new Chaffle(el.current);
    }

    return () => {
      chaffle = undefined;
    };
  });

  return (
    // eslint-disable-next-line jsx-a11y/mouse-events-have-key-events
    <div
      ref={el}
      data-chaffle="en"
      data-chaffle-speed="5"
      onMouseOver={() => {
        if (isActive) {
          return;
        }

        chaffle.init();
      }}>
      {children}
    </div>
  );
};
