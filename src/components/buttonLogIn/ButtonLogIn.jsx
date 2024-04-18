import { NavLink } from "react-router-dom";
import s from './ButtonLogIn.module.css';


export const ButtonLogIn = ({to, text}) => {
    return(
        <NavLink className={s.btn} to={to}>{text}</NavLink>
    )
}