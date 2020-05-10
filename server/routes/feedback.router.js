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
    let queryString = `SELECT * FROM "feedback" ORDER BY "id" DESC;`
    pool.query(queryString).then(results => {
        res.send(results.rows);
    }).catch(error => {
        console.log(error);
        res.sendStatus(500);
    })
})

//Delete router to get a feedback deleted from database based on id
router.delete('/:id', (req, res) => {
    console.log('in id', req.params.id)
    let reqId = req.params.id;
    let sqlText = `DELETE FROM "feedback" WHERE id=$1;`;
    pool.query(sqlText, [reqId])
    .then(result => {
        res.sendStatus(200);
    })
    .catch(error => {
        console.log(`Error making database query ${sqlText}`, error);
        res.sendStatus(500);
    })
})

module.exports = router;