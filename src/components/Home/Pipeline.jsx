import React from 'react'
import Mask2 from '../../assets/Mask2.svg'
import Circle from '../../assets/circleflare.svg';
import Picon from '../../assets/pipeline__icon.svg';

const Pbox = ({ph,pd,pa}) => {
    return (
        <div className="pbox">
            <img src={Picon} alt="" />
            <h4 className="plheading">
            {ph}
            </h4>
            <p className="pldescription">
            {pd}
            </p>
            <div className="plbutton">
                <a href={pa}>
                    Know More
                </a>
            </div>

        </div>
    )
}


const Pipeline = () => {
  return (
    <div>
        <div className='first' style={{
                position: 'relative',
            }}>
                <img src={Mask2} alt=""
                    style={
                        {
                            position: 'absolute',
                            zIndex: '-1',
                            top: '0',
                        }
                    }
                />
                <img src={Circle} alt=""
                    style={
                        {
                            position: 'absolute',
                            zIndex: '-2',
                            right: '-25rem',
                            top: '-20rem',
                        }
                    }
                />
            </div>
            <div className="first">
                <div className="pipeline">
                    <h2 className="pheading">
                    Unified Data Platform Powered 
                    <br />
                    by dView's Data Pipeline Engine.
                    </h2>

                </div>
                <div className="pmain">

              
                    <div className="pcontent">
                        <Pbox ph="Realtime Empowers,       Personalized Experiences." 
                            pd="Realtime data ingestion into Messaging Queues like Kafka or SQS. Build Machine Learning Models, Recommendation Engine, Fraud Detection Modules, and more. Power personalised customer experiences."
                            pa="Realtime data"
                        />
                        <Pbox ph="Realtime Empowers,       Personalized Experiences." 
                            pd="Realtime data ingestion into Messaging Queues like Kafka or SQS. Build Machine Learning Models, Recommendation Engine, Fraud Detection Modules, and more. Power personalised customer experiences."
                            pa="Realtime data"
                        />
                          </div>
                          
                    <div className="pcontent">
                        <Pbox ph="Realtime Empowers,       Personalized Experiences." 
                            pd="Realtime data ingestion into Messaging Queues like Kafka or SQS. Build Machine Learning Models, Recommendation Engine, Fraud Detection Modules, and more. Power personalised customer experiences."
                            pa="Realtime data"
                        />
                        <Pbox ph="Realtime Empowers,       Personalized Experiences." 
                            pd="Realtime data ingestion into Messaging Queues like Kafka or SQS. Build Machine Learning Models, Recommendation Engine, Fraud Detection Modules, and more. Power personalised customer experiences."
                            pa="Realtime data"
                        />
                          </div>
                    </div>
            </div>
    </div>
  )
}

export default Pipeline