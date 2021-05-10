import React, { Component } from "react";
import data from "./omadata.json";

class Content extends Component {
    render() {
        return (
            <div>
                <h1 className="dtext">Oman Datan Esittäminen</h1>

                {data.map((data) => {
                    return (
                        <div>
                            <div>
                                <h3><p></p></h3>
                                <div></div>
                                <div className="omaKortti">
                                    <img src={data.picture} className="omaKuva"></img>
                                    <p><b>Name: </b>{data.name}</p>
                                    <p><b>Email: </b>{data.email}</p>
                                    <p><b>Phone: </b>{data.phone}</p>
                                    <p><b>Address: </b>{data.address}</p>
                                    <p><b>Company: </b>{data.company}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        )
    }
}

export default Content;