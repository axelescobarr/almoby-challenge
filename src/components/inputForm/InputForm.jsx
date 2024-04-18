import s from './InputForm.module.css'

export const InputForm = ({label, type, }) => {
    return(
        <container className={s.container}>
            <label className={s.label}>{label}</label>
            <input className={s.input} type={type}/>
        </container> 
    )
}