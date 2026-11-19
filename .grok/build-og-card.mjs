import { writeFileSync } from "node:fs";

function leafPath(len) {
  const w = len * 0.32;
  return `M0,0 C${(len * 0.32).toFixed(1)},${(-w).toFixed(1)} ${(len * 0.78).toFixed(1)},${(-w * 0.55).toFixed(1)} ${len.toFixed(1)},0 C${(len * 0.78).toFixed(1)},${(w * 0.55).toFixed(1)} ${(len * 0.32).toFixed(1)},${w.toFixed(1)} 0,0 Z`;
}

function branch({ cx, cy, rx, ry, a0, a1, count }) {
  let stem = "";
  const leaves = [];
  const steps = 48;
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const theta = a0 + (a1 - a0) * t;
    const x = cx + Math.cos(theta) * rx;
    const y = cy + Math.sin(theta) * ry;
    stem += i === 0 ? `M${x.toFixed(1)},${y.toFixed(1)}` : ` L${x.toFixed(1)},${y.toFixed(1)}`;
  }
  for (let i = 0; i < count; i++) {
    const t = i / (count - 1);
    const theta = a0 + (a1 - a0) * t;
    const x = cx + Math.cos(theta) * rx;
    const y = cy + Math.sin(theta) * ry;
    const rot = (Math.atan2(Math.sin(theta), Math.cos(theta)) * 180) / Math.PI;
    const len = 30 + Math.sin(t * Math.PI) * 16;
    const tilt = i % 2 === 0 ? 8 : -6;
    leaves.push(
      `<path d="${leafPath(len)}" fill="url(#goldLeaf)" transform="translate(${x.toFixed(1)} ${y.toFixed(1)}) rotate(${(rot + tilt).toFixed(2)})"/>`,
    );
  }
  return { stem, leaves: leaves.join("\n") };
}

const cx = 600;
const cy = 278;
const rx = 490;
const ry = 220;
const alpha = (46 * Math.PI) / 180;
const left = branch({
  cx, cy, rx, ry,
  a0: Math.PI - alpha,
  a1: Math.PI + alpha,
  count: 11,
});
const right = branch({
  cx, cy, rx, ry,
  a0: -alpha,
  a1: alpha,
  count: 11,
});

