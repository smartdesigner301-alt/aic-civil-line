import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as PageHero, t as AboutLayout } from "./site-BfXZKmgq.mjs";
import { t as photos } from "./photos-D3Krks6m.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/history-BEa7yCo2.js
var import_jsx_runtime = require_jsx_runtime();
function History() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		title: "Our History",
		breadcrumbParent: "About",
		breadcrumbParentLink: "/about",
		image: photos.community,
		text: "A young school with a rich legacy and a global outlook."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AboutLayout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "border-l-4 border-sun pl-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-7xl font-black text-primary",
					children: "2022"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-3xl",
					children: "AIC Civil Lines is established in Faisalabad"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-lg text-muted-foreground",
					children: "AIC, Civil Lines was founded with a commitment to nurturing young learners through the principles and philosophy of the IB Primary Years Programme, with a strong focus on early childhood development and primary education."
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-12 border-l-4 border-primary pl-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-3xl",
				children: "Growing as a learning community"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-lg text-muted-foreground",
				children: "Since then, our community has grown through inquiry, play-based exploration, special interest groups, exhibitions, graduations, and strong partnerships with families — including initiatives such as our Mother Reading Club."
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: photos.graduation,
			alt: "PYP V Exhibition and Prep Graduation",
			loading: "lazy",
			className: "mt-12 aspect-[16/9] w-full object-cover"
		})
	] })] });
}
//#endregion
export { History as component };
