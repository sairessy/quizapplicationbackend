const allQuestions = require('./src/allQuestions');
const express = require('express');
const app = express();
app.use(express.static('public'));
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('App: ' + PORT);
});

app.get('/appinfo', (req, res) => {
    res.json({
        version: '1.0.0',
        url: 'https://quizapplicationbackend.glitch.me/app',
    });
});

app.get('/questions', (req, res) => {
    res.json({
        data: allQuestions
    })
})

app.get('/questions/:category', (req, res) => {
    const c = req.params.category
    res.json({
        data: allQuestions.filter(q => q.type == c)
    })
})