import s from './RegisterForm.module.css';
import { InputForm } from '../inputForm/InputForm';
import { NavLink } from 'react-router-dom';

export const RegisterForm = () => {
    return(
        <form className={s.principalContainer}>
            <InputForm label='First & Last Name' type='text'/>
            <InputForm label='Email' type='text'/>
            <InputForm label='Password' type='password'/>
            <InputForm label='Confirm Password' type='password'/>
            <check className={s.check}>
                <input type='checkbox'/>
                <label className={s.checkLabel}>I agree to the Terms & conditions</label>
            </check>
            <NavLink className={s.create} to='/'>Create an acount</NavLink>
        </form>
    )
}