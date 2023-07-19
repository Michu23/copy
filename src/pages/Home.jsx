import React from "react";
import { ReactComponent as MySvg } from "../assets/Icons/arrow-right-circle.svg";
import { ReactComponent as Banner } from "../assets/Hero/Banner.svg";
import { ReactComponent as Ell } from "../assets/Ellips.svg";
import { ReactComponent as Grid } from "../assets/Maskgroup.svg";
import Companies from "../components/Companies";
import Cards from "../components/Home/Cards";
import Lake from "../components/Home/Lake";
import Pipeline from "../components/Home/Pipeline";
import Success from "../components/Home/Success";
import FAQs from "../components/Home/FAQs";
import BannerMob from "../assets/Mobile/BannerMob.svg";
import Banner2 from "../components/Home/Banner";

const Home = () => {
  return (
    <>
      <div className="display__desktop">
        <div className="first">
          <div className="heading">
            <h1>
              Unlock The Value Of Your Data
              <br />
              at <span className="colorheading">10x Price Performance</span>
              Advantage
            </h1>
          </div>
          <div className="description">
            <p>
              Discover a more efficient way to scale your data analytics. Our advanced platform ingests all your data into a single source of truth and provides seamless access to data consumers. Built on an open architecture, it ensures faster, more reliable and scalable deployment of data solutions.
            </p>
          </div>
          <div className="first">
            <div className="getstarted">
              <a href="hi">Get Started</a>
              <MySvg />
            </div>
            <div className="banner">
              <Banner2 />
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
      <div className="display__mobile">
        <div className="banner__component">
          <div className="banner__component__content">
            <h1 className="banner__heading">
              unlock The value of your data at 10x advantage
            </h1>
            <p>
              Discover a more efficient way to scale your data analytics. Our
              advanced platform ingests all your data into a single source of
              truth and provides seamless access to data consumers. Built on an
              open architecture, it ensures faster, more reliable and scalable
              deployment of data solutions.
            </p>
            <div className="getstarted__mob">
              <a href="hi">Get Started</a>
              <MySvg />
            </div>
          </div>
          <div className="">
            <img src={BannerMob} className="banner__img__mobile" alt="" />
          </div>
          <Companies />
        </div>
      </div>
      <Cards />
      <Lake />
      <Pipeline />
      <Success />
      <FAQs />
    </>
  );
};

export default Home;
