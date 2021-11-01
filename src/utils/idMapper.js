const idMapper = list => {
    return list.reduce((last, newVal) => {
        return { ...last, [newVal.id]: true };
    }, {});
};

export default idMapper;