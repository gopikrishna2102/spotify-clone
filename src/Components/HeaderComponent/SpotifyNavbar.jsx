import React, { Fragment } from 'react'
import SpotifyLogo from './LogoComponent/SpotifyLogo'
import "./SpotifyNavbar.css"
const SpotifyNavbar = () => {
    return (
        <Fragment>
            <section id="SpotifyNavbarBlock">
                <article>
                <div className='logoBlock'>
                    <a href="/">
                        <SpotifyLogo/>
                    </a>
                </div>
                <div className='menuBlock'>
                    new
                </div>
                </article>
            </section>
        </Fragment>

    )
}

export default SpotifyNavbar;
