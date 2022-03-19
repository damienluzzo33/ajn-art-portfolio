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
        <div>
            {errors ? (
                <div>
                    <p>{errors}</p>
                </div>
            ) : (
                <div>
                    <div className="data-dashboard">
                        <BlogTable allBlogs={allBlogs} />
                    </div>
                    <Link to="/">Go Back Home</Link>
                </div>
            )}
        </div>
    );
}
