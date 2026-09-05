:root {
  --bg: #f8f7f2;
  --card: #fffdf8;
  --surface: #f0efe9;
  --cream: #fff3c4;
  --cream-strong: #ffe69a;
  --text: #171717;
  --muted: #77756d;
  --line: #dedcd3;
  --shadow: 0 14px 35px rgba(34, 32, 24, 0.08);
  --radius: 22px;
  --ease: cubic-bezier(.16, 1, .3, 1);
}

/* =========================================================
   DARK THEME VARIABLES (PREMIUM, WARM & REFINED)
   ========================================================= */
[data-theme="dark"] {
  --bg: #121210;
  --card: #1c1b18;
  --surface: #24231f;
  --cream: #302c21;
  --cream-strong: #4a422d;
  --text: #f3f1ea;
  --muted: #9e9a8f;
  --line: #2e2c26;
  --shadow: 0 14px 35px rgba(0, 0, 0, 0.45);
}

* { box-sizing: border-box; margin: 0; padding: 0; }

html { scroll-behavior: smooth; }

body {
  min-height: 100vh;
  background:
    radial-gradient(circle at 15% 10%, rgba(255, 236, 166, .25), transparent 30%),
    var(--bg);
  color: var(--text);
  font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
}

[data-theme="dark"] body {
  background:
    radial-gradient(circle at 15% 10%, rgba(240, 205, 110, .06), transparent 30%),
    var(--bg);
}

a { color: inherit; text-decoration: none; }

/* =========================================================
   VIEW TRANSITION FOR WAVE REVEAL
   ========================================================= */
::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
}
::view-transition-old(root) {
  z-index: 1;
}
::view-transition-new(root) {
  z-index: 2;
}

/* Fallback wave ripple element */
.theme-wave-overlay {
  position: fixed;
  top: var(--wave-y);
  left: var(--wave-x);
  width: calc(var(--wave-radius) * 2);
  height: calc(var(--wave-radius) * 2);
  margin-top: calc(-1 * var(--wave-radius));
  margin-left: calc(-1 * var(--wave-radius));
  border-radius: 50%;
  pointer-events: none;
  z-index: 99999;
  transform: scale(0);
  transition: transform 5s var(--ease), opacity .2s ease;
  box-shadow: 0 0 35px rgba(0, 0, 0, .15);
}
.theme-wave-overlay.expanding {
  transform: scale(1);
}
.theme-wave-overlay.fading {
  opacity: 0;
}

/* =========================================================
   SITE HEADER & THEME TOGGLE
   ========================================================= */

.site-header {
  position: sticky;
  top: 0;
  z-index: 20;
  height: 70px;
  background: rgba(248, 247, 242, .82);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-bottom: 1px solid rgba(222, 220, 211, .9);
}

[data-theme="dark"] .site-header {
  background: rgba(18, 18, 16, .84);
  border-bottom: 1px solid rgba(46, 44, 38, .9);
}

.header-container {
  max-width: 1180px;
  height: 100%;
  margin: auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.brand-logo {
  font-size: 13px;
  font-weight: 800;
  letter-spacing: .14em;
}

/* Desktop Theme Toggle: kept on the right */
.theme-toggle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  padding: 0;
  border-radius: 12px;
  border: 1px solid var(--line);
  background: var(--card);
  color: var(--text);
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(34, 32, 24, .04);
  transition: transform .25s var(--ease), background .25s var(--ease), border-color .25s var(--ease), box-shadow .25s var(--ease), color .25s var(--ease);
  order: 2; /* Desktop: Right side */
}

.brand-logo {
  order: 1; /* Desktop: Left side */
}

.theme-toggle:hover {
  transform: translateY(-1px);
  border-color: #c9c4b5;
  box-shadow: 0 4px 12px rgba(34, 32, 24, .08);
}

[data-theme="dark"] .theme-toggle:hover {
  border-color: #4a463c;
  box-shadow: 0 4px 12px rgba(0, 0, 0, .25);
}

.theme-toggle:focus-visible {
  outline: 2px solid var(--text);
  outline-offset: 2px;
}

.theme-toggle svg {
  width: 18px;
  height: 18px;
  stroke-width: 2;
  stroke: currentColor;
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
  transition: transform .35s var(--ease), opacity .25s var(--ease);
}

.theme-toggle .sun-icon { display: block; }
.theme-toggle .moon-icon { display: none; }

