const express = require('express');
const router = express.Router();

// Mission Model
const marsMissions = require('../models/marsMissions');

// Index Missions
router.get('/', (request, response) => {
    response.render('missions/indexMission', {
        marsMissions: marsMissions,
    });
});

// Show Route

router.get('/:missionIndex', (request,response) => {
    const missionIndex = request.params.missionIndex;
    const mission = mission[missionIndex];
    response.render('missions/showMission', {
        misson: mission
    });
});

module.exports = router;