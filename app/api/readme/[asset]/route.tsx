import { ImageResponse } from "next/og";
import { README_CONTENT as C, TOKENS as T, parseAccents } from "../content";

export const runtime = "edge";

// All sizes are 2x so images stay sharp when GitHub scales them down.
const S = 2;

const CACHE =
  "public, max-age=86400, s-maxage=86400, stale-while-revalidate=604800";

const fontFiles = {
  400: new URL("../fonts/Inter-Regular.ttf", import.meta.url),
  500: new URL("../fonts/Inter-Medium.ttf", import.meta.url),
  700: new URL("../fonts/Inter-Bold.ttf", import.meta.url),
} as const;

async function loadFonts() {
  const entries = Object.entries(fontFiles) as [string, URL][];
  return Promise.all(
    entries.map(async ([weight, url]) => ({
      name: "Inter",
      data: await fetch(url).then((r) => r.arrayBuffer()),
      weight: Number(weight) as 400 | 500 | 700,
      style: "normal" as const,
    })),
  );
}

const grid = {
  backgroundImage: [
    `linear-gradient(to right, rgba(255,255,255,0.05) ${S}px, transparent ${S}px)`,
    `linear-gradient(to bottom, rgba(255,255,255,0.05) ${S}px, transparent ${S}px)`,
  ].join(", "),
  backgroundSize: `${32 * S}px ${32 * S}px`,
};

function AccentLine({ line, size }: { line: string; size: number }) {
  return (
    <div style={{ display: "flex", justifyContent: "center", whiteSpace: "pre" }}>
      {parseAccents(line).map((seg, i) => (
        <span
          key={i}
          style={{ color: seg.accent ? T.accent : T.textPrimary, fontSize: size }}
        >
          {seg.text}
        </span>
      ))}
    </div>
  );
}

function Spot({ rgb, style }: { rgb: string; style: React.CSSProperties }) {
  return (
    <div
      style={{
        position: "absolute",
        backgroundImage: `radial-gradient(closest-side, rgba(${rgb}, 0.45), rgba(${rgb}, 0))`,
        ...style,
      }}
    />
  );
}

function Frame({
  w,
  h,
  children,
}: {
  w: number;
  h: number;
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        width: w,
        height: h,
        display: "flex",
        position: "relative",
        overflow: "hidden",
        borderRadius: 24 * S,
        backgroundColor: T.bgBase,
        fontFamily: "Inter",
      }}
    >
      <div style={{ position: "absolute", top: 0,
            left: 0,
            width: "100%",
            height: "100%", display: "flex", ...grid }} />
      <div
        style={{
          position: "absolute",
          top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          display: "flex",
          backgroundImage: `radial-gradient(ellipse at center, rgba(0,3,25,0) 20%, ${T.bgBase} 85%)`,
        }}
      />
      {children}
    </div>
  );
}

type HeroLayout = {
  base: [number, number];
  scale: number;
  lines: string[];
  eyebrow: [number, number, number];
  headline: number;
  greeting: [number, number];
  spots: [string, number, number, number, number, number][];
};

const HERO_DESKTOP: HeroLayout = {
  base: [1200, 440],
  scale: S,
  lines: C.headline,
  eyebrow: [19, 3.6, 28],
  headline: 54,
  greeting: [26, 32],
  spots: [
    [T.spot1, -200, -260, 900, 520, -30],
    [T.spot2, 260, -240, 700, 400, -20],
    [T.spot3, 820, -120, 700, 520, -40],
  ],
};

// Phone layout: drawn at 400px wide, 3x for sharpness on high-density screens.
const HERO_MOBILE: HeroLayout = {
  base: [400, 380],
  scale: 3,
  lines: C.headlineMobile,
  eyebrow: [12, 2.2, 18],
  headline: 34,
  greeting: [17, 22],
  spots: [
    [T.spot1, -160, -220, 420, 340, -30],
    [T.spot2, 60, -200, 360, 300, -20],
    [T.spot3, 240, -60, 300, 320, -40],
  ],
};

function hero(L: HeroLayout) {
  const k = L.scale;
  const w = L.base[0] * k;
  const h = L.base[1] * k;
  return {
    w,
    h,
    node: (
      <Frame w={w} h={h}>
        {L.spots.map(([rgb, x, y, sw, sh, rot]) => (
          <Spot
            key={rgb}
            rgb={rgb}
            style={{ left: x * k, top: y * k, width: sw * k, height: sh * k, transform: `rotate(${rot}deg)` }}
          />
        ))}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              fontSize: L.eyebrow[0] * k,
              fontWeight: 500,
              letterSpacing: L.eyebrow[1] * k,
              color: T.textEyebrow,
              marginBottom: L.eyebrow[2] * k,
            }}
          >
            {C.eyebrow}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontWeight: 700,
              lineHeight: 1.15,
              letterSpacing: -0.02 * L.headline * k,
            }}
          >
            {L.lines.map((line) => (
              <AccentLine key={line} line={line} size={L.headline * k} />
            ))}
          </div>
          <div
            style={{
              fontSize: L.greeting[0] * k,
              fontWeight: 400,
              color: T.textSecondary,
              marginTop: L.greeting[1] * k,
            }}
          >
            {C.greeting}
          </div>
        </div>
      </Frame>
    ),
  };
}

