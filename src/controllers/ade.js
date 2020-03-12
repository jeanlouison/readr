const ical = require('node-ical');

module.exports = {

    /**
     * Fetch the ical file using req.params.resource, req.firstDate & req.lastDate and
     * adds the parsed events into req.events.
     */
    fetch: (req, res, next) => {
        const url = `https://adewebcons.unistra.fr/jsp/custom/modules/plannings/anonymous_cal.jsp?resources=${req.params.resource}&projectId=10&calType=ical&firstDate=${req.firstDate}&lastDate=${req.lastDate}`;

        ical.async.fromURL(url)
        .then((data) => {
            req.events = data;
            next();
        })
        .catch(err => next(err));
    },

    /**
     * Parse the ical events of the request to retrieve the wanted informations on the courses.
     */
    get_courses: (req, res, next) => {
        let courses = [];

        for (const data in req.events) {
            if (req.events.hasOwnProperty(data)) {

                const course = req.events[data];

                const start_date = new Date(Date.parse(course.start));
                const end_date = new Date(Date.parse(course.end));

                courses.push({
                    name: course.summary,
                    start: start_date.getHours() + 'h' + ('0' + start_date.getMinutes()).slice(-2),
                    end: end_date.getHours() + 'h' + ('0' + end_date.getMinutes()).slice(-2),
                    classroom: course.location,
                    attendants: course.description.split('\n')[2],
                    teacher: course.description.split('\n')[3],
                });
            }
        }

        res.json(courses);
    }
};