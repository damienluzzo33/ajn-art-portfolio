import React from 'react';

export function CollectorTable(props) {
    
    const { allCollectors } = props;

    return (
        <div className="data-table-div">
            <table>
                <tr>
                    <th>First</th>
                    <th>Last</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>City</th>
                    <th>Zip Code</th>
                    <th>State</th>
                    <th>Subscribed</th>
                    <th>Collector Gifts</th>
                    <th>Date Joined</th>
                    <th>More</th>
                </tr>
                {allCollectors.map((collector) => (
                    <tr>
                        <td>{collector.first_name}</td>
                        <td>{collector.last_name}</td>
                        <td>{collector.email}</td>
                        <td>{collector.address}</td>
                        <td>{collector.city}</td>
                        <td>{collector.zip_code}</td>
                        <td>{collector.state}</td>
                        <td>{collector.subscribed}</td>
                        <td>{collector.collectors_gifts}</td>
                        <td>{collector.date_joined}</td>
                        <td>
                            <button onClick={null}>More</button>
                        </td>
                    </tr>
                ))}
            </table>
        </div>
    );
}


export function ProductTable(props) {
    
    const { allProducts } = props;

    return (
        <div className="data-table-div">
            <table>
                <tr>
                    <th>Title</th>
                    <th>Medium</th>
                    <th>Dimensions</th>
                    <th>Description</th>
                    <th>OG Art</th>
                    <th>LE Count</th>
                    <th>OG Price</th>
                    <th>LE Price</th>
                    <th>NFT</th>
                    <th>NFT Link</th>
                    <th>Tattoo Price</th>
                    <th>Digital</th>
                    <th>Discount</th>
                    <th>Date Created</th>
                    <th>More</th>
                </tr>
                {allProducts.map((product) => (
                    <tr>
                        <td>{product.title}</td>
                        <td>{product.medium}</td>
                        <td>{product.dimensions}</td>
                        <td>{product.description}</td>
                        <td>{product.original_art}</td>
                        <td>{product.limited_edition_count}</td>
                        <td>{product.original_price}</td>
                        <td>{product.limited_edition_price}</td>
                        <td>{product.nft}</td>
                        <td>{product.nft_link}</td>
                        <td>{product.tattoo_template_price}</td>
                        <td>{product.digital}</td>
                        <td>{product.discount}</td>
                        <td>{product.date_created}</td>
                        <td>
                            <button onClick={null}>More</button>
                        </td>
                    </tr>
                ))}
            </table>
        </div>
    );
}


export function BlogTable(props) {
    
    const { allBlogs } = props;

    return (
        <div className="data-table-div">
            <table>
                <tr>
                    <th>Title</th>
                    <th>Content</th>
                    <th>Date Created</th>
                    <th>More</th>
                </tr>
                {allBlogs.map((blog) => (
                    <tr>
                        <td>{blog.title}</td>
                        <td>{blog.content}</td>
                        <td>{blog.date_created}</td>
                        <td>
                            <button onClick={null}>More</button>
                        </td>
                    </tr>
                ))}
            </table>
        </div>
    );
}


export function PodTable(props) {
    
    const { allPodOptions } = props;

    return (
        <div className="data-table-div">
            <table>
                <tr>
                    <th>Name</th>
                    <th>Image</th>
                    <th>More</th>
                </tr>
                {allPodOptions.map((pod) => (
                    <tr>
                        <td>{pod.pod_name}</td>
                        <td>{pod.pod_image}</td>
                        <td>
                            <button onClick={null}>More</button>
                        </td>
                    </tr>
                ))}
            </table>
        </div>
    );
}

export function InterestsTable(props) {
    
    const { allInterests } = props;

    return (
        <div className="data-table-div">
            <table>
                <tr>
                    <th>Name</th>
                    <th>More</th>
                </tr>
                {allInterests.map((interest) => (
                    <tr>
                        <td>{interest.interest_name}</td>
                        <td>
                            <button onClick={null}>More</button>
                        </td>
                    </tr>
                ))}
            </table>
        </div>
    );
}

export function CouponTable(props) {
    
    const { allCoupons } = props;

    return (
        <div className="data-table-div">
            <table>
                <tr>
                    <th>Coupon Name</th>
                    <th>Discount</th>
                    <th>Days Til Expiration</th>
                    <th>Date Created</th>
                </tr>
                {allCoupons.map((coupon) => (
                    <tr>
                        <td>{coupon.coupon_name}</td>
                        <td>{coupon.discount}</td>
                        <td>{coupon.days_until_expired}</td>
                        <td>{coupon.date_created}</td>
                    </tr>
                ))}
            </table>
        </div>
    );
}