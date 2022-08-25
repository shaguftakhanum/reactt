import React from "react";
import {useEffect,useState} from "react";
import axios from "axios";
import Layout from "../components/Layout/Layout";
const Blog=()=>{
    let[items,setitem]=useState([])
    useEffect(() => {
        axios.get('http://localhost:8000/api/blogs/getall')
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


					 <table class="table table-striped">
						<thead>
							<tr>
								<th>Id</th>
								<th>Name</th>
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
										<td>{item.createdAt}</td>
										<td>{item.updatedAt}</td>
										<td>

											<button type="button" class="btn btn-success">Edit<i class="fas fa-edit"></i></button>
											<button type="button" class="btn btn-danger">Delete<i class="far fa-trash-alt"></i></button></td>
									</tr>
								))
							}
						</tbody>
					</table>

    </Layout>
    </>
    );

}
export default Blog;