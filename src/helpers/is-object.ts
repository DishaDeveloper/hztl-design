/**
 * Check if provided parameter is a plain object
 * @param item
 * @returns boolean
 */
export function isObject(item: unknown): item is Record<string, unknown> {
  return item !== null && typeof item === "object" && (item as Record<string, unknown>).constructor === Object;
}
