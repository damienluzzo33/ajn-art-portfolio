// var mongoose = require('mongoose');
var db = require('../config/connection');

const { Blog, Collector, Coupon, Interest, PodOptions, Product } = require('../models/index');

const collectorSeeds = [
    {
        first_name: "Damien",
        last_name: "Luzzo",
        email: "damien@damien.com",
        password: "shroom",
        address: "123 Awesome St",
        zip_code: "12345",
        city: "Austin",
        state: "Texas",
        country: "United States",
        subscribed: true,
        collectors_gifts: false,
        purchases: 0
    },
    {
        first_name: "Xander",
        last_name: "Newman",
        email: "xander@xander.com",
        password: "kitty123",
        address: "123 Pups Dr",
        zip_code: "34565",
        city: "Austin",
        state: "Texas",
        country: "United States",
        subscribed: true,
        collectors_gifts: true,
        purchases: 0
    }
]

const blogSeeds = [
    {
        title: "My first blog",
        content: [
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid at odit voluptatum iure obcaecati eius magnam consequuntur nihil nobis? Animi in iusto nobis, esse placeat laborum ex neque ab voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium molestias possimus explicabo ipsa odit ad est in veritatis voluptates sunt libero iure maxime, animi sit officia dolorem tempora facere praesentium.",
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid at odit voluptatum iure obcaecati eius magnam consequuntur nihil nobis? Animi in iusto nobis, esse placeat laborum ex neque ab voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium molestias possimus explicabo ipsa odit ad est in veritatis voluptates sunt libero iure maxime, animi sit officia dolorem tempora facere praesentium.",
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid at odit voluptatum iure obcaecati eius magnam consequuntur nihil nobis? Animi in iusto nobis, esse placeat laborum ex neque ab voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium molestias possimus explicabo ipsa odit ad est in veritatis voluptates sunt libero iure maxime, animi sit officia dolorem tempora facere praesentium.",
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid at odit voluptatum iure obcaecati eius magnam consequuntur nihil nobis? Animi in iusto nobis, esse placeat laborum ex neque ab voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium molestias possimus explicabo ipsa odit ad est in veritatis voluptates sunt libero iure maxime, animi sit officia dolorem tempora facere praesentium."
        ]
    }
]

const productSeeds = [
    {
        title: "Woman On Sidewalk",
        medium: "Oil Painting",
        dimensions: '16 x 32 inches',
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid at odit voluptatum iure obcaecati eius magnam consequuntur nihil nobis?",
        original_art: true,
        limited_edition_count: 20,
        original_price: 1400,
        limited_edition_price: 100,
        nft: false,
        tattoo_template_price: 100,
        digital: false
    },
    {
        title: "Woman In Chair",
        medium: "Oil Painting",
        dimensions: '16 x 32 inches',
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid at odit voluptatum iure obcaecati eius magnam consequuntur nihil nobis?",
        original_art: true,
        limited_edition_count: 20,
        original_price: 1200,
        limited_edition_price: 100,
        nft: false,
        tattoo_template_price: 100,
        digital: false
    }
]

db.once('open', async () => {
    try {
        await Collector.deleteMany({});
        await Product.deleteMany({});
        await Blog.deleteMany({});
        await PodOptions.deleteMany({});
        await Coupon.deleteMany({});
        await Interest.deleteMany({});
        console.log('Collections Dropped Successfully!');

        await Collector.create(collectorSeeds);
        console.log("COLLECTOR SEED SUCCESS")
        await Blog.create(blogSeeds);
        console.log("BLOG SEED SUCCESS")
        await Product.create(productSeeds);
        console.log("PRODUCT SEED SUCCESS")

        console.log('All seeds successfully inserted!');
		process.exit(0);
    } catch(err) {
        console.error(err);
		process.exit(1);
    }
});
