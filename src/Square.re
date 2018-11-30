type state = {color: string};

type action =
  | ChangeColor(string)
  | BumpColor;

let component = ReasonReact.reducerComponent(__MODULE__);

let styleSheet = color =>
  ReactDOMRe.Style.make(
    ~backgroundColor=color,
    ~width="120px",
    ~height="120px",
    (),
  );

let bumpColor = color =>
  switch (color) {
  | "red" => "blue"
  | "blue" => "white"
  | "white" => "pink"
  | _ => "red"
  };

let make = _children => {
  ...component,
  initialState: _state => {color: "red"},
  reducer: (action, state) =>
    switch (action) {
    | ChangeColor(color) =>
      Js.log((color, state));
      ReasonReact.Update({color: color});
    | BumpColor => ReasonReact.Update({color: bumpColor(state.color)})
    },

  didMount: self =>
    Js.Global.setInterval(() => self.send(BumpColor), 1000) |> ignore,
  render: self => <div style={styleSheet(self.state.color)} />,
};