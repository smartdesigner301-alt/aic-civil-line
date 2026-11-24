import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { S as Baby, T as ArrowRight, d as Medal, i as Sparkles, l as MessageCircle, o as Quote, s as Phone, w as ArrowUpRight, x as BookOpen } from "../_libs/lucide-react.mjs";
import { o as aboutLinks } from "./site-BfXZKmgq.mjs";
import { t as photos } from "./photos-D3Krks6m.mjs";
import { n as hos_default, t as ceo_default } from "./hos-Bgq5N3tW.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DonEDrUI.js
var import_jsx_runtime = require_jsx_runtime();
/** Section heading with a faint oversized watermark word behind it (reference-style big type, no overlap). */
function Heading({ mark, eyebrow, title, children, light }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			"aria-hidden": true,
			className: `watermark absolute -top-10 left-0 md:-top-16 ${light ? "!text-primary-foreground" : ""}`,
			children: mark
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: `text-sm font-bold uppercase tracking-[0.2em] ${light ? "text-sun" : "text-primary"}`,
					children: eyebrow
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 max-w-2xl text-4xl md:text-5xl",
					children: title
				}),
				children && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: `mt-4 max-w-2xl text-lg ${light ? "text-primary-foreground/80" : "text-muted-foreground"}`,
					children
				})
			]
		})]
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden bg-primary text-primary-foreground",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: photos.celebration,
					alt: "AIC students celebrating at the PYP Exhibition",
					className: "absolute inset-0 h-full w-full object-cover"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "bg-hero-fade absolute inset-0" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto flex min-h-[640px] max-w-7xl flex-col justify-center px-6 pb-40 pt-20 md:min-h-[720px]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex w-fit items-center gap-2 rounded-full bg-primary-foreground/15 px-4 py-2 text-sm font-medium backdrop-blur",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4 text-sun" }), " IB Primary Years Programme · Est. 2022"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "mt-6 max-w-3xl text-5xl leading-[1.02] md:text-7xl",
							children: [
								"Where curious minds ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sun",
									children: "learn"
								}),
								", explore & grow."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-xl text-lg text-primary-foreground/85",
							children: "AIC Civil Lines nurtures curious, confident, and compassionate young learners through inquiry, creativity, and a lifelong love of learning."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/contact",
								className: "inline-flex items-center gap-2 rounded-full bg-sun px-7 py-4 font-display font-bold text-primary transition hover:gap-4",
								children: ["Apply for Admission ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/about",
								className: "inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 px-7 py-4 font-display font-bold backdrop-blur transition hover:bg-primary-foreground/10",
								children: "Discover AIC"
							})]
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "relative z-10 mx-auto -mt-24 max-w-7xl px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 md:grid-cols-3",
				children: [
					{
						icon: Baby,
						t: "Early Years (EYL)",
						d: "Play-based inquiry for our youngest learners.",
						to: "/campus-information"
					},
					{
						icon: BookOpen,
						t: "Primary Years (PYP)",
						d: "Conceptual, agency-based learning up to age 11.",
						to: "/about"
					},
					{
						icon: Medal,
						t: "Admissions Open",
						d: "IB PYP Programme — age 3 to 11 years.",
						to: "/contact",
						hl: true
					}
				].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: c.to,
					className: `group flex items-start gap-4 rounded-2xl p-6 shadow-soft transition hover:-translate-y-1 ${c.hl ? "bg-sun text-primary" : "bg-card"}`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: `grid h-12 w-12 shrink-0 place-items-center rounded-xl ${c.hl ? "bg-primary text-sun" : "bg-cream text-primary"}`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(c.icon, { className: "h-6 w-6" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-lg",
								children: c.t
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: `mt-1 text-sm ${c.hl ? "text-primary/80" : "text-muted-foreground"}`,
								children: c.d
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-5 w-5 transition group-hover:rotate-45" })
					]
				}, c.t))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative pb-16 pr-16",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: photos.explore,
							alt: "Early years learner exploring textures",
							loading: "lazy",
							className: "aspect-[4/5] w-full rounded-3xl object-cover"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: photos.science,
							alt: "Students in an inquiry lesson",
							loading: "lazy",
							className: "absolute bottom-0 right-0 aspect-square w-1/2 rounded-3xl border-8 border-background object-cover shadow-soft"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute left-6 top-6 rounded-2xl bg-sun px-5 py-4 text-primary shadow-soft",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-4xl font-black leading-none",
								children: "2022"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-bold uppercase tracking-wider",
								children: "Established"
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading, {
						mark: "About",
						eyebrow: "About AIC",
						title: "Inquiry-driven learning, rooted in care",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Established in 2022 in Faisalabad, AIC, Civil Lines is committed to nurturing young learners through the philosophy of the IB Primary Years Programme, with a strong focus on early childhood development and primary education." })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 grid grid-cols-3 gap-4 border-y py-6",
						children: [
							["3–11", "Age range"],
							["5", "Interest groups"],
							["IB", "PYP framework"]
						].map(([n, t]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-3xl font-black text-primary",
							children: n
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground",
							children: t
						})] }, t))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 flex flex-wrap gap-2",
						children: aboutLinks.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: l.to,
							className: "inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-bold transition hover:border-primary hover:bg-primary hover:text-primary-foreground",
							children: [
								l.label,
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-3.5 w-3.5" })
							]
						}, l.to))
					})
				] })]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-cream py-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-end justify-between gap-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading, {
						mark: "Programs",
						eyebrow: "Programs & Learning",
						title: "A learning journey for every stage"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/campus-information",
						className: "inline-flex items-center gap-2 font-display font-bold text-primary",
						children: ["Explore campus life ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 grid gap-6 md:grid-cols-3",
					children: [
						{
							t: "Early Years (EYL)",
							d: "Play-based exploration and purposeful inquiry, building curiosity, confidence, and independence.",
							img: photos.inquiry,
							tag: "Ages 3+"
						},
						{
							t: "Primary Years (PYP)",
							d: "Inquiry-driven, conceptual learning that develops critical thinking and international-mindedness.",
							img: photos.classroom,
							tag: "Up to age 11"
						},
						{
							t: "Special Interest Groups",
							d: "Swimming, Taekwondo, debate, drama, and music — beyond the classroom.",
							img: photos.taekwondo,
							tag: "After-class"
						}
					].map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "group relative h-[460px] overflow-hidden rounded-3xl text-primary-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: p.img,
								alt: p.t,
								loading: "lazy",
								className: "absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "bg-card-fade absolute inset-0" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute left-5 top-5 rounded-full bg-sun px-3 py-1 text-xs font-bold text-primary",
								children: p.tag
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute inset-x-0 bottom-0 p-7",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-2xl",
									children: p.t
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-primary-foreground/85",
									children: p.d
								})]
							})
						]
					}, p.t))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "relative overflow-hidden bg-primary py-28 text-primary-foreground",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-[1.1fr_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading, {
						light: true,
						mark: "Apply",
						eyebrow: "Admissions",
						title: "Joining AIC is simple"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "mt-12 space-y-8",
						children: [
							[
								"01",
								"You Enquire",
								"Call 041 2540019 or message us on WhatsApp to tell us about your child."
							],
							[
								"02",
								"We Connect",
								"Our admissions team contacts you, answers your questions, and arranges a campus visit."
							],
							[
								"03",
								"You Get Ready",
								"Once eligibility (age 3 to 11) is confirmed, your child joins our IB PYP community."
							]
						].map(([n, t, d]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-sun font-display text-xl font-black text-primary",
								children: n
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-xl",
								children: t
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-primary-foreground/75",
								children: d
							})] })]
						}, n))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/contact",
						className: "mt-12 inline-flex items-center gap-2 rounded-full bg-sun px-7 py-4 font-display font-bold text-primary",
						children: ["Admission Details ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: photos.graduation,
						alt: "Prep graduation ceremony",
						loading: "lazy",
						className: "aspect-[4/5] w-full rounded-3xl object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute -bottom-6 -left-6 rounded-2xl bg-card p-6 text-foreground shadow-soft",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-sm font-bold uppercase tracking-wider text-muted-foreground",
							children: "Eligibility"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 font-display text-2xl font-black text-primary",
							children: "Age 3 – 11 years"
						})]
					})]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-end justify-between gap-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading, {
						mark: "Leaders",
						eyebrow: "Our Leadership",
						title: "Guided by purposeful leadership"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/leadership",
						className: "inline-flex items-center gap-2 font-display font-bold text-primary",
						children: ["Read full messages ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 grid gap-6 md:grid-cols-2",
					children: [{
						img: ceo_default,
						n: "Kh. Faisal Abbas",
						r: "CEO, AIC Civil Lines",
						q: "We are shaping not only capable learners but also thoughtful individuals who will contribute positively to their communities and the world."
					}, {
						img: hos_default,
						n: "Raheela Riaz",
						r: "Head of School",
						q: "Children learn best through hands-on activities, inquiry, exploration, and meaningful experiences."
					}].map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/leadership",
						className: "group flex flex-col gap-6 rounded-3xl border bg-card p-6 transition hover:-translate-y-1 hover:shadow-soft sm:flex-row",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: l.img,
							alt: l.n,
							loading: "lazy",
							className: "aspect-[4/5] w-full rounded-2xl object-cover sm:w-44"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, { className: "h-8 w-8 text-sun" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-lg text-muted-foreground",
								children: l.q
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-xl font-bold",
									children: l.n
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted-foreground",
									children: l.r
								})]
							})]
						})]
					}, l.n))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-cream py-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading, {
					mark: "Student Life",
					eyebrow: "Student Life",
					title: "A vibrant and inclusive community"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 grid auto-rows-[200px] grid-cols-2 gap-4 md:grid-cols-4",
					children: [
						{
							src: photos.swimming,
							l: "Swimming",
							c: "md:col-span-2 md:row-span-2"
						},
						{
							src: photos.music,
							l: "Music",
							c: ""
						},
						{
							src: photos.cultural,
							l: "Cultural Day",
							c: ""
						},
						{
							src: photos.stage,
							l: "Drama",
							c: "col-span-2"
						},
						{
							src: photos.sports,
							l: "Sports Day",
							c: "col-span-2"
						},
						{
							src: photos.tkdAwards,
							l: "Taekwondo",
							c: ""
						},
						{
							src: photos.library,
							l: "Library",
							c: ""
						}
					].map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
						className: `group relative overflow-hidden rounded-2xl ${g.c}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: g.src,
							alt: g.l,
							loading: "lazy",
							className: "h-full w-full object-cover transition duration-700 group-hover:scale-110"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
							className: "absolute bottom-3 left-3 rounded-full bg-card/90 px-3 py-1 text-xs font-bold text-foreground backdrop-blur",
							children: g.l
						})]
					}, g.l))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading, {
					mark: "Moments",
					eyebrow: "Events",
					title: "Moments at AIC"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 grid gap-6 md:grid-cols-3",
					children: [
						{
							img: photos.graduation,
							t: "PYP V Exhibition & Prep Graduation",
							d: "Celebrating our learners' inquiry journeys and milestones with families."
						},
						{
							img: photos.stage,
							t: "The Jungle Book Stage Show",
							d: "Drama and music come alive as students perform for the school community."
						},
						{
							img: photos.sports,
							t: "Sports Day",
							d: "Teamwork, physical well-being, and house spirit on the field."
						}
					].map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "group overflow-hidden rounded-3xl border bg-card transition hover:-translate-y-1 hover:shadow-soft",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "overflow-hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: e.img,
								alt: e.t,
								loading: "lazy",
								className: "aspect-[3/2] w-full object-cover transition duration-700 group-hover:scale-105"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-xl",
								children: e.t
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-muted-foreground",
								children: e.d
							})]
						})]
					}, e.t))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "px-6 pb-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-primary text-primary-foreground",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: photos.community,
						alt: "",
						loading: "lazy",
						className: "absolute inset-0 h-full w-full object-cover opacity-30"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "bg-hero-fade absolute inset-0" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative grid gap-10 p-10 md:grid-cols-[1.4fr_1fr] md:items-center md:p-16",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-bold uppercase tracking-[0.2em] text-sun",
								children: "Admissions Open"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 text-4xl md:text-5xl",
								children: "Ready to begin your child's IB journey?"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-lg text-primary-foreground/85",
								children: "IB PYP Programme for ages 3 to 11 — visit our campus in Civil Lines, Faisalabad."
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "https://wa.me/923008660812",
								className: "inline-flex items-center justify-center gap-2 rounded-full bg-sun px-7 py-4 font-display font-bold text-primary",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-5 w-5" }), " WhatsApp +92 300 8660812"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "tel:0412540019",
								className: "inline-flex items-center justify-center gap-2 rounded-full border border-primary-foreground/40 px-7 py-4 font-display font-bold backdrop-blur",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-5 w-5" }), " Call 041 2540019"]
							})]
						})]
					})
				]
			})
		})
	] });
}
//#endregion
export { Index as component };
