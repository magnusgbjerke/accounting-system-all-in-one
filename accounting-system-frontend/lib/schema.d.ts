/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file. 
 */

export interface paths {
    "/api/voucher": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get vouchers
         * @description Gets vouchers
         */
        get: operations["getVouchers"];
        put?: never;
        /**
         * Create vouchers
         * @description Creates vouchers.
         */
        post: operations["createVouchers"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/account": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get accounts
         * @description Gets accounts
         */
        get: operations["getAccounts"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        VoucherRequest: {
            /**
             * Format: int32
             * @example 1
             */
            nr: number;
            /**
             * Format: date
             * @example 2023-02-02
             */
            date: string;
            /**
             * Format: int32
             * @example 1920
             */
            account: number;
            /** @example 100 */
            amount: number;
        };
        VoucherResponse: {
            /**
             * Format: int32
             * @example 1
             */
            nr: number;
            /**
             * Format: date
             * @example 2023-02-02
             */
            date: string;
            /**
             * Format: int32
             * @example 1920
             */
            account: number;
            /** @example 100 */
            amount: number;
        };
        Account: {
            /**
             * Format: int32
             * @example 1900
             */
            nr: number;
            /** @example Kontanter */
            name: string;
        };
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    getVouchers: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Successful operation */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoucherResponse"];
                };
            };
        };
    };
    createVouchers: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["VoucherRequest"][];
            };
        };
        responses: {
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description successfully created */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoucherRequest"];
                };
            };
        };
    };
    getAccounts: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Successful operation */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Account"];
                };
            };
        };
    };
}
