import React, { useEffect, useState } from "react";
import { Toast } from "react-bootstrap";
import { useParams } from "react-router-dom";
import axios from 'axios';
import Layout from "../components/Layout/Layout";

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
    const fileChangedHandler = (e) => {
        const updatedImages = [...images, e.event.target[0]];
        setImages(updatedImages);
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
                Toast("data saved successfully")

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
            <form>
                <div className="form-group">
                    <label className="form-label">update form</label><br /><br />
                    <label >enter name</label>
                    <input type="text" value={name} name="name" onChange={(e) => handlenamechange(e)} /><br /><br />
                    <label >selected file</label>
                    {
                        images.map((image) =>
                        <img src={`http://${image}`} alt="" />
                        )
                    }
                    {/* <input type="text" value={image} name="image" onChange={(e) => fileChangedHandler(e)} /> */}
                </div>
                <button onClick={(e) => handleclick(e)} type="button" className="btn">update</button>
            </form>
        </Layout>
    </>
}
export default (Edit);