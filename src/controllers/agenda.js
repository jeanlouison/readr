const { Agenda } = require('../models');

module.exports = {

    load_by_id: (req, res, next) => {
		Agenda.findAll({
			where: {
				id: req.params.agenda_id
			}
		})
        .then(agenda => {
            if (!agenda) {
                throw {
                    status: 404,
                    message: `Agenda ${req.params.agenda_id} not found.`
                }
            }
            req.agenda = agenda;
            next();
        })
        .catch(err => next(err));
    },

	get_all: (req, res, next) => {
		Agenda.findAll({
            // order: ['id', 'DESC']
        })
		.then(people => res.json(people))
		.catch(err => next(err));
	},

	create: (req, res, next) => {
		const data = {
            name: req.body.name || '',
			code: req.body.code || '10',
			color: req.body.color || 'rgb(255, 255, 255)'
		};
		Agenda.create(data)
		.then(agenda => {
			res.json(agenda)
		})
		.catch(err => next(err));
	},

	get_by_id: (req, res, next) => {
		res.json(req.agenda)
		.catch(err => next(err));
	}
};