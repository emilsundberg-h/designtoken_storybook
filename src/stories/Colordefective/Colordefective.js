import React from "react";
import "./Colordefective.css";

const Colordefective = () => {
  return (
    <div>
      <h2 className="headingColorDefective">Color Vision Deficiency</h2>
      <h5 className="subHeadingColorDefective">
        How colors look like for people with no color vision deficiency
      </h5>
      <div className="flexNormal">
        <div className="normal-plum-red" />
        <div className="normal-red" />
        <div className="normal-red-orange" />
        <div className="normal-orange" />
        <div className="normal-light-orange" />
        <div className="normal-yellow" />
        <div className="normal-light-lime" />
        <div className="normal-green" />
        <div className="normal-ocean-blue" />
        <div className="normal-yves-klein-blue" />
        <div className="normal-dark-purple" />
        <div className="normal-purple" />
      </div>
      <h5 className="subHeadingColorDefective">
        How same colors look like for people with deuteranopia (most common
        version of color vision deficiency)
      </h5>
      <div className="flexDeuteranopia">
        <div className="deuteranopia-plum-red" />
        <div className="deuteranopia-red" />
        <div className="deuteranopia-red-orange" />
        <div className="deuteranopia-orange" />
        <div className="deuteranopia-light-orange" />
        <div className="deuteranopia-yellow" />
        <div className="deuteranopia-light-lime" />
        <div className="deuteranopia-green" />
        <div className="deuteranopia-ocean-blue" />
        <div className="deuteranopia--yves-klein-blue" />
        <div className="deuteranopiadark-purple" />
        <div className="deuteranopia-purple" />
      </div>
    </div>
  );
};
export default Colordefective;
