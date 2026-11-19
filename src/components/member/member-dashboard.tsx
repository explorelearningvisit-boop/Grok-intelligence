import { useEffect, useMemo, useState } from "react";
import {
  Bell,
  CalendarDays,
  ChartColumn,
  Check,
  ChevronDown,
  ChevronRight,
  Clock,
  Crown,
  Dumbbell,
  Ellipsis,
  Flame,
  IdCard,
  Leaf,
  Mars,
  QrCode,
  Scale,
  ScanLine,
  Search,
  Snowflake,
  Sparkles,
  Timer,
  Trophy,
  User,
  Wallet,
  X,
  Zap,
} from "lucide-react";

type DayMark = "present" | "late" | "absent" | "holiday" | "idle";
type Section = "cal" | "trend" | "history" | "insights" | "more";
type Sheet =
  | null
  | "search"
  | "alerts"
  | "qr"
  | "pay"
  | "expiry"
  | "order"
  | "store"
  | "body"
  | "day";
type Theme = "crimson" | "magenta";

const MEMBER = {
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
  due: 500,
};

const OCT_HOLIDAY = new Set([4, 11, 18, 25]);
const OCT_LATE = new Set([10, 21]);
const OCT_ABSENT = new Set([23, 24]);

const MONTHS = [
  { id: 9, label: "September 2026" },
  { id: 10, label: "October 2026" },
  { id: 11, label: "November 2026" },
] as const;

const RAIL: { id: Section; label: string; icon: typeof CalendarDays }[] = [
  { id: "cal", label: "Cal", icon: CalendarDays },
  { id: "trend", label: "Trend", icon: ChartColumn },
  { id: "history", label: "History", icon: Clock },
  { id: "insights", label: "Insights", icon: Sparkles },
  { id: "more", label: "More", icon: Ellipsis },
];

const MARK_COLOR: Record<DayMark, string> = {
  present: "#1f9d4c",
  late: "#f5c400",
  absent: "#ef3b3b",
  holiday: "#7c3aed",
  idle: "#d1d5db",
};

function markFor(month: number, day: number): DayMark {
  if (month === 11) return "idle";
  if (month === 10) {
    if (OCT_HOLIDAY.has(day)) return "holiday";
    if (OCT_LATE.has(day)) return "late";
    if (OCT_ABSENT.has(day)) return "absent";
    return "present";
  }
  const wd = new Date(2026, month - 1, day).getDay();
  if (wd === 0) return "holiday";
  if (day === 11 || day === 18) return "absent";
  if (day === 4 || day === 22) return "late";
  return "present";
}

function monthStats(month: number) {
  const count = new Date(2026, month, 0).getDate();
  const marks = Array.from({ length: count }, (_, i) => markFor(month, i + 1));
  const tally = { present: 0, late: 0, absent: 0, holiday: 0, idle: 0 };
  for (const m of marks) tally[m] += 1;
  const tracked = tally.present + tally.late + tally.absent + tally.holiday;
  const attended = tally.present + tally.late;
  const rate = tracked ? Math.round((attended / tracked) * 100) : 0;
  const pct = (n: number) => (tracked ? Math.round((n / tracked) * 100) : 0);
  return { count, marks, tally, tracked, attended, rate, pct };
}

function Laurel({ flip }: { flip?: boolean }) {
  return (
    <svg className={flip ? "m-laurel flip" : "m-laurel"} viewBox="0 0 36 64" aria-hidden>
      <path
        d="M20 62c1-14 6-24 8-40"
        stroke="#e8c56a"
        strokeWidth="1.4"
        fill="none"
        strokeLinecap="round"
      />
      {[
        [18, 10, -50],
        [14, 18, -38],
        [12, 26, -28],
        [11, 34, -18],
        [12, 42, -8],
        [14, 50, 2],
        [17, 57, 12],
      ].map(([x, y, r]) => (
        <ellipse
          key={`${x}-${y}`}
          cx={x}
          cy={y}
          rx="7"
          ry="3.1"
          fill="#f0c14b"
          transform={`rotate(${r} ${x} ${y})`}
        />
      ))}
    </svg>
  );
}

function LogoMark() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden>
      <path d="M4 9h3v6H4zM10.5 5h3v14h-3zM17 8h3v8h-3z" fill="#f6c543" />
    </svg>
  );
}

