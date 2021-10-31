import React from "react";

import * as urls from '../urls';
import BaseLayout from '../components/layouts/Base';
import AuthLayout from '../components/layouts/Auth/index';

const Login = React.lazy(() => import('../pages/Login'));
const Register = React.lazy(() => import('../pages/Register'));
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
        name: 'Register',
        component: Register,
        path: urls.register(),
        layout: AuthLayout,
        redirectIfLoggedIn: false
    },
    {
        name: 'Home',
        component: Home,
        path: urls.home(),
        layout: BaseLayout,
        isProtected: true
    }
];

export default routes;