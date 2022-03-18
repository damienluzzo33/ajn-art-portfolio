import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";

export default function Products() {
    return (
        <div>
            <p>All Them Products Go Here</p>
            <Link to="/">Go Back Home</Link>
        </div>
    )
}