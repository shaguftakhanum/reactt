import React from "react";
import {useEffect,useState} from "react";
import axios from "axios";
import Layout from "../components/Layout/Layout";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
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
		const deleteBlog = (id) => 	axios.delete(`http://localhost:8000/api/post/${id}`)

		.then((res) => {
			const posts = res.data;
			console.log("blogs=>",posts)
			// setitem({ blogs });

			// alert("are u sure you want to delete data")

			axios.get(`http://localhost:8000/api/post/getall`)
		.then(res => {
			// console.log('res =>',res);
			// console.log('data =>',res.data.data)
			setitem(res.data.data);

		}).catch(err => {
			console.log(err)
		})
		})

		const handledelete = (id) => {
			console.log("id=>",id)
			confirmAlert({
				title: 'Confirm to delete',
				message: 'Are you sure to do this.',
				buttons: [
				  {
					label: 'Yes',
					onClick: () => deleteBlog(id)
				  },
				  {
					label: 'No',
					//onClick: () => alert('Click No')
				  }
				]
			  });
			}


    return(
        <>
    <Layout>
		<br/>
		<div>
	<Link to="/post/create" element="<PostCreate/>" >
					<Button className="float-right" variant="success">Add </Button>
				</Link>
				</div>
				<br/><br/><br/>
					 <table className="table table-striped">
						<thead>
							<tr>
								<th>Id</th>
								<th>Blog_id</th>
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
										<td>{item.blog_id}</td>

										<td>{item.name}</td>

										<td>{item.createdAt}</td>
										<td>{item.updatedAt}</td>
										<td>

											{/* <button type="button" className="btn btn-success">Edit<i className="fas fa-edit"></i></button> */}
											<Link  to={"/posts/" + item.id}><Button type="button" className="btn btn-success">Edit<i className="fas fa-edit"></i></Button></Link>
											{/* <button type="button" className="btn btn-danger">Delete<i className="far fa-trash-alt"></i></button></td> */}
											<Button type="button" onClick={() => handledelete(item.id)} variant="danger">Delete</Button>
											</td>
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