[data-theme="dark"] .theme-toggle .sun-icon { display: none; }
[data-theme="dark"] .theme-toggle .moon-icon { display: block; }

/* =========================================================
   HOMEPAGE HERO SECTION
   ========================================================= */

.hero-section {
  max-width: 1180px;
  margin: auto;
  padding: 88px 24px 105px;
}

.hero-container {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 40px;
  align-items: center;
}

.meta-label {
  display: block;
  margin-bottom: 13px;
  color: var(--muted);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: .13em;
  text-transform: uppercase;
}

.hero-title {
  max-width: 700px;
  font-size: clamp(3rem, 7vw, 6.4rem);
  line-height: .93;
  letter-spacing: -.065em;
  font-weight: 850;
}

.hero-title span {
  display: block;
  color: #77736a;
}

[data-theme="dark"] .hero-title span {
  color: #9c978b;
}

.hero-description {
  max-width: 600px;
  margin: 28px 0 30px;
  color: var(--muted);
  font-size: clamp(16px, 2vw, 20px);
  line-height: 1.65;
}

.hero-description strong { color: var(--text); }

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 11px;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 46px;
  padding: 0 20px;
  border-radius: 13px;
  font-size: 14px;
  font-weight: 750;
  transition: transform .35s var(--ease), box-shadow .35s var(--ease), background .35s var(--ease);
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 9px 22px rgba(30, 28, 20, .10);
}

.btn-primary {
  background: var(--text);
  color: white;
}

[data-theme="dark"] .btn-primary {
  background: #f3f1ea;
  color: #121210;
}

.btn-ghost {
  background: white;
  border: 1px solid var(--line);
}

[data-theme="dark"] .btn-ghost {
  background: #1c1b18;
  border: 1px solid var(--line);
  color: var(--text);
}

