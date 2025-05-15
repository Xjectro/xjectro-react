import type { ResponsiveValue } from '../../types/responsive';
import { getResponsiveClasses } from './responsive';

export function getGapClasses(gap?: ResponsiveValue<number | string>): string {
  return getResponsiveClasses(gap, 'gap');
}

export function getPaddingClasses(
  padding?: ResponsiveValue<number | string>,
): string {
  return getResponsiveClasses(padding, 'p');
}

export function getMarginClasses(
  margin?: ResponsiveValue<number | string>,
): string {
  return getResponsiveClasses(margin, 'm');
}
