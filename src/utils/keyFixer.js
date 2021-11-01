const camelCaseBuilder = strings => {
    for(let i=1; i<strings.length; i++) {
        strings[i] = strings[i].charAt(0).toUpperCase() + strings[i].slice(1);
    }
    return strings.join('');
}

const keyFixer = obj => {
    const keys = Object.keys(obj);
    for (const key of keys) {
        const value = obj[key];
        if (key.indexOf('_') > -1) {
            delete obj[key];
            obj[camelCaseBuilder(key.split('_'))] = value;
        }
        if (value instanceof Object) keyFixer(value);
    }
    return obj;
};

export default keyFixer;