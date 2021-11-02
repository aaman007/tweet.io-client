import React from "react";

import * as urls from '../urls';
import BaseLayout from '../components/layouts/Base';
import AuthLayout from '../components/layouts/Auth/index';
import { reactLazy } from "../utils/reactLazy";

const Login = React.lazy(() => reactLazy(import('../pages/Login')));
const Register = React.lazy(() => reactLazy(import('../pages/Register')));
const Home = React.lazy(() => reactLazy(import("../pages/Home/Home")));
const Profile = React.lazy(() => reactLazy(import('../pages/Profile')));
const User = React.lazy(() => reactLazy(import('../pages/User')));
const PeopleWhoFollow = React.lazy(() => reactLazy(import('../pages/PeopleWhoFollow')));

// Route configuration with unique name identifiers
const routes =  [
    {
        name: 'Login',
        component: Login,
        path: urls.login(),
        layout: AuthLayout,
        redirectIfLoggedIn: true
    },
    {
        name: 'Register',
        component: Register,
        path: urls.register(),
        layout: AuthLayout,
        redirectIfLoggedIn: true
    },
    {
        name: 'Home',
        component: Home,
        path: urls.home(),
        layout: BaseLayout,
        isProtected: true
    },
    {
        name: 'Profile',
        component: Profile,
        path: urls.profile(),
        layout: BaseLayout,
        isProtected: true
    },
    {
        name: 'User',
        component: User,
        path: urls.user(),
        layout: BaseLayout,
        isProtected: true
    },
    {
        name: 'PeopleWhoFollow',
        component: PeopleWhoFollow,
        path: urls.peopleWhoFollow(),
        layout: BaseLayout,
        isProtected: true
    }
];

export default routes;