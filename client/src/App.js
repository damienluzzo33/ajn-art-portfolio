import './App.css';
import Home from './pages/Home.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Collectors from './pages/Collectors.js';
import Products from './pages/Products.js';
import Blogs from './pages/Blogs.js';
import Pods from './pages/Pods.js';
import Coupons from './pages/Coupons.js';
import Interests from './pages/Interests.js';

import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
// import AuthService from './utils/auth';

// //* Construct GraphQL endpoint
const httpLink = createHttpLink({
    uri: '/graphql',
});

// //* Construct middleware for every authorization request
const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('id_token');
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : '',
        },
    };
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});

function App() {
    return (
        <ApolloProvider client={client}>
            <Router>
                <div className="App">
                    <div>
                        <h1>Admin Dashboard</h1>
                    </div>
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route exact path="/collectors">
                            <Collectors />
                        </Route>
                        <Route exact path="/blogs">
                            <Blogs />
                        </Route>
                        <Route exact path="/products">
                            <Products />
                        </Route>
                        <Route exact path="/pods">
                            <Pods />
                        </Route>
                        <Route exact path="/coupons">
                            <Coupons />
                        </Route>
                        <Route exact path="/interests">
                            <Interests />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </ApolloProvider>
    );
}

export default App;
