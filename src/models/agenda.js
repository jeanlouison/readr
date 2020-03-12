const Sequelize = require('sequelize');

module.exports = (sequelize) => {

    class Agenda extends Sequelize.Model {
        static associate(db) {
		};
    }

    Agenda.init({
        name: Sequelize.STRING,
        code: Sequelize.STRING
    }, {
        sequelize,
        modelName: 'Agenda'
    });

    return Agenda;
};
