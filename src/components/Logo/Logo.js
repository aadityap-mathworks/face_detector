import React from 'react'
import Tilt from 'react-tilt'
import './Logo.css'
import face from './face2.png' 
const Logo=() =>{

	return(

			<div className="ma4 ma0" >
				<Tilt className="Tilt br2 shadow-2 center" options={{ max : 49 }} style={{ height: 200, width: 200 }} >
				 	<div className="Tilt-inner pa3"><img style={{paddingTop: '5px', height :'150px'}} src={face} alt="face"/> </div>
				</Tilt>
			</div>
		);
}

export default Logo;