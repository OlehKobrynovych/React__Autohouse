import './HomeView.css';

import phoneFill from '../../assets/images/phoneFill.svg';
import mapPin from '../../assets/images/mapPin.svg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Helocation from '../../components/Helocation/Helocation';
import HomeCard from '../../components/HomeCard/HomeCard';

function HomeView() {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const handleClick = () => {
        setIsOpen(!isOpen)
    };
   
    return (
        <div className="home-view">

            <Helocation />
            <div className="home-view__home-card-wrap">
                <HomeCard />
                <HomeCard />
                <HomeCard />
                <HomeCard />
            </div>
            
        </div> 
    );
}

export default HomeView;