const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

// If front end sends a request that matches nothing 
router.use((req, res) => {
  res.send("<h1>Wrong route</h1>")
});

module.exports = router;