import React from 'react'
import Style from './sendPopUp.module.css'
import { Link } from 'react-router-dom'

function SendPopUp({ closePopUp }) {


    return (
        <section className={Style.overlay}>
            <div className={Style.container}>
                <div className={Style.icon}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="203" height="215" viewBox="0 0 203 215" fill="none">
                        <path d="M202.267 107.724V215H0.73291V107.724L29.7885 76.6628V0H101.5H173.212V76.6628L202.267 107.724Z" fill="#EEEEEE" />
                        <path d="M29.7885 76.6628L0.73291 107.724L29.7885 128.821V76.6628Z" fill="#BFBFBF" />
                        <path d="M202.267 107.724L173.212 76.6628V128.821L202.267 107.724Z" fill="#BFBFBF" />
                        <path d="M202.267 215V107.724L173.212 128.82L127.706 161.86L202.267 215Z" fill="#D7D7D7" />
                        <path d="M0.73291 107.724V215L75.2944 161.86L29.7885 128.82L0.73291 107.724Z" fill="#D7D7D7" />
                        <path d="M127.706 161.86L202.267 215H0.73291L75.2944 161.86L101.5 143.184L127.706 161.86Z" fill="#BFBFBF" />
                        <circle cx="101.725" cy="55.2088" r="38.1524" fill="#FFA800" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M115.661 42.2146L120.105 46.658L96.3381 70.4246L83.344 57.4304L87.7874 52.987L96.3381 61.5378L115.661 42.2146Z" fill="black" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M144.365 111.091H58.6348V104.807H144.365V111.091Z" fill="black" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M114.517 126.352H58.6348V120.068H114.517V126.352ZM144.365 126.352H122.372V120.068H144.365V126.352Z" fill="black" />
                    </svg>
                </div>

                <h3>Your message has been received successfully!</h3>

                <p>We love hearing from you and will respond promptly to any questions or feedback you provide. Every communication from customers means a lot to us. Our team has successfully received the message or feedback you submitted.</p>

                <Link to={'/'}>Back To Home</Link>
            </div>
        </section>
    )
}

export default SendPopUp