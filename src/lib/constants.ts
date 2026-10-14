/**
 * Height (px) of the fixed header, used to decide when scrolled content has
 * cleared the hero banner and the header should switch to its solid state.
 * Keep this in sync with Navigation's `py-4` + brand mark height.
 */
export const NAV_OFFSET_PX = 72;

/**
 * Offset applied when smooth-scrolling to an in-page anchor, so the target
 * section isn't hidden behind the fixed header.
 */
export const SCROLL_ANCHOR_OFFSET_PX = -80;
