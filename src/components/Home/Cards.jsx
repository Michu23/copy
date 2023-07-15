import React from "react";
import Card1 from "../../assets/Images/card1.png";
import Dot from "../../assets/Ellipse.svg";
import Circle from "../../assets/circleflare.svg";

const C1 = () => {
  return (
    <div className="cards">
      <div className="images">
        <img src={Card1} className="cc" />
      </div>
      <div className="text">
        <div className="subs">
          <p className="ch">Faster</p>
          <img src={Dot} alt="" />
          <p className="ch">Intelligent</p>
          <img src={Dot} alt="" />
          <p className="ch">Better</p>
          <img src={Dot} alt="" />
          <p className="ch">Efficient</p>
          <img src={Dot} alt="" />
          <p className="ch">Reliable</p>
        </div>
        <div className="headings">
          <h1>
            Embark on your data journey
            <br />
            with
            <span
              className="colorheading"
              style={{
                marginLeft: "10px",
                marginRight: "10px",
              }}
            >
              FIBER's
            </span>
            Platform.
          </h1>
          <br />
        </div>
        <div className="paras">
          Ingest data from 100+ sources in near real time. An intuitive no-code
          UI to transform your data into analytics-ready format within minutes.
          Say goodbye to biased and blackbox solutions. Achieve zero downtime
          and unparalled automation that ensure virtually zero maintenance.
        </div>
        <a href="">
          <button className="know__more">
            <span>

            Know more
            </span>
            </button>
        </a>
      </div>
    </div>
  );
};

const C2 = () => {
  return (
    <div className="cards">
      {" "}
      <div className="text">
        <div className="subs">
          <p className="ch">Faster</p>
          <img src={Dot} alt="" />
          <p className="ch">Intelligent</p>
          <img src={Dot} alt="" />
          <p className="ch">Better</p>
          <img src={Dot} alt="" />
          <p className="ch">Efficient</p>
          <img src={Dot} alt="" />
          <p className="ch">Reliable</p>
        </div>
        <div className="headings">
          <h1>
            Effortlessly centralise & streamline data for <br />
            seamless management.
          </h1>
          <br />
        </div>
        <div className="paras">
          Shatter data silos, embrace the Lakehouse revolution to create a
          Single-Source-of-Truth. Our single-copy architecture empowers
          lightning-fast analytical queries, while open storage formats ensure
          seamless interoperability across your data ecosystem.{" "}
        </div>
        <a href="">
          <button className="know__more">
            <span>

            Know more
            </span>
            </button>
        </a>
      </div>
      <div className="images">
        <img src={Card1} className="cc" />
      </div>
    </div>
  );
};

const C3 = () => {
  return (
    <div className="cards">
      <div className="images">
        <img src={Card1} className="cc" />
      </div>
      <div className="text">
        <div className="headings">
          <h1>No Show Never Happens Query engine that autoscales.</h1>
          <br />
        </div>
        <div className="paras">
          Unlock actionable insights with a centralized metrics layer for
          reliable data consumption. Our separate compute and storage
          architecture ensures auto-scalability with the ability to shrink back
          and minimize redundancy.
        </div>
        <a href="">
          <button className="know__more">
            <span>

            Know more
            </span>
            </button>
        </a>
      </div>
    </div>
  );
};

const C4 = () => {
  return (
    <div className="cards">
      {" "}
      <div className="text">
        <div className="headings">
          <h1>Prioritise Data Security. Streamline data flows.</h1>
          <br />
        </div>
        <div className="paras">
          Bolster data security with a dedicated in VPC deployment, customized
          to meet your strict requirements. Enable RBAC control for teams to
          access data. Mask and anaonymize column/row level data to safeguard
          yourself from data breach.
        </div>
        <a href="">
          <button className="know__more">
            <span>

            Know more
            </span>
            </button>
        </a>
      </div>
      <div className="images">
        <img src={Card1} className="cc" />
      </div>
    </div>
  );
};

const C5 = () => {
  return (
    <div className="cards">
      <div className="images">
        <img src={Card1} className="cc" />
      </div>
      <div className="text">
        <div className="headings">
          <h1>Reduce data diasgreement. Maximize teams Collaboration.</h1>
          <br />
        </div>
        <div className="paras">
          Bolster data security with a dedicated in VPC deployment, customized
          to meet your strict requirements. Enable RBAC control for teams to
          access data. Mask and anaonymize column/row level data to safeguard
          yourself from data breach.
        </div>
        <a href="">
          <button className="know__more">
            <span>

            Know more
            </span>
            </button>
        </a>
      </div>
    </div>
  );
};

const Cards = () => {
  return (
    <>
      <div
        className="first"
        style={{
          position: "relative",
        }}
      >
        <img
          src={Circle}
          alt=""
          style={{
            position: "absolute",
            zIndex: "-1",
            marginTop: "50rem",
          }}
        />
      </div>
      <div>
        <img
          src={Circle}
          alt=""
          style={{
            position: "absolute",
            zIndex: "-1",
            marginTop: "70rem",
            left: "-20rem",
          }}
        />
      </div>
      <div
        className="first"
        style={{
          paddingBottom: "100px",
        }}
      >
        <C1 />
        <C2 />
        <C3 />
        <div
          className="first"
          style={{
            position: "relative",
          }}
        >
          <img
            src={Circle}
            alt=""
            style={{
              position: "absolute",
              zIndex: "-1",
              right: "-20rem",
            }}
          />
        </div>
        <C4 />
        <C5 />
      </div>

      <div
        className="first"
        style={{
          position: "relative",
        }}
      >
        <img
          src={Circle}
          alt=""
          style={{
            position: "absolute",
            zIndex: "-1",
          }}
        />
      </div>
    </>
  );
};

export default Cards;
