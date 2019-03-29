/* Untyped file generated by genType. */

import ColorTrend from './ColorTrend';

import * as React from 'react';

import * as ReasonReact from 'reason-react/src/ReasonReact.js';

// Export 'make' early to allow circular import from the '.bs.js' file.
export const make = function (colors, children) { return ReasonReact.wrapJsForReason(ColorTrend, {colors: colors}, children); };