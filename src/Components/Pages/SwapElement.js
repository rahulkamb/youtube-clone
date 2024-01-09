import React, { useState } from 'react'
import '../pagescss/SwapElement.css'
import { FaAngleDoubleRight } from "react-icons/fa";

function SwapElement() {

    const [isButtonClicked , setIsButtonClicked] = useState(false);

    const[sourceValue , setSourceValue] = useState('');
    const[destinationValue , setDestinationValue] = useState('');
    const[newDestinationValue , setNewDestinationValue] = useState('');


    const handleSourceValue = (event)=>{
        setSourceValue(event.target.value);
    }

    const handleDestinationValue =() =>{
        if(sourceValue){
            setDestinationValue(sourceValue);
            setDestinationValue(sourceValue);
        }else{
            alert('Source Input is already Empty ...! ');
        }
        
        setNewDestinationValue(sourceValue);
        setSourceValue('');
    }

    const handleNewSourceValue =() =>{
        if(destinationValue){
            setSourceValue(destinationValue);
        }else{
            alert('Source is already Empty ...! ');
        }
        // setSourceValue(newDestinationValue);
        setDestinationValue('');
    }

    const generateBlock=()=>{
        setIsButtonClicked(true);
    }

    const deleteElement = () =>{
        setSourceValue('');
        setDestinationValue('');
        setNewDestinationValue('');
        setIsButtonClicked(false);
    }

    return (
        <div className='swapElement_content'>
            <div className='swap_content'>
                <h1>Swap Elements</h1>
            </div>
            <div className='swapBox'>
                <div className='box1'>
                    {isButtonClicked && <input className='squareBox' type='text' 
                        value={sourceValue} onChange={handleSourceValue}
                    />}
                </div>
                <div className='box2'>
                    <button className='button1' onClick={handleDestinationValue}><FaAngleDoubleRight className='right_Arrow' /></button>
                    <button className='button2' onClick={handleNewSourceValue}><FaAngleDoubleRight className='left_Arrow' /></button>
                </div>
                <div className='box3'>
                    {isButtonClicked && <div className='squareBox'>{destinationValue}</div>}
                </div>
            </div>
            <div className='counterButtons'>
                <button className='counterButton' style={{ backgroundColor: 'green' }} onClick={generateBlock}  >Add</button>
                <button className='counterButton' style={{ backgroundColor: 'red' }} onClick={deleteElement} >Delete</button>
            </div>
        </div>
    )
}

export default SwapElement
