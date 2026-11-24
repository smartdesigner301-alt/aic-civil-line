globalThis.__nitro_main__ = import.meta.url;
import { i as HTTPError, n as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
import { r as FastResponse } from "./_libs/h3-v2+rou3+srvx.mjs";
//#region #nitro-vite-setup
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
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/favicon.png": {
		"type": "image/png",
		"etag": "\"124a-4+54JTq/2UIj/Xju0L0tBzUJ7C4\"",
		"mtime": "2026-11-24T13:58:58.521Z",
		"size": 4682,
		"path": "../public/favicon.png"
	},
	"/logo.png": {
		"type": "image/png",
		"etag": "\"d2eb-/OkNfkaXRfEpGnnA5H77/jVBxvM\"",
		"mtime": "2026-11-24T13:50:36.626Z",
		"size": 53995,
		"path": "../public/logo.png"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"a0-CKGXSIe7TSsqDTmGm/nY1t/o5d0\"",
		"mtime": "2026-11-24T13:58:58.571Z",
		"size": 160,
		"path": "../public/robots.txt"
	},
	"/assets/about-17sH3lOo.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7cf-j9eN9KiL0ZC3TwHt6boPaUnmVLE\"",
		"mtime": "2026-11-24T19:18:43.799Z",
		"size": 1999,
		"path": "../public/assets/about-17sH3lOo.js"
	},
	"/assets/academics-CyKeOuh0.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1b02-mfx3nWcMmVmTlRuCmdCrMtnL3ug\"",
		"mtime": "2026-11-24T19:18:43.799Z",
		"size": 6914,
		"path": "../public/assets/academics-CyKeOuh0.js"
	},
	"/assets/book-open-CdyGtm1Q.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"264-21NdMIgOFTSztnNYz9LWRszpqXs\"",
		"mtime": "2026-11-24T19:18:43.801Z",
		"size": 612,
		"path": "../public/assets/book-open-CdyGtm1Q.js"
	},
	"/assets/campus-information-DVS_9mia.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1234-pa8g3qG2p2PHd+AUVWKifR+BjH0\"",
		"mtime": "2026-11-24T19:18:43.803Z",
		"size": 4660,
		"path": "../public/assets/campus-information-DVS_9mia.js"
	},
	"/assets/contact-Clygute2.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"794-EnHUE1l/7QZVeEPO8Pmgkc1d+RM\"",
		"mtime": "2026-11-24T19:18:43.805Z",
		"size": 1940,
		"path": "../public/assets/contact-Clygute2.js"
	},
	"/assets/cultural-day-DsgdyoWc.jpg": {
		"type": "image/jpeg",
		"etag": "\"44560-GewRvwthpLJGg0kszCZpe7KY6g8\"",
		"mtime": "2026-11-24T19:18:43.841Z",
		"size": 279904,
		"path": "../public/assets/cultural-day-DsgdyoWc.jpg"
	},
	"/assets/early-years-explore-BCnDeoSR.jpg": {
		"type": "image/jpeg",
		"etag": "\"79ad0-/2t6mICrUrlxjt0XBYAVjVn2dV4\"",
		"mtime": "2026-11-24T19:18:43.891Z",
		"size": 498384,
		"path": "../public/assets/early-years-explore-BCnDeoSR.jpg"
	},
	"/assets/graduation-celebration-o-jldGWk.jpg": {
		"type": "image/jpeg",
		"etag": "\"5d07b-czSGj95pGRC0xGccQghMkIYEgLQ\"",
		"mtime": "2026-11-24T19:18:43.939Z",
		"size": 381051,
		"path": "../public/assets/graduation-celebration-o-jldGWk.jpg"
	},
	"/assets/graduation-GPOb81gJ.jpg": {
		"type": "image/jpeg",
		"etag": "\"3ff56-om0DOaS5nyXBOdDTAZmp8eVsPh8\"",
		"mtime": "2026-11-24T19:18:43.937Z",
		"size": 261974,
		"path": "../public/assets/graduation-GPOb81gJ.jpg"
	},
	"/assets/history-8AV--Y6_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"60b-eifn5BRZCuJ9w/kP9Zlyt34njXs\"",
		"mtime": "2026-11-24T19:18:43.807Z",
		"size": 1547,
		"path": "../public/assets/history-8AV--Y6_.js"
	},
	"/assets/hos-CpBxLItT.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"50-Uw3Xy7p5R7oNkDN3WRICfEN7aOU\"",
		"mtime": "2026-11-24T19:18:43.807Z",
		"size": 80,
		"path": "../public/assets/hos-CpBxLItT.js"
	},
	"/assets/ib-eyl-qWg-LYNO.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1b7e-JMo1g8Yp+tJPAg0SJLzbhQOS18Y\"",
		"mtime": "2026-11-24T19:18:43.809Z",
		"size": 7038,
		"path": "../public/assets/ib-eyl-qWg-LYNO.js"
	},
	"/assets/hos-01dMxra-.webp": {
		"type": "image/webp",
		"etag": "\"d3e8-VkFdzZpvH+8HA3x/JRF4zJrhvR8\"",
		"mtime": "2026-11-24T19:18:43.941Z",
		"size": 54248,
		"path": "../public/assets/hos-01dMxra-.webp"
	},
	"/assets/ib-pyp-ChTy32Nt.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1cc7-s98yw596ZlPqW/O8QDnygg5FVlk\"",
		"mtime": "2026-11-24T19:18:43.811Z",
		"size": 7367,
		"path": "../public/assets/ib-pyp-ChTy32Nt.js"
	},
	"/assets/leadership-D7qssYxD.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1122-/DIvC4Y5GVixZEL+K3I9Gg2ommA\"",
		"mtime": "2026-11-24T19:18:43.815Z",
		"size": 4386,
		"path": "../public/assets/leadership-D7qssYxD.js"
	},
	"/assets/logo-eSjXOqtb.png": {
		"type": "image/png",
		"etag": "\"d2eb-/OkNfkaXRfEpGnnA5H77/jVBxvM\"",
		"mtime": "2026-11-24T19:18:43.949Z",
		"size": 53995,
		"path": "../public/assets/logo-eSjXOqtb.png"
	},
	"/assets/index-GV8p3ivN.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5f967-7t94DZNdgDgaA7q5LjXD4/Ko7U0\"",
		"mtime": "2026-11-24T19:18:43.793Z",
		"size": 391527,
		"path": "../public/assets/index-GV8p3ivN.js"
	},
	"/assets/library-CzE4BF3y.jpg": {
		"type": "image/jpeg",
		"etag": "\"38fb8-6I3BpPZlcU0Wcr3L/uZ5XpavrEk\"",
		"mtime": "2026-11-24T19:18:43.947Z",
		"size": 233400,
		"path": "../public/assets/library-CzE4BF3y.jpg"
	},
	"/assets/classroom-DSRGaJhp.jpg": {
		"type": "image/jpeg",
		"etag": "\"f1a2b-3uIV69t8PsdmHyiVq2L/FdYPwnM\"",
		"mtime": "2026-11-24T19:18:43.835Z",
		"size": 989739,
		"path": "../public/assets/classroom-DSRGaJhp.jpg"
	},
	"/assets/inquiry-play-Dr6k2KBc.jpg": {
		"type": "image/jpeg",
		"etag": "\"e63f7-wXy/iaBVHrJX150+YOcuUM30DSM\"",
		"mtime": "2026-11-24T19:18:43.943Z",
		"size": 943095,
		"path": "../public/assets/inquiry-play-Dr6k2KBc.jpg"
	},
	"/assets/exhibition-CEKI_TFT.jpg": {
		"type": "image/jpeg",
		"etag": "\"152c75-KIgZjFc7fnQGKhKD/A4HxrLnRLU\"",
		"mtime": "2026-11-24T19:18:43.903Z",
		"size": 1387637,
		"path": "../public/assets/exhibition-CEKI_TFT.jpg"
	},
	"/assets/mission-values-CY3R2OfI.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1246-6Lsys8m3S6K2r14b0spNY9+P0ZY\"",
		"mtime": "2026-11-24T19:18:43.815Z",
		"size": 4678,
		"path": "../public/assets/mission-values-CY3R2OfI.js"
	},
	"/assets/photos-BTRQOFLY.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"354-gxJoIF0hv2r6VRgSczQHPotXpfo\"",
		"mtime": "2026-11-24T19:18:43.819Z",
		"size": 852,
		"path": "../public/assets/photos-BTRQOFLY.js"
	},
	"/assets/music-BNOoiW0-.jpg": {
		"type": "image/jpeg",
		"etag": "\"45882-bS6TnyYhcEasb2SeMW7r7Qr40yc\"",
		"mtime": "2026-11-24T19:18:43.951Z",
		"size": 284802,
		"path": "../public/assets/music-BNOoiW0-.jpg"
	},
	"/assets/routes-CiQkOFut.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3bde-jzBwECSdl5eKagaKvm+EaC5hYHQ\"",
		"mtime": "2026-11-24T19:18:43.819Z",
		"size": 15326,
		"path": "../public/assets/routes-CiQkOFut.js"
	},
	"/assets/sparkles-UUfFnoxf.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1e3-sssDJzGVrQz08DiB1nXZy/yWChM\"",
		"mtime": "2026-11-24T19:18:43.821Z",
		"size": 483,
		"path": "../public/assets/sparkles-UUfFnoxf.js"
	},
	"/assets/prefect-DkQ4AEwC.jpg": {
		"type": "image/jpeg",
		"etag": "\"77ae3-IL/f7g/+dHlF8HWVmPEc21vFjGE\"",
		"mtime": "2026-11-24T19:18:43.953Z",
		"size": 490211,
		"path": "../public/assets/prefect-DkQ4AEwC.jpg"
	},
	"/assets/styles-DJP8skEg.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"150d0-5klygGe+2NKyCdsjNZ2Tlzsr4AY\"",
		"mtime": "2026-11-24T19:18:43.961Z",
		"size": 86224,
		"path": "../public/assets/styles-DJP8skEg.css"
	},
	"/assets/stage-show-D4lNp4N-.jpg": {
		"type": "image/jpeg",
		"etag": "\"45347-iuZFmmV+6+CnaXxf2y98KVrJ9Os\"",
		"mtime": "2026-11-24T19:18:43.957Z",
		"size": 283463,
		"path": "../public/assets/stage-show-D4lNp4N-.jpg"
	},
	"/assets/sports-day-UflnK7kw.jpg": {
		"type": "image/jpeg",
		"etag": "\"6dd84-tHnf+urhTFCwAF1GlSZ43rDKYaE\"",
		"mtime": "2026-11-24T19:18:43.955Z",
		"size": 449924,
		"path": "../public/assets/sports-day-UflnK7kw.jpg"
	},
	"/assets/ceo-DrClQ8UU.png": {
		"type": "image/png",
		"etag": "\"22dd71-edjzY8jkP5LWem6uCw2YFpxqV04\"",
		"mtime": "2026-11-24T19:18:43.833Z",
		"size": 2284913,
		"path": "../public/assets/ceo-DrClQ8UU.png"
	},
	"/assets/swim-lesson-x5Na4N1-.jpg": {
		"type": "image/jpeg",
		"etag": "\"33031-DL2FifjyisHhRQBvaSsiEubngHk\"",
		"mtime": "2026-11-24T19:18:43.963Z",
		"size": 208945,
		"path": "../public/assets/swim-lesson-x5Na4N1-.jpg"
	},
	"/assets/swimming-B9jbRSJ6.jpg": {
		"type": "image/jpeg",
		"etag": "\"3d548-jC/BIK8ZV2lHOHbzYeZ53g/tu+o\"",
		"mtime": "2026-11-24T19:18:43.965Z",
		"size": 251208,
		"path": "../public/assets/swimming-B9jbRSJ6.jpg"
	},
	"/assets/taekwondo-DzCQ_IXE.jpg": {
		"type": "image/jpeg",
		"etag": "\"498d9-0LUyyqVNCreWHIvwWz054feYL14\"",
		"mtime": "2026-11-24T19:18:43.967Z",
		"size": 301273,
		"path": "../public/assets/taekwondo-DzCQ_IXE.jpg"
	},
	"/assets/teacher-lesson-DCnK1Jjk.jpg": {
		"type": "image/jpeg",
		"etag": "\"39131-V5CwWnzSgUgYH5mInjrXQypjESA\"",
		"mtime": "2026-11-24T19:18:43.969Z",
		"size": 233777,
		"path": "../public/assets/teacher-lesson-DCnK1Jjk.jpg"
	},
	"/assets/users-Bx3V5VPV.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"127-at7NQCdTX6IBzIt9txOPv0LX+jg\"",
		"mtime": "2026-11-24T19:18:43.823Z",
		"size": 295,
		"path": "../public/assets/users-Bx3V5VPV.js"
	},
	"/assets/team-C1km-LAQ.jpg": {
		"type": "image/jpeg",
		"etag": "\"4d137-/Oeb6BF5GtB10uJn9HhQV2obHEE\"",
		"mtime": "2026-11-24T19:18:43.971Z",
		"size": 315703,
		"path": "../public/assets/team-C1km-LAQ.jpg"
	},
	"/assets/science-inquiry-DLTmS5Ur.jpg": {
		"type": "image/jpeg",
		"etag": "\"9abdb-/ABSzXChet9HK9YcThMTIji6+UE\"",
		"mtime": "2026-11-24T19:18:43.953Z",
		"size": 633819,
		"path": "../public/assets/science-inquiry-DLTmS5Ur.jpg"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
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
var _lazy_RUKwfg = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_RUKwfg
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
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
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
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
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
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
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
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
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
