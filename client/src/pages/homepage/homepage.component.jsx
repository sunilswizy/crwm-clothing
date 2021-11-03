import React, {Profiler} from 'react';
import { HomePageContainer } from './homepage.styles';

import Directory from '../../components/directory/directory.component';


const Homepage=()=>( 
        <Profiler id="Homepage" onRender={(id, phase, dur) => {
                console.log({
                        id,
                        phase,
                        dur
                })
        }}>
        <HomePageContainer>
               <Directory/>
          </HomePageContainer>
        </Profiler>
        )
    

export default Homepage;
