import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const Fetchdata = () => {
let [data,setData]=useState([])
let[search,setSearch]=useState("")

let handleChange=(e)=>{
     setSearch(e.target.value)
}
let myFun=()=>{
   
  axios.get("https://jsonplaceholder.typicode.com/posts")
  .then((res)=>{
    console.log(res.data)
    setData(res.data)
  })
.catch((err)=>{
    console.log(err)
})


}

useEffect(()=>{
    myFun()
},[])


let myFuns=()=>{
 axios.get(`https://jsonplaceholder.typicode.com/posts?title_like=${search}`)
 .then((res)=>{
    console.log(res.data)
    setData(res.data)
 })
 .catch((err)=>{
    console.log(err)
 })
}
  return (
    <div>
        <input type="text" placeholder='Search Here' onChange={handleChange}/>
        <button onClick={myFuns} >Search</button>
            {data.map((elem)=>(
                <div key={elem.id} style={{border:"3px solid black",marginBottom:"15px"}}>
                    <h1>Title:{elem.title}</h1>
                    <h1>Body:{elem.body}</h1>
                </div>
            ))}


    </div>
  )
}

export default Fetchdata