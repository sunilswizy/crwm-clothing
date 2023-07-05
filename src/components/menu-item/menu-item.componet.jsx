import React from 'react';
import './menu-item.component.styles.scss';
import { withRouter } from 'react-router';

const MenuItem=({title,imageUrl,size,history,linkUrl,match})=>{
    return (
     <div className={`${size} menu-item`} onClick={()=>history.push(`${match.url}${linkUrl}`)}>
         <div style={{backgroundImage:`url(${imageUrl})`}} className="background-image"/>
        <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>   
    </div>
</div>
 )
}

export default withRouter(MenuItem);  //make menu component as Higher order functiton