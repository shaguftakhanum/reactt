import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import Layout from "../components/Layout/Layout";
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
const PostEdit = () => {
    const params = useParams();
    console.log('params =>', params);
    const [name, setName] = useState('')
    const [blogId, setBlogId] = useState();
    const [oldImages, setOldImages] = useState([])
    const [newImages, setNewImages] = useState([])
    const [item, setitem] = useState([]);
    const [count, setCount] = useState([1])
    useEffect(() => {
        axios({
            method: 'get',
            url: 'http://localhost:8000/api/post/' + params.id,
        })
            .then(({ data }) => {
                const files = data.data.files.map((file) => file.name);
                console.log('post data =>', data.data.posts.blog_id);
                setName(data.data.posts.name);
                // setBlogId(data.data.posts.blog_id);
                // blog_id = data.data.posts.blog_id;
                setBlogId(data.data.posts.blog_id)
                // console.log("blog Id ===> ", blog_id);
                setOldImages(files);
            }).then(res => {
                axios.get(`http://localhost:8000/api/blogs/getall`)
                    .then(res => {
                        // console.log('res =>',res);
                        console.log('data =>', res.data.data)
                        setitem(res.data.data);
                    })
            })
            .catch(function (error) {
                console.log("error=>", error);
            });

    },
        []);
    const handlenamechange = (e) => {
        // console.log(e.target.value)
        setName(e.target.value);
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
                setNewImages(
                    [...newImages, ...data.paths]

                )
                // console.log('data =>' , data);
            })
            .catch(function (error) {
                // console.log("error=>", error);
            });
    }
    const handleclick = (e) => {
        axios({
            method: 'put',
            url: 'http://localhost:8000/api/post/' + params.id,
            data: {
                name: name,
                newFiles: newImages,
                blogid: blogId
            }
        })
            .then((res) => {
                console.log("res=>", res);


            })
            .catch(function (error) {
                console.log("error=>", error);
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
                <br />
                <form >
                    <label>Name</label>
                    <input className="form-control" type="text" value={name} name="name" onChange={(e) => handlenamechange(e)} /><br />
                    <label>selected Blog</label><br />
                    <select value={blogId} className="form-control"  ><br /><br />
                        {
                            item.map((items) => {
                                const selected = items.id == blogId ? "selected" : null

                                return (
                                    <option key={items.id} value={items.id}>{items.name}</option>

                                )
                            })

                        }

                    </select>
                    <br /><br />

                    {
                        count.map((item, index) => {
                            return (
                                <div key={index}>
                                    <input className="form-control" type="file" multiple name="file[]" onChange={(e) => handlefile(e)} />

                                </div>
                            )
                        })

                    }
                    <br />
                    {
                        oldImages.map((image) =>
                            <input className="form-control" img src={`${image}`} alt="not selected yet" value={`${image}`} />
                        )
                    }
                    <br /><br />



                    <div class="bd-exemple">
                        <Button style={{
                            width: "100px",
                            // marginLeft: "40px",
                            float: "inherit",
                            whitespace: "nowrap",
                            height: "40px",
                            cursor: "pointer",
                            margin: "2px",
                            marginbottom: "5px"
                        }} variant="primary" size="lg" onClick={(e) => addMore(e)} type="button" >+</Button>
                        <Button style={{
                            width: "100px",
                            // marginleft: "40px",
                            float: "inherit",
                            whitespace: "nowrap",
                            height: "40px",
                            cursor: "pointer",
                            margin: "2px",
                            marginbottom: "5px"
                        }} variant="primary" size="lg" onClick={(e) => handleclick(e)} type="button">update</Button>
                    </div>

                </form>
                <br /><br />
            </Layout>
        </>
    )
}

export default PostEdit