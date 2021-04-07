import {Logger} from "winston";

/**
 * This type definition augments existing definition
 */
type SeverityT = 'critical' | 'error' | 'fatal' | 'info' | 'warning';
type LogTypeT = 'Account' | 'Service';

export declare interface FieldsI {
    level?: string  | undefined;
    timestamp?: string  | undefined;
    severity: SeverityT | undefined;
    type: LogTypeT | undefined;
    service: string | undefined;
    src?: string | undefined;
    dst?: string | undefined;
    result: string | undefined;
    username?: string | undefined;
    length?: string | undefined;
    request_id?: string | undefined; // 32 symbols
    message: string;
}

export declare class BmLogs {
    constructor(options?: {filename?: string})
    customLogger: Logger
    log(params: FieldsI): void
}
