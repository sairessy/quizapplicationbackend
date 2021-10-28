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
        urlGoogleDrive: 'https://drive.google.com/file/d/1MJBc5ooLyfcvuqbsYDSzv-__3c-eu-e4/view?usp=sharing',
        url: 'http://surl.li/angbu',
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
        data: allQuestions.filter(q => q.subject == c)
    })
})