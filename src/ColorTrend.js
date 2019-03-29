import React from 'react';
import Trend from 'react-trend';
const ColorTrend = ({ colors }) => {
  let col = colors.join(",")
  return (
    <div>
      <Trend
        smooth
        autoDraw
        autoDrawDuration={3000}
        autoDrawEasing="ease-out"
        data={[0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0]}
        gradient={colors}
        radius={10}
        strokeWidth={2.8}
        strokeLinecap={'butt'}
      />
    </div>
  );
}
export default ColorTrend;
