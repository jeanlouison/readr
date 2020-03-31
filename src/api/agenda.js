export const get_all_agendas = () => {

    return fetch('http://localhost:3000/agendas')
    .then(res => res.json());
};

export const add_agenda = (a) => {

    return fetch('http://localhost:3000/agendas', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(a)
    })
    .then(res => res.json());
}; 