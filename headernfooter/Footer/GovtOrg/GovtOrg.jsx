import React from "react";
import assetsManager from "../../../assets/assetsManager";
import Marquee from "react-fast-marquee";
const GovtOrg = () => {
  return (
    <div className="w-full">
      <Marquee>
        <img
          loading="lazy"
          src={assetsManager.govtOrg}
          alt="govtOrg"
          className="w-full"
        />
      </Marquee>
    </div>
  );
};

export default GovtOrg;
