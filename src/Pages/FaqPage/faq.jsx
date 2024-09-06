import React, { useState } from 'react'

import Style from './faq.module.css'
import Button from '../../components/button/button'

function Faq() {


    const questions_ = [
        {
            text :'What makes Concoct special?',
            about: ''
        },

        {
            text :'How to make a reservation?',
            about: ''
        },

        {
            text :'Does Concoct provide a vegetarian or vegan menu?',
            about: ''
        },

        {
            text :'Does Concoct accept reservations for special events or business meetings?',
            about: ''
        },

        {
            text :'Is there parking available at Concoct?',
            about: ''
        },

        {
            text :'Does Concoct host regular theme events or live music nights?',
            about: ''
        },

        {
            text :'How can I provide feedback or suggestions to Concoct?',
            about: ''
        },
    ]


    const [questions , setQuestions ] = useState(questions_)


    return (
        <section className={Style.container}>

            <div className={Style.text}>
                <h3>Frequently Asked Questions</h3>
                <p>If you have other questions or feedback that you would like to provide, you can contact us</p>

               <div>
               <Button text={'Contact Us'} />
               </div>
            </div>


            <div className={Style.questions}>

                {
                    questions.map((question, index) => {
                        return <div key={index} className={Style.box}>
                            <p>{question.text}</p>

                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <g clip-path="url(#clip0_212_594)">
                                        <path d="M19.0738 8L12.0027 15.0711L4.93164 8" stroke="black" stroke-width="1.5" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_212_594">
                                            <rect width="24" height="24" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                    })
                }



            </div>


        </section>
    )
}

export default Faq