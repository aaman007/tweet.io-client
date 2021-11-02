export const reactLazy = importPromise => {
    return Promise.all([
        importPromise,
        new Promise(resolve => setTimeout(resolve, 1000))
    ]).then(([moduleExport]) => moduleExport);
};
