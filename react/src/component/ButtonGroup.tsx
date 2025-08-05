import { useState } from 'react';

import classNames from 'classnames/bind';

import styles from '../ButtonGroup.module.css';

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

// export default function ButtonGroup({ initialButtons }: { initialButtons: ButtonGroupProps[] }) {
//   const cx = classNames.bind(styles);
//   const [buttons, setButtons] = useState(
//     initialButtons.map((initialButton) => ({
//       id: initialButton.id,
//       label: initialButton.label,
//       icon: initialButton.icon,
//       isDisabled: initialButton.isDisabled,
//       isActive: false,
//     })),
//   );
//   const [activeCount, setActiveCount] = useState(0);
//
//   const handleClickButton = (id: number) => {
//     setButtons((buttons) =>
//       buttons.map((button) =>
//         button.id === id ? { ...button, isActive: true } : { ...button, isActive: false },
//       ),
//     );
//     setActiveCount((count) => count + 1);
//   };
//   const handleResetButtons = () => {
//     setButtons((buttons) => buttons.map((button) => ({ ...button, isActive: false })));
//     setActiveCount(0);
//   };
//
//   return (
//     <>
//       <h2>Active Count: {activeCount}</h2>
//       <div>
//         {buttons.map((button) => (
//           <button
//             key={button.id}
//             className={cx('button', {
//               disabled: button.isDisabled,
//               highlight: button.id === 2,
//               active: button.isActive,
//             })}
//             onClick={() => handleClickButton(button.id)}
//           >
//             {button.label} {button.icon}
//           </button>
//         ))}
//       </div>
//       <button className={cx('button')} onClick={handleResetButtons}>
//         Reset
//       </button>
//     </>
//   );
// }
