// ────────────────────────────────────────────────────────────
// Preloader — the typing intro that plays before the page.
// Every value here is safe to change; nothing else needs touching.
// ────────────────────────────────────────────────────────────

export const loader = {
  /** Master switch. Set to false to remove the intro entirely. */
  enabled: true,

  /** The word that gets typed out, one character at a time. */
  text: "ZiTechurity",

  /** Quiet line that fades in once the word finishes. Use "" to hide it. */
  subtitle: "IT Solutions & Systems Engineering",

  /** ms of stillness before the first character lands. */
  startDelay: 220,

  /**
   * ms per character, plus up to `charJitter` extra at random so the
   * rhythm reads like a person typing instead of a metronome.
   */
  charDelay: 75,
  charJitter: 45,

  /** ms to hold the finished word before the panel leaves. */
  holdAfter: 600,

  /** ms for the exit fade. */
  exitDuration: 550,

  /**
   * Play on every page view. Flip to true before you deploy and the intro
   * plays only on the first view of a browser session — a nicer welcome for
   * real visitors, but it makes the loader look broken while you're editing,
   * because reloads stay hidden until the tab is closed.
   */
  oncePerSession: false,

  /** sessionStorage key backing `oncePerSession`. */
  storageKey: "zt:preloader",

  /**
   * Hard ceiling. However the timing above is tuned, the panel always
   * leaves by this point — a loader that can get stuck isn't a loader.
   */
  maxDuration: 6000,
};
