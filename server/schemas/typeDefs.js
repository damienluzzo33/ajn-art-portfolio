const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Blog {
        _id: ID!
    }

    type PodOptions {
        _id: ID!
    }

    type Coupon {
        _id: ID!
    }

    type Interest {
        _id: ID!
    }

    type Collector {
        _id: ID!
        first_name: String!
        last_name: String!
        email: String!
        password: String!
        address: String
        zip_code: Number
        city: String
        state: String
        country: String
        subscribed: Boolean
        coupons_used: [Coupon]
        collectors_gifts: Boolean
        interests: [Interest]
        loved_art: [Product]
        purchasedArt: [Product]
        coupons_available: [Coupon]
        date_joined: String
    }

    type Product {
        _id: ID!
        title: String!
        medium: String!
        dimensions: String
        description: String!
        blogs: [Blog]
        original_art: Boolean
        limited_edition_count: Number
        original_price: Number
        limited_edition_price: Number
        pod: [PodOptions]
        nft: Boolean
        nft_link: String
        tattoo_template_price: Number
        digital: Boolean
        discount: Number
    }
`;

module.exports = typeDefs;