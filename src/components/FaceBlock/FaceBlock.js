import React from 'react'
import './FaceBlock.css'

const FaceBlock = ({url,box}) =>
{
	console.log(box);
	return(
			<div className ='ma imgCenter'>
				<div className='absolute mt2'>
					<img id ='inputimage' src={url} alt='' width='500px' height= 'auto'/>
					<div className='bounding-box' style ={{top:box.top , right: box.right, left :box.left, bottom:box.bottom}}> </div>
				</div>
			</div>


		);
}

export default FaceBlock;