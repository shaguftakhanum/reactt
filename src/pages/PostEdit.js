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
    const [images, setImages] = useState([])
    const [item, setitem] = useState([]);

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
                setImages(files);
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
                setImages(
                    [...images, ...data.paths]

                )
                // console.log('data =>' , data);
            })
            .catch(function (error) {
                // console.log("error=>", error);
            });
    }
    const handleclick = (e) => {
        console.log("e ===> ", e);
        axios({
            method: 'put',
            url: 'http://localhost:8000/api/post/' + params.id,
            data: {
                name: name,
                files: images,
                blogid:blogId
            }
        })
            .then((res) => {
                console.log("res=>", res);


            })
            .catch(function (error) {
                console.log("error=>", error);
            });


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
                            const selected=    items.id==blogId?"selected":null

                                return (
                                    <option  key={items.id} value={items.id}>{items.name}</option>

                                )
                            })

                        }

                    </select>
                    <br /><br />
                    < input className="form-control"  type="file" onChange={(e) => handlefile(e)} >
                    {/* {
                                images.map((image) =>
                                <input  img src={`http://${image}`} alt="not selected yet" value={`http://${image}`} />
                                )
                            } */}
                    </input>
                    <br /><br />
                    <Button onClick={(e) => handleclick(e)} type="button" className="btn">update</Button>
                </form>
            </Layout>
        </>
    )
}

export default PostEdit