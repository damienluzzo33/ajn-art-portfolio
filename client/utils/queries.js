import { gql } from '@apollo/client';

export const ALL_COLLECTORS = gql`
query allCollectors {
    allCollectors {
        _id
        first_name
        last_name
        email
        address
        zip_code
        city
        state
        country
        subscribed
        coupons_used {
            _id
            coupon_name
            discount
            days_until_expired
            date_created
        }
        collectors_gifts
        interests {
            _id
            interest_name
        }
        loved_art {
            _id
            title
        }
        purchased_art {
            _id
            title
        }
        purchased_gifts {
            _id
            title
        }
        purchases
        coupons_available {
            _id
            coupon_name
            discount
            days_until_expired
            date_created
        }
        date_joined
    }
}
`;

export const ALL_PRODUCTS = gql`
query allProducts {
    allProducts {
        _id
        title
        medium
        dimensions
        description
        blogs {
            _id
            title
        }
        original_art
        limited_edition_count
        original_price
        limited_edition_price
        pod {
            _id
            pod_name
            pod_image
        }
        nft
        nft_link
        tattoo_template_price
        digital
        discount
        date_created
    }
}
`;

export const ALL_BLOGS = gql`
query allBlogs {
    allBlogs {
        _id
        title
        content
        tags {
            _id
            interest_name
        }
        date_created
    }
}
`;

export const ALL_POD_OPTIONS = gql`
query allPodOptions {
    allPodOptions {
        _id
        pod_name
        pod_image
    }
}
`;

export const ALL_INTERESTS = gql`
query allInterests {
    allInterests {
        _id
        interest_name
        interested_collectors {
            _id
            first_name
            last_name
            email
        }
    }
}
`;

export const ALL_COUPONS = gql`
query allCoupons {
    allCoupons {
        _id
        coupon_name
        discount
        days_until_expired
        date_created
    }
}
`;

export const COLLECTOR_PROFILE = gql`
query collectorProfile($collectorId: ID!) {
    collectorProfile(collectorId: $collectorId) {
        _id
        first_name
        last_name
        email
        address
        zip_code
        city
        state
        country
        subscribed
        coupons_used {
            _id
            coupon_name
            discount
            days_until_expired
            date_created
        }
        collectors_gifts
        interests {
            _id
            interest_name
        }
        loved_art {
            _id
            title
        }
        purchased_art {
            _id
            title
        }
        purchased_gifts {
            _id
            title
        }
        purchases
        coupons_available {
            _id
            coupon_name
            discount
            days_until_expired
            date_created
        }
        date_joined
    }
}
`;

export const SELECTED_PRODUCT = gql`
query selectedProduct($productId: ID!) {
    selectedProduct(productId: $productId) {
        _id
        title
        medium
        dimensions
        description
        blogs {
            _id
            title
        }
        original_art
        limited_edition_count
        original_price
        limited_edition_price
        pod {
            _id
            pod_name
            pod_image
        }
        nft
        nft_link
        tattoo_template_price
        digital
        discount
        date_created
    }
}
`;

export const SELECTED_BLOG = gql`
query selectedBlog($blogId: ID!) {
    selectedBlog(blogId: $blogId) {
        _id
        title
        content
        tags {
            _id
            interest_name
        }
        date_created
    }
}
`;

export const SELECTED_COUPON = gql`
query selectedCoupon($couponId: ID!) {
    selectedCoupon(couponId: $couponId) {
        _id
        coupon_name
        discount
        days_until_expired
        date_created
    }
}
`;
