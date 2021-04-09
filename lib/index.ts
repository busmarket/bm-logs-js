/// <reference types="node" />
import {transports, createLogger, Logger} from 'winston';
import moment from 'moment';
import {FieldsI} from "../@types/bm-logs";
import * as Transport from "winston-transport";

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
    private readonly _filename: string | null = null;

    /**
     * @description initialize Logger instance
     */
    readonly customLogger: Logger;

    constructor(options?: {filename?: string}) {
        this.customLogger = createLogger({
            transports: this.initializeTransports(options)
        });
    }

    /**
     * @name initializeTransports
     * @initialize transport interface
     * @param {filename?: string} options
     * @return Transport
     * @private
     */
    private initializeTransports(options?: {filename?: string}): Transport[] | Transport {
        // transport interface for console
        const consoleTransport: Transport = new transports.Console();

        // transport interface for writing in file
        if( options && options?.filename) {
            const fileTransport: Transport = new transports.File({
                filename: `${options?.filename}.log`
            });
            return [ consoleTransport, fileTransport ]
        }

        return consoleTransport
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
