[@genType.import "./ColorTrend"] /* Module with the JS component to be wrapped. */
[@bs.module "./ColorTrend.gen"] /* Always the name of the current file plus ".gen". */
external make:
  (~colors: array(string), 'a) =>
  ReasonReact.component(
    ReasonReact.stateless,
    ReasonReact.noRetainedProps,
    ReasonReact.actionless,
  ) =
  "";
