import React from "react";
import editorTemplate from "../../templates/editor/editor";
import svgStyle from "../../templates/svgStyle";
import Handlebars from "handlebars";
import CustomBrandingContext from "../../custom-branding-context";

function Editor() {
  const editorCompiled = Handlebars.compile(editorTemplate);
  const svgStyleCompiled = Handlebars.compile(svgStyle);

  return (
    <CustomBrandingContext.Consumer>
      {({ primary, secondary, topBarColor, logo }) => {
        const svgStyleResult = svgStyleCompiled({
          primaryColor: primary,
          secondaryColor: secondary,
          topBarColor: topBarColor
        });

        const editorResult = editorCompiled({
          logo,
          style: svgStyleResult,
          siteNameText: "Site Name",
          overViewLinkText: "Overview",
          statsViewLinkText: "Stats"
        });

        return (
          <div
            class="site-list"
            dangerouslySetInnerHTML={{ __html: editorResult }}
          />
        );
      }}
    </CustomBrandingContext.Consumer>
  );
}

export default Editor;
