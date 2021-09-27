import React from 'react';
import './custom-btn.styles.scss'

const Custombtn=({children, googlesign, smallbtn, cart, ...otherprops}) => (
    <button className={  
        //if googlesign passed as props it will true otherwise false
        ` custom-button  
        ${googlesign ? 'googlesign' : ''} 
        ${smallbtn ? 'small-font' : ''} 
        ${cart ? 'cart-btn' : null}`} 
        {...otherprops}>{children.toUpperCase()}</button>
)

export default Custombtn;