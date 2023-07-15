import React, { useEffect, useState } from 'react'
import '../App.css'
import { ReactComponent as MySvg } from '../assets/Ellipse.svg'

const Header = () => {

    const [show, setShow] = useState(false)
    const controlNavbar = () => {
        if (window.scrollY > 250) {
            setShow(true)
        } else {
            setShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar)

        let previousScrollPosition = 0;
        let currentScrollPosition = 0;

        window.addEventListener('scroll', function (e) {


            currentScrollPosition = window.pageYOffset;

            //   console.log("Scroll position", currentScrollPosition);
            // console.log("Previous scroll position", previousScrollPosition);

            if (previousScrollPosition - currentScrollPosition < 0) {
                setShow(false);
            } else if (previousScrollPosition - currentScrollPosition > 0) {
                setShow(true);
            }

            previousScrollPosition = currentScrollPosition;
        });
    }, [])

    return (
        <div className={`${show ? 'header' : 'header__hidden'}`}>
            <div className="logo">Dview.io</div>
            <div className="nav">
                <a href="/">Platform</a>
                <MySvg />

                <a href="/about">Integration</a>
                <MySvg />


                <a href="/contact">Demo</a>
            </div>
            <div className="connect">
                <a href="/connect">Contact Us</a>
            </div>
        </div>
    )
}

export default Header