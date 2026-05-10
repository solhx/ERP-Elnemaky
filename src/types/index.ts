// ─────────────────────────────────────────────────────────────
// Shared project-wide types
// ─────────────────────────────────────────────────────────────

export type ID = string | number;

/** Semantic intent — maps to your color system */
export type Intent = "info" | "success" | "warning" | "danger";

/** Component size scale */
export type Size = "sm" | "md" | "lg";

/** Theme / direction */
export type Theme     = "light" | "dark";
export type Direction = "ltr" | "rtl";
export type Language  = "en" | "ar";

/** Generic API response wrapper */
export interface ApiResponse<T> {
  data:    T;
  message: string;
  success: boolean;
}

/** Pagination */
export interface PaginationMeta {
  page:       number;
  pageSize:   number;
  total:      number;
  totalPages: number;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  meta: PaginationMeta;
}