export function MemberDashboard() {
  const [theme, setTheme] = useState<Theme>("crimson");
  const [section, setSection] = useState<Section>("cal");
  const [month, setMonth] = useState<number>(10);
  const [monthOpen, setMonthOpen] = useState(false);
  const [sheet, setSheet] = useState<Sheet>(null);
  const [slide, setSlide] = useState(0);
  const [paid, setPaid] = useState(false);
  const [frozen, setFrozen] = useState(false);
  const [ordered, setOrdered] = useState(false);
  const [readAlerts, setReadAlerts] = useState(false);
  const [query, setQuery] = useState("");
  const [day, setDay] = useState<number | null>(16);
  const [toast, setToast] = useState<string | null>(null);

  const stats = useMemo(() => monthStats(month), [month]);
  const monthLabel = MONTHS.find((m) => m.id === month)?.label ?? "October 2026";
  const lead = (new Date(2026, month - 1, 1).getDay() + 6) % 7;

  useEffect(() => {
    const timer = window.setInterval(() => setSlide((s) => (s + 1) % 3), 4500);
    return () => window.clearInterval(timer);
  }, [slide]);

  useEffect(() => {
    if (!toast) return;
    const timer = window.setTimeout(() => setToast(null), 2200);
    return () => window.clearTimeout(timer);
  }, [toast]);

  function ping(message: string) {
    setToast(message);
  }

  function openIntel(next: Section) {
    setSection(next);
    document.getElementById("intel")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const rows: { mark: DayMark; label: string }[] = [
    { mark: "present", label: "Present" },
    { mark: "late", label: "Late" },
    { mark: "absent", label: "Absent" },
    { mark: "holiday", label: "Holiday" },
  ];

  const history = stats.marks
    .map((mark, index) => ({ day: index + 1, mark }))
    .filter((item) => item.mark === "present" || item.mark === "late")
    .reverse()
    .slice(0, 8);

  const quick = [
    { label: "Payment · ₹500", sheet: "pay" as const, show: "pay" },
    { label: "Attendance calendar", sheet: null, show: "cal" },
    { label: "Workout · 58 min", sheet: null, show: "trend" },
    { label: "Body · 69.5 kg", sheet: "body" as const, show: "body" },
    { label: "Protein Burger · 50% off", sheet: "order" as const, show: "order" },
    { label: "Member QR pass", sheet: "qr" as const, show: "qr" },
  ].filter((item) => item.label.toLowerCase().includes(query.toLowerCase().trim()));

  return (
    <div className="m-stage">
      <div className="m-phone" data-theme={theme}>
        <div className="m-scroll">
          <header className="m-top">
            <div className="m-logo" aria-hidden>
              <LogoMark />
            </div>
            <div className="m-brand">
              <Laurel />
              <div>
                <div className="m-word">
                  BAD <em>GYM</em>
                </div>
                <div className="m-tag">Member Intelligence</div>
              </div>
              <Laurel flip />
            </div>
            <div className="m-actions">
              <button className="m-iconbtn" type="button" aria-label="Search" onClick={() => setSheet("search")}>
                <Search size={18} />
              </button>
              <button
                className="m-iconbtn"
                type="button"
                aria-label={readAlerts ? "Alerts" : "3 alerts"}
                onClick={() => {
                  setReadAlerts(true);
                  setSheet("alerts");
                }}
              >
                <Bell size={18} />
                {!readAlerts && <span className="m-badge">3</span>}
              </button>
              <button className="m-iconbtn" type="button" aria-label="Open member QR" onClick={() => setSheet("qr")}>
                <ScanLine size={18} />
              </button>
            </div>
          </header>
          <div className="m-flare" />

          {frozen && (
            <div className="m-frozen-banner">
              <Snowflake size={14} /> Membership frozen · resumes when you unfreeze
            </div>
          )}

          <article className="m-card">
            <div className="m-card-top">
              <img className="m-avatar" src="/assets/member-portrait.png" alt="Ashwani Kumar Sharma Vishwakarma" />
              <div className="m-ident">
                <div className="m-pills">
                  <button
                    type="button"
                    className={frozen ? "m-chip frozen" : "m-chip check"}
                    onClick={() => ping(frozen ? "Membership is frozen" : `Checked in ${MEMBER.checkIn}`)}
                  >
                    <Check size={11} /> {frozen ? "FROZEN" : "CHECKED-IN"}
                  </button>
                  <span className="m-chip date">
                    <CalendarDays size={11} /> {MEMBER.checkIn}
                  </span>
                </div>
                <h1 className="m-name">
                  {MEMBER.nameA}
                  <br />
                  {MEMBER.nameB}
                </h1>
                <p className="m-meta">
                  <span>
                    <IdCard size={12} /> {MEMBER.id}
                  </span>
                  <i className="m-dot" />
                  <span>
                    <User size={12} /> {MEMBER.age}
                  </span>
                  <i className="m-dot" />
                  <span>
                    <Mars size={12} /> {MEMBER.sex}
                  </span>
                </p>
                <div className="m-badges">
                  <span className="m-pill ok">
                    <Check size={12} /> Active
                  </span>
                  <span className="m-pill gold">
                    <Crown size={12} /> {MEMBER.plan}
                  </span>
                </div>
              </div>
              <button className="m-qr" type="button" aria-label="Member QR" onClick={() => setSheet("qr")}>
                <img src="/assets/member-qr.png" alt="" />
              </button>
            </div>

            <div className="m-payrow">
              <button className="m-paytile" type="button" onClick={() => setSheet("pay")}>
                <span className="ico">
                  <Wallet size={16} />
                </span>
                <span>
                  <small>Payment</small>
                  <strong className={paid ? "paid" : undefined}>{paid ? "₹500 Paid" : "₹500 Due"}</strong>
                </span>
                <ChevronRight className="m-chev" size={16} />
              </button>
              <button className="m-paytile" type="button" onClick={() => setSheet("expiry")}>
                <span className="ico cal">
                  <CalendarDays size={16} />
                </span>
                <span>
                  <small>Expires</small>
                  <strong className="m-exp">{MEMBER.expires}</strong>
                  <em>({MEMBER.daysLeft} Days Left)</em>
                </span>
                <ChevronRight className="m-chev" size={16} />
              </button>
            </div>

            <div className="m-mem">
              <div className="m-mem-label">
                Membership <b>{MEMBER.membershipDone} / {MEMBER.membershipTotal} Days</b>
              </div>
              <div className="m-track" aria-hidden>
                <div className="m-fill" style={{ ["--w" as string]: "73%" }} />
                <span className="m-pct">73%</span>
              </div>
            </div>
          </article>

          <section className="m-promo" aria-label="Sponsored offers">
            <span className="m-sponsored">Sponsored</span>
            <div className="m-slide" key={slide}>
              {slide === 0 && (
                <img
                  className="m-promo-img"
                  src="/assets/promo-festival.png"
                  alt="Amazon Great Indian Festival, up to 40% off fitness and wellness"
                />
              )}
              {slide === 1 && (
                <div className="m-slide-native">
                  <div>
                    <span className="m-kicker">AMAZON</span>
                    <h3>Big Billion Sale</h3>
                    <p>Up to 40% OFF · Fitness Gear</p>
                  </div>
                  <button className="m-shop" type="button" onClick={() => setSheet("store")}>
                    Shop Now
                  </button>
                </div>
              )}
              {slide === 2 && (
                <div className="m-slide-native">
                  <div>
                    <span className="m-kicker">BAD GYM LAB</span>
                    <h3>Creatine Stack</h3>
                    <p>30% off this week · unflavored</p>
                  </div>
                  <button className="m-shop" type="button" onClick={() => setSheet("store")}>
                    Shop Now
                  </button>
                </div>
              )}
            </div>
            <div className="m-dots">
              {[0, 1, 2].map((index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={`Offer ${index + 1}`}
                  aria-current={slide === index}
                  onClick={() => setSlide(index)}
                />
              ))}
            </div>
          </section>

          <section className="m-stats">
            <button className="m-stat att" type="button" onClick={() => openIntel("cal")}>
              <span className="lbl">
                <CalendarDays size={12} /> Attendance
              </span>
              <b>81%</b>
              <small className="m-up">↑ +6%</small>
            </button>
            <button className="m-stat" type="button" onClick={() => openIntel("trend")}>
              <span className="lbl">
                <Dumbbell size={12} color="#7c3aed" /> Workout
              </span>
              <b>58 min</b>
              <small className="m-up">↑ +12%</small>
            </button>
            <button className="m-stat" type="button" onClick={() => setSheet("pay")}>
              <span className="lbl">
                <Wallet size={12} color="#e11d48" /> Payment
              </span>
              <b className={paid ? "m-up" : "m-due"}>{paid ? "Paid" : "₹500"}</b>
              <small>{paid ? "Clear" : "Due"}</small>
            </button>
            <button className="m-stat" type="button" onClick={() => setSheet("body")}>
              <span className="lbl">
                <Scale size={12} color="#2563eb" /> Body
              </span>
              <b>69.5 kg</b>
              <small className="m-down">↓ -0.8 kg</small>
            </button>
          </section>

          <section className="m-intel" id="intel">
            <nav className="m-rail" aria-label="Intelligence">
              {RAIL.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    type="button"
                    aria-current={section === item.id}
                    onClick={() => setSection(item.id)}
                  >
                    <Icon size={16} />
                    {item.label}
                  </button>
                );
              })}
            </nav>

            <div className="m-intel-card">
              <div className="m-intel-head">
                <span className="m-intel-ico">
                  <ChartColumn size={14} />
                </span>
                <h2>Attendance Intelligence</h2>
                <div className="m-month-wrap">
                  <button className="m-month" type="button" onClick={() => setMonthOpen((v) => !v)}>
                    {month === 10 ? "October 2026" : monthLabel} <ChevronDown size={12} />
                  </button>
                  {monthOpen && (
                    <div className="m-menu" role="listbox">
                      {MONTHS.map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          aria-current={month === item.id}
                          onClick={() => {
                            setMonth(item.id);
                            setMonthOpen(false);
                            setDay(null);
                          }}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {section === "cal" && (
                <>
                  <div className="m-donut-row">
                    <div className="m-donut" aria-hidden>
                      <svg viewBox="0 0 120 120">
                        <circle cx="60" cy="60" r="46" fill="none" stroke="#e7f5ea" strokeWidth="14" />
                        <circle
                          cx="60"
                          cy="60"
                          r="46"
                          fill="none"
                          stroke="#1f9d4c"
                          strokeWidth="14"
                          strokeLinecap="round"
                          strokeDasharray={`${(stats.rate / 100) * 289} 289`}
                        />
                      </svg>
                      <div className="m-donut-label">
                        <strong>{stats.rate}%</strong>
                        <span>
                          {stats.attended} / {stats.tracked || stats.count}
                          <br />
                          Days
                        </span>
                      </div>
                    </div>
                    <div className="m-legend">
                      {rows.map((row) => {
                        const count = stats.tally[row.mark];
                        const width = stats.pct(count);
                        return (
                          <div className="m-leg" key={row.mark}>
                            <i className="m-swatch" style={{ background: MARK_COLOR[row.mark] }} />
                            <span>{row.label}</span>
                            <span>{count}</span>
                            <span className="m-bar">
                              <i style={{ ["--w" as string]: `${width}%`, background: MARK_COLOR[row.mark] }} />
                            </span>
                            <span>{width}%</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="m-cal-layout">
                    <div>
                      <div className="m-wd">
                        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((wd) => (
                          <span key={wd}>{wd}</span>
                        ))}
                      </div>
                      <div className="m-grid">
                        {Array.from({ length: lead }, (_, i) => (
                          <span className="m-blank" key={`b${i}`} />
                        ))}
                        {stats.marks.map((mark, index) => {
                          const date = index + 1;
                          const today = month === 10 && date === 16;
                          return (
                            <button
                              key={date}
                              type="button"
                              className={`m-day ${mark}${today ? " today" : ""}`}
                              aria-pressed={day === date}
                              aria-label={`${date} ${monthLabel} ${mark}`}
                              onClick={() => {
                                setDay(date);
                                setSheet("day");
                              }}
                            >
                              {date}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                    <div className="m-side">
                      <div className="m-mini">
                        <Flame className="m-flame" size={18} />
                        <div>
                          <span>Streak</span>
                          <strong>5 Days</strong>
                        </div>
                      </div>
                      <div className="m-mini">
                        <Trophy className="m-trophy" size={18} />
                        <div>
                          <span>Best</span>
                          <strong>14 Days</strong>
                        </div>
                      </div>
                      <button className="m-details" type="button" onClick={() => setSection("insights")}>
                        View Details <ChevronRight size={14} />
                      </button>
                    </div>
                  </div>
                  <div className="m-key">
                    <span><i style={{ background: MARK_COLOR.present }} />Present</span>
                    <span><i style={{ background: MARK_COLOR.late }} />Late</span>
                    <span><i style={{ background: MARK_COLOR.absent }} />Absent</span>
                    <span><i style={{ background: MARK_COLOR.holiday }} />Holiday</span>
                  </div>
                </>
              )}

              {section === "trend" && (
                <div className="m-panel">
                  <h3>Monthly trend · {monthLabel}</h3>
                  <div className="m-weeks">
                    {[
                      ["W1", 72],
                      ["W2", 88],
                      ["W3", 76],
                      ["W4", 84],
                    ].map(([label, value]) => (
                      <div key={String(label)}>
                        <i style={{ ["--h" as string]: `${value}%`, background: "linear-gradient(180deg,#4ade80,#15803d)" }} />
                        <span>
                          {label}
                          <br />
                          {value}%
                        </span>
                      </div>
                    ))}
                  </div>
                  <p className="m-note">↑ +6% vs last month · avg session {MEMBER.workoutMin} min</p>
                </div>
              )}

              {section === "history" && (
                <div className="m-panel">
                  <h3>Check-in history</h3>
                  <div className="m-list">
                    {history.length === 0 && <p className="m-insight">No check-ins in this month yet.</p>}
                    {history.map((item) => (
                      <button
                        key={item.day}
                        className="m-row"
                        type="button"
                        onClick={() => {
                          setDay(item.day);
                          setSheet("day");
                        }}
                      >
                        <Timer size={16} color="#16a34a" />
                        <span>
                          <b>
                            {item.day} {monthLabel.replace(" 2026", "")}
                          </b>
                          <small>{item.mark === "late" ? "Arrived 09:40 AM" : "Arrived 07:12 AM"}</small>
                        </span>
                        <span className="m-tagpill" style={{ background: MARK_COLOR[item.mark] }}>
                          {item.mark === "late" ? "Late" : "Present"}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {section === "insights" && (
                <div className="m-panel">
                  <h3>Coach notes</h3>
                  <div className="m-insights">
                    <div className="m-insight">
                      Attendance is <b>{stats.rate}%</b> — above the floor average of 68%.
                    </div>
                    <div className="m-insight">
                      Current streak <b>5 days</b>. Personal best is <b>14 days</b>.
                    </div>
                    <div className="m-insight">
                      Gap on <b>23–24 Oct</b> sits right before the Gold Plan expiry.
                    </div>
                    <div className="m-insight">
                      Best check-in window is <b>7:00–7:30 AM</b>. Keep it to protect the streak.
                    </div>
                    <div className="m-insight">
                      Body is down <b>0.8 kg</b> this month at <b>69.5 kg</b>.
                    </div>
                  </div>
                </div>
              )}

              {section === "more" && (
                <div className="m-panel m-more">
                  <h3>Card settings</h3>
                  <div className="m-themes">
                    <button type="button" aria-pressed={theme === "crimson"} onClick={() => setTheme("crimson")}>
                      Crimson Gold
                    </button>
                    <button type="button" aria-pressed={theme === "magenta"} onClick={() => setTheme("magenta")}>
                      Magenta Night
                    </button>
                  </div>
                  <button
                    className={frozen ? "m-freeze on" : "m-freeze"}
                    type="button"
                    onClick={() => {
                      setFrozen((v) => !v);
                      ping(frozen ? "Membership resumed" : "Membership frozen");
                    }}
                  >
                    <Snowflake size={14} /> {frozen ? "Unfreeze member" : "Freeze member"}
                  </button>
                  <div className="m-insight">
                    {MEMBER.plan} · {MEMBER.id} · renews {MEMBER.expires}. Floor access until 10:00 PM.
                  </div>
                </div>
              )}
            </div>
          </section>

          <section className="m-nutrition">
            <img
              src="/assets/promo-burger.png"
              alt="Fitness nutrition protein burger, 50% off this week"
            />
            <button className="m-order-hit" type="button" aria-label="Order protein burger now" onClick={() => setSheet("order")} />
          </section>
        </div>

        {sheet && (
          <div className="m-sheet-back" onClick={() => setSheet(null)}>
            <div
              className="m-sheet"
              role="dialog"
              aria-modal="true"
              onClick={(event) => event.stopPropagation()}
            >
              <header>
                <h3>
                  {sheet === "search" && "Search"}
                  {sheet === "alerts" && "Alerts"}
                  {sheet === "qr" && "Member pass"}
                  {sheet === "pay" && "Payment"}
                  {sheet === "expiry" && "Plan expiry"}
                  {sheet === "order" && "Protein Burger"}
                  {sheet === "store" && "Fitness gear"}
                  {sheet === "body" && "Body"}
                  {sheet === "day" && "Day detail"}
                </h3>
                <button className="m-x" type="button" aria-label="Close" onClick={() => setSheet(null)}>
                  <X size={16} />
                </button>
              </header>

              {sheet === "search" && (
                <>
                  <input
                    className="m-search"
                    placeholder="Payment, workout, QR…"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    autoFocus
                  />
                  {quick.map((item) => (
                    <button
                      key={item.label}
                      className="m-link"
                      type="button"
                      onClick={() => {
                        setSheet(item.sheet);
                        if (item.show === "cal" || item.show === "trend") openIntel(item.show);
                      }}
                    >
                      {item.label}
                    </button>
                  ))}
                </>
              )}

              {sheet === "alerts" && (
                <>
                  <div className="m-alert">
                    <Wallet size={16} color="#e11d48" /> ₹500 is due. Gold Plan expires in 8 days.
                  </div>
                  <div className="m-alert">
                    <Flame size={16} color="#f97316" /> 5-day streak. Check in tomorrow to keep it.
                  </div>
                  <div className="m-alert">
                    <Dumbbell size={16} color="#ca8a04" /> Protein Burger is 50% off this week.
                  </div>
                </>
              )}

              {sheet === "qr" && (
                <>
                  <img className="m-qr-lg" src="/assets/member-qr.png" alt="QR pass for BG215" />
                  <p className="m-insight">
                    {MEMBER.nameA} {MEMBER.nameB}
                    <br />
                    {MEMBER.id} · {MEMBER.plan} · {frozen ? "Frozen" : "Active"}
                  </p>
                </>
              )}

              {sheet === "pay" && (
                <>
                  <p className="m-price">
                    ₹{MEMBER.due} {paid && <s>due</s>}
                  </p>
                  <p className="m-insight">Gold Plan renewal for the cycle ending {MEMBER.expires}.</p>
                  <button
                    className="m-cta"
                    type="button"
                    disabled={paid}
                    onClick={() => {
                      setPaid(true);
                      ping("₹500 received · plan clear");
                      setSheet(null);
                    }}
                  >
                    {paid ? "Paid" : "Pay ₹500"}
                  </button>
                </>
              )}

              {sheet === "expiry" && (
                <>
                  <p className="m-insight">
                    Gold Plan expires <b>{MEMBER.expires}</b>. {MEMBER.daysLeft} days left in this cycle.
                    Membership progress is {MEMBER.membershipDone} of {MEMBER.membershipTotal} days.
                  </p>
                  <button className="m-cta gold" type="button" onClick={() => setSheet("pay")}>
                    Renew now
                  </button>
                </>
              )}

              {sheet === "order" && (
                <>
                  <p className="m-kicker">THIS WEEK</p>
                  <p className="m-price">
                    ₹199 <s>₹399</s>
                  </p>
                  <div className="m-insights">
                    <div className="m-insight"><Leaf size={14} /> High protein · 32g</div>
                    <div className="m-insight"><Zap size={14} /> Low fat · more energy</div>
                  </div>
                  <button
                    className="m-cta gold"
                    type="button"
                    disabled={ordered}
                    onClick={() => {
                      setOrdered(true);
                      ping("Protein Burger ordered");
                      setSheet(null);
                    }}
                  >
                    {ordered ? "Ordered" : "Order Now"}
                  </button>
                </>
              )}

              {sheet === "store" && (
                <>
                  <p className="m-insight">Hex dumbbells, shaker, and creatine — member price on the Gold Plan.</p>
                  <button
                    className="m-cta"
                    type="button"
                    onClick={() => {
                      ping("Gear hold placed at the front desk");
                      setSheet(null);
                    }}
                  >
                    Hold at front desk
                  </button>
                </>
              )}

              {sheet === "body" && (
                <div className="m-insights">
                  <div className="m-insight">Weight <b>69.5 kg</b> · down 0.8 kg vs last month.</div>
                  <div className="m-insight">Last logged after the 07:12 AM session on 16 Oct.</div>
                  <div className="m-insight">Trend is steady. Keep the morning slot.</div>
                </div>
              )}

              {sheet === "day" && day && (
                <div className="m-insight">
                  <b>
                    {day} {monthLabel}
                  </b>
                  <br />
                  Status: {markFor(month, day)}.
                  {markFor(month, day) === "present" && " Checked in at 07:12 AM."}
                  {markFor(month, day) === "late" && " Checked in at 09:40 AM."}
                  {markFor(month, day) === "absent" && " No check-in recorded."}
                  {markFor(month, day) === "holiday" && " Gym holiday."}
                  {markFor(month, day) === "idle" && " This month has not started."}
                  {month === 10 && day === 16 && " This is the highlighted check-in day."}
                </div>
              )}
            </div>
          </div>
        )}

        {toast && (
          <div className="m-toast" role="status">
            {toast}
          </div>
        )}
      </div>
    </div>
  );
}
