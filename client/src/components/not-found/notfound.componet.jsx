import React from "react";

import { ErrorImageContainer, ErrorImageOverlay, ErrorImageText } from "./notfound.styles";

const NotFound = ()=>(
    <ErrorImageOverlay>
        <ErrorImageContainer imageUrl={"https://i.imgur.com/QIxIKBH.png"}/>
        <ErrorImageText>This page is a Ghost!</ErrorImageText>
    </ErrorImageOverlay>
)

export default NotFound