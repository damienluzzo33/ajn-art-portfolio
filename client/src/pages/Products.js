import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { ALL_PRODUCTS } from '../utils/queries';
import { ProductTable } from '../components/Tables';

export default function Products() {
    const getAllProducts = useQuery(ALL_PRODUCTS);
    const errors = getAllProducts.errors;
    const loading = getAllProducts.loading;

    if (loading) {
        return <div>Loading...</div>;
    }

    const allProducts = getAllProducts.data?.allProducts;
    console.log(allProducts);

    return (
        <div className="display-page">
            {errors ? (
                <div>
                    <p>{errors}</p>
                </div>
            ) : (
                <div className="main-data-container">
                    <div className="data-dashboard">
                        <ProductTable allProducts={allProducts} />
                    </div>
                    <div className="go-back-div">
                        <Link to="/">Go Back Home</Link>
                    </div>
                </div>
            )}
        </div>
    );
}
