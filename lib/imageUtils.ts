/**
 * Shared image utilities for performance optimization.
 *
 * BLUR_DATA_URL: A tiny 1×1 pixel transparent WebP encoded as base64.
 * Used as `blurDataURL` with `placeholder="blur"` on Next.js <Image> components
 * to show an instant smooth skeleton while the real image loads over the network.
 * This eliminates the white-flash/blank space that appears during scroll.
 */
export const BLUR_DATA_URL =
  "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JZQCdAEO/gHOAAA=";

/**
 * A slightly tinted blur placeholder for project thumbnails (dark tint).
 * Same approach — base64 tiny WebP, gives a warm gray feel while loading.
 */
export const BLUR_DATA_URL_DARK =
  "data:image/webp;base64,UklGRlYAAABXRUJQVlA4IEoAAADQAQCdASoBAAEAAkA4JZQCdAEO/gC7AAD++D/xbKP/jHf/r3f/1PW/9z1T/u9U/7XQAA==";
