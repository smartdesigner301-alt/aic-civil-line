import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as PageHero, t as AboutLayout } from "./site-BfXZKmgq.mjs";
import { t as photos } from "./photos-D3Krks6m.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-DQw1qYy8.js
var import_jsx_runtime = require_jsx_runtime();
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		title: "School Overview",
		breadcrumbParent: "About",
		breadcrumbParentLink: "/about",
		image: photos.classroom,
		text: "Nurturing curious, confident, and compassionate young learners through the IB PYP since 2022."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AboutLayout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "text-4xl",
			children: "About Angels International College"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-6 text-lg text-muted-foreground",
			children: "Established in 2022 in Faisalabad, AIC, Civil Lines is committed to nurturing young learners through the principles and philosophy of the International Baccalaureate (IB) Primary Years Programme (PYP), with a strong focus on early childhood development and primary education."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-4 text-lg text-muted-foreground",
			children: "We provide a nurturing, inquiry-driven, and inclusive learning environment where curiosity is encouraged, individual strengths are celebrated, and learning is connected to real-life experiences. Through play-based exploration, conceptual understanding, and purposeful inquiry, we empower children to become confident, independent thinkers who are caring, principled, and open-minded."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-10 grid gap-4 sm:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: photos.science,
				alt: "Students in an inquiry lesson",
				loading: "lazy",
				className: "aspect-[4/3] w-full object-cover"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: photos.teacher,
				alt: "Teacher guiding learners",
				loading: "lazy",
				className: "aspect-[4/3] w-full object-cover"
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-10 bg-primary p-10 text-primary-foreground",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-2xl font-bold",
				children: "“AIC, Civil Lines nurtures curious, confident, and compassionate young learners through the IB PYP, fostering inquiry, creativity, international-mindedness, and a lifelong love of learning.”"
			})
		})
	] })] });
}
//#endregion
export { About as component };
