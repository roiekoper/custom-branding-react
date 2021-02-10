import { createContext } from "react";

// defaults
const CustomBrandingContext = createContext({
  primary: "",
  setPrimary: () => {},
  secondary: "",
  setSecondary: () => {},
  topBarColor: "",
  setTopBarColor: () => {},
  logo: "",
  setLogo: () => {}
});

export default CustomBrandingContext;
