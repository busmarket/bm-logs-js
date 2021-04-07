const BmLogs = require('bm-logs-js').BmLogs;

const tracker = new BmLogs({filename: `log__${Date.now()}`});

tracker.log({
    severity: 'info',
    type: 'Account',
    service: 'BmApiRequests',
    result: 'Error',
    message: 'Some error',
    username: 'Login Username'
})