const html = `<!doctype html>
<html>
<head>
<meta charset="utf-8"/>
<style>
  @font-face { font-family: Cinzel; font-weight: 600; src: url("fonts/Cinzel-600.ttf") format("truetype"); }
  @font-face { font-family: Cinzel; font-weight: 700; src: url("fonts/Cinzel-700.ttf") format("truetype"); }
  @font-face { font-family: Cormorant; font-weight: 600; src: url("fonts/Cormorant-600.ttf") format("truetype"); }
  @font-face { font-family: Cormorant; font-weight: 700; src: url("fonts/Cormorant-700.ttf") format("truetype"); }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  html, body { width: 1200px; height: 630px; overflow: hidden; background: #1c0006; }
  .stage {
    width: 1200px; height: 630px; position: relative; overflow: hidden;
    background:
      radial-gradient(ellipse 68% 80% at 50% 44%, #a0162c 0%, #7a0018 46%, #3d000c 78%, #140004 100%);
  }
  .glow {
    position: absolute; inset: 0;
    background: radial-gradient(ellipse 42% 48% at 50% 42%, rgba(245,197,66,0.18), transparent 70%);
  }
  .frame {
    position: absolute; inset: 26px;
    border: 1px solid rgba(245,197,66,0.62);
    box-shadow: inset 0 0 0 6px rgba(245,197,66,0.16);
    pointer-events: none;
  }
  svg.wreath { position: absolute; inset: 0; width: 1200px; height: 630px; z-index: 1; }
  .lockup {
    position: absolute; left: 0; right: 0; top: 96px;
    text-align: center; z-index: 2;
  }
  .word {
    font-family: Cinzel, "Times New Roman", serif;
    font-weight: 700;
    font-size: 176px;
    line-height: 0.84;
    letter-spacing: 0.34em;
    text-indent: 0.34em;
    background: linear-gradient(180deg, #fff8dc 0%, #f5c542 42%, #c9971d 70%, #ffe7a0 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    filter: drop-shadow(0 3px 0 rgba(60, 20, 0, 0.28));
  }
  .tag {
    margin-top: 18px;
    font-family: Cinzel, serif;
    font-weight: 600;
    font-size: 21px;
    letter-spacing: 0.42em;
    text-indent: 0.42em;
    color: #fff6e8;
  }
  .card {
    position: absolute;
    left: 170px; right: 170px; bottom: 30px;
    height: 112px;
    z-index: 3;
    display: flex; align-items: center; gap: 16px;
    padding: 0 14px;
    background: linear-gradient(180deg, #2c0d14 0%, #120206 100%);
    border: 1.5px solid #f5c542;
    border-radius: 18px;
    box-shadow:
      0 16px 28px rgba(0,0,0,0.38),
      inset 0 0 0 4px rgba(20,0,6,0.4),
      inset 0 0 0 5px rgba(245,197,66,0.38);
  }
  .avatar {
    width: 86px; height: 86px; border-radius: 50%; flex: none;
    border: 2px solid #f5c542;
    background:
      url("file:///workspace/public/assets/member-portrait.png") 50% 6% / 170% auto no-repeat,
      #7a0018;
  }
  .meta { flex: 1; min-width: 0; padding-left: 2px; }
  .kicker {
    font-family: Cinzel, serif;
    font-weight: 600;
    font-size: 13px;
    letter-spacing: 0.36em;
    color: #f5c542;
  }
  .club {
    margin-top: 3px;
    font-family: Cormorant, Georgia, serif;
    font-weight: 600;
    font-size: 32px;
    letter-spacing: 0.04em;
    color: #fff6e8;
    line-height: 1;
  }
  .pill {
    flex: none;
    display: flex; align-items: center; gap: 8px;
    height: 40px;
    background: #16a34a;
    color: #fff6e8;
    border-radius: 999px;
    padding: 0 14px 0 10px;
    font-family: Cinzel, serif;
    font-weight: 700;
    font-size: 13px;
    letter-spacing: 0.16em;
  }
  .qr {
    width: 86px; height: 86px; flex: none;
    border-radius: 8px;
    border: 1px solid rgba(245,197,66,0.75);
    object-fit: cover;
    background: #fff6e8;
  }
</style>
</head>
<body>
  <div class="stage">
    <div class="glow"></div>
    <div class="frame"></div>
    <svg class="wreath" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="goldLeaf" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#fff6d2"/>
          <stop offset="42%" stop-color="#f5c542"/>
          <stop offset="100%" stop-color="#a67c12"/>
        </linearGradient>
        <linearGradient id="stem" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#fff1c2"/>
          <stop offset="55%" stop-color="#e0b03a"/>
          <stop offset="100%" stop-color="#8d6a14"/>
        </linearGradient>
      </defs>
      <path d="${left.stem}" fill="none" stroke="url(#stem)" stroke-width="3" stroke-linecap="round"/>
      <path d="${right.stem}" fill="none" stroke="url(#stem)" stroke-width="3" stroke-linecap="round"/>
      ${left.leaves}
      ${right.leaves}
    </svg>
    <div class="lockup">
      <div class="word" id="bad">BAD</div>
      <div class="word" id="gym">GYM</div>
      <div class="tag" id="tag">MEMBER INTELLIGENCE</div>
    </div>
    <div class="card">
      <div class="avatar" role="img" aria-label="Member"></div>
      <div class="meta">
        <div class="kicker">CLUB CARD</div>
        <div class="club">Member card</div>
      </div>
      <div class="pill">
        <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
          <circle cx="8" cy="8" r="7" fill="#fff6e8"/>
          <path d="M4.2 8.2 L6.7 10.6 L11.8 5.4" fill="none" stroke="#16a34a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        CHECK-IN
      </div>
      <img class="qr" src="file:///workspace/public/assets/member-qr.png" alt=""/>
    </div>
  </div>
</body>
</html>`;

writeFileSync("/workspace/.grok/og-card.html", html);
console.log("rebuilt");
