import React from "react";
import AccessbilityBar from "./AccessbilityBar/AccessbilityBar";
import LogoNavbar from "./LogoNavbar/LogoNavBar";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
const Navbar = () => {
  const { t } = useTranslation();
  const navItems = [
    {
      title: t("home"),
      link: "/",
    },
    {
      title: t("about"),
      link: "/about",
    },
    {
      title: t("arpan"),
      link: "/arpan",
    },
    {
      title: t("prayog"),
      link: "/prayog",
    },
    {
      title: t("sahyogi"),
      link: "/sahyogi",
    },
    {
      title: t("sanchalak"),
      link: "/sanchalak",
    },
    {
      title: t("pravakta"),
      link: "/pravakta",
    }
  ];

  return (
    <div className="flex flex-col w-full h-full text-white">
      <AccessbilityBar />
      <LogoNavbar />
      <div className="flex  px-[6.5rem] justify-between">
        <div className="flex">
          {navItems.map((item) => (
            <Link
              to={item.link}
              key={item.link}
              className="py-[.5rem] px-4 text-[#6A6A6A]"
            >
              {item.title}
            </Link>
          ))}
        </div>
        <div className="flex gap-3">
          <button className="buttonSmall text-primary border border-primary font-semibold text rounded">
            {t("bhashadaan")}
          </button>
          <button className="buttonSmall bg-primary text-white font-semibold rounded">
            {t("downloadApp")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
