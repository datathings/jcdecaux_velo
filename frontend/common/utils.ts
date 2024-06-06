/**
 * Parses an SVG raw string into the actual native `SVGSVGElement`.
 *
 * @param svg an SVG raw string
 * @returns {SVGSVGElement}
 */
export function icon(svg: string): SVGSVGElement {
  const parser = new DOMParser();
  const d = parser.parseFromString(svg, 'image/svg+xml');
  return d.children[0] as SVGSVGElement;
}