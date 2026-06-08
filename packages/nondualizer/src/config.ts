export const NONDUALIZER_BASE_PATH = "/nondualizer";

/** Matches andrew-cohen-site Nav height (h-16) */
export const SITE_HEADER_OFFSET_CLASS = "top-16";

export function assetPath(path: string): string {
  return `${NONDUALIZER_BASE_PATH}${path.startsWith("/") ? path : `/${path}`}`;
}

export function trackPath(slug: string): string {
  return `${NONDUALIZER_BASE_PATH}/track/${slug}`;
}
