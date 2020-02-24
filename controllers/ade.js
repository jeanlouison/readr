const ical = require('node-ical');

module.exports = {
    fetch: (req, res, next) => {
        const url = `https://adewebcons.unistra.fr/jsp/custom/modules/plannings/anonymous_cal.jsp?resources=${req.params.resource}&projectId=10&calType=ical&firstDate=${req.firstDate}&lastDate=${req.lastDate}`;
        ical.async.fromURL(url, (err, data) => {
            if (err) next(err)

            res.json(data);
        });
    }

}