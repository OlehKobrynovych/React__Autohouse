import './Footer.css';

import phoneFill from '../../assets/images/phoneFill.svg';
import twitter from '../../assets/images/twitter.svg';
import facebook from '../../assets/images/facebook.svg';
import mapPin from '../../assets/images/mapPin.svg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Helocation from '../Helocation/Helocation';

function Footer() {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const handleClick = () => {
        setIsOpen(!isOpen)
    };
   
    return (
        <div className="footer hidden">

            <Helocation />
            
            <div className="footer__middle">
                <div className="footer__middle-wrap container">
                    <div className="footer__middle-links">
                        <ul className="footer__middle-links-wrap">
                            <li><a href='#'>Home</a></li>
                            <li><a href='#'>Used cars</a></li>
                            <li><a href='#'>Part exchange</a></li>
                            <li><a href='#'>Sell your car</a></li>
                            <li><a href='#'>Warranty</a></li>
                            <li><a href='#'>Reserve online</a></li>
                            <li><a href='#'>Reviews</a></li>
                            <li><a href='#'>Contact us</a></li>
                            <li><a href='#'>Privacy policy</a></li>
                            <li><a href='#'>Company information</a></li>
                        </ul>
                    </div>

                    <button className="footer__middle-btn" onClick={handleClick}>
                        Search by make 
                        <span className={isOpen ? 'footer__middle-btn-open' : 'footer__middle-btn-close' }></span>
                    </button>

                    {
                        isOpen && (
                            <div className="footer__middle-serch">
                                <ul className="footer__middle-serch-wrap">
                                    <li><a href='#'>Used AUDI cars</a></li>
                                    <li><a href='#'>Used FORD cars</a></li>
                                    <li><a href='#'>Used HONDA cars</a></li>
                                    <li><a href='#'>Used SEAT cars</a></li>
                                    <li><a href='#'>Used TOYOTA cars</a></li>
                                    <li><a href='#'>Used VAUXHALL cars</a></li>
                                    <li><a href='#'>Used VOLKSWAGEN cars</a></li>
                                </ul>
                            </div>
                        )
                    }
                </div>
            </div>

            <div className="footer__bottom">
                <div className="footer__bottom-wrap container">
                    <div className="footer__bottom-social">
                        <div>Share on: </div>
                        <img src={facebook} alt='img'/>
                        <img src={twitter} alt='img'/>
                    </div>
                    <div 
                        className="footer__bottom-logo"
                        onClick={() => navigate('/')}
                    >
                        <span>Powered by</span>
                        <img src='' alt='img'/>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Footer;