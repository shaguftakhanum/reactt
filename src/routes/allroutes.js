import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Blog from "../pages/Blog";
import Post from "../pages/Post";
import Tag from "../pages/Tag";
import Page from '../pages/Page';
const AllRoutes = () => {
  return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Blog />}/>
				<Route path="/post" element={<Post />} />
				<Route path="/tag" element={<Tag />}/>

					<Route path="/tag/page1" element={<Page />} />



			</Routes>
		</BrowserRouter>

  )
}

export default AllRoutes

