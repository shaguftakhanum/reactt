import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Blog from "../pages/Blog";
import Post from "../pages/Post";
import Tag from "../pages/Tag";
import Page from '../pages/Page';
import Create from '../pages/Create';
import Edit from '../pages/Edit';
// import Drop from '../pages/Drop';s
// import More from '../pages/More';
import PostCreate from '../pages/PostCreate';
import PostEdit from '../pages/PostEdit';
const AllRoutes = () => {
  return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Blog />}/>
				<Route path="/blog/create" element={<Create/>}/>
				<Route path="/blogs/:id" element={<Edit/>} />
				<Route path="/post" element={<Post />} />
				<Route path="/post/create" element={<PostCreate/>}/>
				<Route path="/tag" element={<Tag />}/>
				<Route path="/tag/page1" element={<Page />} />
				<Route path="/posts/:id" element={<PostEdit/>} />
			</Routes>
		</BrowserRouter>

  )
}

export default AllRoutes

//