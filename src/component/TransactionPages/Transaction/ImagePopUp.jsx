import React, {useState} from 'react'
import cushion1 from '../../images/cushion1.svg'
import cushion2 from '../../images/cushion2.svg'
import cushion3 from '../../images/cushion3.svg'
import cushion4 from '../../images/cushion4.svg'
import './imagePopUp.css'
const ImagePopUp = ({setShowImage}) => {
    const images =[
        cushion1, cushion2, cushion3, cushion4
    ];
    const [x, setX]= useState(0);
    const [y, setY]= useState(1);
    const [z, setZ]= useState(2);
    const [m, setM]= useState(x);
    const goToNext =()=>{
        const xLast= (x)=== images.length-1;
        const yLast= (y)=== images.length-1;
        const zLast= (z)=== images.length-1;
        const newX= xLast? 0:x+1;
        const newY= yLast? 0:y+1;
        const newZ= zLast? 0:z+1;
        setX(newX);
        setY(newY);
        setZ(newZ);

    }
    const goToPrevious =()=>{
        const xFirst= (x)=== 0;
        const yFirst= (y)=== 0;
        const zFirst= (z)=== 0;
        const newX= xFirst? images.length-1:x-1;
        const newY= yFirst? images.length-1:y-1;
        const newZ= zFirst? images.length-1:z-1;
        setX(newX);
        setY(newY);
        setZ(newZ);

    }
  return (
    <div className='mainImgDiv'>
        <button onClick={()=>setShowImage(false)} className='cancelBtn'>x</button>
        <div className= 'imagePopUpDiv'>

            <img className='mainImg' src={images[m]}/>
            <div className='imagesDiv'>
                <button onClick={goToPrevious} className='backBtn'>{'<'}</button>
                <div className='images'>
                    <img style={{cursor:'pointer'}} onClick={()=>setM(x)} src={images[x]} alt=''/>   
                    <img style={{cursor:'pointer'}} onClick={()=>setM(y)} src ={images[y]} alt=''/>    
                    <img style={{cursor:'pointer'}} onClick={()=>setM(z)} src ={images[z]} alt=''/>    
                </div>       
                <button onClick= {goToNext} className='nextBtn'>{'>'}</button>       
            </div>
        </div>
            
    </div>
  )
}

export default ImagePopUp