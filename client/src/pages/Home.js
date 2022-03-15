import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
    //* NOTE: Still need to set up authentication before launch

    return (
        <div id="home-main">
            <div>
                <a>
                    <button>Collector Data</button>
                </a>
            </div>
            <div>
                <a>
                    <button>Blog Data</button>
                </a>
            </div>
            <div>
                <a>
                    <button>Product Data</button>
                </a>
            </div>
            <div>
                <a>
                    <button>POD Data</button>
                </a>
            </div>
        </div>
    )
}