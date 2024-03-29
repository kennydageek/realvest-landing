globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import 'node-fetch-native/polyfill';
import { Server as Server$1 } from 'node:http';
import { Server } from 'node:https';
import destr from 'destr';
import { defineEventHandler, handleCacheHeaders, createEvent, eventHandler, setHeaders, sendRedirect, proxyRequest, getRequestHeader, setResponseStatus, setResponseHeader, getRequestHeaders, createError, createApp, createRouter as createRouter$1, toNodeListener, fetchWithEvent, lazyEventHandler } from 'h3';
import { createFetch as createFetch$1, Headers } from 'ofetch';
import { createCall, createFetch } from 'unenv/runtime/fetch/index';
import { createHooks } from 'hookable';
import { snakeCase } from 'scule';
import { klona } from 'klona';
import defu, { defuFn } from 'defu';
import { hash } from 'ohash';
import { parseURL, withoutBase, joinURL, getQuery, withQuery, withLeadingSlash, withoutTrailingSlash } from 'ufo';
import { createStorage, prefixStorage } from 'unstorage';
import { toRouteMatcher, createRouter } from 'radix3';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'pathe';
import gracefulShutdown from 'http-graceful-shutdown';

const inlineAppConfig = {};



const appConfig = defuFn(inlineAppConfig);

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      },
      "/_nuxt/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      }
    }
  },
  "public": {}
};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
const _sharedRuntimeConfig = _deepFreeze(
  _applyEnv(klona(_inlineRuntimeConfig))
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  _applyEnv(runtimeConfig);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
_deepFreeze(klona(appConfig));
function _getEnv(key) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function _applyEnv(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = _getEnv(subKey);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      _applyEnv(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
  return obj;
}
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

const _assets = {

};

function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "");
}

const assets$1 = {
  getKeys() {
    return Promise.resolve(Object.keys(_assets))
  },
  hasItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(id in _assets)
  },
  getItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].import() : null)
  },
  getMeta (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].meta : {})
  }
};

const storage = createStorage({});

storage.mount('/assets', assets$1);

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = hash([opts.integrity, fn, opts]);
  const validate = opts.validate || (() => true);
  async function get(key, resolver, shouldInvalidateCache) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || !validate(entry);
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry)) {
          useStorage().setItem(cacheKey, entry).catch((error) => console.error("[nitro] [cache]", error));
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (opts.swr && entry.value) {
      _resolvePromise.catch(console.error);
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = opts.shouldInvalidateCache?.(...args);
    const entry = await get(key, () => fn(...args), shouldInvalidateCache);
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return key.replace(/[^\dA-Za-z]/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const key = await opts.getKey?.(event);
      if (key) {
        return escapeKey(key);
      }
      const url = event.node.req.originalUrl || event.node.req.url;
      const friendlyName = escapeKey(decodeURI(parseURL(url).pathname)).slice(
        0,
        16
      );
      const urlHash = hash(url);
      return `${friendlyName}.${urlHash}`;
    },
    validate: (entry) => {
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: [opts.integrity, handler]
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const reqProxy = cloneWithProxy(incomingEvent.node.req, { headers: {} });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            for (const header in headers2) {
              this.setHeader(header, headers2[header]);
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.context = incomingEvent.context;
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = headers.Etag || headers.etag || `W/"${hash(body)}"`;
      headers["last-modified"] = headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString();
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      event.node.res.setHeader(name, response.headers[name]);
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler() {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      return sendRedirect(
        event,
        routeRules.redirect.to,
        routeRules.redirect.statusCode
      );
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: $fetch.raw,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    const path = new URL(event.node.req.url, "http://localhost").pathname;
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(path, useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const plugins = [
  
];

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function normalizeError(error) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}
function trapUnhandledNodeErrors() {
  {
    process.on(
      "unhandledRejection",
      (err) => console.error("[nitro] [unhandledRejection] " + err)
    );
    process.on(
      "uncaughtException",
      (err) => console.error("[nitro]  [uncaughtException] " + err)
    );
  }
}

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.node.req.url,
    statusCode,
    statusMessage,
    message,
    stack: "",
    data: error.data
  };
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (event.handled) {
    return;
  }
  setResponseStatus(event, errorObject.statusCode !== 200 && errorObject.statusCode || 500, errorObject.statusMessage);
  if (isJsonRequest(event)) {
    setResponseHeader(event, "Content-Type", "application/json");
    event.node.res.end(JSON.stringify(errorObject));
    return;
  }
  const isErrorPage = event.node.req.url?.startsWith("/__nuxt_error");
  const res = !isErrorPage ? await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig().app.baseURL, "/__nuxt_error"), errorObject), {
    headers: getRequestHeaders(event),
    redirect: "manual"
  }).catch(() => null) : null;
  if (!res) {
    const { template } = await import('../error-500.mjs');
    if (event.handled) {
      return;
    }
    setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
    event.node.res.end(template(errorObject));
    return;
  }
  const html = await res.text();
  if (event.handled) {
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  setResponseStatus(event, res.status && res.status !== 200 ? res.status : void 0, res.statusText);
  event.node.res.end(html);
});

