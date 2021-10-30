const allQuestions = require('./src/allQuestions');
const Datastore = require('nedb');
const express = require('express');
const app = express();
app.use(express.static('public'));
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('App: ' + PORT);
});

const collections = {
    feedbacks: new Datastore('./database/collections/feedbacks.db')
};

collections.feedbacks.loadDatabase();

app.get('/appinfo', async (req, res) => {

    res.json({
        version: '1.0.0',
        url: 'https://drive.google.com/file/d/1MJBc5ooLyfcvuqbsYDSzv-__3c-eu-e4/view?usp=sharing'
    });
});

app.get('/questions', (req, res) => {
    res.json({
        data: allQuestions
    });
});

app.get('/questions/:category', (req, res) => {
    const c = req.params.category;
    res.json({
        data: allQuestions.filter(q => q.subject == c)
    });
});

app.post('/feedback', (req, res) => {
    const data = req.body;
    try {
        collections.feedbacks.insert(data, (err, doc) => { });
        res.json({ status: true });
    } catch (err) {
        res.json({ status: false });
    }
});