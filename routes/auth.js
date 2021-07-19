const router = require('express').Router();

//app.use('/api/register')
router.post('/register', (req, resp) => {
    resp.send('Register');
});

module.exports = router;