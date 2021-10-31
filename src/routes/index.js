import React from "react";

import * as urls from '../urls';
import BaseLayout from '../components/layouts/Base';
import AuthLayout from '../components/layouts/Auth';

const Login = React.lazy(() => import('../pages/Login'));
const Home = React.lazy(() => import('../pages/Home'));

// Route configuration with unique name identifiers
const routes =  [
    {
        name: 'Login',
        component: Login,
        path: urls.login(),
        layout: AuthLayout,
        redirectIfLoggedIn: false
    },
    {
        name: 'Home',
        component: Home,
        path: urls.home(),
        layout: BaseLayout,
        loginRequired: false
    }
];

export default routes;