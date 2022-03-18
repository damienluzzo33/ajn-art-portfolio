import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { ALL_PRODUCTS } from "../utils/queries";

export default function Products() {
    const getAllProducts = useQuery(ALL_PRODUCTS);
    const errors = getAllProducts.errors;
    const loading = getAllProducts.loading;

    if (loading) {
        return (
            <div>Loading...</div>
        )
    }

    const allProducts = getAllProducts.data?.allProducts;
    console.log(allProducts);

    return (
        <div>
            {errors ? (
                <div>
                    <p>{errors}</p>
                </div>
            ) : (
                <div>
                    <p>All Them Products Go Here</p>
                    <Link to="/">Go Back Home</Link>
                </div>
            )}
        </div>
    )
}