import React from 'react'
import style from '../styles/Home.module.css'

function Css() {
    return (
        <div>
            <h1 style={{ backgroundColor: 'blue' }}>css</h1>
            {/* same ReactJS */}
            <div className={style.test}>test</div>
        </div >
    )
}

export default Css