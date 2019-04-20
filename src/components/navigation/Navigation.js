import React from 'react'

const Navigation=({onPageChange,route}) =>{

	if(route==='signin')
	{
		return null;
	}
	else if(route==='signup')
	{
		return(

			<div style={{display: 'flex', justifyContent: 'flex-end'}}>
				<p onClick={ () => onPageChange('signin')} className="f3 link dim black underline pa3 pointer"> Already a member? </p>
			</div>
		);		
	}
	else{
		return(

			<div style={{display: 'flex', justifyContent: 'flex-end'}}>
				<p onClick={ () => onPageChange('signin')} className="f3 link dim black underline pa3 pointer"> Sign Out </p>
			</div>
		);
	}
	
}

export default Navigation;