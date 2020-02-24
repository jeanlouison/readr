const ade = require('../controllers/ade');
const date_ctrl = require('../controllers/date');

module.exports = [
    {
        url: '/:resource/today',
        method: 'get',
        func: [date_ctrl.today, ade.fetch]
    }
];