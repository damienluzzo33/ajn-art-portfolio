import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { ALL_BLOGS } from '../utils/queries';
import { BlogTable } from '../components/Tables';

export default function Blogs() {
    const getAllBlogs = useQuery(ALL_BLOGS);
    const errors = getAllBlogs.errors;
    const loading = getAllBlogs.loading;

    if (loading) {
        return <div>Loading...</div>;
    }

    const allBlogs = getAllBlogs.data?.allBlogs;
    console.log(allBlogs);

    return (
        <div className="display-page">
            {errors ? (
                <div>
                    <p>{errors}</p>
                </div>
            ) : (
                <div className="main-data-container">
                    <div className="data-dashboard">
                        <BlogTable allBlogs={allBlogs} />
                    </div>
                    <div className="go-back-div">
                        <Link to="/">Go Back Home</Link>
                    </div>
                </div>
            )}
        </div>
    );
}
