import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { ALL_COUPONS } from '../utils/queries';
import { CouponTable } from '../components/Tables';

export default function Coupons() {
    const getAllCoupons = useQuery(ALL_COUPONS);
    const errors = getAllCoupons.errors;
    const loading = getAllCoupons.loading;

    if (loading) {
        return <div>Loading...</div>;
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
                    <div className="data-dashboard">
                        <CouponTable allCoupons={allCoupons} />
                    </div>
                    <Link to="/">Go Back Home</Link>
                </div>
            )}
        </div>
    );
}
