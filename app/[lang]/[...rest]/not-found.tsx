/**
 * Next 14 does not apply the `not-found.tsx` at the root of a dynamic segment
 * to unknown nested URLs. A boundary inside this catch-all segment is required
 * so unknown paths render the localized 404 instead of Next's built-in page.
 */
export { default, generateMetadata } from '../not-found';
