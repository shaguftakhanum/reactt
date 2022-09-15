import React from "react";
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";
import Layout from "../components/Layout/Layout";
import { Link } from "react-router-dom";
// import { withRouter } from "react-router";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

const Blog = () => {

	let [items, setitem] = useState([]);
	useEffect(() => {
		axios.get(`http://localhost:8000/api/blogs/getall`)
			.then(res => {
				// console.log('res =>',res);
				// console.log('data =>',res.data.data)
				setitem(res.data.data);
				toast("data savved successfully")



			}).catch(err => {
				console.log(err)
			})

	}, []);
	const deleteBlog = (id) => 	axios.delete(`http://localhost:8000/api/blogs/${id}`)

	.then((res) => {
		const blogs = res.data;
		console.log("blogs=>",blogs)
		// setitem({ blogs });


		// alert("are u sure you want to delete data")

		axios.get(`http://localhost:8000/api/blogs/getall`)
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


	return (
		<>
			<Layout>
				<Link to="/blog/create" element="<Create/>" >
					<h1>post request</h1>
					<ToastContainer />
				</Link>
				<Link to="/blog/edit" element="<Create/>" >
					<h1>edit request</h1>
				</Link>

				<table className="table table-striped">
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
										<Link  to={"/blogs/" + item.id}>Edit</Link>

										{/* <a href={"/blogs/"+item.id}><button type="button"  className="btn btn-success">Edit<i className="fas fa-edit"></i></button></a> */}
										<button type="button" onClick={() => handledelete(item.id)} className="btn btn-danger">Delete<i className="far fa-trash-alt"></i>
										</button>
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
export default (Blog);