import React from 'react'
import { ReactComponent as MySvg } from '../assets/Icons/arrow-right-circle.svg';
import { ReactComponent as Banner } from '../assets/Hero/Banner.svg';
import { ReactComponent as Ell } from '../assets/Ellips.svg';
import { ReactComponent as Grid } from '../assets/Maskgroup.svg';
import Companies from '../components/Companies';
import Cards from '../components/Home/Cards';
import Lake from '../components/Home/Lake';
import Pipeline from '../components/Home/Pipeline';
import Success from '../components/Home/Success';
import FAQs from '../components/Home/FAQs';

const Home = () => {
    return (
        <>
            <div>
                <div className="first">
                    <div className="heading">
                        <h1>
                            Unlock The Value Of Your Data
                            <br />
                            at <span className='colorheading'>
                                10x Price Performance
                            </span>
                            Advantage
                        </h1>
                    </div>
                    <div className="description">
                        <p>
                            Discover a more efficient way to scale your data analytics. Our advanced platform ingests all your data to a single-source-of-truth and provides seamless access to data consumers.
                        </p>
                    </div>
                    <div className="first">
                        <div className="getstarted">
                            <a href="hi">
                                Get Started
                            </a>
                            <MySvg />
                        </div><div className="banner">
                            <Banner />
                        </div>
                        <div className="grid">
                            <Grid />
                        </div>
                        <Companies />
                    </div>
                </div>
                <div className="biggerellipse">
                    <Ell />
                </div>
            </div>
            <Cards />
            <Lake />
            <Pipeline/>
            <Success />
            <FAQs/>
        </>
    )
}

export default Home