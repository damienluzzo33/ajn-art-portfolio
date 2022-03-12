import { gql } from '@apollo/client';

export const LOGIN_COLLECTOR = gql`
mutation loginCollector($email: String!, $password: String!) {
    loginCollector(email: $email, password: $password) {
        token
        collector {
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
            }
            collectors_gifts
            interests {
                _id
            }
            loved_art {
                _id
            }
            purchased_art {
                _id
            }
            purchased_gifts {
                _id
            }
            purchases: Int
            coupons_available {
                _id
            }
            date_joined
        }
    }
}
`;

export const CREATE_COLLECTOR = gql`
mutation createCollector($first_name: String!, $last_name: String!, $email: String!, $password: String!) {
    createCollector(first_name: $first_name, last_name: $last_name, email: $email, password: $password) {
        token
        collector {
            first_name
            last_name
            email
        }
    }
}
`;

export const CREATE_PRODUCT = gql`
mutation createProduct($title: String!, $medium: String!, $dimensions: String!, $description: String!, $original_art: Boolean!, $limited_edition_count: Int!, $original_price: Int!, $limited_edition_price: Int!, $nft: Boolean!, $nft_link: String, $tattoo_template_price: Int!, $digital: Boolean!) {
    createProduct(title: $title, medium: $medium, dimensions: $dimensions, description: $description, original_art: $original_art, limited_edition_count: $limited_edition_count, original_price: $original_price, limited_edition_price: $limited_edition_price, nft: $nft, nft_link: $nft_link, tattoo_template_price: $tattoo_template_price, digital: $digital) {
        _id
        title
        medium
        dimensions
        description
        original_art
        limited_edition_count
        original_price
        limited_edition_price
        nft
        nft_link
        tattoo_template_price
        digital
        date_created
    }
}
`;

export const CONNECT_BLOG = gql`
mutation connectBlog($interestId: ID!, $productId: ID!) {
    connectBlog(interestId: $interestId, productId: $productId) {
        _id
        title
        blogs {
            _id
            title
        }
    }
}
`;

export const CONNECT_POD_OPTIONS = gql`
mutation connectPodOptions($podId: ID!, $productId: ID!) {
    connectPodOptions(podId: $podId, productId: $productId) {
        _id
        title
        description
        pod: {
            _id
            pod_name
            pod_image
        }
        date_created
    }
}
`;

//! might want to add interests (maybe call it tags like we did for blogs model)

//! could also just use chosen "tags" to populate blogs dynamically after first form is submitted 

//! probably do the same thing with the pod options - have an interactive form with check boxes to populate the options for the given product

