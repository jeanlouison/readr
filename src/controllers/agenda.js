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
            order: ['id', 'DESC']
        })
		.then(people => res.json(people))
		.catch(err => next(err));
	},

	create: (req, res, next) => {
        Agenda.findAll(({
            order: ['id', 'DESC']
        }))
        .then(agendas => {
            const lastAgendaId = agendas[0].id;
        })
		const data = {
            name: req.body.name || lastAgendaId,
            code: req.body.code || '0'
		};
		console.log(req.user);
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