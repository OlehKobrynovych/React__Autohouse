import './Helocation.css';

import phoneFill from '../../assets/images/phoneFill.svg';
import mapPin from '../../assets/images/mapPin.svg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Helocation() {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const handleClick = () => {
        setIsOpen(!isOpen)
    };
   
    return (
        <div className="helocation">
            <div className="helocation-wrap container">
                <div className="helocation-location">
                    <img src={mapPin} alt='img'/>
                    <div>288 Brays Road, Birmingham, Warwickshire, B26 2PP</div>
                </div>

                <div className="helocation-phone">
                    <img src={phoneFill} alt='img'/>
                    <div> 07444 024003 | 07444 024003</div>
                </div>
            </div>
        </div> 
    );
}

export default Helocation;