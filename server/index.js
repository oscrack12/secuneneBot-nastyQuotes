let Twit = require('twit');
const CronJob = require("cron").CronJob;
const { albañil } = require('./quotes.js');



let T = new Twit({
    consumer_key: '',
    consumer_secret: '',
    access_token: '',
    access_token_secret: '',
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

