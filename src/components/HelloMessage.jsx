import React, { Component } from 'react'

export default class HelloMessage extends Component {
    render() {
        let hour = new Date().getHours();

        if (hour >= 6 && hour < 12) {
            return (
                <div className='heder'>
                    <p>היי, בוקר טוב לך ! <br />ברוכים הבאים לאתר ההכרויות שלנו.</p>
                </div>
            )
        }
        else if (hour >= 12 && hour < 15) {
            return (
                <div className='heder'>
                    <p>היי, צהריים טובים לך ! <br />ברוכים הבאים לאתר ההכרויות שלנו.</p>
                </div>
            )
        }
        else if (hour >= 15 && hour < 18) {
            return (
                <div className='heder'>
                    <p>היי, אחה"צ טובים לך ! <br />ברוכים הבאים לאתר ההכרויות שלנו.</p>
                </div>
            )
        }
        else if (hour >= 18 && hour < 20) {
            return (
                <div className='heder'>
                    <p>היי, ערב טוב לך ! <br />ברוכים הבאים לאתר ההכרויות שלנו.</p>
                </div>
            )
        }
        else {
            return (
                <div className='heder'>
                    <p>היי, לילה טוב לך ! <br />ברוכים הבאים לאתר ההכרויות שלנו.</p>
                </div>
            )
        }
    }
}

