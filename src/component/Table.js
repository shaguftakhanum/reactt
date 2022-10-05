import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from "react-router-dom";
const Table = ({ data, columns }) => {
    return (
        <>
            <table className="table table-striped">
                <thead>
                    <tr>
                        {
                            columns.map((item, index) => {
                                return <th>{item.heading}</th>
                            })
                        }
                    </tr>
                </thead>
                <tbody>

                    {

                        data.map((row, index) => {
                            // console.log("item=>",item)
                            return <tr>{
                                columns.map((col, index) => {
                                    // console.log("col=>",col)
                                    let tdValue;
                                    if (col.key != "-1") {
                                        tdValue = row[col.key];
                                        //  console.log("tdvalue=>",tdValue)
                                    } else {
                                        col.actions.map((action, index) => {
                                            console.log("action=>",action)
                                            let tdButtonDelete;
                                            let tdButtonEdit

                                            if (action.type = "button") {
                                                console.log("action.button=>",action.type)

                                                tdValue = <button onClick={action.handleButton} >{action.label}</button>
                                                tdButtonDelete = tdValue;
                                                //  console.log("tdValueee",tdValue )

                                            }

                                            else if (action.type = "Link") {
                                                console.log("action.Link=>",action.type)

                                                    tdValue = <Link to={action.path}><Button >{action.label}</Button></Link>
                                                    // console.log("tdValue=>",tdValue)
                                                    tdButtonEdit = tdValue

                                            }


                                            else {
                                                console.log("hello")


                                               
                                            }
                                            const concate = `${tdButtonDelete}${tdButtonEdit}`
                                            console.log("concate=>", concate)


                                        })
                                    }
                                    return <td>{tdValue}</td>
                                })

                            }

                            </tr>
                        })
                    }

                </tbody>
            </table>

        </>
    )

}

export default Table