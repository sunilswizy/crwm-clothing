import React from "react";
import {ErrorImageOverlay, ErrorImageContainer, ErrorImageText} from './error-boundary.styles'

class ErrorBoundary extends React.Component{
    constructor(){
        super()
        this.state = {
            hasError : false
        }
    }

    static getDerivedStateFromError(error) {

        return {hasError: true}
    }

    componentDidCatch(err, info) {
        console.log(err)
    }

    render(){
             const { hasError } = this.state
             const { children } = this.props 

             if(hasError){
               return (
                    <ErrorImageOverlay>
                         <ErrorImageContainer imageUrl={"https://i.imgur.com/QIxIKBH.png"}/>
                         <ErrorImageText>This page is a Ghost!</ErrorImageText>
                    </ErrorImageOverlay>
                )
             }
             else {
                 return children
             }
          }
}

export default ErrorBoundary