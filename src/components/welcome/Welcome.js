import React from "react";
import welcomeTemplate from "../../templates/welcome/welcome.js";
import svgStyle from "../../templates/svgStyle";
import Handlebars from "handlebars";
import CustomBrandingContext from "../../custom-branding-context";

function Welcome() {
  const welcomeCompiled = Handlebars.compile(welcomeTemplate);
  const svgStyleCompiled = Handlebars.compile(svgStyle);

  return (
    <CustomBrandingContext.Consumer>
      {({ primary, secondary, topBarColor, logo }) => {
        const svgStyleResult = svgStyleCompiled({
          primaryColor: primary,
          secondaryColor: secondary,
          topBarColor: topBarColor
        });

        const welcomeResult = welcomeCompiled({
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
            dangerouslySetInnerHTML={{ __html: welcomeResult }}
          />
        );
      }}
    </CustomBrandingContext.Consumer>
  );
}

export default Welcome;
