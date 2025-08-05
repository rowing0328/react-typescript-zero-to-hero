import { useState } from 'react';

import classNames from 'classnames/bind';

import styles from './ButtonGroup.module.css';

export default function ButtonGroup({ initialButtons }: { initialButtons: ButtonGroupProps[] }) {
  const cx = classNames.bind(styles);
  const initialActiveStates: { [key: string]: boolean } = {};
  initialButtons.forEach((button) => {
    initialActiveStates[button.id] = false;
  });
  const [activeStates, setActiveStates] = useState(initialActiveStates);
  const handleToggleActiveButton = (id: number, isDisabled: boolean) => {
    if (isDisabled) return;
    setActiveStates((activeStates) => ({
      ...activeStates,
      [id]: !activeStates[id],
    }));
  };
  const handleResetActiveStates = () => {
    const resetActiveStates: { [key: string]: boolean } = {};
    initialButtons.forEach((button) => {
      resetActiveStates[button.id] = false;
    });
    setActiveStates(resetActiveStates);
  };
  const activeCount = Object.values(activeStates).filter(Boolean).length;

  return (
    <>
      <h1>Active Count: {activeCount}</h1>
      <div>
        {initialButtons.map((button) => (
          <button
            key={button.id}
            className={cx('button', {
              active: activeStates[button.id],
              disabled: button.isDisabled,
              highlight: button.id === 2,
            })}
            onClick={() => handleToggleActiveButton(button.id, button.isDisabled)}
          >
            {button.icon} {button.label}
          </button>
        ))}
      </div>
      <button className={cx('button')} onClick={handleResetActiveStates}>
        Reset
      </button>
    </>
  );
}
