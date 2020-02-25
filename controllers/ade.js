const ical = require('node-ical');

module.exports = {

    /**
     * Fetch the ical file using req.params.resource, req.firstDate & req.lastDate
     * Parse the ical file and sets the parsed ical events into req.events
     */
    fetch: (req, res, next) => {
        const url = `https://adewebcons.unistra.fr/jsp/custom/modules/plannings/anonymous_cal.jsp?resources=${req.params.resource}&projectId=10&calType=ical&firstDate=${req.firstDate}&lastDate=${req.lastDate}`;
        let events = [];

        ical.async.fromURL(url)
        .then((data) => {
            for (const course in data) {
                if (data.hasOwnProperty(course)) {

                    const start_date = new Date(Date.parse(data[course].start));
                    const end_date = new Date(Date.parse(data[course].end));

                    events.push({
                        name: data[course].summary,
                        start: start_date.getHours() + 'h' + ('0' + start_date.getMinutes()).slice(-2),
                        end: end_date.getHours() + 'h' + ('0' + end_date.getMinutes()).slice(-2),
                        classroom: data[course].location,
                        attendants: data[course].description.split('\n')[2],
                        teacher: data[course].description.split('\n')[3],
                    });
                }
            }
            res.json(events);
        })
        .catch(err => next(err));
    },
};