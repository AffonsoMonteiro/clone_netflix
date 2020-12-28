import React from 'react'
import './index.css'

function Header( {black} ) {
    return (
        <header className={ black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F842806517745329456%2F&psig=AOvVaw3JAyn-qDv3i6a6RYCyuefs&ust=1609274790973000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKCM1fXF8e0CFQAAAAAdAAAAABAD" alt="NetFlix" />
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