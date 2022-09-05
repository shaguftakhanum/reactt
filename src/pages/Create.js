import React, { Component } from "react";
import axios from 'axios';
import Layout from "../components/Layout/Layout";
class Create extends Component {
    state = {
        file: []
    }
    handlefile(e) {
        let file = e.target.files[0];
        let formData = new FormData();
        formData.append('uploads', file);

        axios({
            method: 'post',
            url: 'http://localhost:8000/uploads',
            data: formData
        })
            .then(function ({data}) {
                console.log("data=>", data);

            })
            .catch(function (error) {
                console.log("error=>", error);
            });
        // this.setState({ file: file });
        // console.log('file=>', file)
    }
    handleclick(e) {
        // console.log("Im here");
        // console.log(this.state,"bswhb...")
        // console.log("data =>",this.handleclick)
        let file = this.state.file;
        let formData = new FormData();
        formData.append('uploads', file);
        console.log('file=> ', file)

        axios({
            method: 'post',
            url: 'http://localhost:8000/api/file/create',
            data: formData
        })
            .then(function (response) {
                console.log("response=>", response);

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
                        <div>
                            <form>
                                <label >select file</label><br />
                                <input  type="file" multiple name="file" onChange={(e) => this.handlefile(e)} />
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