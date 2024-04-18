import React, { useState, useEffect } from 'react';
import { NavBar } from "../../components/navBar/NavBar"
import { ButtonLogIn } from "../../components/buttonLogIn/ButtonLogIn";
import s from './Home.module.css';
import woman from '../../assets/images/woman.png';

export const Home = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
        {screenWidth < 768 ? 
        (
            <home className={s.principalContainer}>
                <NavBar/>
                <h3 className={s.title}>Make your business powerful with Shade.</h3>
                <h4 className={s.subtitle}>With lots of unique blocks, you can easily build a page without coding. Build your next consultancy website within few minutes.</h4>
                <img src={woman} alt="woman" className={s.img}/>
                <ButtonLogIn to='/sign-up' text='Log In'/>
                <h4 className={s.ctoa}>Watch how we can help</h4>
            </home> 
        ) : (
            <home className={s.principalContainer}>
                <NavBar/>
                <main className={s.mainContainer}>
                    <div className={s.mainText}>
                        <h3 className={s.title}>Make your business powerful with Shade.</h3>
                        <h4 className={s.subtitle}>With lots of unique blocks, you can easily build a page without coding. Build your next consultancy website within few minutes.</h4>
                        <ButtonLogIn to='/sign-up' text='Log In'/>
                        <h4 className={s.ctoa}>Watch how we can help</h4>
                    </div>
                    <div className={s.imgContainer}>
                        <img src={woman} alt="woman" className={s.imgD}/>
                    </div>
                </main>
            </home> 
        )}
        </>
    )
    
}