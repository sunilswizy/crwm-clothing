import React from 'react'
import './directory.components.styles.scss'
import MenuItem from '../menu-item/menu-item.componet';
import selectSection from '../../redux/Directory/directory.selector';

import { useSelector } from 'react-redux';

const Directory = ()=> {

    const sections = useSelector(selectSection)

        return(
            <div className="directory-menu">
                {
                sections.map(({id, ...Othersections})=>(
                    <MenuItem key={id} {...Othersections}/>
                ))
                }
            </div>
        )
    }

export default Directory