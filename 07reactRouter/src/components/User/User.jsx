import React from "react";
import { useParams } from "react-router-dom";

export default function User(){
    const {id} = useParams()
    return(
        <div className="bg-gray-600 text-white text-3xl p-5">
            <h4>User: {id}</h4>
        </div>
    )
}