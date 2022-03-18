import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
    //* NOTE: Still need to set up authentication before launch

    return (
        <div id="home-main">
            <div>
                <Link to="/collectors" alt="collector data">
                    <button>Collector Data</button>
                </Link>
            </div>
            <div>
                <Link to="/blogs" alt="blog data">
                    <button>Blog Data</button>
                </Link>
            </div>
            <div>
                <Link to="/products" alt="product data">
                    <button>Product Data</button>
                </Link>
            </div>
            <div>
                <Link to="/pods" alt="POD data">
                    <button>POD Data</button>
                </Link>
            </div>
            <div>
                <Link to="/coupons" alt="Coupon data">
                    <button>Coupon Data</button>
                </Link>
            </div>
            <div>
                <Link to="/interests" alt="Interest data">
                    <button>Interest Data</button>
                </Link>
            </div>
        </div>
    )
}