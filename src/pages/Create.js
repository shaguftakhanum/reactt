import React, { Component } from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "../components/Layout/Layout";
class Create extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [],
            name: "",
            count: [1]

        }
    }


    addMore = (e) => {
        e.preventDefault();
        this.setState({
            count: [...this.state.count, '1']
        })

    }
    handlechange = (e) => {
        let name = e.target.value;
        this.setState({
            ...this.state,
            name: name
        });
    }
    handlefile(e) {
        let file = e.target.files[0];

        let formData = new FormData();

        formData.append('uploads', file);
        axios({
            method: 'post',
            url: 'http://localhost:8000/uploads',
            data: formData,

        })
            .then(({ data }) => {
                console.log('data =>', data);
                this.setState({
                    ...this.state,
                    images: [...this.state.images, ...data.paths],


                })
                // console.log('data =>' , data);
            })
            .catch(function (error) {
                console.log("error=>", error);
            });
    }
    handleclick(e) {
        axios({
            method: 'post',
            url: 'http://localhost:8000/api/blogs/create',
            data: this.state
        })
            .then(({ data }) => {
                console.log('data =>', data);
                // toast("data savved successfully")
            })
            .catch(function (error) {
                console.log("error=>", error);
            });
    }

    render() {
        return (
            <>
                <Layout>


                        <h1>Form</h1>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Name</Form.Label>
                                <Form.Control onChange={(e) => this.handlechange(e)} id="name" name="name" type="text" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>select file</Form.Label>
                                {
                                    this.state.count.map((item, index) => {
                                        return (

                                            <div key={index}>
                                                <Form.Control type="file" multiple name="file[]" onChange={(e) => this.handlefile(e)} className="from-control" />

                                            </div>
                                        )
                                    })
                                    // <input type="file" multiple name="file[]" onChange={(e) => this.handlefile(e)} className="from-control" />

                                }
                            </Form.Group>

                            <div className="d-grid gap-2">
                                <Button variant="primary" size="lg" onClick={(e) => this.addMore(e)} type="submit" >+</Button>

                                <Button variant="primary" size="lg" onClick={(e) => this.handleclick(e)} type="submit">uploads</Button>
                            </div>
 </Form>
                </Layout>

            </>
        );
    }

}
export default Create;