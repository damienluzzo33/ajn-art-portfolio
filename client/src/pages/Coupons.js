import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { ALL_COUPONS } from "../utils/queries";

export default function Coupons() {
    const getAllCoupons = useQuery(ALL_COUPONS);
    const errors = getAllCoupons.errors;
    const loading = getAllCoupons.loading;

    if (loading) {
        return (
            <div>Loading...</div>
        )
    }

    const allCoupons = getAllCoupons.data?.allCoupons;
    console.log(allCoupons);

    return (
        <div>
            {errors ? (
                <div>
                    <p>{errors}</p>
                </div>
            ) : (
                <div>
                    <p>All Them Coupons Go Here</p>
                    <Link to="/">Go Back Home</Link>
                </div>
            )}
        </div>
    )
}