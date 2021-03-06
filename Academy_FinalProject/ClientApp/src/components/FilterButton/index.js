import React, { useState } from 'react'
import FilterIcon from '../../Assets/filterIcon.png'
import WhiteFilterIcon from '../../Assets/filterIcon2.png'
import Tier from '../../Assets/logo_tier.png'
import Voi from '../../Assets/logo_voi.png'
import BikeIcon from '../../Assets/logo_bysykkel.png'
import Circ from '../../Assets/logo_circ.png'
import Zvipp from '../../Assets/logo_zvipp.png'
import '../../Styles/style.css'

const sortButton = (props) => {

    const [isClicked, setIsClicked] = useState(false);
    const [voiIsClicked, setVoiIsClicked] = useState(true);
    const [tierIsClicked, setTierIsClicked] = useState(true);
    const [circIsClicked, setCircIsClicked] = useState(true);
    const [zvippIsClicked, setZvippIsClicked] = useState(true);
    const [citybikeIsClicked, setcitybikeIsClicked] = useState(true);


    return (
        <React.Fragment>
            <button
                onClick={() => { setIsClicked(!isClicked) }}
                style={{outline: "none"}}
                className={isClicked ? 'filterButtonActive' : 'filterButton'}
            >
                <img src={isClicked ? FilterIcon : WhiteFilterIcon } alt={'sorticon'} style={{ width: 30 }} />
            </button>
            <div className={isClicked ? 'filterCard' : 'filterCardInActive'}>
                <img
                    src={Voi}
                    alt={'voi icon'}
                    className={voiIsClicked ? 'filterImages' : 'filterImagesInactive'}
                    onClick={() => { props.setFilter('voi'); setVoiIsClicked(!voiIsClicked) }} />
                <img
                    src={Tier}
                    alt={'tier icon'}
                    className={tierIsClicked ? 'filterImages' : 'filterImagesInactive'}
                    onClick={() => { props.setFilter('tier'); setTierIsClicked(!tierIsClicked) }} />
                <img
                    src={Circ} alt={'circ icon'}
                    className={circIsClicked ? 'filterImages' : 'filterImagesInactive'}
                    onClick={() => { props.setFilter('circ'); setCircIsClicked(!circIsClicked) }} />
                <img
                    src={Zvipp}
                    alt={'zvipp icon'}
                    className={zvippIsClicked ? 'filterImages' : 'filterImagesInactive'}
                    onClick={() => { props.setFilter('zvipp'); setZvippIsClicked(!zvippIsClicked) }} />
                <img
                    src={BikeIcon}
                    alt={'citybike icon'}
                    className={citybikeIsClicked ? 'filterImages' : 'filterImagesInactive'}
                    onClick={() => { props.setFilter('citybike'); setcitybikeIsClicked(!citybikeIsClicked) }} />
            </div>
        </React.Fragment>
    )
}
export default sortButton;

// const styles = {
//     sortButton: {
//         height: 54,
//         width: 61,
//         borderRadius: '10px 10px 10px 10px',
//         border: '1px solid white',
//         backgroundColor: '#f8f9fa',
//         padding: 2,
//         position: 'fixed',
//         right: '3%',
//         top: '1%',
//         zIndex: 5,
//         outline: 'none'
//     },
//     buttonClicked: {

//         boxShadow: ' 20px 21px 63px -9px rgba(0,0,0,0.58)',
//         border: 'none'
//     },
//     card: {
//         width: 61,
//         height: 290,
//         borderRadius: '10px 10px 10px 10px',
//         border: '1px white',
//         boxShadow: ' 20px 21px 63px -9px rgba(0,0,0,0.58)',
//         backgroundColor: '#f8f9fa',
//         color: '#f8f9fa',
//         padding: 2,
//         position: 'fixed',
//         right: '3%',
//         top: '10%',
//         opacity: '1',
//         transition: '100ms ease-out'
//     },
//     cardInActive: {
//         height: 50,
//         width: 50,
//         borderRadius: '10px 10px 10px 10px',
//         backgroundColor: '#343a40',
//         color: '#f8f9fa',
//         padding: 2,
//         position: 'fixed',
//         left: '5%',
//         bottom: '15%',
//         zIndex: -100000,
//         opacity: '0',
//     },
//     images:{
//         borderRadius: '10px 10px 10px 10px',
//         width: '100%', 
//         padding: 10
//     },
//     imagesInactive:{
//         opacity: '0.5',
//         borderRadius: '10px 10px 10px 10px',
//         width: '100%', 
//         padding: 10
//     }
// }

