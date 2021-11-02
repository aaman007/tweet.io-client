const idMapper = (list, key = 'id') => {
    return list.reduce((last, newVal) => {
        return { ...last, [newVal[key]]: true };
    }, {});
};

export default idMapper;