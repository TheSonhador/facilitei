import React, { useState } from 'react';

const Sidebar = () => {
  const [isClosed, setIsClosed] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);

  const toggleSidebar = () => {
    setIsClosed(!isClosed);
    closeAllSubMenus();
  };

  const toggleSubMenu = (index) => {
    setOpenSubMenu(openSubMenu === index ? null : index);
    if (isClosed) {
      setIsClosed(false);
    }
  };

  const closeAllSubMenus = () => {
    setOpenSubMenu(null);
  };

  return (
    <div id="sidebar" className={isClosed ? 'close' : ''}>
      <button id="toggle-btn" onClick={toggleSidebar}>Toggle</button>
      <ul>
        {Array.from({ length: 3 }).map((_, index) => (
          <li key={index}>
            <button onClick={() => toggleSubMenu(index)}>Menu {index + 1}</button>
            <ul className={openSubMenu === index ? 'show' : ''}>
              <li>Submenu {index + 1} Item 1</li>
              <li>Submenu {index + 1} Item 2</li>
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;