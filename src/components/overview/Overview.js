import React from "react";
import overviewTemplate from "../../templates/overview/overview";
import svgStyle from "../../templates/svgStyle";
import Handlebars from "handlebars";
import CustomBrandingContext from "../../custom-branding-context";

function Overview() {
  const overviewCompiled = Handlebars.compile(overviewTemplate);
  const svgStyleCompiled = Handlebars.compile(svgStyle);

  return (
    <CustomBrandingContext.Consumer>
      {({ primary, secondary, topBarColor, logo }) => {
        const svgStyleResult = svgStyleCompiled({
          primaryColor: primary,
          secondaryColor: secondary,
          topBarColor: topBarColor
        });

        const overviewResult = overviewCompiled({
          logo,
          style: svgStyleResult,
          siteNameText: "Site Name",
          overViewLinkText: "Overview",
          statsViewLinkText: "Stats"
        });

        return (
          <div
            class="site-list"
            dangerouslySetInnerHTML={{ __html: overviewResult }}
          />
        );
      }}
    </CustomBrandingContext.Consumer>
  );
}

export default Overview;
