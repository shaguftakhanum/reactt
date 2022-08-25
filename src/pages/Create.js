// import React from 'react'
// import axios from 'axios'

// const Create = () => {
//     const btnclick=axios.post('http://localhost:8000/api/post/create', {
//         name:"anjyna",
//         images:[
//             "uploads-1660200728981--d.png",
//             "uploads-1660200729012--download1.png"
//         ]
//       })
//       .then(function (response) {
//         console.log(response);
//       })
//       .catch(function (error) {
//         console.log(error);
//       })


//   return (
//     <>
//         </>


//   )
// }

// export default Create
import React, { useState } from 'react'
import axios from 'axios'


const Create = () => {
    const url="http://localhost:8000/api/post/create";
    const[data,setdata]=useState({
        name:"",
        images:[
            ""

        ]

    })
    function onsubmit(e){
        e.preventDefault();
        axios.post(url,{
            name:data.name,
            images:data.images

        }).then(res=>{
            console.log(res.data.data)
        })

    }


    function handle(e){
        const newdata={...data};
        newdata[e.target.id]=e.target.value;
        setdata(newdata);
        console.log(newdata);


    }
  return (
    <div>
     <form onSubmit={(e)=>onsubmit(e)}>
    <input onChange={(e)=>handle(e)} value={data.name} id="name" type="text" placeholder='name'/>
    <input onChange={(e)=>handle(e)} value={data.images} id="images" type="text" placeholder='images'/>
    <button>Submit</button>


    </form>
    </div>
  )
}

export default Create