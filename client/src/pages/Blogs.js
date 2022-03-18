import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { ALL_BLOGS } from "../utils/queries";

export default function Blogs() {
    const getAllBlogs = useQuery(ALL_BLOGS);
    const errors = getAllBlogs.errors;
    const loading = getAllBlogs.loading;

    if (loading) {
        return (
            <div>Loading...</div>
        )
    }

    const allBlogs = getAllBlogs.data?.allBlogs;
    console.log(allBlogs);

    return (
        <div>
            {errors ? (
                <div>
                    <p>{errors}</p>
                </div>
            ) : (
                <div>
                    <p>All Them Blogs Go Here</p>
                    <Link to="/">Go Back Home</Link>
                </div>
            )}
        </div>
    )
}