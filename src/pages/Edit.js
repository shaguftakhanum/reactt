import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import Layout from "../components/Layout/Layout";
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

// import {withRouter} from 'react-router'
const Edit = () => {
    const params = useParams();
    console.log('params =>', params);
    const [name, setName] = useState('')
    const [images, setImages] = useState([])
    const handlenamechange = (e) => {
        // console.log(e.target.value)
        setName(e.target.value);
        // let name = e.target.value;
        // setName({
        //         name,
        //         name: name
        //     });

    }
    // const fileChangedHandler = (e) => {
    //     const updatedImages = [...images, e.target.files[0]];
    //     setImages(updatedImages);
    // }
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
            url: 'http://localhost:8000/api/blogs/' + params.id,
            data: {
                name: name,
                files: images
            }
        })
            .then((res) => {
                console.log("res=>", res);


            })
            .catch(function (error) {
                console.log("error=>", error);
            });
    }

    //component did mount
    useEffect(() => {
        // console.log(image);
        axios({
            method: 'get',
            url: 'http://localhost:8000/api/blogs/' + params.id,
        })
            .then(({ data }) => {
                const files = data.data.files.map((file) => file.name);
                // console.log('data =>', data);
                setName(data.data.blog.name);
                setImages(files);
            })
            .catch(function (error) {
                console.log("error=>", error);
            });
    }, []);

    return <>
        <Layout>
        <h4>Form</h4>
        <br />
                <form >
                    <label>Name</label>
                    <input className="form-control" type="text" value={name} name="name" onChange={(e) => handlenamechange(e)} /><br />

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
}
export default (Edit);