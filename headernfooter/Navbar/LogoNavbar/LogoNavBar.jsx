import React from "react";
import assetsManager from "../../../assets/assetsManager";
import { useTranslation } from "react-i18next";

const LogoNavbar = () => {
  const { t } = useTranslation();
  return (
    <div className="px-[7.5rem] py-[1.125rem] flex justify-between items-center">
      <div className="flex gap-3">
        <img

          loading="lazy"
          src={assetsManager.meityLogo}
          alt="logo"
          height={61}
          width={186}
        />
        <div className="h-10 w-0.5 bg-[#EBEBEB] dark:bg-white/10 my-1"></div>
      <div className="text-black  flex flex-col gap-1">
          <p className="font-bold">{t("nationalLanguageTranslationMission")}</p>
          <p>{t("harnessingTechnologyToTranscendLanguageBarriers")}</p>
        </div>
      </div>
      <img loading="lazy" src={assetsManager.digitalIndiaLogo} alt="bhashini logo" height={60} width={125} />
    </div>
  );
};

export default LogoNavbar;
