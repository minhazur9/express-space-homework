const express = require('express');
const router = express.Router();

// Mission Model
const marsMissions = require('../models/marsMissions');

// Missions Index Route

router.get('/', (request, response) => {
    response.render('missions/index', {
        marsMissions: marsMissions,
    });
});

router.get('/index', (request, response) => {
    response.render('missions/index', {
        marsMissions: marsMissions,
    });
});
// Missions Show Route

router.get('/:missionIndex', (request, response) => {
    const missionIndex = request.params.missionIndex;
    const mission = marsMissions[missionIndex];
    if (marsMissions[missionIndex]) {
        response.render('missions/showMission', {
            mission: mission,
        });
        return;
    }
    response.send('This mission does not exist');
});

module.exports = router;