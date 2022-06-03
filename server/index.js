let Twit = require('twit');
const CronJob = require("cron").CronJob;
const { albañil } = require('./quotes.js');



let T = new Twit({
    consumer_key: 'qKj6SmvxZpPWjQayIFjHyJjHm',
    consumer_secret: 'ThDjCttXWZQtnjvyTSpCRkk1Pj71OtB3Ueh8XMCmCseMhavYTj',
    access_token: '1469040387599872003-seJ2vFAyNywI9axwb4yE8MosgjHjQg',
    access_token_secret: '35zw1AMnxIYrlOX6ebFP7sll9SkWdENQA4Ld72sUhaETV',
})


function tuit() {
    T.post('statuses/update', { status: albañil[Math.floor(Math.random() * albañil.length)]}, function (err, data, response) {
        console.log(data)
    })
}

const job = new CronJob("0 0 */12 * * *", () => {
    console.log('running every 12 hours')
    tuit();
    console.log('tuiteado');
});


job.start();

