import React from "react";
import {useEffect,useState} from "react";
import axios from "axios";
import Layout from "../components/Layout/Layout";
const Post=()=>{
    let[items,setitem]=useState([])
    useEffect(() => {
        axios.get('http://localhost:8000/api/post/getall')
        .then(res=>{
			// console.log('res =>',res);
			// console.log('data =>',res.data.data)
			setitem(res.data.data);
		}).catch(err=>{
			console.log(err)
		})

        }, []);


    return(
        <>
    <Layout>


					 <table className="table table-striped">
						<thead>
							<tr>
								<th>Id</th>
								<th>Name</th>
								<th>Type</th>
								<th>Type_id</th>
								<th>CreatedAt</th>
								<th>UpdatedAt</th>
								<th>Actions</th>



							</tr>
						</thead>
						<tbody>
							{
								items.map((item) => (

									<tr>
										<td>{item.id}</td>
										<td>{item.name}</td>
										<td>{item.type}</td>
										<td>{item.type_id}</td>
										<td>{item.createdAt}</td>
										<td>{item.updatedAt}</td>
										<td>

											<button type="button" className="btn btn-success">Edit<i className="fas fa-edit"></i></button>
											<button type="button" className="btn btn-danger">Delete<i className="far fa-trash-alt"></i></button></td>
									</tr>
								))
							}
						</tbody>
					</table>

    </Layout>
    </>
    );

}
export default Post;