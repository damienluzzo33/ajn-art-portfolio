import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { ALL_POD_OPTIONS } from "../utils/queries";

export default function Pods() {
    const getAllPodOptions = useQuery(ALL_POD_OPTIONS);
    const errors = getAllPodOptions.errors;
    const loading = getAllPodOptions.loading;

    if (loading) {
        return (
            <div>Loading...</div>
        )
    }

    const allPodOptions = getAllPodOptions.data?.allPodOptions;
    console.log(allPodOptions);

    return (
        <div>
            {errors ? (
                <div>
                    <p>{errors}</p>
                </div>
            ) : (
                <div>
                    <p>All Them POD Options Go Here</p>
                    <Link to="/">Go Back Home</Link>
                </div>
            )}
        </div>
    )
}