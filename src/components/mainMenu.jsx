import { useState } from 'react';
import { menuItems } from '../helpers/menuItems';
import './styles.css';

const MainMenu = ({ onMenuSelect }) => {

  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div  className={`sidebar ${isHovered ? 'expanded' : ''}`} onMouseLeave={() => setIsHovered(false)}>
    <div className='menu-bar'>
      {menuItems.map((item, index) => (
        <div
          key={index}
          className='menu-item'
          onMouseEnter={() => setIsHovered(true)}
          onClick={() => onMenuSelect(item)}
        >
        <img src={`../assets/icons/${item.icon}.png`} alt="icon" width="20" height="20" className="icon"/>
         <span className="text">{item.text}</span>
        </div>
      ))}
    </div>
    <div className={`bottom-buttons ${isHovered ? 'show' : ''}`}>
      <button className="bottom-button uppercase">Language</button>
      <button className="bottom-button uppercase">Get Help</button>
      <button className="bottom-button uppercase">Exit</button>
    </div>
  </div>
  );
};

export default MainMenu;