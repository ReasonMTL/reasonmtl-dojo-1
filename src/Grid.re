let component = ReasonReact.statelessComponent(__MODULE__);

let make = (~colors: array(string), _children) => {
  ...component,
  render: _self =>
    <div>
      <ColorTrend colors />
      {ReasonReact.array(Array.map(c => <Square initialColor=c />, colors))}
    </div>,
};
