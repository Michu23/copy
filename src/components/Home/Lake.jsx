import React from 'react'
import Pagination from '../../assets/Pagination.svg'

const Lake = () => {
    return (
        <div className="first">

       
        <div className='datalake'>
            <div className="lakecontent">
                <h2>
                    Effortlessly Build <br />
                    Your Data Lake
                </h2>
                <div className="lakedown">
                    <div className="ldf">
                        <div className="ldf__content">
                            <div className="fiber">
                                <b>
                                    <h4>
                                        Fiber
                                    </h4>
                                </b>
                                <p>
                                    Data Lake Effortlessly ingest both structured and unstructured data from Web Logs, Databases, Social Media, Cloud Applications, and more to build your Data Lake in minutes
                                </p>
                            </div>
                            <div className="aqua">
                                <h4>
                                    Aqua
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="udf">
                        <img src={Pagination} className='udfimg' alt="" />
                    </div>
                </div>
            </div>
        </div> 
        </div>
    )
}

export default Lake