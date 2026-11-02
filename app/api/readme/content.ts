// Text and tokens for the GitHub profile README images.
// Words wrapped in *asterisks* render in the accent color.

export const README_CONTENT = {
  eyebrow: "FRONTEND ENGINEER · 4+ YEARS",
  headline: ["I build *fast*, *high-traffic*", "web apps with React and Next.js."],
  headlineMobile: ["I build *fast*,", "*high-traffic* web apps", "with React and Next.js."],
  greeting: "Hi, I’m M R Jeevan.",
  cta: "See my work →",
  footer: ["Ready to *connect* and *collaborate*", "on *innovative* projects."],
  footerMobile: ["Ready to *connect*", "and *collaborate* on", "*innovative* projects."],
  site: "mrjeevan.dev",
};

export const TOKENS = {
  bgBase: "#000319",
  glassFill: "#0D1424",
  glassBorder: "rgba(255, 255, 255, 0.125)",
  textPrimary: "#FFFFFF",
  textSecondary: "#BEC1DD",
  textMuted: "#C1C2D3",
  textEyebrow: "#E4ECFF",
  accent: "#CBACF9",
  spot1: "101, 60, 255",
  spot2: "143, 113, 255",
  spot3: "19, 66, 126",
  magicLight: "#E2CBFF",
  magicDark: "#393BB2",
};

export type Segment = { text: string; accent: boolean };

export function parseAccents(line: string): Segment[] {
  return line
    .split(/(\*[^*]+\*)/)
    .filter(Boolean)
    .map((part) =>
      part.startsWith("*")
        ? { text: part.slice(1, -1), accent: true }
        : { text: part, accent: false },
    );
}
