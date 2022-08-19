import React from "react";
import Header from "./component/Header"
import {Outlet} from "react-router-dom"
const Blog=()=>{
    return(
    <>
    <Header/>
    <h1>this is my first page</h1>
    <Outlet/>


    </>);
}
export default Blog;