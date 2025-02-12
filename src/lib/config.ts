/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as shared from "../sdk/models/shared/index.js";
import { HTTPClient } from "./http.js";
import { Logger } from "./logger.js";
import { RetryConfig } from "./retries.js";
import { Params, pathToFunc } from "./url.js";

/**
 * Serverless SaaS API
 */
export const ServerSaasApi = "saas-api";
/**
 * Hosted API Free
 */
export const ServerFreeApi = "free-api";
/**
 * Development server
 */
export const ServerDevelopment = "development";
/**
 * Contains the list of servers available to the SDK
 */
export const ServerList = {
  [ServerSaasApi]: "https://api.unstructuredapp.io",
  [ServerFreeApi]: "https://api.unstructured.io",
  [ServerDevelopment]: "http://localhost:8000",
} as const;

export type SDKOptions = {
  /**
   * The security details required to authenticate the SDK
   */
  security?: shared.Security | (() => Promise<shared.Security>);

  httpClient?: HTTPClient;
  /**
   * Allows overriding the default server used by the SDK
   */
  server?: keyof typeof ServerList;
  /**
   * Allows overriding the default server URL used by the SDK
   */
  serverURL?: string;
  /**
   * Allows overriding the default retry config used by the SDK
   */
  retryConfig?: RetryConfig;
  timeoutMs?: number;
  debugLogger?: Logger;
};

export function serverURLFromOptions(options: SDKOptions): URL | null {
  let serverURL = options.serverURL;

  const params: Params = {};

  if (!serverURL) {
    const server = options.server ?? ServerSaasApi;
    serverURL = ServerList[server] || "";
  }

  const u = pathToFunc(serverURL)(params);
  return new URL(u);
}

export const SDK_METADATA = {
  language: "typescript",
  openapiDocVersion: "1.0.68",
  sdkVersion: "0.20.0",
  genVersion: "2.506.0",
  userAgent:
    "speakeasy-sdk/typescript 0.20.0 2.506.0 1.0.68 unstructured-client",
} as const;
