import React from "react";

import * as urls from '../urls';
import BaseLayout from '../components/layouts/Base';
import AuthLayout from '../components/layouts/Auth/index';

const Login = React.lazy(() => import('../pages/Login'));
const Register = React.lazy(() => import('../pages/Register'));
const Home = React.lazy(() => import('../pages/Home/Home'));
const Profile = React.lazy(() => import('../pages/Profile'));
const User = React.lazy(() => import('../pages/User'));
const PeopleWhoFollow = React.lazy(() => import('../pages/PeopleWhoFollow'));

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