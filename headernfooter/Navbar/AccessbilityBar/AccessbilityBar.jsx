import React, { useEffect } from "react";
import useGetDateAndTime from "../../../hooks/useGetDateAndTime";
import { useTranslation } from "react-i18next";
import assetsManager from "../../../assets/assetsManager";
const AccessbilityBar = () => {
  const [rootFontSize, setRootFontSize] = React.useState(16);
  const { date, time } = useGetDateAndTime();
  const { t, i18n } = useTranslation();

  // ******* useEffect to set the root font size *******
  useEffect(() => {
    document.documentElement.style.setProperty(
      "--root-font-size",
      `${rootFontSize}px`
    );
  }, [rootFontSize]);

  // ******* function to increase font size across the entire Application  *******
  const increaseFontSize = () => {
    setRootFontSize((prev) => prev + 1);
  };
  // ******* function to decrease font size  across the entire Application*******
  const decreaseFontSize = () => {
    setRootFontSize((prev) => prev - 1);
  };

  // funxtion to set the font size to normal
  const handleFontSizeNormal = () => {
    setRootFontSize(16);
  };

  const changeLanguage = (e) => {
    console.log(e.target.value, "value");
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div className="w-full bg-primaryDark2 flex px-[7.5rem]  py-[0.78rem] justify-between">
      <div className="flex gap-2 items-center smallText font-semibold">
        <p>{date}</p>
        <p>{time}</p>
      </div>
      <div className="flex gap-6 h-full items-center">
        <p className="smallText font-medium text-[#EBEBEB]">
          {t("skipMainContent")}
        </p>
        <div className="h-5  w-0.5 bg-[#EBEBEB] dark:bg-white/10"></div>
        <div className="h-full flex gap-3">
          <button
            className="h-full flex items-center gap-2"
            onClick={decreaseFontSize}
          >
            <img src={assetsManager.fontDec} alt="minus" loading="lazy" />
          </button>
          <button
            className="h-full flex items-center gap-2"
            onClick={handleFontSizeNormal}
          >
            A
          </button>
          <button
            className="h-full flex items-center gap-2"
            onClick={increaseFontSize}
          >
                        <img src={assetsManager.fontInc} alt="minus" loading="lazy" />

          </button>
        </div>
        <div className="h-5  w-0.5 bg-[#EBEBEB] dark:bg-white/10"></div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
          >
            <path
              d="M12.263 20.8334C16.8654 20.8334 20.5964 17.1025 20.5964 12.5001C20.5964 7.89771 16.8654 4.16675 12.263 4.16675C7.66065 4.16675 3.92969 7.89771 3.92969 12.5001C3.92969 17.1025 7.66065 20.8334 12.263 20.8334ZM12.263 19.5834V5.41675C16.175 5.41675 19.3464 8.58806 19.3464 12.5001C19.3464 16.4121 16.175 19.5834 12.263 19.5834Z"
              fill="#EBEBEB"
            />
          </svg>
        </div>
        <div className="h-5  w-0.5 bg-[#EBEBEB] dark:bg-white/10"></div>
        <div className="flex gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.2656 18.5C14.6839 18.5 18.2656 14.9183 18.2656 10.5C18.2656 6.08172 14.6839 2.5 10.2656 2.5C5.84735 2.5 2.26562 6.08172 2.26562 10.5C2.26562 14.9183 5.84735 18.5 10.2656 18.5ZM10.2656 3.5C9.60878 3.5 8.85886 4.09025 8.24384 5.40814C8.02636 5.87419 7.83735 6.40978 7.68499 7H12.8463C12.6939 6.40978 12.5049 5.87419 12.2874 5.40814C11.6724 4.09025 10.9225 3.5 10.2656 3.5ZM7.33766 4.98526C7.06126 5.57753 6.83061 6.25696 6.65494 7H4.2021C5.03857 5.55399 6.37745 4.43497 7.98004 3.88163C7.73859 4.21222 7.5239 4.58617 7.33766 4.98526ZM6.45827 8H3.72525C3.4283 8.7764 3.26562 9.6192 3.26562 10.5C3.26562 11.3808 3.4283 12.2236 3.72525 13H6.45827C6.33286 12.2117 6.26562 11.3707 6.26562 10.5C6.26562 9.62934 6.33286 8.78832 6.45827 8ZM6.65494 14H4.2021C5.03857 15.446 6.37745 16.565 7.98004 17.1184C7.73859 16.7878 7.5239 16.4138 7.33766 16.0147C7.06126 15.4225 6.83061 14.743 6.65494 14ZM7.68499 14H12.8463C12.6939 14.5902 12.5049 15.1258 12.2874 15.5919C11.6724 16.9097 10.9225 17.5 10.2656 17.5C9.60878 17.5 8.85886 16.9097 8.24384 15.5919C8.02636 15.1258 7.83735 14.5902 7.68499 14ZM13.0595 13H7.47179C7.33907 12.2253 7.26562 11.3833 7.26562 10.5C7.26562 9.61669 7.33907 8.77472 7.47179 8H13.0595C13.1922 8.77472 13.2656 9.61669 13.2656 10.5C13.2656 11.3833 13.1922 12.2253 13.0595 13ZM13.8763 14C13.7006 14.743 13.47 15.4225 13.1936 16.0147C13.0073 16.4138 12.7927 16.7878 12.5512 17.1184C14.1538 16.565 15.4927 15.446 16.3291 14H13.8763ZM16.806 13H14.073C14.1984 12.2117 14.2656 11.3707 14.2656 10.5C14.2656 9.62934 14.1984 8.78832 14.073 8H16.806C17.1029 8.7764 17.2656 9.6192 17.2656 10.5C17.2656 11.3808 17.1029 12.2236 16.806 13ZM12.5512 3.88163C14.1538 4.43497 15.4927 5.55399 16.3291 7H13.8763C13.7006 6.25696 13.47 5.57753 13.1936 4.98526C13.0073 4.58617 12.7927 4.21222 12.5512 3.88163Z"
              fill="#EBEBEB"
            />
          </svg>
          <select
            name="language"
            className="text-white font-medium bg-transparent"
            onChange={changeLanguage}
            value={i18n.language}
          >
            <option value="en" className="text-black">English</option>
            <option value="as" className="text-black">Assamese</option>
            <option value="bn" className="text-black">
              Bengali
            </option>
            <option value="brx" className="text-black">
              Bodo
            </option>
            <option value="doi" className="text-black">
              Dogri
            </option>
            <option className="text-black" value="gu">
              Gujarati
            </option>
            <option className="text-black" value="hi">
              Hindi
            </option>
            <option className="text-black" value="kn">
              Kannada
            </option>
            <option className="text-black" value="ks">
              Kashmiri
            </option>
            <option className="text-black" value="gom">
              Konkani
            </option>
            <option className="text-black" value="mai">
              Maithili
            </option>
            <option className="text-black" value="ml">
              Malayalam
            </option>
            <option className="text-black" value="mr">
              Marathi
            </option>
            <option className="text-black" value="mni">
              Manipuri
            </option>
            <option className="text-black" value="ne">
              Nepali
            </option>
            <option className="text-black" value="or">
              Odia
            </option>
            <option className="text-black" value="pa">
              Punjabi
            </option>
            <option className="text-black" value="sa">
              Sanskrit
            </option>
            <option className="text-black" value="sd">
              Sindhi
            </option>
            <option className="text-black" value="ta">
              Tamil
            </option>
            <option className="text-black" value="te">
              Telugu
            </option>
            <option className="text-black" value="ur">
              Urdu
            </option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default AccessbilityBar;
