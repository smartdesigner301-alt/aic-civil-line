import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as School, i as Sparkles, n as Users, p as Lightbulb, r as Trophy } from "../_libs/lucide-react.mjs";
import { a as PageHero, t as AboutLayout } from "./site-BfXZKmgq.mjs";
import { t as photos } from "./photos-D3Krks6m.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/mission-values-ni1pMkpp.js
var import_jsx_runtime = require_jsx_runtime();
var values = [
	{
		icon: Lightbulb,
		t: "Innovation",
		d: "Encouraging inquiry, creativity, and conceptual thinking, enabling learners to explore possibilities and develop innovative approaches to problem-solving."
	},
	{
		icon: Users,
		t: "Collaboration",
		d: "Fostering teamwork, respectful communication, and shared responsibility, empowering learners to exchange ideas and learn from diverse perspectives."
	},
	{
		icon: Sparkles,
		t: "Profile Building",
		d: "Developing the IB Learner Profile attributes by nurturing caring, principled, open-minded, reflective, and balanced learners who demonstrate these qualities in their everyday actions."
	},
	{
		icon: School,
		t: "Learning at School",
		d: "Creating engaging, inquiry-based learning experiences that promote learner agency, conceptual understanding, and meaningful connections with the world around them."
	},
	{
		icon: Trophy,
		t: "Academic Excellence",
		d: "Promoting continuous progress and academic achievement through purposeful teaching, differentiated learning experiences, and the development of essential knowledge, skills, and understanding."
	}
];
function Mission() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		title: "Mission & Values",
		breadcrumbParent: "About",
		breadcrumbParentLink: "/about",
		image: photos.stage,
		text: "Learning that transcends geographical boundaries and inspires curious minds."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AboutLayout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "eyebrow",
			children: "AIC-CL Mission Statement"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mt-3 text-4xl",
			children: "Our Mission"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-6 text-lg text-muted-foreground",
			children: "AIC-CL aims to create a learning environment that transcends geographical boundaries, promoting excellence in education through continuous collaboration. Our goal is to nurture learners with refined critical thinking and emotional skills, preparing them to be lifelong learners while creating agency-based learning environments."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-4 text-lg text-muted-foreground",
			children: "We aspire to cultivate individuals who, equipped with a principled and diverse approach, can navigate both national and international settings. Our commitment is to foster global citizens dedicated to fostering a more peaceful world through community engagement, intercultural comprehension, and a profound respect for all forms of life."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-12 bg-primary p-10 text-primary-foreground",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-3xl text-sun",
				children: "Our Vision"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-lg text-primary-foreground/90",
				children: "To inspire a generation of curious, confident, and compassionate learners who embrace inquiry, celebrate diversity, and think beyond boundaries. Through the IB philosophy, we aspire to create a learning community where every child discovers their potential, develops a lifelong love of learning, and grows into a responsible global citizen committed to making a positive difference in the world."
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mt-16 text-4xl",
			children: "Our Core Values"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-muted-foreground",
			children: "AIC Values – IB PYP & EYL"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-8 grid gap-6 sm:grid-cols-2",
			children: values.map((v, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-t-4 border-sun bg-cream p-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-4xl font-black text-primary",
						children: String(i + 1).padStart(2, "0")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-3 text-xl",
						children: v.t
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-muted-foreground",
						children: v.d
					})
				]
			}, v.t))
		})
	] })] });
}
//#endregion
export { Mission as component };
