import React, { useState } from "react";
import SiteList from "../siteList/SiteList";
import Welcome from "../welcome/Welcome";
import PreviewDevices from "../previewDevices/PreviewDevices";
import Overview from "../overview/Overview";
import Editor from "../editor/Editor";
import Controller from "../contoller/Controller";
import Handlebars from "handlebars";
import commonStyle from "../../templates/commonStyle";
import CustomBrandingContext from "../../custom-branding-context";
import styles from "./Preview.module.scss";

function Preview() {
  Handlebars.registerPartial("commonStyle", commonStyle);
  const [primary, setPrimary] = useState("#03a9f4");
  const [secondary, setSecondary] = useState("#2094c9");
  const [topBarColor, setTopBarColor] = useState("#2c3e50");
  const [logo, setLogo] = useState("");

  return (
    <CustomBrandingContext.Provider
      value={{
        primary,
        setPrimary,
        secondary,
        setSecondary,
        topBarColor,
        setTopBarColor,
        logo,
        setLogo
      }}
    >
      <Controller />
      <div className={styles.container}>
        <SiteList />
        <Welcome />
        <Overview />
        <PreviewDevices />
        <Editor />
      </div>
    </CustomBrandingContext.Provider>
  );
}

export default Preview;
