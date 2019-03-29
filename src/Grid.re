let component = ReasonReact.statelessComponent(__MODULE__);

let make = (~colors: array(string), _children) => {
  ...component,

  render: _self =>
    <div>
      <Synth />
      {ReasonReact.array(Array.map(c => <Square initialColor=c />, colors))}
    </div>,
};