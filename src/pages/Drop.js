// import React from 'react'
// import Layout from "../components/Layout/Layout";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import Dropdown from 'react-bootstrap/Dropdown';
// const Drop = () => {
//   let[item,setItems]=useState([]);
//   useEffect(() => {
// 	axios.get(`http://localhost:8000/api/blogs/getall`)
// 			.then(res => {
// 				console.log('res =>',res);
// 				console.log('data =>',res.data.data)
// 				setItems(res.data.data);
// 			}).catch(err => {
// 				console.log(err)
// 			})

// 	}, []);

//   return (
//    <>
//    <Layout>
//     <br></br>
//    <Dropdown>
//       <Dropdown.Toggle variant="success" id="dropdown-basic">
//         Dropdown Button
//       </Dropdown.Toggle>
//       <Dropdown.Menu>
//       <Dropdown.Item class="dropdown-item" href="#" >
//       {
//                      item.map( (items)=>(
//                    <option  key={items.id} value={items.id }> { items.name}</option>
//                      ))
//                 }
//       </Dropdown.Item>
//       <a class="dropdown-item" href="#">Another action</a>
//       </Dropdown.Menu>
//     </Dropdown>
//    </Layout>
//   </>
//   )
// }

// export default (Drop)