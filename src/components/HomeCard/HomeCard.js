import './HomeCard.css';

import avto from '../../assets/images/avto.jpg';
import { useNavigate } from 'react-router-dom';

function HomeCard() {
    // const [isOpen, setIsOpen] = useState(false);
    // const navigate = useNavigate();

    // const handleClick = () => {
    //     setIsOpen(!isOpen)
    // };
   
    return (
        <div className="home-card">
            <img className="home-card__img" src={avto} alt='img'/>
            <h3 className="home-card__title">VAUXHALL Corsa</h3>
            <p className="home-card__text">2008 (58) reg</p>
            <p className="home-card__text">29,000 miles</p>
            <button className="home-card__btn">£3,490</button>
        </div> 
    );
}

export default HomeCard;