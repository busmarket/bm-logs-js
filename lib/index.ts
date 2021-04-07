/// <reference types="node" />
import {transports, createLogger, Logger} from 'winston';
import moment from 'moment';
import {FieldsI} from "../@types/bm-logs";

/**
 * @name initialDefault
 * @description describe default values
 */
const initialDefault: {
    filename: string
} = {
    filename: 'logs'
}

/**
 * @name BmLogs
 * @description instance module
 */
export class BmLogs {
    /**
     * @name _filename
     * @description initial file name
     * @private
     */
    private readonly _filename: string = initialDefault.filename;

    /**
     * @description initialize Logger instance
     */
    readonly customLogger: Logger;

    constructor(options?: {filename?: string}) {
        if( options ) {
            this._filename = options?.filename || initialDefault.filename;
        }

        this.customLogger = createLogger({
            transports: [
                new transports.Console(),
                new transports.File({ filename: `${this._filename}.log` }),
            ]
        });

    }

    /**
     * @name log
     * @param {FieldsI} params
     * @description run processing of write logger
     */
    log(params: FieldsI) {
        if( !params ) {
            console.error('Required parameters are missing')
            return
        }

        /**
         * @name {FieldsI} option
         * @description initialize current list of options
         */
        const option: FieldsI = {
            level: params.severity || '',
            timestamp: `${moment().format()}`,
            ...(params)
        };

        this.customLogger.log(option as any)
    }
}
