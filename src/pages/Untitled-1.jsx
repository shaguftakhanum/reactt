import React, { Component } from "react";
// import axios from 'axios';
import Layout from "../components/Layout/Layout";
// import {withRouter} from 'react-router'
class Edit extends Component {
    constructor(props) {
        super(props);

        console.log(props);
        this.state = {
            name: ""
        }

    }

    componentDidMount() {
        // axios({
        //     method: 'get',
        //     url: 'http://localhost:8000/api/blogs/:id'+this.props.match.params,
        //     data: this.state
        // })
        //     .then(({ data }) => {
        //         console.log('data =>', data);
        //     })
        //     .catch(function (error) {
        //         console.log("error=>", error);
        //     });

    }

    render() {
        return (
            <>
                <Layout>
                    {/* <ul>
                {this.state.name.map((names) => (
                    <li key={names.id}>{names.name}</li>
                ))}
            </ul> */}
                    <form>

                        <div className="form-group">

                            <label className="form-label">update form</label><br /><br />
                            <label >enter Id</label>
                            <input type="text" name="id" />
                            <label >enter name</label>
                            <input type="text" value={this.state.name} name="name" />
                            <label >createdAt</label>
                            <input type="text" name="createdat" />
                            <label >updatedAt</label>
                            <input type="text" name="updatedat" ></input>
                        </div>
                        <button onClick={(e) => this.handleclick(e)} type="button" className="btn">update</button>
                    </form>


                </Layout>
            </>
        )
    }
}
export default (Edit);