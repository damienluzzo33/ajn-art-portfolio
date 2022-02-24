const { Collector, Coupon, Interest, PodOptions, Product, Blog } = require('../models/index');
// const { signToken } = require('../utils/auth');
const { AuthenticationError, ApolloError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

//! ADD ARRAY OF PIN STRINGS TO THREADS MODEL 

const resolvers = {
    Query: {
        allCollectors: async (parent, args) => {
            return await Collector.find({})
                .populate("coupons_used")
                .populate("interests")
                .populate("loved_art")
                .populate("purchased_art")
                .populate("coupons_available")
        },
        allProducts: async (parent, args) => {
            return await Product.find({})
                .populate("blogs")
                .populate("pod")
        },
        allBlogs: async (parent, args) => {
            return await Blog.find({});
        },
        allPodOptions: async (parent, args) => {
            return await PodOptions.find({});
        },
        allInterests: async (parent, args) => {
            return await Interest.find({});
        },
        allCoupons: async (parent, args) => {
            return await Coupon.find({});
        },
        collectorProfile: async (parent, args) => {
            const { collectorId } = args;
            return await Collector.findOne({ _id: collectorId })
            .populate("coupons_used")
            .populate("interests")
            .populate("loved_art")
            .populate("purchased_art")
            .populate("coupons_available");
        },
        selectedProduct: async (parent, args) => {
            const { productId } = args;
            return await Product.findOne({ _id: productId })
            .populate("blogs")
            .populate("pod");
        },
        selectedBlog: async (parent,args) => {
            const {blogId} = args;
            return await Blog.findOne({_id: blogId});
        },
        selectedCoupon: async (parent,args) => {
            const {couponId} = args;
            return await Coupon.findOne({_id: couponId});
        },
    },
    Mutation: {
        loginCollector: async (parent, args) => {
			const { email, password } = args;

			const foundCollector = await Collector.findOne({ email });

			if (!foundCollector) {
				throw new AuthenticationError('Incorrect credentials!');
			}

			const correctPassword = await foundCollector.comparePassword(password);

			if (!correctPassword) {
				throw new AuthenticationError('Incorrect credentials!');
			}

			const token = signToken(foundCollector);
			return { token, foundCollector };
		},

		createCollector: async (parent, args) => {
			try{
				const { first_name, last_name, email, password } = args;

                const checkEmail = await Collector.findOne({ email });

                if(checkEmail) {
					return new ApolloError('An account with this email already exists', 422);
				}

                const newCollector = await User.create({ first_name, last_name, email, password });
	
				const tokenData = {
					email: newCollector.email, 
					_id: newCollector._id
				}
	
				const token = signToken(tokenData);
				return { token, newCollector };
			}
			catch(err) {
				console.log(Object.keys(err.errors));
				if(err.errors.email) return new ApolloError(`${err.errors.email}`, '400');
				if(err.errors.password) return new ApolloError(`${err.errors.password}`, '400');
			}
		},
        createProduct: async (parent, args) => {

        },
        connectBlog: async (parent, args) => {

        },
        connectPodOptions: async (parent, args) => {

        },
    }
}

module.exports = resolvers;