import s from './SignUp.module.css';
import { RegisterForm } from '../../components/registerForm/RegisterForm';

export const SignUp = () => {

    return (
        <sign className={s.principalContainer}>
            <header className={s.header}>
                <h2 className={s.title}>Brainwave.io</h2>
            </header>
            <main className={s.main}>
                <h2 className={s.mTitle}>Sign up</h2>
                <h3 className={s.mText}>To get started, you need to sign up here.</h3>
                <RegisterForm/>
            </main>
        </sign>
    )
}