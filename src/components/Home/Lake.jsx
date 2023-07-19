import React, { useState } from "react";
import Pagination from "../../assets/Pagination.svg";

const Lake = () => {
  const [expand, setExpand] = useState("");

  return (
    <>
      <div className="display__desktop">
        <div className="first">
          <div className="datalake">
            <div className="lakecontent">
              <h2>
                Effortlessly Build <br />
                Your Data Lake
              </h2>
              <div className="lakedown">
                <div className="ldf">
                  <div className="ldf__content">
                    <div
                      className={`cp lakeboxes ${
                        expand === "fiber" ? "fiber expanded " : "aqua"
                      }`}
                      onClick={() => {
                        setExpand("fiber");
                      }}
                    >
                      <h4>Fiber</h4>
                      <p>
                        Data Pipeline that effortlessly ingests structured,
                        semi-structured and unstructured data from Web Logs,
                        Databases, Social Media, Cloud Applications into a
                        unified Data Lake in minutes.
                      </p>
                    </div>
                    <div
                      className={` cp lakeboxes ${
                        expand === "aqua" ? "fiber expanded" : "aqua"
                      }`}
                      onClick={() => {
                        setExpand("aqua");
                      }}
                    >
                      <h4>Aqua</h4>
                      
                      <p>
                        Query Engine that auto scales with your analytics
                        workload and shrinks back when load minimises. Reduces
                        compute power. Blazingly fast access and purely access
                        controlled.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="udf">
                  <img src={Pagination} className="udfimg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="display__mobile">
        <div className="lake__mob">
          <h1>
            Effortlessly Build
            <br />
            Your Data Lake
          </h1>
          <div
            className={`cp lake__boxes__mob ${
              expand === "fiber" ? "fiber expanded " : "aqua"
            }`}
            onClick={() => {
                setExpand("fiber");
              }}
          >
            <h4>Fiber</h4>
            {
                        expand === "fiber" ?   <p>
                        Data Pipeline that effortlessly ingests structured,
              semi-structured and unstructured data from Web Logs, Databases,
              Social Media, Cloud Applications into a unified Data Lake in
              minutes.
                      </p> : ""
                      }
         
          </div>
          <div
            className={`cp lake__boxes__mob ${
              expand === "aqua" ? "fiber expanded " : "aqua"
            }`}
            onClick={() => {
                setExpand("aqua");
              }}
          >
            <h4>Aqua</h4>
            {
                        expand === "aqua" ?   <p>
                        Query Engine that auto scales with your analytics
                        workload and shrinks back when load minimises. Reduces
                        compute power. Blazingly fast access and purely access
                        controlled.
                      </p> : ""
                      }
          </div>
          <img src={Pagination} className="lake__img__mob" alt="" />
        </div>
      </div>
    </>
  );
};

export default Lake;
