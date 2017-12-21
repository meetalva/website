const fs = require('fs');
const path = require('path');
const execa = require('execa');
const meow = require('meow');

main(meow())
    .then()
    .catch(err => {
        if (err) {
            throw err;
        }
    })

async function main(cli) {
    const NOW = path.resolve(cli.flags.cwd || process.cwd(), './node_modules/.bin/now');

    if (!fs.existsSync(NOW)) {
        console.error(`Could not find "now" executable at ${NOW}. Obtain one from https://zeit.co/account/tokens`);
        process.exit(1);
    }

    if (!process.env.NOW_TOKEN) {
        console.error('Missing required global variable NOW_TOKEN');
        process.exit(1);
    }

    await execa('now', ['login', '--token', process.env.NOW_TOKEN], {stdio: 'inherit'});
    await execa('now', ['switch', 'meetalva'], {stdio: 'inherit'});
    await execa('now', ['--static', '--public', '--token', process.env.NOW_TOKEN], {stdio: 'inherit'});

    if (cli.flags.production || (process.env.TRAVIS_BRANCH === 'master' && process.env.TRAVIS_PULL_REQUEST === 'false')) {
        await execa('now', ['alias', '--token', process.env.NOW_TOKEN], {stdio: 'inherit'});
    }
}