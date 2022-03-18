import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
    //* NOTE: Still need to set up authentication before launch

    return (
        <div id="home-main">
            <div>
                <a href="/collectors" alt="collector data">
                    <button>Collector Data</button>
                </a>
            </div>
            <div>
                <a href="/blogs" alt="blog data">
                    <button>Blog Data</button>
                </a>
            </div>
            <div>
                <a href="/products" alt="product data">
                    <button>Product Data</button>
                </a>
            </div>
            <div>
                <a href="/pods" alt="POD data">
                    <button>POD Data</button>
                </a>
            </div>
        </div>
    )
}