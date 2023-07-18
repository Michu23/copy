import React from "react";
import { ReactComponent as Google } from "../assets/Companies/Google.svg";
import { ReactComponent as Pinterest } from "../assets/Companies/Pinterest.svg";
import { ReactComponent as Reddit } from "../assets/Companies/Reddit.svg";
import { ReactComponent as Spotify } from "../assets/Companies/Spotify.svg";
import { ReactComponent as Stripe } from "../assets/Companies/Stripe.svg";





const Companies = () => {
  return (
    <>
      <div className="display__desktop">
        <div className="first">
          <div className="companies">
            <Google />
            <Pinterest />
            <Reddit />
            <Spotify />
            <Stripe />
            <Google />
            <Pinterest />
            <Reddit />
          </div>
        </div>
      </div>
      <div className="display__mobile">
        
          <div className="companies__mobile" >
            <Google />
            <Pinterest />
            <Reddit />
            <Spotify />
            <Stripe />
            <Google />
            <Pinterest />
            <Reddit />
          </div>
        
      </div>
    </>
  );
};

export default Companies;
