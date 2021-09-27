import React from 'react'
import './directory.components.styles.scss'
import MenuItem from '../menu-item/menu-item.componet';
import selectSection from '../../redux/Directory/directory.selector';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

const Directory = ({sections})=> {
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

const mapStateToProps = createStructuredSelector({
    sections : selectSection
})

export default connect(mapStateToProps)(Directory);