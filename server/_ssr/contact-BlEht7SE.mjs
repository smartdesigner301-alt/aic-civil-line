import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { f as MapPin, h as GraduationCap, l as MessageCircle, s as Phone } from "../_libs/lucide-react.mjs";
import { a as PageHero } from "./site-BfXZKmgq.mjs";
import { t as photos } from "./photos-D3Krks6m.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-BlEht7SE.js
var import_jsx_runtime = require_jsx_runtime();
var items = [
	{
		icon: Phone,
		t: "Landline",
		v: "041 2540019",
		href: "tel:0412540019"
	},
	{
		icon: MessageCircle,
		t: "WhatsApp",
		v: "+92 300 8660812",
		href: "https://wa.me/923008660812"
	},
	{
		icon: MapPin,
		t: "Location",
		v: "Civil Lines, Faisalabad, Pakistan"
	},
	{
		icon: GraduationCap,
		t: "Eligibility",
		v: "IB PYP Programme – Age 3 to 11 years"
	}
];
function Contact() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		title: "We'd love to meet your family",
		breadcrumbParent: "Contact",
		breadcrumbParentLink: "/contact",
		image: photos.swimming,
		text: "AIC Civil Lines is conveniently situated in a well-connected area of Faisalabad, with easy access to major roads and nearby routes."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "py-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto grid max-w-6xl gap-6 px-6 sm:grid-cols-2",
			children: items.map((i) => {
				const body = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex h-full gap-5 rounded-3xl border bg-card p-8 transition hover:shadow-soft",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-sun text-primary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(i.icon, {})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: i.t
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 font-display text-2xl font-bold",
						children: i.v
					})] })]
				});
				return i.href ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: i.href,
					children: body
				}, i.t) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: body }, i.t);
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto mt-12 max-w-6xl overflow-hidden rounded-3xl px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
				title: "Map",
				className: "h-96 w-full rounded-3xl border-0",
				loading: "lazy",
				src: "https://www.google.com/maps?q=Civil+Lines+Faisalabad&output=embed"
			})
		})]
	})] });
}
//#endregion
export { Contact as component };
