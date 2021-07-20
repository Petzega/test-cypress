const router = require('express').Router();
const User = require('../model/users');

//app.use('/api/register')
router.post('/register', async (req, resp) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });
    try {
        const savedUser = await user.save();
        resp.send(savedUser);
    } catch (err) {
        resp.status(400).send(err);
    }
});

module.exports = router;