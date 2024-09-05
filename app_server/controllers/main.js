/* GET homepage */
const index = (req, res) => {
    res.render('index', { title: 'express' });
    };
    module.exports = {
        index
        };