module.exports = {

    today: (req, res, next) => {
        const now = new Date();
        const today = `${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()}`;

        console.log(today);
        console.log(today + 1);
        
        req.firstDate = today;
        req.lastDate = today + 1;
        next();
    },
};