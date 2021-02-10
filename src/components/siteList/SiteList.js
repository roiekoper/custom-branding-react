import React from "react";
import siteListTemplate from "../../templates/siteList/siteList.js";
import svgStyle from "../../templates/svgStyle";
import Handlebars from "handlebars";
import CustomBrandingContext from "../../custom-branding-context";

function SiteList() {
  const siteListCompiled = Handlebars.compile(siteListTemplate);
  const svgStyleCompiled = Handlebars.compile(svgStyle);

  return (
    <CustomBrandingContext.Consumer>
      {({ primary, secondary, topBarColor, logo }) => {
        const svgStyleResult = svgStyleCompiled({
          primaryColor: primary,
          secondaryColor: secondary,
          topBarColor: topBarColor
        });

        const siteListResult = siteListCompiled({
          logo,
          style: svgStyleResult,
          siteNameText: "Site Name",
          overViewLinkText: "Overview",
          statsViewLinkText: "Stats"
        });

        return (
          <div
            class="site-list"
            dangerouslySetInnerHTML={{ __html: siteListResult }}
          />
        );
      }}
    </CustomBrandingContext.Consumer>
  );
}

export default SiteList;
