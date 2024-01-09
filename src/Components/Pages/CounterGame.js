import React , {useState} from 'react'
import '../pagescss/CounterGame.css'

function CounterGame() {

    const [counter , setCounter] = useState(0);

    function increaseCounter(){
        setCounter(counter+1);
    }

    function decreaseCounter(){
        if(counter>0){
            setCounter(counter-1);
        }else{
            alert('Counter already Zero(0)');
        }
    }

  return (
    <div className='counterGame_content'>
      <div className='counterGame'>
        <h1 className='counter_name'>Counter Game</h1>
        <div className='show'>
            <div>
                <h1 className='counter'>{counter}</h1>
            </div>  
            <div className='counterButtons'>
                <button className='counterButton' style={{backgroundColor:'green'}} onClick={increaseCounter}>+</button>
                <button className='counterButton' style={{backgroundColor:'red'}} onClick={decreaseCounter}>-</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default CounterGame