.hero-card {
  position: relative;
  width: 100%;
  max-width: 380px;
  min-height: 480px;
  margin: 0 auto;
  overflow: hidden;
  border: 1px solid #dedbd0;
  border-radius: 28px;
  background: linear-gradient(145deg, #fffef9, #f3f0e5);
  box-shadow: var(--shadow);
}

[data-theme="dark"] .hero-card {
  border-color: #2e2c26;
  background: linear-gradient(145deg, #1d1c18, #161513);
}

.hero-card::after {
  content: "";
  position: absolute;
  inset: 12px;
  border: 1px solid rgba(255,255,255,.75);
  border-radius: 20px;
  pointer-events: none;
}

[data-theme="dark"] .hero-card::after {
  border-color: rgba(255, 255, 255, .05);
}

.hero-watermark {
  position: absolute;
  z-index: 0;
  top: 40px;
  left: -12px;
  font-size: clamp(7rem, 16vw, 12rem);
  line-height: 1;
  font-weight: 900;
  letter-spacing: -.09em;
  color: rgba(90, 86, 73, .10);
}

[data-theme="dark"] .hero-watermark {
  color: rgba(243, 241, 234, .04);
}

.hero-img {
  position: absolute;
  z-index: 1;
  inset: 24px 28px 45px;
  width: calc(100% - 56px);
  height: calc(100% - 69px);
  object-fit: cover;
  border-radius: 18px;
  box-shadow: 0 15px 35px rgba(36, 33, 24, .14);
  transition: transform .8s var(--ease);
}

.hero-card:hover .hero-img { transform: translateY(-7px) scale(1.015); }

.hero-card-label {
  position: absolute;
  z-index: 3;
  left: 32px;
  bottom: 24px;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: .15em;
  color: #706d64;
}

[data-theme="dark"] .hero-card-label {
  color: #928e83;
}

/* =========================================================
   VIDEOS SECTION
   ========================================================= */

.videos-section {
  padding: 88px 24px 100px;
  background: #f1f0ea;
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}

[data-theme="dark"] .videos-section {
  background: #171613;
  border-color: var(--line);
}

.section-container {
  max-width: 1180px;
  margin: auto;
}

.section-header {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 30px;
  margin-bottom: 34px;
}

.section-title {
  font-size: clamp(2rem, 4vw, 3.3rem);
  line-height: 1;
  letter-spacing: -.045em;
}

.section-note {
  color: var(--muted);
  font-size: 14px;
  padding-bottom: 4px;
}

.video-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.video-card {
  position: relative;
  overflow: hidden;
  display: block;
  background: var(--card);
  border: 1px solid #ddd9ce;
  border-radius: var(--radius);
  box-shadow: 0 8px 24px rgba(34, 32, 24, .045);
  transition: transform .45s var(--ease), box-shadow .45s var(--ease), border-color .45s var(--ease);
}

[data-theme="dark"] .video-card {
  border-color: #2b2923;
}

.video-card:hover {
  transform: translateY(-7px);
  border-color: #c9c4b5;
  box-shadow: 0 18px 38px rgba(34, 32, 24, .11);
}

[data-theme="dark"] .video-card:hover {
  border-color: #444036;
  box-shadow: 0 18px 38px rgba(0, 0, 0, .35);
}

.card-media {
  position: relative;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background: #dedbd0;
}

[data-theme="dark"] .card-media {
  background: #252420;
}

.card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform .7s var(--ease), filter .7s var(--ease);
}

.video-card:hover .card-img {
  transform: scale(1.045);
  filter: saturate(1.05);
}

.play-indicator {
  position: absolute;
  z-index: 3;
  right: 13px;
  bottom: 13px;
  width: 39px;
  height: 39px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: rgba(20,20,18,.82);
  color: white;
  font-size: 13px;
  padding-left: 2px;
  box-shadow: 0 5px 15px rgba(0,0,0,.2);
}

.card-body { padding: 20px 20px 21px; }

.card-meta {
  display: block;
  margin-bottom: 9px;
  color: #8a867b;
  font-size: 10px;
  font-weight: 850;
  letter-spacing: .12em;
}

[data-theme="dark"] .card-meta {
  color: #9a9588;
}

.card-title {
  font-size: 20px;
  line-height: 1.2;
  letter-spacing: -.025em;
}

.card-excerpt {
  margin-top: 9px;
  color: var(--muted);
  font-size: 13px;
  line-height: 1.55;
}

.watch-link {
  display: inline-flex;
  gap: 7px;
  margin-top: 17px;
  padding: 8px 11px;
  border-radius: 10px;
  background: var(--cream);
  font-size: 12px;
  font-weight: 800;
  transition: background .3s var(--ease);
}

[data-theme="dark"] .watch-link {
  background: #363124;
  color: #e5cb87;
}

.video-card:hover .watch-link { background: var(--cream-strong); }
[data-theme="dark"] .video-card:hover .watch-link { background: #463f2c; }

/* =========================================================
   ABOUT SECTION
   ========================================================= */

.about-section {
  padding: 105px 24px;
}

.about-container {
  max-width: 900px;
  margin: auto;
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 55px;
  align-items: center;
}

.about-image {
  overflow: hidden;
  aspect-ratio: 1;
  border-radius: 25px;
  border: 1px solid var(--line);
  background: var(--surface);
}

.about-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.about-content p {
  max-width: 600px;
  margin-top: 17px;
  color: var(--muted);
  line-height: 1.7;
}

.about-content .btn { margin-top: 25px; }

/* =========================================================
   SITE FOOTER
   ========================================================= */

.site-footer {
  max-width: 1180px;
  margin: auto;
  padding: 25px 24px 35px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  color: var(--muted);
  font-size: 12px;
  border-top: 1px solid var(--line);
}

/* =========================================================
   REVEAL ANIMATIONS
   ========================================================= */

.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity .8s var(--ease), transform .8s var(--ease);
}

.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

/* =========================================================
   RESOURCE HERO & CARDS
   ========================================================= */

.resource-hero {
  padding: 72px 24px 45px;
  max-width: 1180px;
  margin: auto;
}

.resource-hero-inner {
  max-width: 760px;
}

.resource-hero .section-title {
  font-size: clamp(2.8rem, 7vw, 5.8rem);
}

.resource-hero .hero-description {
  margin-top: 18px;
}

.resource-section {
  padding: 45px 24px 120px;
  background: #f1f0ea;
  border-top: 1px solid var(--line);
}

[data-theme="dark"] .resource-section {
  background: #171613;
  border-color: var(--line);
}

.resource-grid {
  max-width: 1180px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;
}

.resource-card {
  position: relative;
  overflow: hidden;
  min-height: 430px;
  padding: 18px 18px 22px;
  border: 1px solid #dedbd0;
  border-radius: 24px;
  background: linear-gradient(145deg, #fffef9 0%, #fff3c4 100%);
  box-shadow: 0 10px 28px rgba(34,32,24,.07);
  transition: transform .45s var(--ease), box-shadow .45s var(--ease), border-color .45s var(--ease);
}

[data-theme="dark"] .resource-card {
  border-color: #2e2b24;
  background: linear-gradient(145deg, #1c1b17 0%, #28241a 100%);
  box-shadow: 0 10px 28px rgba(0, 0, 0, .25);
}

.resource-card:hover {
  transform: translateY(-7px);
  border-color: #c9c4b5;
  box-shadow: 0 20px 42px rgba(34,32,24,.13);
}

[data-theme="dark"] .resource-card:hover {
  border-color: #423e33;
  box-shadow: 0 20px 42px rgba(0, 0, 0, .4);
}

.resource-card::after {
  content: "";
  position: absolute;
  inset: 9px;
  border: 1px solid rgba(255,255,255,.75);
  border-radius: 18px;
  pointer-events: none;
}

[data-theme="dark"] .resource-card::after {
  border-color: rgba(255, 255, 255, .05);
}

.resource-preview {
  position: relative;
  height: 215px;
  overflow: hidden;
  border-radius: 17px;
  background: linear-gradient(135deg,#e8e6dc,#fff9dd);
}

[data-theme="dark"] .resource-preview {
  background: linear-gradient(135deg, #22211c, #2a261c);
}

.resource-watermark {
  position: absolute;
  z-index: 0;
  top: 6px;
  left: -3px;
  font-size: clamp(4.8rem, 9vw, 7rem);
  line-height: 1;
  font-weight: 900;
  letter-spacing: -.09em;
  color: rgba(90,86,73,.12);
}

[data-theme="dark"] .resource-watermark {
  color: rgba(243, 241, 234, .04);
}

.resource-art {
  position: absolute;
  z-index: 1;
  left: 50%;
  top: 22px;
  width: 205px;
  height: 154px;
  transform: translateX(-50%) rotate(-4deg);
  border-radius: 16px;
  border: 1px solid rgba(255,255,255,.8);
  background: linear-gradient(135deg,#30362d,#7b806f 45%,#e7d9a1);
  box-shadow: 0 18px 35px rgba(36,33,24,.18);
  overflow: hidden;
  transition: transform .65s var(--ease);
}

.resource-card:hover .resource-art {
  transform: translateX(-50%) rotate(-1deg) translateY(-6px) scale(1.025);
}

.resource-art::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg,rgba(255,255,255,.25),transparent 38%,rgba(0,0,0,.16));
}

.resource-art::after {
  content: "";
  position: absolute;
  left: 13%;
  right: 13%;
  bottom: 14%;
  height: 26%;
  border-radius: 8px;
  background: repeating-linear-gradient(90deg,rgba(255,255,255,.18) 0 14px,transparent 14px 28px);
}

.art-shader { background: linear-gradient(135deg,#1e2537,#725c93 48%,#f0bf84); }
.art-modpack { background: linear-gradient(135deg,#273d36,#8b7354 48%,#e4c986); }

.art-icon {
  position: absolute;
  z-index: 2;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  font-size: 42px;
  filter: drop-shadow(0 7px 12px rgba(0,0,0,.25));
}

.resource-info {
  position: relative;
  z-index: 2;
  padding: 17px 5px 0;
}

.resource-meta {
  display: block;
  margin-bottom: 8px;
  color: #777269;
  font-size: 11px;
  font-weight: 850;
  letter-spacing: .11em;
  text-transform: uppercase;
}

[data-theme="dark"] .resource-meta {
  color: #9a9589;
}

.resource-title {
  font-size: 21px;
  line-height: 1.2;
  letter-spacing: -.025em;
}

.resource-description {
  margin-top: 8px;
  min-height: 40px;
  color: #77756d;
  font-size: 13px;
  line-height: 1.5;
}

.resource-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-top: 17px;
}

.resource-maintainer {
  color: #5f5b53;
  font-size: 12px;
  font-weight: 700;
}

[data-theme="dark"] .resource-maintainer {
  color: #9a968a;
}

.download-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 43px;
  padding: 0 17px;
  border-radius: 999px;
  background: var(--cream-strong);
  color: #27251f;
  font-size: 13px;
  font-weight: 850;
  box-shadow: 0 5px 12px rgba(34,32,24,.08);
  transition: transform .3s var(--ease), background .3s var(--ease);
}

.download-btn:hover {
  transform: translateY(-2px);
  background: #ffdc72;
}

[data-theme="dark"] .download-btn {
  background: #dfc26c;
  color: #1a1914;
}

[data-theme="dark"] .download-btn:hover {
  background: #eed27e;
}

.resource-tag {
  position: absolute;
  right: 18px;
  top: 18px;
  z-index: 3;
  padding: 6px 9px;
  border-radius: 999px;
  background: rgba(255,253,248,.85);
  border: 1px solid rgba(255,255,255,.9);
  color: #5d594f;
  font-size: 10px;
  font-weight: 850;
  letter-spacing: .05em;
}

[data-theme="dark"] .resource-tag {
  background: rgba(28, 27, 24, .88);
  border-color: rgba(255, 255, 255, .08);
  color: #b0aca0;
}

/* Soon Box on Shaders page */
.soon-box {
  text-align: center;
  padding: 80px 20px;
  background: var(--card);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
}

.soon-icon {
  font-size: 48px;
  display: block;
  margin-bottom: 16px;
}

.soon-title {
  font-size: 2rem;
  font-weight: 800;
  letter-spacing: -.03em;
  margin-bottom: 10px;
}

.soon-description {
  color: var(--muted);
  font-size: 15px;
  max-width: 400px;
  margin: 0 auto;
}

/* =========================================================
   NAVIGATION (BOTTOM DOCK) & DESKTOP HIDDEN REVEALER
   ========================================================= */

/* Desktop invisible hot zones (disabled on mobile) */
.nav-revealer-zone {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: min(300px, 70vw);
  height: 38px;
  z-index: 9998;
  background: transparent;
  pointer-events: auto;
}

.nav-dock-zone {
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: min(340px, 80vw);
  height: 52px;
  z-index: 9997;
  background: transparent;
  pointer-events: auto;
}

.nav-dock {
  position: fixed;
  z-index: 9999;
  left: 50%;
  bottom: 0;
  width: min(720px, calc(100vw - 28px));
  transform: translateX(-50%);
  pointer-events: none;
}

.nav-dock-panel {
  position: relative;
  width: 100%;
  min-height: 106px;
  padding: 28px 20px 16px;
  border: 1px solid rgba(222, 220, 211, .95);
  border-bottom: 0;
  border-radius: 24px 24px 0 0;
  background: rgba(255, 253, 248, .97);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  box-shadow: 0 -18px 45px rgba(34, 32, 24, .13);
  transform: translateY(calc(100% - 14px));
  transition: transform .55s var(--ease), box-shadow .55s var(--ease);
  pointer-events: auto;
}

[data-theme="dark"] .nav-dock-panel {
  border-color: rgba(46, 44, 38, .95);
  background: rgba(24, 23, 20, .96);
  box-shadow: 0 -18px 45px rgba(0, 0, 0, .45);
}

.nav-handle {
  position: absolute;
  z-index: 10;
  left: 50%;
  top: -18px;
  width: 74px;
  height: 36px;
  transform: translateX(-50%);
  border: 1px solid #dedbd0;
  border-bottom: 0;
  border-radius: 18px 18px 0 0;
  background: #fffdf8;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  pointer-events: auto;
  box-shadow: 0 -6px 16px rgba(34, 32, 24, .07);
  transition: transform .42s var(--ease), opacity .32s var(--ease), background .25s var(--ease), box-shadow .25s var(--ease), border-color .25s var(--ease);
}

[data-theme="dark"] .nav-handle {
  border-color: #2e2c26;
  background: #1c1b18;
  box-shadow: 0 -6px 16px rgba(0, 0, 0, .2);
}

.nav-handle span {
  display: block;
  width: 27px;
  height: 2px;
  border-radius: 99px;
  background: #4d4a43;
  transition: transform .35s var(--ease), opacity .25s var(--ease);
}

[data-theme="dark"] .nav-handle span {
  background: #dcd8cf;
}

.nav-handle:hover {
  background: var(--cream);
  box-shadow: 0 -9px 22px rgba(34, 32, 24, .11);
}

[data-theme="dark"] .nav-handle:hover {
  background: #2b271d;
}

/* DESKTOP-ONLY: Hidden navigation revealer behavior */
@media (min-width: 601px) {
  .nav-dock:not(.revealer-visible):not(.open) .nav-handle {
    transform: translateX(-50%) translateY(40px);
    opacity: 0;
    pointer-events: none;
  }

  .nav-dock.revealer-visible .nav-handle,
  .nav-dock.open .nav-handle {
    transform: translateX(-50%) translateY(0);
    opacity: 1;
    pointer-events: auto;
  }
}

/* Desktop Peek */
.nav-dock.peek .nav-dock-panel {
  transform: translateY(calc(100% - 50px));
}

/* Desktop Full Open */
.nav-dock.open .nav-dock-panel {
  transform: translateY(0);
  box-shadow: 0 -22px 55px rgba(34, 32, 24, .17);
}

.nav-dock.open .nav-handle span:first-child {
  transform: translateY(3.5px) rotate(45deg);
}

.nav-dock.open .nav-handle span:last-child {
  transform: translateY(-3.5px) rotate(-45deg);
}

/* DRAWER NAV LINKS */
.drawer-nav {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 8px;
}

.drawer-link {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 11px 15px;
  border-radius: 12px;
  color: var(--muted);
  font-size: 13px;
  font-weight: 750;
  transition: background .25s var(--ease), color .25s var(--ease), transform .25s var(--ease), box-shadow .25s var(--ease);
}

.drawer-link:hover {
  background: var(--cream);
  color: var(--text);
  transform: translateY(-2px);
  box-shadow: 0 6px 15px rgba(34, 32, 24, .07);
}

[data-theme="dark"] .drawer-link:hover,
[data-theme="dark"] .drawer-link.active {
  background: #2e2a1e;
  color: var(--text);
}

.drawer-link.active {
  background: var(--cream);
  color: var(--text);
}

.drawer-link::after {
  content: "";
  position: absolute;
  left: 15px;
  right: 15px;
  bottom: 5px;
  height: 2px;
  border-radius: 99px;
  background: var(--text);
  transform: scaleX(0);
  transform-origin: center;
  transition: transform .25s var(--ease);
}

.drawer-link:hover::after,
.drawer-link.active::after {
  transform: scaleX(1);
}

.nav-hint {
  margin-top: 8px;
  text-align: center;
  color: #9a978e;
  font-size: 10px;
  letter-spacing: .04em;
}

[data-theme="dark"] .nav-hint {
  color: #7d7970;
}

/* =========================================================
   TABLET RESPONSIVE (MAX-WIDTH: 900PX)
   ========================================================= */

@media (max-width: 900px) {
  .hero-container {
    grid-template-columns: 1fr;
    gap: 45px;
  }

  .hero-card { min-height: 420px; }
  .video-grid { grid-template-columns: 1fr; }
  .resource-grid { grid-template-columns: repeat(2, 1fr); }

  .about-container {
    grid-template-columns: 1fr;
    max-width: 620px;
  }

  .about-image { width: 220px; }
}

/* =========================================================
   MOBILE RESPONSIVE — PRESERVED ORIGINAL NAVIGATION & LEFT TOGGLE
   ========================================================= */

@media (max-width: 600px) {
  /* Disable desktop-only hot zones on mobile */
  .nav-revealer-zone,
  .nav-dock-zone {
    display: none !important;
  }

  .site-header { height: 62px; }

  /* Mobile Header: Toggle on the left, brand logo next, nav handle on right */
  .header-container {
    padding: 0 17px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 12px;
  }

  /* Mobile Theme Toggle moved to the LEFT side */
  .theme-toggle {
    order: -1;
    margin: 0;
    width: 38px;
    height: 38px;
    flex-shrink: 0;
  }

  .brand-logo {
    order: 1;
    font-size: 11px;
    letter-spacing: .10em;
  }

  .hero-section {
    padding: 50px 17px 60px;
  }

  .hero-title {
    font-size: clamp(2.6rem, 13vw, 3.8rem);
  }

  .hero-card {
    min-height: 340px;
    border-radius: 22px;
  }

  .hero-img {
    inset: 20px 20px 38px;
    width: calc(100% - 40px);
    height: calc(100% - 58px);
    border-radius: 16px;
  }

  .hero-card-label {
    left: 20px;
    bottom: 16px;
    font-size: 10px;
  }

  .videos-section,
  .about-section {
    padding: 60px 17px 70px;
  }

  .section-header {
    display: block;
    margin-bottom: 24px;
  }

  .section-note {
    margin-top: 8px;
  }

  .about-container {
    gap: 30px;
  }

  .about-image {
    width: 180px;
    border-radius: 20px;
  }

  .site-footer {
    padding: 24px 17px 30px;
    flex-direction: column;
    gap: 8px;
  }

  .resource-hero {
    padding: 45px 17px 28px;
  }

  .resource-section {
    padding: 30px 17px 90px;
  }

  .resource-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .resource-card {
    min-height: auto;
    padding: 16px;
    border-radius: 20px;
  }

  .resource-preview {
    height: 180px;
  }

  .resource-art {
    width: 180px;
    height: 135px;
    top: 18px;
  }

  .resource-info {
    padding-top: 14px;
  }

  .resource-title {
    font-size: 19px;
  }

  .resource-description {
    min-height: auto;
    font-size: 12.5px;
  }

  .resource-bottom {
    margin-top: 14px;
  }

  .resource-maintainer {
    font-size: 11px;
    max-width: 50%;
  }

  .download-btn {
    min-height: 40px;
    padding: 0 15px;
    font-size: 12px;
  }

  /* -------------------------------------------------------
     ORIGINAL MOBILE TOP-DOWN NAVIGATION (UNTOUCHED)
     ------------------------------------------------------- */

  .nav-dock {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: auto;
    width: 100%;
    transform: none;
    z-index: 9999;
    pointer-events: none;
  }

  .nav-dock-panel {
    position: relative;
    width: 100%;
    min-height: auto;
    padding: 72px 20px 25px;
    border: 1px solid rgba(222, 220, 211, .95);
    border-top: 0;
    border-radius: 0 0 24px 24px;
    background: rgba(255, 253, 248, .98);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    box-shadow: 0 18px 45px rgba(34, 32, 24, .14);
    transform: translateY(-100%);
    transition: transform .5s var(--ease), box-shadow .5s var(--ease);
    pointer-events: auto;
  }

  [data-theme="dark"] .nav-dock-panel {
    border-color: rgba(46, 44, 38, .95);
    background: rgba(24, 23, 20, .98);
    box-shadow: 0 18px 45px rgba(0, 0, 0, .45);
  }

  .nav-dock.open .nav-dock-panel {
    transform: translateY(0);
  }

  .nav-dock.peek .nav-dock-panel {
    transform: translateY(-100%);
  }

  /* Original Mobile Handle: Always visible at top-right */
  .nav-handle {
    position: fixed;
    z-index: 10001;
    top: 11px;
    right: 16px;
    left: auto;
    width: 48px;
    height: 44px;
    transform: none !important;
    opacity: 1 !important;
    pointer-events: auto !important;
    border: 1px solid transparent;
    border-radius: 12px;
    background: transparent;
    box-shadow: none;
    gap: 6px;
  }

  .nav-handle:hover {
    background: var(--cream);
    box-shadow: none;
  }

  [data-theme="dark"] .nav-handle:hover {
    background: #2b271d;
    box-shadow: none;
  }

  .nav-handle span {
    width: 20px;
    height: 2.5px;
    background: var(--text);
  }

  .nav-dock.open .nav-handle span:first-child {
    transform: translateY(4.25px) rotate(45deg);
  }

  .nav-dock.open .nav-handle span:last-child {
    transform: translateY(-4.25px) rotate(-45deg);
  }

  .drawer-nav {
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
    gap: 6px;
    width: 100%;
  }

  .drawer-link {
    width: 100%;
    min-height: 44px;
    justify-content: flex-start;
    padding: 12px 14px;
    font-size: 14px;
    border-radius: 12px;
  }

  .drawer-link:hover,
  .drawer-link:active {
    transform: translateX(4px);
    background: var(--cream);
    color: var(--text);
  }

  .drawer-link::after {
    left: 14px;
    right: auto;
    bottom: 8px;
    width: 22px;
    transform-origin: left;
  }

  .nav-hint {
    margin-top: 14px;
    text-align: left;
    padding-left: 6px;
    font-size: 10px;
  }
}

/* =========================================================
   ACCESSIBILITY & REDUCED MOTION
   ========================================================= */

@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  *, *::before, *::after {
    animation-duration: .01ms !important;
    transition-duration: .01ms !important;
  }
}
