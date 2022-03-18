import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from "@apollo/client";

export default function Collectors() {
    return (
        <div>
            <p>All Them Collectors Go Here</p>
            <Link to="/">Go Back Home</Link>
        </div>
    );
}
