import {BmLogs} from 'bm-logs-js';

const internalLogger = new BmLogs({filename: `serviceName`});

internalLogger.log({
    severity: 'error',
    type: 'Service',
    service: 'Name service',
    result: 'Error',
    message: `Error message`,
    username: `Username`
})