function cta() {
  const w = 240 * S;
  const h = 56 * S;
  const b = 2 * S;
  return {
    w,
    h,
    node: (
      <div
        style={{
          width: w,
          height: h,
          display: "flex",
          padding: b,
          borderRadius: 10 * S,
          backgroundImage: `linear-gradient(90deg, ${T.magicLight}, ${T.magicDark} 45%, ${T.magicLight} 90%)`,
          fontFamily: "Inter",
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 10 * S - b,
            backgroundColor: T.bgBase,
            color: T.textPrimary,
            fontSize: 20 * S,
            fontWeight: 500,
          }}
        >
          {C.cta}
        </div>
      </div>
    ),
  };
}

// Plain arrays, not fragments: the image renderer rejects fragments inside <svg>.
const ICONS = {
  linkedin: [
    <path key="p" d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />,
    <rect key="r" width="4" height="12" x="2" y="9" />,
    <circle key="c" cx="4" cy="4" r="2" />,
  ],
  email: [
    <path key="p" d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />,
    <rect key="r" x="2" y="4" width="20" height="16" rx="2" />,
  ],
};

function badge(kind: keyof typeof ICONS, label: string) {
  const w = 145 * S;
  const h = 56 * S;
  return {
    w,
    h,
    node: (
      <div
        style={{
          width: w,
          height: h,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 12 * S,
          borderRadius: 10 * S,
          backgroundColor: T.glassFill,
          border: `${S}px solid ${T.glassBorder}`,
          fontFamily: "Inter",
          color: T.textPrimary,
          fontSize: 18 * S,
          fontWeight: 500,
        }}
      >
        <svg
          width={22 * S}
          height={22 * S}
          viewBox="0 0 24 24"
          fill="none"
          stroke={T.accent}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {ICONS[kind]}
        </svg>
        {label}
      </div>
    ),
  };
}

type FooterLayout = {
  base: [number, number];
  scale: number;
  lines: string[];
  heading: number;
  site: [number, number];
  spots: [string, number, number, number, number, number][];
};

const FOOTER_DESKTOP: FooterLayout = {
  base: [1200, 300],
  scale: S,
  lines: C.footer,
  heading: 44,
  site: [20, 28],
  spots: [
    [T.spot1, 200, 180, 800, 300, 0],
    [T.spot3, 880, -160, 500, 360, -35],
  ],
};

const FOOTER_MOBILE: FooterLayout = {
  base: [400, 280],
  scale: 3,
  lines: C.footerMobile,
  heading: 28,
  site: [15, 20],
  spots: [
    [T.spot1, 40, 170, 320, 200, 0],
    [T.spot3, 260, -100, 240, 220, -35],
  ],
};

function footer(L: FooterLayout) {
  const k = L.scale;
  const w = L.base[0] * k;
  const h = L.base[1] * k;
  return {
    w,
    h,
    node: (
      <Frame w={w} h={h}>
        {L.spots.map(([rgb, x, y, sw, sh, rot]) => (
          <Spot
            key={rgb}
            rgb={rgb}
            style={{ left: x * k, top: y * k, width: sw * k, height: sh * k, transform: `rotate(${rot}deg)` }}
          />
        ))}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontWeight: 700,
              lineHeight: 1.2,
              letterSpacing: -0.012 * L.heading * k,
            }}
          >
            {L.lines.map((line) => (
              <AccentLine key={line} line={line} size={L.heading * k} />
            ))}
          </div>
          <div
            style={{
              fontSize: L.site[0] * k,
              fontWeight: 500,
              color: T.textMuted,
              marginTop: L.site[1] * k,
            }}
          >
            {C.site}
          </div>
        </div>
      </Frame>
    ),
  };
}

const BUILDERS: Record<string, () => { w: number; h: number; node: JSX.Element }> = {
  "hero.png": () => hero(HERO_DESKTOP),
  "hero-mobile.png": () => hero(HERO_MOBILE),
  "cta.png": cta,
  "linkedin.png": () => badge("linkedin", "LinkedIn"),
  "email.png": () => badge("email", "Email"),
  "footer.png": () => footer(FOOTER_DESKTOP),
  "footer-mobile.png": () => footer(FOOTER_MOBILE),
};

export async function GET(
  _req: Request,
  { params }: { params: { asset: string } },
) {
  const build = BUILDERS[params.asset];
  if (!build) return new Response("Not found", { status: 404 });
  const { w, h, node } = build();
  return new ImageResponse(node, {
    width: w,
    height: h,
    fonts: await loadFonts(),
    headers: { "Cache-Control": CACHE },
  });
}
