let component = ReasonReact.statelessComponent(__MODULE__);

let make = (~colors: array(string), _children) => {
  ...component,

  render: _self =>
    <div>
      <Piano
        width=1000
        noteRange={first: 48, last: 77}
        playNote={_ => ()}
        stopNote={_ => ()}
      />
      {ReasonReact.array(Array.map(c => <Square initialColor=c />, colors))}
    </div>,
};