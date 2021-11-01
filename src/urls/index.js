export const login = () => {
    return '/login';
};

export const register = () => {
    return '/register';
};


export const home = () => {
    return '/home';
};

export const peopleWhoFollow = () => {
    return '/people-who-follow';
};

export const user = (username = ':username') => {
    return `/users/${username}`;
}

export const profile = () => {
    return '/profile';
}