export const get_today = (group) => {

    return fetch(`http://185.172.235.54:1086/${group}/today`)
    .then(res => res.json());
};

export const get_by_date = (group, date) => {

    return fetch(`http://185.172.235.54:1086/${group}/date/${date}`)
    .then(res => res.json());
};
