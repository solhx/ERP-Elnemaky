import { clsx, type ClassValue } from "clsx";

/**
 * Merge class names conditionally.
 * Usage: cn("base", condition && "extra", { "other": flag })
 */
export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs);
}
