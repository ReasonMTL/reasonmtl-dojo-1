type state = {color: string};

type action =
  | ChangeColor(string);

let component = ReasonReact.reducerComponent(__MODULE__);

let styleSheet = color =>
  ReactDOMRe.Style.make(
    ~backgroundColor=color,
    ~width="120px",
    ~height="120px",
    ()
  )

let make = _children => {
  ...component,
  initialState: _state => {color: "red"},
  reducer: (action, _state) =>
    switch (action) {
    | ChangeColor(color) => ReasonReact.Update({color: color})
    },
  render: self => <div style=styleSheet(self.state.color)></div>
};