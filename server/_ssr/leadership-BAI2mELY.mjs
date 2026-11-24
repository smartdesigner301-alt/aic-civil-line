import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as PageHero } from "./site-BfXZKmgq.mjs";
import { n as hos_default, t as ceo_default } from "./hos-Bgq5N3tW.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/leadership-BAI2mELY.js
var import_jsx_runtime = require_jsx_runtime();
var team_default = "/assets/team-C1km-LAQ.jpg";
var leaders = [{
	img: ceo_default,
	name: "Kh. Faisal Abbas",
	role: "CEO, AIC Civil Lines",
	title: "CEO Message",
	p: [
		"At AIC Civil Lines, we believe every child deserves an educational journey that inspires curiosity, builds confidence, and unlocks their unique potential. Guided by the philosophy of the International Baccalaureate (IB), we are committed to nurturing young learners through meaningful, inquiry-driven experiences that extend beyond academics.",
		"Our vision is to create a learning community where children develop critical thinking, compassion, creativity, and a sense of responsibility. Through dedicated educators, purposeful leadership, and strong partnerships with families, we aim to lay the foundations for lifelong learning and responsible global citizenship.",
		"At AIC Civil Lines, we are shaping not only capable learners but also thoughtful individuals who will contribute positively to their communities and the world."
	]
}, {
	img: hos_default,
	name: "Kh. harris Abbas",
	role: "Head of School (HOS), AIC Civil Lines",
	title: "Head of School Message",
	p: [
		"At AIC Civil Lines, we believe children learn best through hands-on activities, inquiry, exploration, and meaningful experiences. Our IB Early Years and Primary Years Programme (PYP) encourages curiosity, creativity, and independent thinking in a nurturing environment where every child feels valued.",
		"We consider parents our essential partners in learning. Through active parent collaboration, family engagement, and initiatives such as our Mother Reading Club, we strengthen the connection between home and school, fostering a shared love of learning.",
		"As Head of School, my commitment is to work alongside educators and families to nurture confident, compassionate, and lifelong learners who are ready to explore the world with curiosity and an open mind."
	]
}];
function Leadership() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			title: "Our Leadership",
			breadcrumbParent: "About",
			breadcrumbParentLink: "/about",
			image: hos_default,
			text: "Leadership driven by a shared commitment to purposeful education, thoughtful decision-making, and strong relationships."
		}),
		leaders.map((l, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: i ? "bg-cream py-24" : "py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-7xl items-start gap-14 px-6 lg:grid-cols-[5fr_7fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `relative ${i ? "lg:order-2" : ""}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -bottom-4 -right-4 h-full w-full bg-sun" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: l.img,
						alt: l.name,
						width: 864,
						height: 1024,
						loading: i ? "lazy" : void 0,
						className: "relative aspect-[4/5] w-full object-cover"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: l.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 text-4xl md:text-5xl",
						children: l.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 font-display font-bold text-muted-foreground",
						children: l.role
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 space-y-4 text-lg text-muted-foreground",
						children: l.p.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t }, t))
					})
				] })]
			})
		}, l.name)),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-primary py-24 text-primary-foreground",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-4xl text-sun",
						children: "Leading together"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-lg text-primary-foreground/90",
						children: "At AIC Civil Lines, leadership is driven by a shared commitment to purposeful education, thoughtful decision-making, and the belief that meaningful learning begins with strong relationships. Our Directors, Head of School, and Managers work collectively to shape a school culture that values professional growth, encourages innovative practices, and responds to the evolving needs of young children."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-primary-foreground/80",
						children: "Aligned with the IB EYL and PYP frameworks, we aim to build an environment where educators feel supported, families are valued as partners, and children are encouraged to explore ideas, express their perspectives, and develop the confidence to make informed choices as responsible members of their community."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: team_default,
					alt: "AIC leadership team collaborating",
					loading: "lazy",
					className: "aspect-[16/10] w-full object-cover"
				})]
			})
		})
	] });
}
//#endregion
export { Leadership as component };
