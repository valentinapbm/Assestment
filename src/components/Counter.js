import React, { useState, useEffect, useRef } from 'react'


const Counter = () => {
    const [minutes, setMinutes]=useState(Math.floor(Math.random() * 3) + 1);
    const [seconds, setSeconds]=useState(0);
    

    useEffect(()=>{
        let myInterval = setInterval(() => {
                if (seconds > 0) {
                    setSeconds(seconds - 1);
                }
                if (seconds === 0) {
                    if (minutes === 0) {
                        clearInterval(myInterval)
                    } else {
                        setMinutes(minutes - 1);
                        setSeconds(59);
                    }
                } 
            }, 1000)
            return ()=> {
                clearInterval(myInterval);
            };
        });



    

    return (
        <div className={minutes === 0 && seconds === 0 ? "disabled boxfooter2":"boxfooter2"}>
        <div className='counter'>
            
        { minutes === 0 && seconds === 0
            ? <h2>0{minutes}:0{seconds} </h2>
            : <h2> 0{minutes}:{seconds < 10 ?  `0${seconds}` : seconds}</h2> 
        }
        </div>
        <div>
        <button disabled={minutes === 0 && seconds === 0 ? true:""}>Ver detalles</button>
        </div>
        </div>
    )
}

export default Counter;