const assets = {
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"10be-J37xFt9SuXhnCC9fIZyrzh3Phr0\"",
    "mtime": "2024-02-24T11:32:39.654Z",
    "size": 4286,
    "path": "../public/favicon.ico"
  },
  "/_nuxt/AppFooter.56203127.js": {
    "type": "application/javascript",
    "etag": "\"7fb-vCtSrcWtXfi/gVtprSi/SKzYhA0\"",
    "mtime": "2024-02-24T11:32:39.651Z",
    "size": 2043,
    "path": "../public/_nuxt/AppFooter.56203127.js"
  },
  "/_nuxt/BlogCard.89af89a3.js": {
    "type": "application/javascript",
    "etag": "\"2850-kLX5KW7r1kvY4eOiohm8B2mmKUs\"",
    "mtime": "2024-02-24T11:32:39.650Z",
    "size": 10320,
    "path": "../public/_nuxt/BlogCard.89af89a3.js"
  },
  "/_nuxt/FAQ.d9ea9852.png": {
    "type": "image/png",
    "etag": "\"4d10f-l6X75PRC8ZpruwfkvZreZbqzxzA\"",
    "mtime": "2024-02-24T11:32:39.649Z",
    "size": 315663,
    "path": "../public/_nuxt/FAQ.d9ea9852.png"
  },
  "/_nuxt/Lilian-Alex.899a9450.svg": {
    "type": "image/svg+xml",
    "etag": "\"245e5-ApCFYIryq1N08hLccjut3Erduew\"",
    "mtime": "2024-02-24T11:32:39.643Z",
    "size": 148965,
    "path": "../public/_nuxt/Lilian-Alex.899a9450.svg"
  },
  "/_nuxt/Spinner.0e967719.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"122-G60h9J3mgsfd6ml1n6v6PYLBVxE\"",
    "mtime": "2024-02-24T11:32:39.636Z",
    "size": 290,
    "path": "../public/_nuxt/Spinner.0e967719.css"
  },
  "/_nuxt/Spinner.9b9ac8b7.js": {
    "type": "application/javascript",
    "etag": "\"ca-edd7Qn17i8I8/arn2ioNGu3mPvg\"",
    "mtime": "2024-02-24T11:32:39.635Z",
    "size": 202,
    "path": "../public/_nuxt/Spinner.9b9ac8b7.js"
  },
  "/_nuxt/_id_.4d67d00d.js": {
    "type": "application/javascript",
    "etag": "\"5092-YxaErU1uqW2dcsy+fr9i/pSgH/E\"",
    "mtime": "2024-02-24T11:32:39.634Z",
    "size": 20626,
    "path": "../public/_nuxt/_id_.4d67d00d.js"
  },
  "/_nuxt/_id_.85463c60.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"64-tkiHfN9VoFssaawXQe2q3ZBCX6c\"",
    "mtime": "2024-02-24T11:32:39.633Z",
    "size": 100,
    "path": "../public/_nuxt/_id_.85463c60.css"
  },
  "/_nuxt/affordable.14b9e835.svg": {
    "type": "image/svg+xml",
    "etag": "\"5bc-5C1TeUp0W0NZjOy6gBIDwlfBCcs\"",
    "mtime": "2024-02-24T11:32:39.632Z",
    "size": 1468,
    "path": "../public/_nuxt/affordable.14b9e835.svg"
  },
  "/_nuxt/arrow-circle-right.57455966.svg": {
    "type": "image/svg+xml",
    "etag": "\"2cc-YpruRBWo897wihJ43R5x6baEMmA\"",
    "mtime": "2024-02-24T11:32:39.631Z",
    "size": 716,
    "path": "../public/_nuxt/arrow-circle-right.57455966.svg"
  },
  "/_nuxt/arrow-left-disabled.2b7a8d51.svg": {
    "type": "image/svg+xml",
    "etag": "\"188-Q8a+Ey+AsStZw2Am43ORW1zVQFQ\"",
    "mtime": "2024-02-24T11:32:39.630Z",
    "size": 392,
    "path": "../public/_nuxt/arrow-left-disabled.2b7a8d51.svg"
  },
  "/_nuxt/arrow-left-enabled.88d78df2.svg": {
    "type": "image/svg+xml",
    "etag": "\"17a-lmaSF0OgsmUCok/YxPyoRpKBZFE\"",
    "mtime": "2024-02-24T11:32:39.629Z",
    "size": 378,
    "path": "../public/_nuxt/arrow-left-enabled.88d78df2.svg"
  },
  "/_nuxt/arrow-left.4ad8147c.svg": {
    "type": "image/svg+xml",
    "etag": "\"198-3YbntoERsyhBYINbccDk7Gd+b88\"",
    "mtime": "2024-02-24T11:32:39.628Z",
    "size": 408,
    "path": "../public/_nuxt/arrow-left.4ad8147c.svg"
  },
  "/_nuxt/arrow-right-disabled.ed3ed515.svg": {
    "type": "image/svg+xml",
    "etag": "\"191-+xnWXDieE9Awf1Y6W5C5A0F1zA8\"",
    "mtime": "2024-02-24T11:32:39.627Z",
    "size": 401,
    "path": "../public/_nuxt/arrow-right-disabled.ed3ed515.svg"
  },
  "/_nuxt/arrow-right-enabled.b35540f4.svg": {
    "type": "image/svg+xml",
    "etag": "\"17a-+TY5PBQQrIFN9Lw7aeZHwTWs1LU\"",
    "mtime": "2024-02-24T11:32:39.626Z",
    "size": 378,
    "path": "../public/_nuxt/arrow-right-enabled.b35540f4.svg"
  },
  "/_nuxt/arrow-right.6bfb597d.svg": {
    "type": "image/svg+xml",
    "etag": "\"198-GCAu9L333W8i/6jKh5jVhz5eUoQ\"",
    "mtime": "2024-02-24T11:32:39.625Z",
    "size": 408,
    "path": "../public/_nuxt/arrow-right.6bfb597d.svg"
  },
  "/_nuxt/arrow-up-right.66a162c5.svg": {
    "type": "image/svg+xml",
    "etag": "\"f4-X/kUWN8th7sGYx/H2YUpoEbug8Q\"",
    "mtime": "2024-02-24T11:32:39.624Z",
    "size": 244,
    "path": "../public/_nuxt/arrow-up-right.66a162c5.svg"
  },
  "/_nuxt/article-1.1f5f97da.png": {
    "type": "image/png",
    "etag": "\"23e7d-lSW/b+6/s7UzKt/PWetexjRlD/Q\"",
    "mtime": "2024-02-24T11:32:39.623Z",
    "size": 147069,
    "path": "../public/_nuxt/article-1.1f5f97da.png"
  },
  "/_nuxt/article-2.ddb5e3e6.png": {
    "type": "image/png",
    "etag": "\"27a09-FM5GilQmu/kBFlbqSJo4EI7YbWA\"",
    "mtime": "2024-02-24T11:32:39.621Z",
    "size": 162313,
    "path": "../public/_nuxt/article-2.ddb5e3e6.png"
  },
  "/_nuxt/avatar-ian.66716691.svg": {
    "type": "image/svg+xml",
    "etag": "\"2a218-ZgfM5ttZMHlpmNqkZ+49ErjgUws\"",
    "mtime": "2024-02-24T11:32:39.619Z",
    "size": 172568,
    "path": "../public/_nuxt/avatar-ian.66716691.svg"
  },
  "/_nuxt/browser.7c54f512.js": {
    "type": "application/javascript",
    "etag": "\"3179-Kr9qaDsDfoUTYXGva5/2PKos4K4\"",
    "mtime": "2024-02-24T11:32:39.618Z",
    "size": 12665,
    "path": "../public/_nuxt/browser.7c54f512.js"
  },
  "/_nuxt/call.1be1e48f.svg": {
    "type": "image/svg+xml",
    "etag": "\"5a2-nUmqS58z3WiPpGw0lkZLc3+EJQM\"",
    "mtime": "2024-02-24T11:32:39.617Z",
    "size": 1442,
    "path": "../public/_nuxt/call.1be1e48f.svg"
  },
  "/_nuxt/caret-left.d02520f2.svg": {
    "type": "image/svg+xml",
    "etag": "\"f0-vZ3reAVL4WybtbI91InRtLWfYUg\"",
    "mtime": "2024-02-24T11:32:39.616Z",
    "size": 240,
    "path": "../public/_nuxt/caret-left.d02520f2.svg"
  },
  "/_nuxt/circle.4249f693.svg": {
    "type": "image/svg+xml",
    "etag": "\"90-iPiJDCx45nnIQb5NemA/VGGDtfI\"",
    "mtime": "2024-02-24T11:32:39.615Z",
    "size": 144,
    "path": "../public/_nuxt/circle.4249f693.svg"
  },
  "/_nuxt/default.1bb6dc93.js": {
    "type": "application/javascript",
    "etag": "\"c16-NTDrPawNvtTVkf5jBcGDHTUcFWE\"",
    "mtime": "2024-02-24T11:32:39.614Z",
    "size": 3094,
    "path": "../public/_nuxt/default.1bb6dc93.js"
  },
  "/_nuxt/default.3666c7e5.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"364-dW97dLB4LlFRWRWexR3yZ70p9fo\"",
    "mtime": "2024-02-24T11:32:39.613Z",
    "size": 868,
    "path": "../public/_nuxt/default.3666c7e5.css"
  },
  "/_nuxt/dotted-map.3d86e846.svg": {
    "type": "image/svg+xml",
    "etag": "\"4f90d-sR6MihGHDtLLBu8c/Nsj2YozHwU\"",
    "mtime": "2024-02-24T11:32:39.612Z",
    "size": 325901,
    "path": "../public/_nuxt/dotted-map.3d86e846.svg"
  },
  "/_nuxt/down-arrow.555a7e1a.svg": {
    "type": "image/svg+xml",
    "etag": "\"105-z3EmDBNrONhV1fQjx/Gn/JC7NP0\"",
    "mtime": "2024-02-24T11:32:39.610Z",
    "size": 261,
    "path": "../public/_nuxt/down-arrow.555a7e1a.svg"
  },
  "/_nuxt/entry.62d17c53.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1a1-f0XQpMAUhNMx5dCr0bjK27k866Q\"",
    "mtime": "2024-02-24T11:32:39.609Z",
    "size": 417,
    "path": "../public/_nuxt/entry.62d17c53.css"
  },
  "/_nuxt/entry.653a8dcc.js": {
    "type": "application/javascript",
    "etag": "\"321ac-m8gg/7XogVTzruqRIt42C3cT8XE\"",
    "mtime": "2024-02-24T11:32:39.608Z",
    "size": 205228,
    "path": "../public/_nuxt/entry.653a8dcc.js"
  },
  "/_nuxt/error-404.95c28eb4.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"e70-L8dF9pJCW0qi7de8Az4GyBoTHvI\"",
    "mtime": "2024-02-24T11:32:39.607Z",
    "size": 3696,
    "path": "../public/_nuxt/error-404.95c28eb4.css"
  },
  "/_nuxt/error-404.f54ecbab.js": {
    "type": "application/javascript",
    "etag": "\"8cd-RevUk7hYyUtfbRb/icwhmsqnAh4\"",
    "mtime": "2024-02-24T11:32:39.605Z",
    "size": 2253,
    "path": "../public/_nuxt/error-404.f54ecbab.js"
  },
  "/_nuxt/error-500.cbc8996d.js": {
    "type": "application/javascript",
    "etag": "\"756-Ug9hE/2UTzkuOWidBxTNo+jsIfc\"",
    "mtime": "2024-02-24T11:32:39.604Z",
    "size": 1878,
    "path": "../public/_nuxt/error-500.cbc8996d.js"
  },
  "/_nuxt/error-500.e798523c.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"7e0-QP983DB9m1oiDr87r1V1AYEhrfo\"",
    "mtime": "2024-02-24T11:32:39.603Z",
    "size": 2016,
    "path": "../public/_nuxt/error-500.e798523c.css"
  },
  "/_nuxt/format-quote.1171d0d0.svg": {
    "type": "image/svg+xml",
    "etag": "\"2bf-0C15EuZNQCfO2g5g+8ci2VG8eIw\"",
    "mtime": "2024-02-24T11:32:39.601Z",
    "size": 703,
    "path": "../public/_nuxt/format-quote.1171d0d0.svg"
  },
  "/_nuxt/header-image-2.673d863c.png": {
    "type": "image/png",
    "etag": "\"a6d4f-hwASR4V1hxW0E4+EJnUfGYwoxgE\"",
    "mtime": "2024-02-24T11:32:39.600Z",
    "size": 683343,
    "path": "../public/_nuxt/header-image-2.673d863c.png"
  },
  "/_nuxt/home.560c84e1.svg": {
    "type": "image/svg+xml",
    "etag": "\"84f-G1DjFPWbCPq3fsnqwaPVql46WLQ\"",
    "mtime": "2024-02-24T11:32:39.597Z",
    "size": 2127,
    "path": "../public/_nuxt/home.560c84e1.svg"
  },
  "/_nuxt/index.382c6534.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"441-orYJ2XBnGDJR8woQFy2DClVKYu0\"",
    "mtime": "2024-02-24T11:32:39.596Z",
    "size": 1089,
    "path": "../public/_nuxt/index.382c6534.css"
  },
  "/_nuxt/index.484460ec.js": {
    "type": "application/javascript",
    "etag": "\"31ce-mJ9+ydQ0KsPb9qc8cIMuMRSg0Eg\"",
    "mtime": "2024-02-24T11:32:39.594Z",
    "size": 12750,
    "path": "../public/_nuxt/index.484460ec.js"
  },
  "/_nuxt/index.99f0a0d3.js": {
    "type": "application/javascript",
    "etag": "\"51fb-zNEmQ7B/t5b743sv3I8m35MDRKY\"",
    "mtime": "2024-02-24T11:32:39.593Z",
    "size": 20987,
    "path": "../public/_nuxt/index.99f0a0d3.js"
  },
  "/_nuxt/kehinde-ajibade.12912e15.svg": {
    "type": "image/svg+xml",
    "etag": "\"26bb3-eMZH135xIrATfhCUGog6xT2JoZE\"",
    "mtime": "2024-02-24T11:32:39.592Z",
    "size": 158643,
    "path": "../public/_nuxt/kehinde-ajibade.12912e15.svg"
  },
  "/_nuxt/logo-variant.43a371cb.svg": {
    "type": "image/svg+xml",
    "etag": "\"2d29-li06eGS67s8w5Q/Rj1kzsW2DmRo\"",
    "mtime": "2024-02-24T11:32:39.590Z",
    "size": 11561,
    "path": "../public/_nuxt/logo-variant.43a371cb.svg"
  },
  "/_nuxt/logo.b6e3746f.svg": {
    "type": "image/svg+xml",
    "etag": "\"2d05-VSRKk/oSp9vScDmzhhEglS/oe/k\"",
    "mtime": "2024-02-24T11:32:39.589Z",
    "size": 11525,
    "path": "../public/_nuxt/logo.b6e3746f.svg"
  },
  "/_nuxt/menu.f4c0acf1.svg": {
    "type": "image/svg+xml",
    "etag": "\"198-Aegd0ctmGDyDjn/7GPMkZhnVcKE\"",
    "mtime": "2024-02-24T11:32:39.587Z",
    "size": 408,
    "path": "../public/_nuxt/menu.f4c0acf1.svg"
  },
  "/_nuxt/money.5e076cf6.svg": {
    "type": "image/svg+xml",
    "etag": "\"775-5I9YP7wZf2LQ+fUwJHMOKJfzyCE\"",
    "mtime": "2024-02-24T11:32:39.586Z",
    "size": 1909,
    "path": "../public/_nuxt/money.5e076cf6.svg"
  },
  "/_nuxt/nuxt-link.3adf5d24.js": {
    "type": "application/javascript",
    "etag": "\"10f2-STV+vXlQR8QjIji3PshZtbETVfU\"",
    "mtime": "2024-02-24T11:32:39.585Z",
    "size": 4338,
    "path": "../public/_nuxt/nuxt-link.3adf5d24.js"
  },
  "/_nuxt/peeeps.ff2a0454.png": {
    "type": "image/png",
    "etag": "\"4101-Bcd0Kiyw0Lt+RYtxU3p5T5R7dks\"",
    "mtime": "2024-02-24T11:32:39.584Z",
    "size": 16641,
    "path": "../public/_nuxt/peeeps.ff2a0454.png"
  },
  "/_nuxt/privacy.620db8da.js": {
    "type": "application/javascript",
    "etag": "\"24d5-Me8O+JqqKgba0VsdC8n1peDAklg\"",
    "mtime": "2024-02-24T11:32:39.574Z",
    "size": 9429,
    "path": "../public/_nuxt/privacy.620db8da.js"
  },
  "/_nuxt/referral.004244e4.svg": {
    "type": "image/svg+xml",
    "etag": "\"72d-xgumIDH59E/p0qpclpAuMeu2iIg\"",
    "mtime": "2024-02-24T11:32:39.572Z",
    "size": 1837,
    "path": "../public/_nuxt/referral.004244e4.svg"
  },
  "/_nuxt/sms.e25c896b.svg": {
    "type": "image/svg+xml",
    "etag": "\"23b-ViPU2NBgVE4RE/sv89XwK9UofF4\"",
    "mtime": "2024-02-24T11:32:39.571Z",
    "size": 571,
    "path": "../public/_nuxt/sms.e25c896b.svg"
  },
  "/_nuxt/star-rate.51bad527.svg": {
    "type": "image/svg+xml",
    "etag": "\"2dde-5DI3y85UKUlMnrkks0uD4zXye4A\"",
    "mtime": "2024-02-24T11:32:39.569Z",
    "size": 11742,
    "path": "../public/_nuxt/star-rate.51bad527.svg"
  },
  "/_nuxt/stegaEncodeSourceMap-De3F_oJN.b4eaf410.js": {
    "type": "application/javascript",
    "etag": "\"1ae8-j+mElrhiwOpiklfUJqdcD6MZCkU\"",
    "mtime": "2024-02-24T11:32:39.568Z",
    "size": 6888,
    "path": "../public/_nuxt/stegaEncodeSourceMap-De3F_oJN.b4eaf410.js"
  },
  "/_nuxt/terms.7941b2cb.js": {
    "type": "application/javascript",
    "etag": "\"6cca-hu6P/yBnalMe982IUbgdCRv8fcQ\"",
    "mtime": "2024-02-24T11:32:39.565Z",
    "size": 27850,
    "path": "../public/_nuxt/terms.7941b2cb.js"
  },
  "/_nuxt/tick-circle.8be52297.svg": {
    "type": "image/svg+xml",
    "etag": "\"22e-2LPaz8ucQwKCnYYihRxG/3RBbrg\"",
    "mtime": "2024-02-24T11:32:39.561Z",
    "size": 558,
    "path": "../public/_nuxt/tick-circle.8be52297.svg"
  },
  "/_nuxt/transaction.fad4b514.svg": {
    "type": "image/svg+xml",
    "etag": "\"3e41e-nTnyPoIWkqEK1Rd/F5KhYBPqlsk\"",
    "mtime": "2024-02-24T11:32:39.559Z",
    "size": 255006,
    "path": "../public/_nuxt/transaction.fad4b514.svg"
  },
  "/_nuxt/vector.1bdf1b2c.svg": {
    "type": "image/svg+xml",
    "etag": "\"3704a-BNC2vVreT2vNrYOZBtgepyqywn4\"",
    "mtime": "2024-02-24T11:32:39.557Z",
    "size": 225354,
    "path": "../public/_nuxt/vector.1bdf1b2c.svg"
  },
  "/_nuxt/xmark.8aa16631.svg": {
    "type": "image/svg+xml",
    "etag": "\"14f-jgn7PVnh8k/qAu1bfBwSrQXJ9Pc\"",
    "mtime": "2024-02-24T11:32:39.554Z",
    "size": 335,
    "path": "../public/_nuxt/xmark.8aa16631.svg"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = {"/_nuxt":{"maxAge":31536000}};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _f4b49z = eventHandler((event) => {
  if (event.node.req.method && !METHODS.has(event.node.req.method)) {
    return;
  }
  let id = decodeURIComponent(
    withLeadingSlash(
      withoutTrailingSlash(parseURL(event.node.req.url).pathname)
    )
  );
  let asset;
  const encodingHeader = String(
    event.node.req.headers["accept-encoding"] || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  if (encodings.length > 1) {
    event.node.res.setHeader("Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      event.node.res.removeHeader("cache-control");
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = event.node.req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    if (!event.handled) {
      event.node.res.statusCode = 304;
      event.node.res.end();
    }
    return;
  }
  const ifModifiedSinceH = event.node.req.headers["if-modified-since"];
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    if (!event.handled) {
      event.node.res.statusCode = 304;
      event.node.res.end();
    }
    return;
  }
  if (asset.type && !event.node.res.getHeader("Content-Type")) {
    event.node.res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag && !event.node.res.getHeader("ETag")) {
    event.node.res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime && !event.node.res.getHeader("Last-Modified")) {
    event.node.res.setHeader("Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !event.node.res.getHeader("Content-Encoding")) {
    event.node.res.setHeader("Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !event.node.res.getHeader("Content-Length")) {
    event.node.res.setHeader("Content-Length", asset.size);
  }
  return readAsset(id);
});

const _lazy_8IgRxN = () => import('../handlers/renderer.mjs').then(function (n) { return n.r; });

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_8IgRxN, lazy: true, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_8IgRxN, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const h3App = createApp({
    debug: destr(false),
    onError: errorHandler
  });
  const router = createRouter$1();
  h3App.use(createRouteRulesHandler());
  const localCall = createCall(toNodeListener(h3App));
  const localFetch = createFetch(localCall, globalThis.fetch);
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(
    eventHandler((event) => {
      event.context.nitro = event.context.nitro || {};
      const envContext = event.node.req.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch
  };
  for (const plugin of plugins) {
    plugin(app);
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

function getGracefulShutdownConfig() {
  return {
    disabled: !!process.env.NITRO_SHUTDOWN_DISABLED,
    signals: (process.env.NITRO_SHUTDOWN_SIGNALS || "SIGTERM SIGINT").split(" ").map((s) => s.trim()),
    timeout: Number.parseInt(process.env.NITRO_SHUTDOWN_TIMEOUT, 10) || 3e4,
    forceExit: !process.env.NITRO_SHUTDOWN_NO_FORCE_EXIT
  };
}
function setupGracefulShutdown(listener, nitroApp) {
  const shutdownConfig = getGracefulShutdownConfig();
  if (shutdownConfig.disabled) {
    return;
  }
  gracefulShutdown(listener, {
    signals: shutdownConfig.signals.join(" "),
    timeout: shutdownConfig.timeout,
    forceExit: shutdownConfig.forceExit,
    onShutdown: async () => {
      await new Promise((resolve) => {
        const timeout = setTimeout(() => {
          console.warn("Graceful shutdown timeout, force exiting...");
          resolve();
        }, shutdownConfig.timeout);
        nitroApp.hooks.callHook("close").catch((err) => {
          console.error(err);
        }).finally(() => {
          clearTimeout(timeout);
          resolve();
        });
      });
    }
  });
}

const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const server = cert && key ? new Server({ key, cert }, toNodeListener(nitroApp.h3App)) : new Server$1(toNodeListener(nitroApp.h3App));
const port = destr(process.env.NITRO_PORT || process.env.PORT) || 3e3;
const host = process.env.NITRO_HOST || process.env.HOST;
const listener = server.listen(port, host, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  const protocol = cert && key ? "https" : "http";
  const addressInfo = listener.address();
  const baseURL = (useRuntimeConfig().app.baseURL || "").replace(/\/$/, "");
  const url = `${protocol}://${addressInfo.family === "IPv6" ? `[${addressInfo.address}]` : addressInfo.address}:${addressInfo.port}${baseURL}`;
  console.log(`Listening ${url}`);
});
trapUnhandledNodeErrors();
setupGracefulShutdown(listener, nitroApp);
const nodeServer = {};

export { useRuntimeConfig as a, getRouteRules as g, nodeServer as n, useNitroApp as u };
//# sourceMappingURL=node-server.mjs.map
