import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as PageHero, t as AboutLayout } from "./site-BfXZKmgq.mjs";
import { t as photos } from "./photos-D3Krks6m.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/campus-information-MPai9vir.js
var import_jsx_runtime = require_jsx_runtime();
var timings = [
	{
		t: "Early Years (EYL)",
		rows: [["Monday–Thursday", "8:15 a.m. – 1:30 p.m."], ["Friday", "8:15 a.m. – 12:00 p.m."]]
	},
	{
		t: "Primary Years (PYP)",
		rows: [["Monday–Thursday", "8:00 a.m. – 3:00 p.m."], ["Friday", "8:15 a.m. – 12:30 p.m."]]
	},
	{
		t: "Office Hours",
		rows: [
			["Monday–Friday", "7:45 a.m. – 4:00 p.m."],
			["Saturday", "8:00 a.m. – 2:00 p.m."],
			["Sunday", "Closed"]
		]
	}
];
function Campus() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		title: "Campus Information",
		breadcrumbParent: "About",
		breadcrumbParentLink: "/about",
		image: photos.sports,
		text: "An inclusive, internationally minded learning community where young children learn through play, inquiry, and exploration."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AboutLayout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "text-4xl",
			children: "Our Campus"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-6 text-lg text-muted-foreground",
			children: "AIC Civil Lines fosters an inclusive, internationally minded learning community where young children learn through play, inquiry, and exploration. Guided by the IB philosophy, we prioritize each child’s holistic development, health, and well-being, fostering curiosity, confidence, and a balanced approach to lifelong learning."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-4 text-lg text-muted-foreground",
			children: "Located in Faisalabad, AIC Civil Lines offers a purpose-built campus designed to meet the learning and developmental needs of Early Years Learners (EYLs) and Primary Years Programme (PYP) students. Students are encouraged to engage with their surroundings, participate in meaningful learning experiences, and develop a sense of belonging within an inclusive community that values curiosity, innovation, and lifelong learning."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-10 grid grid-cols-3 gap-4",
			children: [
				photos.inquiry,
				photos.library,
				photos.explore
			].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: s,
				alt: "Campus life",
				loading: "lazy",
				className: "aspect-square w-full object-cover"
			}, s))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mt-16 text-4xl",
			children: "Student Life"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-4 text-lg text-muted-foreground",
			children: "At AIC Civil Lines, student life is a vibrant blend of learning, creativity, and meaningful experiences. Students build lifelong friendships while engaging in activities that reflect their interests, passions, and perspectives."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-10 bg-primary p-10 text-primary-foreground",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-3xl text-sun",
					children: "Special Interest Groups (SIGs)"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-primary-foreground/90",
					children: "Alongside inquiry-based learning, students engage in swimming, Taekwondo, debate, drama, and music, developing physical well-being, confidence, communication, creativity, and collaboration in alignment with the IB philosophy."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 flex flex-wrap gap-3",
					children: [
						"Swimming",
						"Taekwondo",
						"Debate",
						"Drama",
						"Music"
					].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "bg-sun px-4 py-2 text-sm font-bold text-primary",
						children: s
					}, s))
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4 grid grid-cols-2 gap-4 md:grid-cols-4",
			children: [
				photos.swimLesson,
				photos.taekwondo,
				photos.music,
				photos.stage
			].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: s,
				alt: "Special interest group",
				loading: "lazy",
				className: "aspect-square w-full object-cover"
			}, s))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mt-16 text-4xl",
			children: "Campus Timings"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-4 text-muted-foreground",
			children: "Our school timings are designed to support age-appropriate learning experiences and a balanced routine for all learners."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-8 grid gap-6 md:grid-cols-3",
			children: timings.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-t-4 border-sun bg-cream p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-xl",
					children: g.t
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 divide-y",
					children: g.rows.map(([d, h]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "py-3 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block font-bold",
							children: d
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted-foreground",
							children: h
						})]
					}, d))
				})]
			}, g.t))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mt-16 text-4xl",
			children: "Location & Contact"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-4 text-lg text-muted-foreground",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
				className: "text-foreground",
				children: "Location:"
			}), " Civil Lines, Faisalabad, Pakistan"]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-2 text-lg text-muted-foreground",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
				className: "text-foreground",
				children: "Accessibility:"
			}), " AIC Civil Lines is conveniently situated in a well-connected area of Faisalabad, with easy access to major roads and nearby routes, ensuring convenient travel for students, parents, and visitors."]
		})
	] })] });
}
//#endregion
export { Campus as component };
