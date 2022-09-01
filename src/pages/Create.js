// import React, { useState } from 'react'
// import axios from 'axios'
// const Create = () => {
//     const url = "http://localhost:8000/api/blogs/create";
//     const initialUserState = {
//         name: "",
//         photos:[]
//     }

//     const [data, setdata] = useState(initialUserState)

//     // const [data, setdata] = useState([{
//     //     name: "",
//     //     photos:[]
//     // }])
//     function onsubmit(e) {
//         e.preventDefault();
//         // const target = e.target;
//         // const data = new FormData(target);
//         // console.log(data)
//         axios.post(url, {
//             name: data.name,
//             photos: data.photos


//         }).then(res => {
//             // console.log(res);
//             // console.log(res.data);
//             // console.log('res =>', res)
//             const target = e.target;
//         const data = new FormData(target);
//         console.log(data)



//         }).catch(err => {
//             console.log(err)
//         })
//         // console.log('data =>', data)
//         console.log(JSON.stringify(data))
//         // console.log('data =>', data)

//     }


//     function handle(e) {
//         const newdata = { ...data };
//         newdata[e.target.id] = e.target.value;
//         // newdata[e.target.files]=e.target.value;
//         setdata(newdata);
//         console.log(newdata);
//     }
//     function handleImageUpload(e) {
//         [...e.target.files].forEach(file => {
//             console.log("file >>> ", file)
//             console.log(e.target.files[0], "ssss");

//             setdata({
//                 ...data,
//                 ...{
//                     data: file,
//                     url: URL.createObjectURL(file)
//                 }
//         })

//             console.log("data >> ", data)
//         })



//     }
//     // console.log('data =>', data)
//     return (
//         <div>
//             <form onSubmit={(e) => onsubmit(e)} method="post">
//                 <input onChange={(e) => handle(e)} value={data.name} id="name" type="text" placeholder='name' />
//                 <input type="file" name="photo" id="photo" multiple value={data.photos}
//                     onChange={(e) => handleImageUpload(e)}
//                     accept="image/*" />
//                 <button>submit</button>
//             </form>
//         </div>
//     )
// }

// export default Create;

import React, { Component } from "react";
import axios from 'axios';
import Layout from "../components/Layout/Layout";
class Create extends Component {
    state={
        name:"",
        file:[]
    }
    handlefile(e){
    let file=e.target.files[0];
    this.setState({file:file});
    console.log('file=>',file)
    }
    handleclick(e){
        // console.log(this.state,"bswhb...")
        // console.log("data =>",this.handleclick)
        let file=this.state.file;
        let name=this.state.name;
        let formData=new FormData();
        formData.append('image',file);
        formData.append('name',name)
        console.log('name=>',name)

        axios({
            method: 'post',
            url: 'http://localhost:8000/api/blogs/create',
            data:formData
        })
        .then(function (response) {
            console.log("response=>",response);

        })
        .catch(function (error) {
            console.log("error=>",error);
        });
    }

    render() {
        return (
            <>
            <Layout>
                <div className="Create">
                <h1>Form</h1>
                <div>
                <form>
                <label >Name</label><br/>
                <input type="text" name="name" onChange={(e)=>this.handlefile(e)} />
                <br/>
                <label >select file</label><br/>
                <input type="file" name="file" onChange={(e)=>this.handlefile(e)} />
                <button   onClick={(e)=>this.handleclick(e)}>uploads</button>
               </form>
                </div>



                </div>
                </Layout>

            </>
        );
    }

}
export default Create;