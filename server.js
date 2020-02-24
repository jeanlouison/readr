const Express = require('express');
const routes = require('./routes');
const server = Express();

const cal_mdc = "https://adewebcons.unistra.fr/jsp/custom/modules/plannings/anonymous_cal.jsp?resources=5157,3689,5152,10979,5168,5148,37929,5156&projectId=10&calType=ical&nbWeeks=4";

const cal_loulou = "https://adewebcons.unistra.fr/jsp/custom/modules/plannings/anonymous_cal.jsp?resources=7026&projectId=10&calType=ical&nbWeeks=4";

routes(server);

// Error management middleware
server.use((err, req, res, next) => {
	if (err.status) {
		res.status(err.status);
	} else {
		res.status(500);
	}
	console.log(err);
	res.send(err.message);
});

// Starting the server
server.listen(3000, function () {
	console.log('Listening on port 3000!');
  });

