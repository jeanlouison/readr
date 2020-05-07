export const get_today = (group) => {

    return fetch(`http://localhost:3000/${group}/today`)
    .then(res => res.json());
};

export const get_by_date = (group, date) => {

    return fetch(`http://localhost:3000/${group}/date/${date}`)
    .then(res => res.json());
};