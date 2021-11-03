import React from 'react';
import './menu-item.component.styles.scss';
import { useHistory} from 'react-router';

const MenuItem=({title,imageUrl,size,linkUrl})=>{

    const history = useHistory()

    return (
     <div className={`${size} menu-item`} onClick={()=>history.push(`${linkUrl}`)}>
         <div style={{backgroundImage:`url(${imageUrl})`}} className="background-image"/>
        <div className="content">
          <h1 className="title">{title.toUpperCase()}</h1>
          <span className="subtitle">SHOP NOW</span>   
    </div>
</div>
 )
}

export default MenuItem;  
//withRouter-make menu component as Higher order functiton and get acces to history props