const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

//POST router for the feedback to insert into database
router.post('/', (req, res) => {
    console.log('feedback post', req.body);
    let queryString = `INSERT INTO feedback ("feeling", "understanding", "support", "comments")
                        VALUES($1, $2, $3, $4);`
    pool.query(queryString, [req.body.feeling, req.body.understanding, req.body.support, req.body.comments])
        .then(results => {
            res.sendStatus(200);
        }).catch(error => {
            console.log(error);
            res.sendStatus(500);
        })
}) 

//GET router to get the feedback from database
router.get('/', (req, res) => {
    let queryString = `SELECT * FROM "feedback" ORDER BY "id";`
    pool.query(queryString).then(results => {
        res.send(results.rows);
    }).catch(error => {
        console.log(error);
        res.sendStatus(500);
    })
})

module.exports = router;