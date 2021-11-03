import React from "react";
import { SpinnerOverlay } from "./with-spinner.styles";
import { SpinnerContainer } from "./with-spinner.styles";


const withSpinner = WrappedComponent => {
    const spinner = ({isLoading, ...otherProps}) => {
       return isLoading ?
       ( <SpinnerOverlay>
            <SpinnerContainer/>
        </SpinnerOverlay>)
        :
        (
            <WrappedComponent {...otherProps}/>
        )
    }
    return spinner
}


export default withSpinner;