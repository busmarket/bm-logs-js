"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BmLogs = void 0;
const winston_1 = require("winston");
const moment_1 = __importDefault(require("moment"));
const initialDefault = {
    filename: 'logs'
};
class BmLogs {
    constructor(options) {
        this._filename = initialDefault.filename;
        if (options) {
            this._filename = (options === null || options === void 0 ? void 0 : options.filename) || initialDefault.filename;
        }
        this.customLogger = winston_1.createLogger({
            transports: [
                new winston_1.transports.Console(),
                new winston_1.transports.File({ filename: `${this._filename}.log` }),
            ]
        });
    }
    log(params) {
        if (!params) {
            console.error('Required parameters are missing');
            return;
        }
        const option = Object.assign({ level: params.severity || '', timestamp: `${moment_1.default().format()}` }, (params));
        this.customLogger.log(option);
    }
}
exports.BmLogs = BmLogs;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9saWIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EscUNBQXlEO0FBQ3pELG9EQUE0QjtBQU81QixNQUFNLGNBQWMsR0FFaEI7SUFDQSxRQUFRLEVBQUUsTUFBTTtDQUNuQixDQUFBO0FBTUQsTUFBYSxNQUFNO0lBYWYsWUFBWSxPQUE2QjtRQVB4QixjQUFTLEdBQVcsY0FBYyxDQUFDLFFBQVEsQ0FBQztRQVF6RCxJQUFJLE9BQU8sRUFBRztZQUNWLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQSxPQUFPLGFBQVAsT0FBTyx1QkFBUCxPQUFPLENBQUUsUUFBUSxLQUFJLGNBQWMsQ0FBQyxRQUFRLENBQUM7U0FDakU7UUFFRCxJQUFJLENBQUMsWUFBWSxHQUFHLHNCQUFZLENBQUM7WUFDN0IsVUFBVSxFQUFFO2dCQUNSLElBQUksb0JBQVUsQ0FBQyxPQUFPLEVBQUU7Z0JBQ3hCLElBQUksb0JBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxRQUFRLEVBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxNQUFNLEVBQUUsQ0FBQzthQUM3RDtTQUNKLENBQUMsQ0FBQztJQUVQLENBQUM7SUFPRCxHQUFHLENBQUMsTUFBZTtRQUNmLElBQUksQ0FBQyxNQUFNLEVBQUc7WUFDVixPQUFPLENBQUMsS0FBSyxDQUFDLGlDQUFpQyxDQUFDLENBQUE7WUFDaEQsT0FBTTtTQUNUO1FBTUQsTUFBTSxNQUFNLG1CQUNSLEtBQUssRUFBRSxNQUFNLENBQUMsUUFBUSxJQUFJLEVBQUUsRUFDNUIsU0FBUyxFQUFFLEdBQUcsZ0JBQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxFQUFFLElBQzlCLENBQUMsTUFBTSxDQUFDLENBQ2QsQ0FBQztRQUVGLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLE1BQWEsQ0FBQyxDQUFBO0lBQ3hDLENBQUM7Q0FDSjtBQWxERCx3QkFrREMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSB0eXBlcz1cIm5vZGVcIiAvPlxuaW1wb3J0IHt0cmFuc3BvcnRzLCBjcmVhdGVMb2dnZXIsIExvZ2dlcn0gZnJvbSAnd2luc3Rvbic7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQge0ZpZWxkc0l9IGZyb20gXCIuLi9AdHlwZXMvYm0tbG9nc1wiO1xuXG4vKipcbiAqIEBuYW1lIGluaXRpYWxEZWZhdWx0XG4gKiBAZGVzY3JpcHRpb24gZGVzY3JpYmUgZGVmYXVsdCB2YWx1ZXNcbiAqL1xuY29uc3QgaW5pdGlhbERlZmF1bHQ6IHtcbiAgICBmaWxlbmFtZTogc3RyaW5nXG59ID0ge1xuICAgIGZpbGVuYW1lOiAnbG9ncydcbn1cblxuLyoqXG4gKiBAbmFtZSBCbUxvZ3NcbiAqIEBkZXNjcmlwdGlvbiBpbnN0YW5jZSBtb2R1bGVcbiAqL1xuZXhwb3J0IGNsYXNzIEJtTG9ncyB7XG4gICAgLyoqXG4gICAgICogQG5hbWUgX2ZpbGVuYW1lXG4gICAgICogQGRlc2NyaXB0aW9uIGluaXRpYWwgZmlsZSBuYW1lXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBwcml2YXRlIHJlYWRvbmx5IF9maWxlbmFtZTogc3RyaW5nID0gaW5pdGlhbERlZmF1bHQuZmlsZW5hbWU7XG5cbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24gaW5pdGlhbGl6ZSBMb2dnZXIgaW5zdGFuY2VcbiAgICAgKi9cbiAgICByZWFkb25seSBjdXN0b21Mb2dnZXI6IExvZ2dlcjtcblxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnM/OiB7ZmlsZW5hbWU/OiBzdHJpbmd9KSB7XG4gICAgICAgIGlmKCBvcHRpb25zICkge1xuICAgICAgICAgICAgdGhpcy5fZmlsZW5hbWUgPSBvcHRpb25zPy5maWxlbmFtZSB8fCBpbml0aWFsRGVmYXVsdC5maWxlbmFtZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY3VzdG9tTG9nZ2VyID0gY3JlYXRlTG9nZ2VyKHtcbiAgICAgICAgICAgIHRyYW5zcG9ydHM6IFtcbiAgICAgICAgICAgICAgICBuZXcgdHJhbnNwb3J0cy5Db25zb2xlKCksXG4gICAgICAgICAgICAgICAgbmV3IHRyYW5zcG9ydHMuRmlsZSh7IGZpbGVuYW1lOiBgJHt0aGlzLl9maWxlbmFtZX0ubG9nYCB9KSxcbiAgICAgICAgICAgIF1cbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBsb2dcbiAgICAgKiBAcGFyYW0ge0ZpZWxkc0l9IHBhcmFtc1xuICAgICAqIEBkZXNjcmlwdGlvbiBydW4gcHJvY2Vzc2luZyBvZiB3cml0ZSBsb2dnZXJcbiAgICAgKi9cbiAgICBsb2cocGFyYW1zOiBGaWVsZHNJKSB7XG4gICAgICAgIGlmKCAhcGFyYW1zICkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignUmVxdWlyZWQgcGFyYW1ldGVycyBhcmUgbWlzc2luZycpXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbmFtZSB7RmllbGRzSX0gb3B0aW9uXG4gICAgICAgICAqIEBkZXNjcmlwdGlvbiBpbml0aWFsaXplIGN1cnJlbnQgbGlzdCBvZiBvcHRpb25zXG4gICAgICAgICAqL1xuICAgICAgICBjb25zdCBvcHRpb246IEZpZWxkc0kgPSB7XG4gICAgICAgICAgICBsZXZlbDogcGFyYW1zLnNldmVyaXR5IHx8ICcnLFxuICAgICAgICAgICAgdGltZXN0YW1wOiBgJHttb21lbnQoKS5mb3JtYXQoKX1gLFxuICAgICAgICAgICAgLi4uKHBhcmFtcylcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmN1c3RvbUxvZ2dlci5sb2cob3B0aW9uIGFzIGFueSlcbiAgICB9XG59XG4iXX0=