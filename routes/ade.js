const ade = require('../controllers/ade');
const date_ctrl = require('../controllers/date');

module.exports = [
    {
        url: '/:resource/today',
        method: 'get',
        func: [date_ctrl.today, date_ctrl.gen_next_day, ade.fetch, ade.get_courses]
    },

    {
        url: '/:resource/date/:start_date',
        method: 'get',
        func: [date_ctrl.load_start_day, date_ctrl.gen_next_day, ade.fetch, ade.get_courses]
    }    
];