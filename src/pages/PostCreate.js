import React from 'react'
import Layout from "../components/Layout/Layout";
import { useEffect, useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
const PostCreate = () => {
    let [item, setItems] = useState([]);
    let [uploads, setUploads] = useState([]);
    // let[posts,setPost]=useState([]);
    const [name1, setName] = useState('')
    // const [images, setImages] = useState([])
    const [blog, setBlog] = useState()
    const[count,setCount]=useState([1])
    useEffect(() => {
        axios.get(`http://localhost:8000/api/blogs/getall`)
            .then(res => {
                console.log('res =>', res);
                console.log('data =>', res.data.data)
                setItems(res.data.data);
            }).catch(err => {
                console.log(err)
            })

    }, []);
    const handlenamechange = (e) => {

       // console.log(e.target.value);
       setName(e.target.value);
    //    console.log(name);
    }
    const handlefile = (e) => {
        // let file = e.target.value[0];
        let file = e.target.files[0];
        // console.log(e.target.files[0]);
        // setImages(file);
        let formData = new FormData();
        formData.append('uploads', file);

        // console.log('form data ===> ', formData, e);
        axios({
            method: 'post',
            url: 'http://localhost:8000/uploads',
            data: formData,

        })
            .then(({ data }) => {
                // console.log('data =>', data);
                setUploads(
                    [...uploads, ...data.paths]

                )
                // console.log('data =>' , data);
            })
            .catch(function (error) {
                // console.log("error=>", error);
            });
    }
    const handleclick = (e) => {
        // console.log("blog ===> ", blog);
        // alert(blog.blog_id)
        axios({
            method: 'post',
            url: 'http://localhost:8000/api/post/create',
            data: {
                name: name1,
                blog_id: blog.blog_id,
                files:uploads
            }
        })
            .then(( data ) => {
                console.log('data11111 =>', data);
                // toast("data savved successfully")
                // setPost({
                //     posts: data
                // })
            })
            .catch(function (error) {
                console.log("error=>", error);
            });
        }

        const handlechangeselect=(e)=>{

                const blog = e.target.value;
                console.log("blog Id ===> ", blog);
                // setBlog(
                //     ...blog
                // );
                setBlog({
                    ...blog,
                    blog_id: blog
                });
            }


       const addMore = (e) => {
                e.preventDefault();
                setCount(
                 [...count, '1']
                )

            }



    return (
        <>
            <Layout>
                <br></br>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control onChange={(e) => handlenamechange(e)} value={name1} id="name" name="name1" type="text" />
                    </Form.Group>
                    <div class="form-group">
                        <label for="exampleFormControlSelect1">select</label>
                        <select class="form-control" id="name" name="blog"  onChange={(e) => handlechangeselect(e)}>
                            {
                                item.map((items) => (
                                    <option key={items.id} value={items.id}>{items.name}</option>
                                ))}
                        </select>
                    </div>
                    <Form.Group className="mb-3">
                        <Form.Label>File</Form.Label>
                        {/* {
                            count.map((index)=>{
                                <div key={index}> */}
                        <Form.Control onChange={(e) => handlefile(e)} id="file" multiple name="file[]" type="file" />
                        {/* </div>
                            }) */}
{/* } */}
                    </Form.Group>
                    <div className="d-grid gap-2">
                    <Button variant="primary" size="lg" onClick={(e) =>addMore(e)} type="button" >+</Button>
                        <Button variant="primary" size="lg" onClick={(e) => handleclick(e)} type="button">Post</Button>
                    </div>
                </Form>
            </Layout>
        </>
    )

}
export default PostCreate;


