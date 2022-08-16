import React from "react";
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

class App extends React.Component {

	// Constructor
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
			.then(({data}) => {
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
			<h1> Please wait some time.... </h1> </div> ;

		return (
	// 	<div className = "App">
	// 		<h1 align="left"> Fetch data from an api in react </h1>
	// 			<table border="1">
	// 			<tr>
	// 			<td>Id</td>
	// 			<td>Blog_Id</td>
	// 			<td>Name</td>
	// 			<td>CreatedAt</td>
	// 			<td>UpdatedAt</td>
	// 			</tr>
	// 			{
	// 			items.map((item) => (

	// 			<tr>
	// 			<td>{ item.id }</td>
	// 			<td>{ item.blog_id }</td>
	// 			<td>{  item.name }</td>
	// 			<td>{ item.createdAt}</td>
	// 			<td>{ item.updatedAt}</td>
	// 			</tr>
	// 			))
	// }

	// 			</table>
	// 	</div>
	<>


		  <table  class="table table-striped">
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
	 			<td>{ item.id }</td>
	 			<td>{ item.blog_id }</td>
	 			<td>{  item.name }</td>
	 			<td>{ item.createdAt}</td>
	 			<td>{ item.updatedAt}</td>
				 <td>   <button type="button" class="btn btn-primary">Update<i class="far fa-eye"></i></button>
              <button type="button" class="btn btn-success">Edit<i class="fas fa-edit"></i></button>
            <button type="button" class="btn btn-danger">Delete<i class="far fa-trash-alt"></i></button></td>
	 			</tr>
	 			))
	 }
				</tbody>
			</table>


	  </>
	);
}
}

export default App;
