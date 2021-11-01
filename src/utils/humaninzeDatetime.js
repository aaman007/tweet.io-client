const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'
];

const formatDay = day => {
    if (day % 10 === 1) return `${day}st`;
    else if (day % 10 === 2) return `${day}nd`;
    else if (day % 10 === 3) return `${day}rd`;
    return `${day}th`;
};

const formatTime = val => {
    return val < 10 ? `0${val}` : val;
};

const getHours = val => {
    val = val > 12 ? val - 12 : val;
    return formatTime(val);
};

const getTimeIdentifier = hours => {
    return hours < 12 ? 'AM' : 'PM';
};

const humanizeDatetime = (date) => {
    const dateObj = new Date(date);
    const year = dateObj.getFullYear();
    const month = months[dateObj.getMonth()];
    const day = formatDay(dateObj.getDate());
    const hour = dateObj.getHours();
    const minutes = formatTime(dateObj.getMinutes());
    return `${day} ${month}, ${year} ${getHours(hour)}:${minutes} ${getTimeIdentifier(hour)}`;
};

export default humanizeDatetime;