import React from "react";
import previewDevicesTemplate from "../../templates/previewDevices/previewDevices.js";
import svgStyle from "../../templates/svgStyle";
import Handlebars from "handlebars";
import CustomBrandingContext from "../../custom-branding-context";

function PreviewDevices() {
  const previewDevicesCompiled = Handlebars.compile(previewDevicesTemplate);
  const svgStyleCompiled = Handlebars.compile(svgStyle);

  return (
    <CustomBrandingContext.Consumer>
      {({ primary, secondary, topBarColor, logo }) => {
        const svgStyleResult = svgStyleCompiled({
          primaryColor: primary,
          secondaryColor: secondary,
          topBarColor: topBarColor
        });

        const previewDevicesResult = previewDevicesCompiled({
          logo,
          style: svgStyleResult,
          welcomeText: "Welcome",
          loginText: "Login to edit your site",
          forgotPasswordText: "Forgot password?",
          signInButtonText: "Sign in"
        });

        return (
          <div
            class="site-list"
            dangerouslySetInnerHTML={{ __html: previewDevicesResult }}
          />
        );
      }}
    </CustomBrandingContext.Consumer>
  );
}

export default PreviewDevices;
