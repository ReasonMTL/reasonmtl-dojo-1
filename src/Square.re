type state = {color: string};

type action =
  | ChangeColor(string);

let component = ReasonReact.reducerComponent(__MODULE__);

let make = _children => {
  ...component,
  initialState: _state => {color: "red"},
  reducer: (action, _state) =>
    switch (action) {
    | ChangeColor(color) => ReasonReact.Update({color: color})
    },
  render: _ => <div />,
};