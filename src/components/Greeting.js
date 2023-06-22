import React,{useState} from 'react'

function Greeting() {
    let defaultname ='Hello!'
    let [name,setName]= useState('');
    function handleChange(text){
        setName('Hello'+text.target.value+'!');
    }
    
  return (
    <div>
        <p>Enter Your Name:</p>
        <input type='text' />
        <p>{handleChange}</p>
      
    </div>
  )
}

export default Greeting
