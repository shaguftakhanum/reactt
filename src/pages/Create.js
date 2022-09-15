import React, { Component } from "react";
import axios from 'axios';
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

                            <form>

                                    <div className="form-group">
                                    <label for="name">Name</label>
                                        <input onChange={(e) => this.handlechange(e)} id="name" name="name" type="text" />
                                        </div>
                                        <div className="form-group">
                                        <label className="form-label">select file</label>
                                        {
                                            this.state.count.map((item, index) => {
                                                return (

                                                    <div key={index}>
                                                        <input type="file" multiple name="file[]" onChange={(e) => this.handlefile(e)} className="from-control" />

                                                    </div>
                                                )


                                            })




                                            // <input type="file" multiple name="file[]" onChange={(e) => this.handlefile(e)} className="from-control" />

                                        }
                                        </div>


                                    <button onClick={(e) => this.addMore(e)} type="button" class="btn">+</button>

                                <button onClick={(e) => this.handleclick(e)} type="button" className="btn btn-default">uploads</button>
                                {/* <ToastContainer /> */}
                            </form>


                </Layout>

            </>
        );
    }

}
export default Create;