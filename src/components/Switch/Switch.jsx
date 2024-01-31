import { useState } from 'react';

function Switch() {
  const [orderActive, setOrderActive] = useState(false);

  const handleToggle = () => {
    setOrderActive(!orderActive);
  };

  return (
    <div className="switch">
      <div className="slider round" onClick={handleToggle}>
        <span className={orderActive ? 'active' : 'switch__order'}>To order</span>
        <span className={orderActive ? 'switch__menu' : 'active'}>Pizza-Menu</span>
      </div>
    </div>
  );
}

export default Switch;
