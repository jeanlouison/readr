module.exports = {

     /**
     * Adds the firstDate attribute to the request object,
     * firstDay being today's date as a string in the ISO format yyyy-mm-dd.
     */
    today: (req, res, next) => {
        const now = new Date();
        const firstDate = `${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()}`;
        req.firstDate = firstDate;
        req.lastDate = firstDate;
        next();
    },

    /**
     * Loads the firstDate specified in the url, and if it is a valid date,
     * adds it as the firstDate attribute in the request object.
     */
    load_start_day: (req, res, next) => {
        const firstDate = Date.parse(req.params.start_date);

        if (isNaN(firstDate.valueOf())) {
            throw {
                status: 422,
                message: 'invalid date request'
            }
        }

        req.firstDate = req.params.start_date;
        req.lastDate = req.params.start_date;;
        next();
    },

    /**
     * Generates the lastDay attribute of the request, 
     * lastDay being the next day to firstDate as a string in the ISO format yyyy-mm-dd,
     * allowing to request the ical for the day firstDate.
     */
    gen_next_day: (req, res, next) => {

        const firstDate = Date.parse(req.firstDate);

        if (isNaN(firstDate.valueOf())) {
            throw {
                status: 422,
                message: 'invalid date request'
            }
        }

        const nextDay = new Date(firstDate);
        nextDay.setDate(nextDay.getDate()+1);

        const lastDate = `${nextDay.getFullYear()}-${nextDay.getMonth()+1}-${nextDay.getDate()}`;
        req.lastDate = lastDate;
        next();
    },

};