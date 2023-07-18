import React from 'react'
import Left from '../../assets/leftarrow.svg'
import Right from '../../assets/rightarrow.svg'
import Pro from '../../assets/Success/propic.png'

const Success = () => {
    return (
        <>
        <div className="display__desktop">
             <div className='first'>
            <div className="success">
                <div className="scontent">
                    <div className="stop">
                        <h2 className="sheading">
                            Success Stories
                        </h2>
                        <div className="snav">
                            <img src={Left} alt="" />
                            <img src={Right} alt="" />
                        </div>

                    </div>
                    
                </div><div className="stories">
                        <div className="story">
                            <div className="storytext">
                                <h2 className="storyheading">
                                    Positioning our brand by highlighting
                                    <br />
                                    success stories that back
                                </h2>
                                <p className="storytext">
                                    Our data management solutions offer full observability and monitoring capabilities across every data operation, providing you with the confidence to fully trust and rely on your data.
                                </p>
                                <hr className='shr' />
                                <div className="rating">
                                    <div className="rating__people">
                                        
                                        <img src={Pro} alt="" />
                                        <div className="ratinginfo">
                                            <h6 className="ratingname">
                                                Bashooka
                                            </h6>
                                            <p className='ratingrole'>
                                                CEO
                                            </p>
                                        </div>
                                    </div>
                                    <div className="star__rating">
                                        <h3 className="spercentage">
                                            50%
                                        </h3>
                                        <p className="scontent">
                                        Reduction in time from raw data <br />
to insights on a dashboard                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="story">
                            <div className="storytext">
                                <h2 className="storyheading">
                                    Positioning our brand by highlighting
                                    <br />
                                    success stories that back
                                </h2>
                                <p className="storytext">
                                    Our data management solutions offer full observability and monitoring capabilities across every data operation, providing you with the confidence to fully trust and rely on your data.
                                </p>
                                <hr className='shr' />
                                <div className="rating">
                                    <div className="rating__people">
                                        <img src={Pro} alt="" />
                                        <div className="ratinginfo">
                                            <h6 className="ratingname">
                                                Bashooka
                                            </h6>
                                            <p className='ratingrole'>
                                                CEO
                                            </p>
                                        </div>
                                    </div>
                                    <div className="star__rating">
                                        <h3 className="spercentage">
                                            50%
                                        </h3>
                                        <p className="scontent">
                                        Reduction in time from raw data <br />
to insights on a dashboard                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="story">
                            <div className="storytext">
                                <h2 className="storyheading">
                                    Positioning our brand by highlighting
                                    <br />
                                    success stories that back
                                </h2>
                                <p className="storytext">
                                    Our data management solutions offer full observability and monitoring capabilities across every data operation, providing you with the confidence to fully trust and rely on your data.
                                </p>
                                <hr className='shr' />
                                <div className="rating">
                                    <div className="rating__people">
                                        <img src={Pro} alt="" />
                                        <div className="ratinginfo">
                                            <h6 className="ratingname">
                                                Bashooka
                                            </h6>
                                            <p className='ratingrole'>
                                                CEO
                                            </p>
                                        </div>
                                    </div>
                                    <div className="star__rating">
                                        <h3 className="spercentage">
                                            50%
                                        </h3>
                                        <p className="scontent">
                                        Reduction in time from raw data <br />
to insights on a dashboard                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="story">
                            <div className="storytext">
                                <h2 className="storyheading">
                                    Positioning our brand by highlighting
                                    <br />
                                    success stories that back
                                </h2>
                                <p className="storytext">
                                    Our data management solutions offer full observability and monitoring capabilities across every data operation, providing you with the confidence to fully trust and rely on your data.
                                </p>
                                <hr className='shr' />
                                <div className="rating">
                                    <div className="rating__people">
                                        <img src={Pro} alt="" />
                                        <div className="ratinginfo">
                                            <h6 className="ratingname">
                                                Bashooka
                                            </h6>
                                            <p className='ratingrole'>
                                                CEO
                                            </p>
                                        </div>
                                    </div>
                                    <div className="star__rating">
                                        <h3 className="spercentage">
                                            50%
                                        </h3>
                                        <p className="scontent">
                                        Reduction in time from raw data <br />
to insights on a dashboard                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                      
                      

                    </div>
            </div>
        </div>
        </div>

        <div className="display__mobile">
        <div className="success__mob">
            <h2>
        Success Stories
            </h2>

            <div className="success__mob__boxes">
                <div className="mob__box__content">
                    <h4>
                    Positioning our brand by
highlighting success stories 
that back 
                    </h4>
                    <p>
                    Our data management solutions offer full observability and monitoring capabilities across every data operation, providing you with the confidence to fully trust and rely on your data.
                    </p>
                    <hr />

                    <div className="mob__rating">
                        <div className="mob__perc">
                            <h4>
                                50%
                            </h4>
                        </div>
                        <div className="rating__content">
                            <p>
                            Reduction in time from raw
data to insights on a 
dashboard
                            </p>
                        </div>
                    </div>
                    <hr />
                    <div className="mob__success__profile">
                        <img src={Pro} alt="" />
                        <div className="ratinginfo">
                            <h6 className="ratingname">
                                Bashooka
                            </h6>
                            <p className='ratingrole'>
                                CEO
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="snav__mob">
                            <img src={Left} alt="" />
                            <img src={Right} alt="" />
                        </div>
           
        </div>
        </div>
        
        </>
    )
}

export default Success
