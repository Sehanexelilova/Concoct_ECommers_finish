import React from 'react'
import ButtonStyle from './button.module.css'


function Button({text , BG_color , colorText}) {
    return (
        <div className={ButtonStyle.exploreBTN}>
            <button style={{color:colorText , backgroundColor: BG_color}}>{text}</button>

        </div>
    )
}

export default Button

