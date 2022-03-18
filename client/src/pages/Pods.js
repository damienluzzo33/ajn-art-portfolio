import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";

export default function Pods() {
    return (
        <div>
            <p>All Them Pods Go Here</p>
            <Link to="/">Go Back Home</Link>
        </div>
    )
}