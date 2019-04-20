import React from 'react';
import './InputBlock.css'

const InputBlock=({onInput, onSubmit}) =>{

	return(

			<div className='shadow-2 w-70 center new'>
				<p className ='f2 white ma2 pa2'> {'Insert the image url in the box'} </p>
				<div>
					<input className='f4 pa2 w-60 center ma3 bg-lightest-blue' type='tex' onChange={onInput} />
				</div>
				<div>	
					<button className='w-15 grow f4 link ph3 pv2 dib ma2 bg-lightest-blue black ' onClick={onSubmit}> 
						{'Detect'}
					</button>
				</div>
			</div>
		);
}

export default InputBlock;


// /47970b64b8684a4e9e398fbdebb8e472