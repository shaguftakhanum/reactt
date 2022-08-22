import React from 'react'
import {Link} from "react-router-dom";

import Header from "../component/Header"
const Tag = () => {
  return (
    <>
    <Header/>
<ol>
  <li>
<Link to="page1">Page1</Link>
</li>
</ol>



    </>
  )
}

export default Tag