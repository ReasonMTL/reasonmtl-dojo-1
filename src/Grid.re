let component = ReasonReact.statelessComponent(__MODULE__);

let make = (~colors: array(string), _children) => {
  ...component,

  render: self =>
    <div>
      {ReasonReact.array(Array.map(c => <Square initialColor=c />, colors))}
    </div>,
};