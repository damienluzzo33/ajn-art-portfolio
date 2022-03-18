import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";

export default function Blogs() {

    

    return (
        <div>
            <p>All Them Blogs Go Here</p>
            <Link to="/">Go Back Home</Link>
        </div>
    )
}