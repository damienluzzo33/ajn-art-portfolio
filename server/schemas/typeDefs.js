const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Blog {
        _id: ID!
        title: String!
        content: [String]
        tags: [Interest]
        date_created: String
    }

    type PodOptions {
        _id: ID!
        pod_name: String!
        pod_image: String!
    }

    type Coupon {
        _id: ID!
        coupon_name: String!
        discount: Int!
        days_until_expired: Int
        date_created: String
    }

    type Interest {
        _id: ID!
        interest_name: String!
        interested_collectors: [Collector]
    }

    type Collector {
        _id: ID!
        first_name: String!
        last_name: String!
        email: String!
        password: String!
        address: String
        zip_code: Int
        city: String
        state: String
        country: String
        subscribed: Boolean
        coupons_used: [Coupon]
        collectors_gifts: Boolean
        interests: [Interest]
        loved_art: [Product]
        purchased_art: [Product]
        purchased_gifts: [Product]
        purchases: Int
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
        limited_edition_count: Int
        original_price: Int
        limited_edition_price: Int
        pod: [PodOptions]
        nft: Boolean
        nft_link: String
        tattoo_template_price: Int
        digital: Boolean
        discount: Int
        date_created: String
    }

    type Auth {
        token: ID!
        collector: Collector
    }

    type Query {
        allCollectors: [Collector]
        allProducts: [Product]
        allBlogs: [Blog]
        allPodOptions: [PodOptions]
        allInterests: [Interest]
        allCoupons: [Coupon]

        collectorProfile(collectorId: ID!): Collector
        selectedProduct(productId: ID!): Product
        selectedBlog(blogId: ID!): Blog
        selectedCoupon(couponId: ID!): Coupon
    }

    type Mutation {
        loginCollector(email: String!, password: String!): Auth
        createCollector(first_name: String!, last_name: String!, email: String!, password: String!): Auth
        
        createProduct(title: String!, medium: String!, dimensions: String!, description: String!, original_art: Boolean!, limited_edition_count: Int!, original_price: Int!, limited_edition_price: Int!, nft: Boolean!, nft_link: String, tattoo_template_price: Int!, digital: Boolean!): Product
        connectBlog(interestId: ID!, productId: ID!): Product
        connectPodOptions(podId: ID!, productId: ID!): Product

    }
`;

module.exports = typeDefs;