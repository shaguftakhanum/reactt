import React, { Component } from "react";
import axios from 'axios';
import Layout from "../components/Layout/Layout";
class Create extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [],
            name: "",
            fileContent :1
        }
    }

     addmore = () => {
        // let newfield = { images: [] }
        // this.setState(...this.state, newfield)
    }
    handlechange=(e)=>{
        let name=e.target.value;
        this.setState({
            ...this.state,
            name:name
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
            })
            .catch(function (error) {
                console.log("error=>", error);
            });
    }

    render() {
        return (
            <>
                <Layout>
                    <div className="Create">
                        <h1>Form</h1>
                        <div >
                            <form>
                                <div className="d-flex">
                                <div className="form-group">
                                     <input onChange={(e) => this.handlechange(e)} id="name"  name="name" type="text" /><br/><br/>
                                    <label className="form-label">select file</label><br/><br/>

                                    <input  type="file" multiple name="file[]" onChange={(e) => this.handlefile(e)} className="from-control" />
                                </div>
                                <button onClick={() => this.addmore()} type="button" class="btn">+</button>
                                </div>
                                <button onClick={(e) => this.handleclick(e)} type="button" className="btn">uploads</button>
                            </form>
                        </div>
                    </div>
                </Layout>

            </>
        );
    }

}
export default Create;