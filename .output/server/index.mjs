globalThis.__nitro_main__ = import.meta.url;
import { t as HookableCore } from "./_libs/hookable.mjs";
import { i as HTTPError, n as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { r as FastResponse } from "./_libs/h3-v2+rou3+srvx.mjs";
// #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
// #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/icon-192.png": {
		"type": "image/png",
		"etag": "\"64aa4-ieK+8SWgUsshV+wGwxnE2binpUw\"",
		"mtime": "2026-11-19T19:43:14.943Z",
		"size": 412324,
		"path": "../public/icon-192.png"
	},
	"/icon-512.png": {
		"type": "image/png",
		"etag": "\"64aa4-ieK+8SWgUsshV+wGwxnE2binpUw\"",
		"mtime": "2026-11-19T19:43:14.975Z",
		"size": 412324,
		"path": "../public/icon-512.png"
	},
	"/favicon.ico": {
		"type": "image/vnd.microsoft.icon",
		"etag": "\"4f95-3RXc3p2mhEAs1WBwaIvE0Y0uu0Y\"",
		"mtime": "2026-11-19T19:43:14.918Z",
		"size": 20373,
		"path": "../public/favicon.ico"
	},
	"/assets/about-Dp31HwSc.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1071-QXhhKMKLDRLFZPAy9ObP8eJ/luI\"",
		"mtime": "2026-11-19T20:34:57.915Z",
		"size": 4209,
		"path": "../public/assets/about-Dp31HwSc.js"
	},
	"/assets/ages._ageId-B0Dfdgd6.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1db-/IyZ6vQ7JB1YwnwwT6/VveaK2Fs\"",
		"mtime": "2026-11-19T20:34:57.915Z",
		"size": 475,
		"path": "../public/assets/ages._ageId-B0Dfdgd6.js"
	},
	"/assets/ages._ageId-BPTe8DEh.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"fbf-niaIlHgx33+7j8MYmvSMR49uUo8\"",
		"mtime": "2026-11-19T20:34:57.915Z",
		"size": 4031,
		"path": "../public/assets/ages._ageId-BPTe8DEh.js"
	},
	"/assets/BobHeader-NCRP4lXc.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"706-YZQaQu8PAstB5jLmrPA0v22LHm8\"",
		"mtime": "2026-11-19T20:34:57.915Z",
		"size": 1798,
		"path": "../public/assets/BobHeader-NCRP4lXc.js"
	},
	"/assets/category._categoryId-BW8GU0e6.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f71-HIs9u5bErgWfNvBa0VxhBxajWMY\"",
		"mtime": "2026-11-19T20:34:57.915Z",
		"size": 3953,
		"path": "../public/assets/category._categoryId-BW8GU0e6.js"
	},
	"/assets/category._categoryId-C1e2gG2Y.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1e2-GR57N+KinU4OSuTPPj+CIqsatQ8\"",
		"mtime": "2026-11-19T20:34:57.915Z",
		"size": 482,
		"path": "../public/assets/category._categoryId-C1e2gG2Y.js"
	},
	"/assets/chama-mascot-_iTym19P.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4f-Gh1Gra1y8oEaHVF5EHKtr8NUwlY\"",
		"mtime": "2026-11-19T20:34:57.915Z",
		"size": 79,
		"path": "../public/assets/chama-mascot-_iTym19P.js"
	},
	"/assets/index-DbDj58um.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"75a12-weYgTXpmf1/h6DAqsJX5r2jWIr0\"",
		"mtime": "2026-11-19T20:34:57.915Z",
		"size": 481810,
		"path": "../public/assets/index-DbDj58um.js"
	},
	"/assets/lessonsExtra-DlgCultM.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3043-rL+q2S6mS2VK++TpzDxH+NtEe5g\"",
		"mtime": "2026-11-19T20:34:57.915Z",
		"size": 12355,
		"path": "../public/assets/lessonsExtra-DlgCultM.js"
	},
	"/assets/link-D5BNCOej.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4e13-6VV/E+6bcL6ARkGaUhO5hyzvObY\"",
		"mtime": "2026-11-19T20:34:57.915Z",
		"size": 19987,
		"path": "../public/assets/link-D5BNCOej.js"
	},
	"/assets/not-found-i5RsCZif.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"76-Trmr7GZIBZuvfg4uM18tBiRtOXg\"",
		"mtime": "2026-11-19T20:34:57.915Z",
		"size": 118,
		"path": "../public/assets/not-found-i5RsCZif.js"
	},
	"/assets/play.dialogues-CYkNoPI0.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"de7-DD8T3gIfUOjhwEqqqpBb4wPhvAA\"",
		"mtime": "2026-11-19T20:34:57.915Z",
		"size": 3559,
		"path": "../public/assets/play.dialogues-CYkNoPI0.js"
	},
	"/assets/play.flashcards-DVNJQlel.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c91-Zi/6bLoAQEtuCHaPqThBNk66zd4\"",
		"mtime": "2026-11-19T20:34:57.915Z",
		"size": 3217,
		"path": "../public/assets/play.flashcards-DVNJQlel.js"
	},
	"/assets/play.grammar-DJmGjCxu.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ad7-Xk1z1Ta5r3cz8QBJQq+t1wjabwQ\"",
		"mtime": "2026-11-19T20:34:57.915Z",
		"size": 2775,
		"path": "../public/assets/play.grammar-DJmGjCxu.js"
	},
	"/assets/play.matching-DhMG9ULZ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c28-RaB4m5rsrZyPdIcObpxk7UoOSEI\"",
		"mtime": "2026-11-19T20:34:57.915Z",
		"size": 3112,
		"path": "../public/assets/play.matching-DhMG9ULZ.js"
	},
	"/assets/play.quiz-BjmQCZ6Y.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f67-lLYOJ1KKo4u1+4zw0oWxWCsGFtc\"",
		"mtime": "2026-11-19T20:34:57.915Z",
		"size": 3943,
		"path": "../public/assets/play.quiz-BjmQCZ6Y.js"
	},
	"/assets/play.spelling-1Kq4Spc9.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b6e-JYMN5uiNlB9EglEazba8BpqdR3M\"",
		"mtime": "2026-11-19T20:34:57.915Z",
		"size": 2926,
		"path": "../public/assets/play.spelling-1Kq4Spc9.js"
	},
	"/assets/preload-helper-D8kLpL39.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"179e-Cg899/7wT/bDIXKIj0JMT8tcaRo\"",
		"mtime": "2026-11-19T20:34:57.915Z",
		"size": 6046,
		"path": "../public/assets/preload-helper-D8kLpL39.js"
	},
	"/assets/chama-mascot-Bu31d1dH.png": {
		"type": "image/png",
		"etag": "\"80a8c-w1elRjh0CX1XqL2LlBFIjRTF+cM\"",
		"mtime": "2026-11-19T20:34:57.929Z",
		"size": 526988,
		"path": "../public/assets/chama-mascot-Bu31d1dH.png"
	},
	"/assets/routes-C8IrQv76.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2711-IBORCEyiIn4pFnoLET0JEm+bWA8\"",
		"mtime": "2026-11-19T20:34:57.915Z",
		"size": 10001,
		"path": "../public/assets/routes-C8IrQv76.js"
	},
	"/manifest.webmanifest": {
		"type": "application/manifest+json",
		"etag": "\"24c-T802dEmMzhX/UQmX+qq4poSPc5E\"",
		"mtime": "2026-11-19T19:43:14.993Z",
		"size": 588,
		"path": "../public/manifest.webmanifest"
	},
	"/assets/stories.index-Dgyl_nTb.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1171-qYNJJhLidcSibM5OYd5VroTpdiY\"",
		"mtime": "2026-11-19T20:34:57.928Z",
		"size": 4465,
		"path": "../public/assets/stories.index-Dgyl_nTb.js"
	},
	"/assets/stories._storyId-DB3buDxw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9ae-k5dCdumDoCCrMetwUCd7yVuDe/I\"",
		"mtime": "2026-11-19T20:34:57.927Z",
		"size": 2478,
		"path": "../public/assets/stories._storyId-DB3buDxw.js"
	},
	"/assets/stories._storyId-Rl8xlkYO.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"172-qsUTlk9OgbbXr5fDUBMrd7v10Xw\"",
		"mtime": "2026-11-19T20:34:57.927Z",
		"size": 370,
		"path": "../public/assets/stories._storyId-Rl8xlkYO.js"
	},
	"/assets/useNavigate-m7q3JFWi.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b8-wUqNguRbttFna6cdwXheXQ3X7UM\"",
		"mtime": "2026-11-19T20:34:57.928Z",
		"size": 184,
		"path": "../public/assets/useNavigate-m7q3JFWi.js"
	},
	"/assets/vocab-BJs4TLDZ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4da1-/GhEtR27352aSrSiCEWyDn71N+0\"",
		"mtime": "2026-11-19T20:34:57.928Z",
		"size": 19873,
		"path": "../public/assets/vocab-BJs4TLDZ.js"
	},
	"/assets/styles-Cn-VJuBe.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"14593-eC6ZWYtF3Q2wQG779YnZ5qHgqPI\"",
		"mtime": "2026-11-19T20:34:57.929Z",
		"size": 83347,
		"path": "../public/assets/styles-Cn-VJuBe.css"
	},
	"/assetlinks.json": {
		"type": "application/json",
		"etag": "\"2a0-XX7IE8TBkj7clWo6tP5UAKE5hDY\"",
		"mtime": "2026-11-19T19:43:14.888Z",
		"size": 672,
		"path": "../public/assetlinks.json"
	},
	"/apple-touch-icon.png": {
		"type": "image/png",
		"etag": "\"64aa4-ieK+8SWgUsshV+wGwxnE2binpUw\"",
		"mtime": "2026-11-19T19:43:14.864Z",
		"size": 412324,
		"path": "../public/apple-touch-icon.png"
	}
};
// #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
// node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
// #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_wU3abP = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_wU3abP
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
// node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
// #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
// #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
// node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
// node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
// node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
export { cloudflare_module_default as default };
