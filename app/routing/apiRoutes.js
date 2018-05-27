const express = require('express');
const path = require('path');
const router = express.Router();

const friends = require('../data/friends');

router.get('/api/friends', (req, res) => {
    res.json(friends);
});


router.post('/api/friends', (req, res) => {
    var user = req.body;
    friends.push(user);

    console.log("User scores: " + user.scores + '\n');

    var allDiff = [];

    friends.forEach(i => {
        friendScoreArr = i.scores;
        console.log("Each friend's scores: " + friendScoreArr);

        var eachFriendTotal = 0;
        friendScoreArr.forEach(j => {
            eachFriendTotal += parseInt(j);
        });

        console.log("This friend's total points: " + eachFriendTotal);

        var differencesArr = [];

        for (var i = 0; i < 10; i++) {
            var differences = Math.abs(friendScoreArr[i] - parseInt(user.scores[i]));
            differencesArr.push(differences);
        }
        console.log('Differences: ' + differencesArr);

        var friendTotalDiff = 0;
        differencesArr.forEach(i => {
            friendTotalDiff += i;
        })

        console.log("Each friend's total difference score " + friendTotalDiff + '\n');
        allDiff.push(friendTotalDiff);
    });

    allDiff.pop();
    console.log('All differences: ' + allDiff);

    var leastDiff = 50;
    allDiff.forEach(i => {
        if (i < leastDiff) {
            leastDiff = i;
        }
    })

    console.log('New lowest difference: ' + leastDiff);

    var friendIndex = allDiff.indexOf(leastDiff);
    console.log('Index ' + friendIndex);

    var matchingName = friends[friendIndex];
    var matchingPhoto = friends[friendIndex];

    console.log('Closest match: ' + matchingName.name);

});

module.exports = router;