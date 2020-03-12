const ade = require('../controllers/ade');
const date_ctrl = require('../controllers/date');
const agenda_ctrl = require('../controllers/agenda')

module.exports = [
    {
        url: '/:resource/today',
        method: 'get',
        func: [date_ctrl.today, ade.fetch, ade.get_courses]
    },

    {
        url: '/:resource/date/:start_date',
        method: 'get',
        func: [date_ctrl.load_start_day, ade.fetch, ade.get_courses]
    }    
];