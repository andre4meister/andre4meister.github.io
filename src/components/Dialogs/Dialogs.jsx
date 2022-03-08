import s from './Dialogs.module.css'
import React from 'react'

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    Andrii
                </div>
                <div className={s.dialog}>
                    Dima
                </div>
                <div className={s.dialog}>
                    Marik
                </div>
                <div className={s.dialog}>
                    Vova
                </div>
                <div className={s.dialog}>
                    Roman
                </div>
                <div className={s.dialog}>
                    Bohdan
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How is your dog?</div>
                <div className={s.message}>Privet</div>
            </div>
        </div>
    )
}

export default Dialogs