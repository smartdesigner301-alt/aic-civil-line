import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { T as ArrowRight, f as MapPin, l as MessageCircle, s as Phone, t as X, u as Menu, y as ChevronDown } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/site-BfXZKmgq.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var logo_default = "/assets/logo-eSjXOqtb.png";
var aboutLinks = [
	{
		to: "/about",
		label: "Overview"
	},
	{
		to: "/leadership",
		label: "Leadership"
	},
	{
		to: "/history",
		label: "History"
	},
	{
		to: "/mission-values",
		label: "Mission & Values"
	},
	{
		to: "/campus-information",
		label: "Campus Information"
	}
];
var academicLinks = [
	{
		to: "/academics",
		label: "Overview"
	},
	{
		to: "/ib-eyl",
		label: "IB-EYL"
	},
	{
		to: "/ib-pyp",
		label: "IB PYP"
	}
];
var mainLinks = [
	{
		to: "/campus-information",
		label: "Campus"
	},
	{
		to: "/leadership",
		label: "Leadership"
	},
	{
		to: "/contact",
		label: "Contact"
	}
];
function Logo({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: logo_default,
		alt: "Angels International College",
		className: `object-contain ${className}`
	});
}
function Header() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const on = () => setScrolled(window.scrollY > 24);
		on();
		window.addEventListener("scroll", on, { passive: true });
		return () => window.removeEventListener("scroll", on);
	}, []);
	const link = "relative rounded-full px-4 py-2 text-sm font-bold text-foreground/80 transition hover:bg-cream hover:text-primary";
	const active = { className: "!bg-primary !text-primary-foreground" };
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-50",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: `hidden overflow-hidden bg-primary text-primary-foreground transition-all duration-300 md:block ${scrolled ? "max-h-0" : "max-h-12"}`,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-7xl items-center justify-between px-6 py-2.5 text-xs",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-6 text-primary-foreground/85",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3.5 w-3.5 text-sun" }), " Civil Lines, Faisalabad"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "tel:0412540019",
							className: "flex items-center gap-1.5 hover:text-sun",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-3.5 w-3.5 text-sun" }), " 041 2540019"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "https://wa.me/923008660812",
							className: "flex items-center gap-1.5 hover:text-sun",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-3.5 w-3.5 text-sun" }), " +92 300 8660812"]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "flex items-center gap-2 font-bold",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 animate-pulse rounded-full bg-sun" }), " Admissions Open · Ages 3 – 11"]
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: `border-b bg-background/90 backdrop-blur-xl transition-shadow duration-300 ${scrolled ? "shadow-soft" : ""}`,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 transition-all duration-300 ${scrolled ? "h-16" : "h-20"}`,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "shrink-0",
						"aria-label": "Angels International College home",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { className: `w-auto transition-all duration-300 ${scrolled ? "h-11" : "h-14 md:h-16"}` })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						className: "hidden items-center gap-1 rounded-full border bg-card/70 p-1.5 lg:flex",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/",
								activeOptions: { exact: true },
								className: link,
								activeProps: active,
								children: "Home"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "group relative",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/about",
									className: `${link} flex items-center`,
									activeProps: active,
									children: ["About ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "ml-1 h-4 w-4 transition group-hover:rotate-180" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "invisible absolute left-1/2 top-full w-72 -translate-x-1/2 translate-y-2 pt-3 opacity-0 transition duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "rounded-2xl border bg-card p-2 shadow-soft",
										children: aboutLinks.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: l.to,
											className: "group/item flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold text-foreground hover:bg-cream hover:text-primary",
											children: [l.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 -translate-x-1 opacity-0 transition group-hover/item:translate-x-0 group-hover/item:opacity-100" })]
										}, l.to))
									})
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "group relative",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/academics",
									className: `${link} flex items-center`,
									activeProps: active,
									children: ["Academics ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "ml-1 h-4 w-4 transition group-hover:rotate-180" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "invisible absolute left-1/2 top-full w-72 -translate-x-1/2 translate-y-2 pt-3 opacity-0 transition duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "rounded-2xl border bg-card p-2 shadow-soft",
										children: academicLinks.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: l.to,
											className: "group/item flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold text-foreground hover:bg-cream hover:text-primary",
											children: [l.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 -translate-x-1 opacity-0 transition group-hover/item:translate-x-0 group-hover/item:opacity-100" })]
										}, l.to))
									})
								})]
							}),
							mainLinks.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: l.to,
								className: link,
								activeProps: active,
								children: l.label
							}, l.to))
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/contact",
							className: "hidden items-center gap-2 rounded-full bg-sun px-5 py-3 text-sm font-extrabold text-primary transition hover:-translate-y-0.5 hover:shadow-soft sm:inline-flex",
							children: ["Apply Now ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "grid h-11 w-11 place-items-center rounded-full bg-primary text-primary-foreground lg:hidden",
							onClick: () => setOpen(!open),
							"aria-label": "Menu",
							children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
						})]
					})
				]
			}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "border-t bg-background px-6 pb-6 pt-3 lg:hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						onClick: () => setOpen(false),
						className: "block rounded-xl px-4 py-3 font-bold hover:bg-cream",
						children: "Home"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "px-4 pb-1 pt-3 text-xs font-extrabold uppercase tracking-widest text-muted-foreground",
						children: "About"
					}),
					aboutLinks.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: l.to,
						onClick: () => setOpen(false),
						className: "block rounded-xl px-4 py-2.5 font-semibold text-foreground/80 hover:bg-cream",
						children: l.label
					}, l.to)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "px-4 pb-1 pt-3 text-xs font-extrabold uppercase tracking-widest text-muted-foreground",
						children: "Academics"
					}),
					academicLinks.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: l.to,
						onClick: () => setOpen(false),
						className: "block rounded-xl px-4 py-2.5 font-semibold text-foreground/80 hover:bg-cream",
						children: l.label
					}, l.to)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "px-4 pb-1 pt-3 text-xs font-extrabold uppercase tracking-widest text-muted-foreground",
						children: "Campus & Contact"
					}),
					mainLinks.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: l.to,
						onClick: () => setOpen(false),
						className: "block rounded-xl px-4 py-2.5 font-semibold text-foreground/80 hover:bg-cream",
						children: l.label
					}, l.to)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/contact",
						onClick: () => setOpen(false),
						className: "mt-4 flex items-center justify-center gap-2 rounded-full bg-sun px-5 py-3 font-extrabold text-primary",
						children: ["Apply Now ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
					})
				]
			})]
		})]
	});
}
function Footer() {
	const year = (/* @__PURE__ */ new Date()).getFullYear();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "relative overflow-hidden bg-primary text-primary-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			"aria-hidden": true,
			className: "pointer-events-none absolute -bottom-10 right-0 select-none font-display text-[22vw] font-black leading-none text-primary-foreground/[0.04]",
			children: "AIC"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-7xl px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-start justify-between gap-6 border-b border-primary-foreground/15 py-14 md:flex-row md:items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow !text-sun",
						children: "Admissions Open"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 max-w-xl text-3xl md:text-4xl",
						children: "Give your child a joyful start to lifelong learning."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "https://wa.me/923008660812",
							className: "inline-flex items-center gap-2 rounded-full bg-sun px-6 py-3.5 font-extrabold text-primary transition hover:-translate-y-0.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-5 w-5" }), " WhatsApp Us"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/contact",
							className: "inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-6 py-3.5 font-bold transition hover:bg-primary-foreground hover:text-primary",
							children: ["Visit Campus ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "lg:col-span-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/",
									className: "inline-block rounded-2xl bg-card px-5 py-4 shadow-soft",
									"aria-label": "Angels International College home",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { className: "h-16 w-auto" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-6 max-w-sm text-sm leading-relaxed text-primary-foreground/75",
									children: "Nurturing curious, confident, and compassionate young learners through the IB Primary Years Programme."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-6 flex gap-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "tel:0412540019",
											"aria-label": "Call",
											className: "grid h-11 w-11 place-items-center rounded-full bg-primary-foreground/10 transition hover:bg-sun hover:text-primary",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "https://wa.me/923008660812",
											"aria-label": "WhatsApp",
											className: "grid h-11 w-11 place-items-center rounded-full bg-primary-foreground/10 transition hover:bg-sun hover:text-primary",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4 w-4" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "https://www.google.com/maps?q=Civil+Lines+Faisalabad",
											target: "_blank",
											rel: "noreferrer",
											"aria-label": "Map",
											className: "grid h-11 w-11 place-items-center rounded-full bg-primary-foreground/10 transition hover:bg-sun hover:text-primary",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4" })
										})
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "lg:col-span-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-lg font-bold",
									children: "About"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 block h-1 w-8 rounded-full bg-sun" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-5 space-y-3 text-sm text-primary-foreground/80",
									children: aboutLinks.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: n.to,
										className: "transition hover:pl-1 hover:text-sun",
										children: n.label
									}) }, n.to))
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "lg:col-span-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-lg font-bold",
									children: "Academics"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 block h-1 w-8 rounded-full bg-sun" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-5 space-y-3 text-sm text-primary-foreground/80",
									children: academicLinks.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: n.to,
										className: "transition hover:pl-1 hover:text-sun",
										children: n.label
									}) }, n.to))
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "lg:col-span-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-lg font-bold",
									children: "School Timings"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 block h-1 w-8 rounded-full bg-sun" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
									className: "mt-5 space-y-3 text-sm text-primary-foreground/80",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex flex-col",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
												className: "text-primary-foreground",
												children: "Early Years"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "8:15 a.m. – 1:30 p.m." })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex flex-col",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
												className: "text-primary-foreground",
												children: "Primary Years"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "8:00 a.m. – 3:00 p.m." })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex flex-col",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
												className: "text-primary-foreground",
												children: "Office"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "7:45 a.m. – 4:00 p.m." })]
										})
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "lg:col-span-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-lg font-bold",
									children: "Get in Touch"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 block h-1 w-8 rounded-full bg-sun" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
									className: "mt-5 space-y-4 text-sm text-primary-foreground/80",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-0.5 h-4 w-4 shrink-0 text-sun" }), " Civil Lines, Faisalabad"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: "tel:0412540019",
											className: "flex gap-2 hover:text-sun",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "mt-0.5 h-4 w-4 shrink-0 text-sun" }), " 041 2540019"]
										}) }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: "https://wa.me/923008660812",
											className: "flex gap-2 hover:text-sun",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "mt-0.5 h-4 w-4 shrink-0 text-sun" }), " +92 300 8660812"]
										}) })
									]
								})
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-center justify-between gap-3 border-t border-primary-foreground/15 py-6 text-xs text-primary-foreground/65 md:flex-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"© ",
						year,
						" Angels International College, Civil Lines. All rights reserved."
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"Developed By",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "https://mastermindlimited.com/",
							target: "_blank",
							rel: "noopener noreferrer",
							className: "font-bold text-sun underline-offset-4 hover:underline",
							children: "Mastermind Limited"
						})
					] })]
				})
			]
		})]
	});
}
/** Inner-page header with breadcrumbs and distinct full-bleed photo */
function PageHero({ title, text, image, breadcrumbParent = "About", breadcrumbParentLink }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden bg-primary text-primary-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: image,
				alt: "",
				className: "absolute inset-0 h-full w-full object-cover opacity-30"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "bg-hero-fade absolute inset-0" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-7xl px-6 py-24 md:py-36",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						"aria-label": "Breadcrumb",
						className: "mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-sun",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/",
								className: "transition hover:text-primary-foreground",
								children: "Home"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-primary-foreground/50",
								children: "/"
							}),
							breadcrumbParent && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [breadcrumbParentLink ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: breadcrumbParentLink,
								className: "transition hover:text-primary-foreground",
								children: breadcrumbParent
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: breadcrumbParent }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-primary-foreground/50",
								children: "/"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-primary-foreground/80",
								children: title
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "max-w-4xl text-5xl md:text-7xl",
						children: title
					}),
					text && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-2xl text-lg text-primary-foreground/90",
						children: text
					})
				]
			})
		]
	});
}
/** Two-column inner page with the About sub-navigation on the side. */
function AboutLayout({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[240px_1fr]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "lg:sticky lg:top-28 lg:self-start",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-3 font-display text-sm font-bold uppercase text-muted-foreground",
				children: "About AIC"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "border-l-2",
				children: aboutLinks.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: l.to,
					className: "-ml-0.5 block border-l-2 border-transparent py-2.5 pl-5 font-bold text-foreground/70 hover:text-primary",
					activeProps: { className: "!border-sun !text-primary" },
					children: l.label
				}) }, l.to))
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children })]
	});
}
/** Two-column inner page with the Academics sub-navigation on the side. */
function AcademicsLayout({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[240px_1fr]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "lg:sticky lg:top-28 lg:self-start",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-3 font-display text-sm font-bold uppercase text-muted-foreground",
				children: "Academics"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "border-l-2",
				children: academicLinks.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: l.to,
					className: "-ml-0.5 block border-l-2 border-transparent py-2.5 pl-5 font-bold text-foreground/70 hover:text-primary",
					activeProps: { className: "!border-sun !text-primary" },
					children: l.label
				}) }, l.to))
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children })]
	});
}
function meta(title, description) {
	return { meta: [
		{ title },
		{
			name: "description",
			content: description
		},
		{
			property: "og:title",
			content: title
		},
		{
			property: "og:description",
			content: description
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] };
}
//#endregion
export { PageHero as a, Header as i, AcademicsLayout as n, aboutLinks as o, Footer as r, meta as s, AboutLayout as t };
