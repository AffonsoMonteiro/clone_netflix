import React from 'react'
import './index.css'

function Header( {black} ) {
    return (
        <header className={ black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png" alt="NetFlix" />
                </a>
            </div>
            <div className="header--user">
                <a href="#">
                    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png" alt="Usuario" />
                </a>
            </div>
        </header>
    )
}

export default Header