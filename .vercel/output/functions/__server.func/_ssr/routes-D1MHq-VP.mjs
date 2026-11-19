import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as Check, E as Bell, S as ChevronDown, T as CalendarDays, _ as Ellipsis, a as Trophy, b as Clock, c as Sparkles, d as ScanLine, f as Scale, g as Flame, h as IdCard, i as User, l as Snowflake, m as Leaf, n as X, p as Mars, r as Wallet, s as Timer, t as Zap, u as Search, v as Dumbbell, w as ChartColumn, x as ChevronRight, y as Crown } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-D1MHq-VP.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var MEMBER = {
	nameA: "Ashwani Kumar Sharma",
	nameB: "Vishwakarma",
	id: "BG215",
	age: "28 Yrs",
	sex: "Male",
	plan: "Gold Plan",
	checkIn: "16 Oct 2026 · 07:12 AM",
	expires: "24 Oct 2026",
	daysLeft: 8,
	membershipDone: 22,
	membershipTotal: 30,
	workoutMin: 58,
	weight: "69.5 kg",
	delta: "-0.8 kg",
	due: 500
};
var OCT_HOLIDAY = /* @__PURE__ */ new Set([
	4,
	11,
	18,
	25
]);
var OCT_LATE = /* @__PURE__ */ new Set([10, 21]);
var OCT_ABSENT = /* @__PURE__ */ new Set([23, 24]);
var MONTHS = [
	{
		id: 9,
		label: "September 2026"
	},
	{
		id: 10,
		label: "October 2026"
	},
	{
		id: 11,
		label: "November 2026"
	}
];
var RAIL = [
	{
		id: "cal",
		label: "Cal",
		icon: CalendarDays
	},
	{
		id: "trend",
		label: "Trend",
		icon: ChartColumn
	},
	{
		id: "history",
		label: "History",
		icon: Clock
	},
	{
		id: "insights",
		label: "Insights",
		icon: Sparkles
	},
	{
		id: "more",
		label: "More",
		icon: Ellipsis
	}
];
var MARK_COLOR = {
	present: "#1f9d4c",
	late: "#f5c400",
	absent: "#ef3b3b",
	holiday: "#7c3aed",
	idle: "#d1d5db"
};
function markFor(month, day) {
	if (month === 11) return "idle";
	if (month === 10) {
		if (OCT_HOLIDAY.has(day)) return "holiday";
		if (OCT_LATE.has(day)) return "late";
		if (OCT_ABSENT.has(day)) return "absent";
		return "present";
	}
	if (new Date(2026, month - 1, day).getDay() === 0) return "holiday";
	if (day === 11 || day === 18) return "absent";
	if (day === 4 || day === 22) return "late";
	return "present";
}
function monthStats(month) {
	const count = new Date(2026, month, 0).getDate();
	const marks = Array.from({ length: count }, (_, i) => markFor(month, i + 1));
	const tally = {
		present: 0,
		late: 0,
		absent: 0,
		holiday: 0,
		idle: 0
	};
	for (const m of marks) tally[m] += 1;
	const tracked = tally.present + tally.late + tally.absent + tally.holiday;
	const attended = tally.present + tally.late;
	const rate = tracked ? Math.round(attended / tracked * 100) : 0;
	const pct = (n) => tracked ? Math.round(n / tracked * 100) : 0;
	return {
		count,
		marks,
		tally,
		tracked,
		attended,
		rate,
		pct
	};
}
function Laurel({ flip }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		className: flip ? "m-laurel flip" : "m-laurel",
		viewBox: "0 0 36 64",
		"aria-hidden": true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M20 62c1-14 6-24 8-40",
			stroke: "#e8c56a",
			strokeWidth: "1.4",
			fill: "none",
			strokeLinecap: "round"
		}), [
			[
				18,
				10,
				-50
			],
			[
				14,
				18,
				-38
			],
			[
				12,
				26,
				-28
			],
			[
				11,
				34,
				-18
			],
			[
				12,
				42,
				-8
			],
			[
				14,
				50,
				2
			],
			[
				17,
				57,
				12
			]
		].map(([x, y, r]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
			cx: x,
			cy: y,
			rx: "7",
			ry: "3.1",
			fill: "#f0c14b",
			transform: `rotate(${r} ${x} ${y})`
		}, `${x}-${y}`))]
	});
}
function LogoMark() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		width: "22",
		height: "22",
		viewBox: "0 0 24 24",
		"aria-hidden": true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M4 9h3v6H4zM10.5 5h3v14h-3zM17 8h3v8h-3z",
			fill: "#f6c543"
		})
	});
}
function MemberDashboard() {
	const [theme, setTheme] = (0, import_react.useState)("crimson");
	const [section, setSection] = (0, import_react.useState)("cal");
	const [month, setMonth] = (0, import_react.useState)(10);
	const [monthOpen, setMonthOpen] = (0, import_react.useState)(false);
	const [sheet, setSheet] = (0, import_react.useState)(null);
	const [slide, setSlide] = (0, import_react.useState)(0);
	const [paid, setPaid] = (0, import_react.useState)(false);
	const [frozen, setFrozen] = (0, import_react.useState)(false);
	const [ordered, setOrdered] = (0, import_react.useState)(false);
	const [readAlerts, setReadAlerts] = (0, import_react.useState)(false);
	const [query, setQuery] = (0, import_react.useState)("");
	const [day, setDay] = (0, import_react.useState)(16);
	const [toast, setToast] = (0, import_react.useState)(null);
	const stats = (0, import_react.useMemo)(() => monthStats(month), [month]);
	const monthLabel = MONTHS.find((m) => m.id === month)?.label ?? "October 2026";
	const lead = (new Date(2026, month - 1, 1).getDay() + 6) % 7;
	(0, import_react.useEffect)(() => {
		const timer = window.setInterval(() => setSlide((s) => (s + 1) % 3), 4500);
		return () => window.clearInterval(timer);
	}, [slide]);
	(0, import_react.useEffect)(() => {
		if (!toast) return;
		const timer = window.setTimeout(() => setToast(null), 2200);
		return () => window.clearTimeout(timer);
	}, [toast]);
	function ping(message) {
		setToast(message);
	}
	function openIntel(next) {
		setSection(next);
		document.getElementById("intel")?.scrollIntoView({
			behavior: "smooth",
			block: "start"
		});
	}
	const rows = [
		{
			mark: "present",
			label: "Present"
		},
		{
			mark: "late",
			label: "Late"
		},
		{
			mark: "absent",
			label: "Absent"
		},
		{
			mark: "holiday",
			label: "Holiday"
		}
	];
	const history = stats.marks.map((mark, index) => ({
		day: index + 1,
		mark
	})).filter((item) => item.mark === "present" || item.mark === "late").reverse().slice(0, 8);
	const quick = [
		{
			label: "Payment · ₹500",
			sheet: "pay",
			show: "pay"
		},
		{
			label: "Attendance calendar",
			sheet: null,
			show: "cal"
		},
		{
			label: "Workout · 58 min",
			sheet: null,
			show: "trend"
		},
		{
			label: "Body · 69.5 kg",
			sheet: "body",
			show: "body"
		},
		{
			label: "Protein Burger · 50% off",
			sheet: "order",
			show: "order"
		},
		{
			label: "Member QR pass",
			sheet: "qr",
			show: "qr"
		}
	].filter((item) => item.label.toLowerCase().includes(query.toLowerCase().trim()));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "m-stage",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "m-phone",
			"data-theme": theme,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "m-scroll",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
							className: "m-top",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "m-logo",
									"aria-hidden": true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogoMark, {})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "m-brand",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Laurel, {}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "m-word",
											children: ["BAD ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "GYM" })]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "m-tag",
											children: "Member Intelligence"
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Laurel, { flip: true })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "m-actions",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											className: "m-iconbtn",
											type: "button",
											"aria-label": "Search",
											onClick: () => setSheet("search"),
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { size: 18 })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											className: "m-iconbtn",
											type: "button",
											"aria-label": readAlerts ? "Alerts" : "3 alerts",
											onClick: () => {
												setReadAlerts(true);
												setSheet("alerts");
											},
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { size: 18 }), !readAlerts && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "m-badge",
												children: "3"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											className: "m-iconbtn",
											type: "button",
											"aria-label": "Open member QR",
											onClick: () => setSheet("qr"),
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScanLine, { size: 18 })
										})
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "m-flare" }),
						frozen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "m-frozen-banner",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Snowflake, { size: 14 }), " Membership frozen · resumes when you unfreeze"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "m-card",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "m-card-top",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											className: "m-avatar",
											src: "/assets/member-portrait.png",
											alt: "Ashwani Kumar Sharma Vishwakarma"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "m-ident",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "m-pills",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
														type: "button",
														className: frozen ? "m-chip frozen" : "m-chip check",
														onClick: () => ping(frozen ? "Membership is frozen" : `Checked in ${MEMBER.checkIn}`),
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { size: 11 }),
															" ",
															frozen ? "FROZEN" : "CHECKED-IN"
														]
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "m-chip date",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { size: 11 }),
															" ",
															MEMBER.checkIn
														]
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
													className: "m-name",
													children: [
														MEMBER.nameA,
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
														MEMBER.nameB
													]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
													className: "m-meta",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IdCard, { size: 12 }),
															" ",
															MEMBER.id
														] }),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "m-dot" }),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { size: 12 }),
															" ",
															MEMBER.age
														] }),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "m-dot" }),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mars, { size: 12 }),
															" ",
															MEMBER.sex
														] })
													]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "m-badges",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "m-pill ok",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { size: 12 }), " Active"]
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "m-pill gold",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crown, { size: 12 }),
															" ",
															MEMBER.plan
														]
													})]
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											className: "m-qr",
											type: "button",
											"aria-label": "Member QR",
											onClick: () => setSheet("qr"),
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: "/assets/member-qr.png",
												alt: ""
											})
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "m-payrow",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										className: "m-paytile",
										type: "button",
										onClick: () => setSheet("pay"),
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "ico",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wallet, { size: 16 })
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "Payment" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
												className: paid ? "paid" : void 0,
												children: paid ? "₹500 Paid" : "₹500 Due"
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
												className: "m-chev",
												size: 16
											})
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										className: "m-paytile",
										type: "button",
										onClick: () => setSheet("expiry"),
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "ico cal",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { size: 16 })
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("small", { children: ["Expires: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
												style: { color: "#9a3412" },
												children: MEMBER.expires
											})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("em", { children: [
												"(",
												MEMBER.daysLeft,
												" Days Left)"
											] })] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
												className: "m-chev",
												size: 16
											})
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "m-mem",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "m-mem-label",
										children: ["Membership ", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("b", { children: [
											MEMBER.membershipDone,
											" / ",
											MEMBER.membershipTotal,
											" Days"
										] })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "m-track",
										"aria-hidden": true,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "m-fill",
											style: { ["--w"]: "73%" }
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "m-pct",
											children: "73%"
										})]
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							className: "m-promo",
							"aria-label": "Sponsored offers",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "m-sponsored",
									children: "Sponsored"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "m-slide",
									children: [
										slide === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											className: "m-promo-img",
											src: "/assets/promo-festival.png",
											alt: "Amazon Great Indian Festival, up to 40% off fitness and wellness"
										}),
										slide === 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "m-slide-native",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "m-kicker",
													children: "AMAZON"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Big Billion Sale" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Up to 40% OFF · Fitness Gear" })
											] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												className: "m-shop",
												type: "button",
												onClick: () => setSheet("store"),
												children: "Shop Now"
											})]
										}),
										slide === 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "m-slide-native",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "m-kicker",
													children: "BAD GYM LAB"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Creatine Stack" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "30% off this week · unflavored" })
											] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												className: "m-shop",
												type: "button",
												onClick: () => setSheet("store"),
												children: "Shop Now"
											})]
										})
									]
								}, slide),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "m-dots",
									children: [
										0,
										1,
										2
									].map((index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										"aria-label": `Offer ${index + 1}`,
										"aria-current": slide === index,
										onClick: () => setSlide(index)
									}, index))
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							className: "m-stats",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									className: "m-stat att",
									type: "button",
									onClick: () => openIntel("cal"),
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "lbl",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { size: 12 }), " Attendance"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "81%" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", {
											className: "m-up",
											children: "↑ +6%"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									className: "m-stat",
									type: "button",
									onClick: () => openIntel("trend"),
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "lbl",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dumbbell, {
												size: 12,
												color: "#7c3aed"
											}), " Workout"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "58 min" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", {
											className: "m-up",
											children: "↑ +12%"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									className: "m-stat",
									type: "button",
									onClick: () => setSheet("pay"),
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "lbl",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wallet, {
												size: 12,
												color: "#e11d48"
											}), " Payment"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
											className: paid ? "m-up" : "m-due",
											children: paid ? "Paid" : "₹500"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: paid ? "Clear" : "Due" })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									className: "m-stat",
									type: "button",
									onClick: () => setSheet("body"),
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "lbl",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scale, {
												size: 12,
												color: "#2563eb"
											}), " Body"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "69.5 kg" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", {
											className: "m-down",
											children: "↓ -0.8 kg"
										})
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							className: "m-intel",
							id: "intel",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
								className: "m-rail",
								"aria-label": "Intelligence",
								children: RAIL.map((item) => {
									const Icon = item.icon;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										"aria-current": section === item.id,
										onClick: () => setSection(item.id),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { size: 16 }), item.label]
									}, item.id);
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "m-intel-card",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "m-intel-head",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "m-intel-ico",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartColumn, { size: 14 })
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Attendance Intelligence" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "m-month-wrap",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
													className: "m-month",
													type: "button",
													onClick: () => setMonthOpen((v) => !v),
													children: [
														month === 10 ? "October 2026" : monthLabel,
														" ",
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { size: 12 })
													]
												}), monthOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "m-menu",
													role: "listbox",
													children: MONTHS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														type: "button",
														"aria-current": month === item.id,
														onClick: () => {
															setMonth(item.id);
															setMonthOpen(false);
															setDay(null);
														},
														children: item.label
													}, item.id))
												})]
											})
										]
									}),
									section === "cal" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "m-donut-row",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "m-donut",
												"aria-hidden": true,
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
													viewBox: "0 0 120 120",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
														cx: "60",
														cy: "60",
														r: "46",
														fill: "none",
														stroke: "#e7f5ea",
														strokeWidth: "14"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
														cx: "60",
														cy: "60",
														r: "46",
														fill: "none",
														stroke: "#1f9d4c",
														strokeWidth: "14",
														strokeLinecap: "round",
														strokeDasharray: `${stats.rate / 100 * 289} 289`
													})]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "m-donut-label",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", { children: [stats.rate, "%"] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
														stats.attended,
														" / ",
														stats.tracked || stats.count,
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
														"Days"
													] })]
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "m-legend",
												children: rows.map((row) => {
													const count = stats.tally[row.mark];
													const width = stats.pct(count);
													return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "m-leg",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {
																className: "m-swatch",
																style: { background: MARK_COLOR[row.mark] }
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: row.label }),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: count }),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "m-bar",
																children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { style: {
																	["--w"]: `${width}%`,
																	background: MARK_COLOR[row.mark]
																} })
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [width, "%"] })
														]
													}, row.mark);
												})
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "m-cal-layout",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "m-wd",
												children: [
													"Mon",
													"Tue",
													"Wed",
													"Thu",
													"Fri",
													"Sat",
													"Sun"
												].map((wd) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: wd }, wd))
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "m-grid",
												children: [Array.from({ length: lead }, (_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "m-blank" }, `b${i}`)), stats.marks.map((mark, index) => {
													const date = index + 1;
													return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														type: "button",
														className: `m-day ${mark}${month === 10 && date === 16 ? " today" : ""}`,
														"aria-pressed": day === date,
														"aria-label": `${date} ${monthLabel} ${mark}`,
														onClick: () => {
															setDay(date);
															setSheet("day");
														},
														children: date
													}, date);
												})]
											})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "m-side",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "m-mini",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flame, {
															className: "m-flame",
															size: 18
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Streak" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "5 Days" })] })]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "m-mini",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trophy, {
															className: "m-trophy",
															size: 18
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Best" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "14 Days" })] })]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
														className: "m-details",
														type: "button",
														onClick: () => setSection("insights"),
														children: ["View Details ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { size: 14 })]
													})
												]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "m-key",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { style: { background: MARK_COLOR.present } }), "Present"] }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { style: { background: MARK_COLOR.late } }), "Late"] }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { style: { background: MARK_COLOR.absent } }), "Absent"] }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { style: { background: MARK_COLOR.holiday } }), "Holiday"] })
											]
										})
									] }),
									section === "trend" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "m-panel",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", { children: ["Monthly trend · ", monthLabel] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "m-weeks",
												children: [
													["W1", 72],
													["W2", 88],
													["W3", 76],
													["W4", 84]
												].map(([label, value]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { style: {
													["--h"]: `${value}%`,
													background: "linear-gradient(180deg,#4ade80,#15803d)"
												} }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
													label,
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
													value,
													"%"
												] })] }, String(label)))
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "m-note",
												children: [
													"↑ +6% vs last month · avg session ",
													MEMBER.workoutMin,
													" min"
												]
											})
										]
									}),
									section === "history" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "m-panel",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Check-in history" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "m-list",
											children: [history.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "m-insight",
												children: "No check-ins in this month yet."
											}), history.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												className: "m-row",
												type: "button",
												onClick: () => {
													setDay(item.day);
													setSheet("day");
												},
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Timer, {
														size: 16,
														color: "#16a34a"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("b", { children: [
														item.day,
														" ",
														monthLabel.replace(" 2026", "")
													] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: item.mark === "late" ? "Arrived 09:40 AM" : "Arrived 07:12 AM" })] }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "m-tagpill",
														style: { background: MARK_COLOR[item.mark] },
														children: item.mark === "late" ? "Late" : "Present"
													})
												]
											}, item.day))]
										})]
									}),
									section === "insights" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "m-panel",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Coach notes" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "m-insights",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "m-insight",
													children: [
														"Attendance is ",
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("b", { children: [stats.rate, "%"] }),
														" — above the floor average of 68%."
													]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "m-insight",
													children: [
														"Current streak ",
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "5 days" }),
														". Personal best is ",
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "14 days" }),
														"."
													]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "m-insight",
													children: [
														"Gap on ",
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "23–24 Oct" }),
														" sits right before the Gold Plan expiry."
													]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "m-insight",
													children: [
														"Best check-in window is ",
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "7:00–7:30 AM" }),
														". Keep it to protect the streak."
													]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "m-insight",
													children: [
														"Body is down ",
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "0.8 kg" }),
														" this month at ",
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "69.5 kg" }),
														"."
													]
												})
											]
										})]
									}),
									section === "more" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "m-panel m-more",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Card settings" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "m-themes",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													type: "button",
													"aria-pressed": theme === "crimson",
													onClick: () => setTheme("crimson"),
													children: "Crimson Gold"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													type: "button",
													"aria-pressed": theme === "magenta",
													onClick: () => setTheme("magenta"),
													children: "Magenta Night"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												className: frozen ? "m-freeze on" : "m-freeze",
												type: "button",
												onClick: () => {
													setFrozen((v) => !v);
													ping(frozen ? "Membership resumed" : "Membership frozen");
												},
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Snowflake, { size: 14 }),
													" ",
													frozen ? "Unfreeze member" : "Freeze member"
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "m-insight",
												children: [
													MEMBER.plan,
													" · ",
													MEMBER.id,
													" · renews ",
													MEMBER.expires,
													". Floor access until 10:00 PM."
												]
											})
										]
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							className: "m-nutrition",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/assets/promo-burger.png",
								alt: "Fitness nutrition protein burger, 50% off this week"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "m-order-hit",
								type: "button",
								"aria-label": "Order protein burger now",
								onClick: () => setSheet("order")
							})]
						})
					]
				}),
				sheet && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "m-sheet-back",
					onClick: () => setSheet(null),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "m-sheet",
						role: "dialog",
						"aria-modal": "true",
						onClick: (event) => event.stopPropagation(),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", { children: [
								sheet === "search" && "Search",
								sheet === "alerts" && "Alerts",
								sheet === "qr" && "Member pass",
								sheet === "pay" && "Payment",
								sheet === "expiry" && "Plan expiry",
								sheet === "order" && "Protein Burger",
								sheet === "store" && "Fitness gear",
								sheet === "body" && "Body",
								sheet === "day" && "Day detail"
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "m-x",
								type: "button",
								"aria-label": "Close",
								onClick: () => setSheet(null),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 16 })
							})] }),
							sheet === "search" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								className: "m-search",
								placeholder: "Payment, workout, QR…",
								value: query,
								onChange: (event) => setQuery(event.target.value),
								autoFocus: true
							}), quick.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "m-link",
								type: "button",
								onClick: () => {
									setSheet(item.sheet);
									if (item.show === "cal" || item.show === "trend") openIntel(item.show);
								},
								children: item.label
							}, item.label))] }),
							sheet === "alerts" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "m-alert",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wallet, {
										size: 16,
										color: "#e11d48"
									}), " ₹500 is due. Gold Plan expires in 8 days."]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "m-alert",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flame, {
										size: 16,
										color: "#f97316"
									}), " 5-day streak. Check in tomorrow to keep it."]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "m-alert",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dumbbell, {
										size: 16,
										color: "#ca8a04"
									}), " Protein Burger is 50% off this week."]
								})
							] }),
							sheet === "qr" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								className: "m-qr-lg",
								src: "/assets/member-qr.png",
								alt: "QR pass for BG215"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "m-insight",
								children: [
									MEMBER.nameA,
									" ",
									MEMBER.nameB,
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									MEMBER.id,
									" · ",
									MEMBER.plan,
									" · ",
									frozen ? "Frozen" : "Active"
								]
							})] }),
							sheet === "pay" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "m-price",
									children: [
										"₹",
										MEMBER.due,
										" ",
										paid && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("s", { children: "due" })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "m-insight",
									children: [
										"Gold Plan renewal for the cycle ending ",
										MEMBER.expires,
										"."
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: "m-cta",
									type: "button",
									disabled: paid,
									onClick: () => {
										setPaid(true);
										ping("₹500 received · plan clear");
										setSheet(null);
									},
									children: paid ? "Paid" : "Pay ₹500"
								})
							] }),
							sheet === "expiry" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "m-insight",
								children: [
									"Gold Plan expires ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: MEMBER.expires }),
									". ",
									MEMBER.daysLeft,
									" days left in this cycle. Membership progress is ",
									MEMBER.membershipDone,
									" of ",
									MEMBER.membershipTotal,
									" days."
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "m-cta gold",
								type: "button",
								onClick: () => setSheet("pay"),
								children: "Renew now"
							})] }),
							sheet === "order" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "m-kicker",
									children: "THIS WEEK"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "m-price",
									children: ["₹199 ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("s", { children: "₹399" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "m-insights",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "m-insight",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leaf, { size: 14 }), " High protein · 32g"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "m-insight",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { size: 14 }), " Low fat · more energy"]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: "m-cta gold",
									type: "button",
									disabled: ordered,
									onClick: () => {
										setOrdered(true);
										ping("Protein Burger ordered");
										setSheet(null);
									},
									children: ordered ? "Ordered" : "Order Now"
								})
							] }),
							sheet === "store" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "m-insight",
								children: "Hex dumbbells, shaker, and creatine — member price on the Gold Plan."
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "m-cta",
								type: "button",
								onClick: () => {
									ping("Gear hold placed at the front desk");
									setSheet(null);
								},
								children: "Hold at front desk"
							})] }),
							sheet === "body" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "m-insights",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "m-insight",
										children: [
											"Weight ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "69.5 kg" }),
											" · down 0.8 kg vs last month."
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "m-insight",
										children: "Last logged after the 07:12 AM session on 16 Oct."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "m-insight",
										children: "Trend is steady. Keep the morning slot."
									})
								]
							}),
							sheet === "day" && day && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "m-insight",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("b", { children: [
										day,
										" ",
										monthLabel
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"Status: ",
									markFor(month, day),
									".",
									markFor(month, day) === "present" && " Checked in at 07:12 AM.",
									markFor(month, day) === "late" && " Checked in at 09:40 AM.",
									markFor(month, day) === "absent" && " No check-in recorded.",
									markFor(month, day) === "holiday" && " Gym holiday.",
									markFor(month, day) === "idle" && " This month has not started.",
									month === 10 && day === 16 && " This is the highlighted check-in day."
								]
							})
						]
					})
				}),
				toast && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "m-toast",
					role: "status",
					children: toast
				})
			]
		})
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MemberDashboard, {});
}
//#endregion
export { Home as component };
