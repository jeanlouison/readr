const agenda_ctrl = require('../controllers/agenda');

module.exports = [

    {
        url: '/agendas',
        method: 'get',
        func: agenda_ctrl.get_all
    },
    {
        url: '/agendas',
        method: 'post',
        func: agenda_ctrl.create
    }
];