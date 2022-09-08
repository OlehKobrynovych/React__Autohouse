import './Header.css';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Helocation from '../Helocation/Helocation';

function Header() {
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    // const navigate = useNavigate();

    // const handleClick = () => {
    //     setIsOpen(!isOpen)
    // };
   
    return (
        <div className="header hidden">

            <div className="header__title">
                <div>M3SSA Autohouse</div>
            </div>

            <div className="header__menu">
                <div className="container">
                    <div
                        className="header__menu-wrap"
                        onClick={() => setIsOpenMenu(!isOpenMenu)}
                    >
                        <div className="header__menu-burger"></div>
                        <span>MENU</span>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Header;