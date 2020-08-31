#!/usr/bin/env node

const {program} = require('commander');
const server = require('./lib/server');

program.version('0.1.0');

let uri = null; // required
let port = 4000;
let headers = {};

program
    .requiredOption(
        '-u, --uri <string>',
        'remote graphQL URL to query (required)',
        (u) => {
            uri = u;
        }
    )
    .option('-p, --port <number>', 'port', (p) => {
        port = p;
    })
    .option('-h, --headers <object>', 'headers to include in request', (h) => {
        headers = h;
    })
    .parse(process.argv);

const run = async function () {
    return server.start({
        port,
        uri,
        headers,
    });
};

run();
