import React, { useState } from 'react';
import { ProductOptions, CollectorOptions, BlogOptions, PodOptionsOptions, InterestsOptions, CouponOptions } from './OptionsRow';

export function CollectorTable(props) {
    const { allCollectors } = props;

    const [newData, setNewData] = useState(allCollectors);

    return (
        <React.Fragment>
            <div className="data-table-div">
                <table>
                    <tr>
                        <th>First</th>
                        <th>Last</th>
                        <th>Email</th>
                        <th>City</th>
                        <th>Zip Code</th>
                        <th>State</th>
                        <th>Subscribed</th>
                        <th>Gifts</th>
                        <th>Date Joined</th>
                        <th>More</th>
                    </tr>
                    {newData.map((collector) => (
                        <tr>
                            <td>{collector.first_name}</td>
                            <td>{collector.last_name}</td>
                            <td>{collector.email}</td>
                            <td>{collector.city}</td>
                            <td>{collector.zip_code}</td>
                            <td>{collector.state}</td>
                            <td>{collector.subscribed ? 'true' : 'false'}</td>
                            <td>
                                {collector.collectors_gifts ? 'true' : 'false'}
                            </td>
                            <td>{collector.date_joined}</td>
                            <td>
                                <button onClick={null}>More</button>
                            </td>
                        </tr>
                    ))}
                </table>
            </div>
            <CollectorOptions
                allCollectors={allCollectors}
                newData={newData}
                setNewData={setNewData}
            />
        </React.Fragment>
    );
}

export function ProductTable(props) {
    const { allProducts } = props;

    const [newData, setNewData] = useState(allProducts);

    return (
        <React.Fragment>
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
                            <td>
                                <button onClick={null}>View</button>
                            </td>
                            <td>{product.original_art ? 'true' : 'false'}</td>
                            <td>{product.limited_edition_count}</td>
                            <td>{product.original_price}</td>
                            <td>{product.limited_edition_price}</td>
                            <td>{product.nft ? 'true' : 'false'}</td>
                            <td>{product.nft_link}</td>
                            <td>{product.tattoo_template_price}</td>
                            <td>{product.digital ? 'true' : 'false'}</td>
                            <td>{product.discount}</td>
                            <td>{product.date_created}</td>
                            <td>
                                <button onClick={null}>More</button>
                            </td>
                        </tr>
                    ))}
                </table>
            </div>
            <ProductOptions 
                allProducts={allProducts} 
                newData={newData}
                setNewData={setNewData}
            />
        </React.Fragment>
    );
}

export function BlogTable(props) {
    const { allBlogs } = props;

    const [newData, setNewData] = useState(allBlogs);

    return (
        <React.Fragment>
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
                            <td>
                                <button onClick={null}>View</button>
                            </td>
                            <td>{blog.date_created}</td>
                            <td>
                                <button onClick={null}>More</button>
                            </td>
                        </tr>
                    ))}
                </table>
            </div>
            <BlogOptions 
                allBlogs={allBlogs}
                newData={newData}
                setNewData={setNewData}
            />
        </React.Fragment>
        
    );
}

export function PodTable(props) {
    const { allPodOptions } = props;

    const [newData, setNewData] = useState(allPodOptions);

    return (
        <React.Fragment>
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
            <PodOptionsOptions
                allPodOptions={allPodOptions}
                newData={newData}
                setNewData={setNewData}
            />
        </React.Fragment>
        
    );
}

export function InterestsTable(props) {
    const { allInterests } = props;

    const [newData, setNewData] = useState(allInterests);

    return (
        <React.Fragment>
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
            <InterestsOptions 
                allInterests={allInterests}
                newData={newData}
                setNewData={setNewData}
            />
        </React.Fragment>
        
    );
}

export function CouponTable(props) {
    const { allCoupons } = props;

    const [newData, setNewData] = useState(allCoupons);

    return (
        <React.Fragment>
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
            <CouponOptions 
                allCoupons={allCoupons}
                newData={newData}
                setNewData={setNewData}
            />
        </React.Fragment>
        
    );
}
