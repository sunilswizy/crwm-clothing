import React from "react";
import { SpinnerOverlay } from "./spinner.styles";
import { SpinnerContainer } from "../with-spinner/with-spinner.styles";


const Spinner = () => {
  return  <SpinnerOverlay>
            <SpinnerContainer/>
        </SpinnerOverlay>
}

export default Spinner;