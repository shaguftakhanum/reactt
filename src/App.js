import React from "react";
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Blog from "./Blog";
import Post from "./Post";
import Tag from "./Tag";
import Page1 from "./Page1";

//switch in react-router-dom is replaced with Routes
// import {Route,Routes} from "react-router-dom";

// import Contact from "./Contact";
class App extends React.Component {

	Constructor
	constructor(props) {
		super(props);

		this.state = {
			items: [],
			isItemsLoading: false
		};
	}

	// ComponentDidMount is used to
	// execute the code
	componentDidMount() {
		fetch(
			"http://localhost:8000/api/post/getall")
			.then((res) => res.json())
			.then(({ data }) => {
				// console.log(json);
				this.setState({
					items: data,
					isItemsLoading: true
				});
			})
	}
	render() {
		const { isItemsLoading, items } = this.state;
		if (!isItemsLoading) return <div>
			<h1> Please wait some time.... </h1> </div>;

		return (

			<>

				<div className="container pt-2">
					<div>
						<BrowserRouter>
							<Routes>
								<Route index element={<Blog />} />
								<Route path="/" element={<Blog />}>
									<Route path="/post" element={<Post />} />
									<Route index element={<Tag />} />
									<Route path="/tag" element={<Tag />} />
									<Route path="/page1" element={<Page1 />}/ >
										</Route>



							</Routes>
						</BrowserRouter>



					</div>

					<table class="table table-striped">
						<thead>
							<tr>
								<th>Id</th>
								<th>Blog_Id</th>
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

											<button type="button" class="btn btn-success">Edit<i class="fas fa-edit"></i></button>
											<button type="button" class="btn btn-danger">Delete<i class="far fa-trash-alt"></i></button></td>
									</tr>
								))
							}
						</tbody>
					</table>
				</div>
			</>

		);
	}
}

export default App;
