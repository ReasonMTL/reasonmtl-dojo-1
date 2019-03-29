[@genType.import "./Foo"] /* Module with the JS component to be wrapped. */
[@bs.module "./Foo.gen"]
[@genType]
/* Always the name of the current file plus ".gen". */
/* The make function will be automatically generated from the types below. */
/*
 noteRange={{ first: firstNote, last: lastNote }}
 playNote={(midiNumber) => {
   // Play a given note - see notes below
 }}
 stopNote={(midiNumber) => {
   // Stop playing a given note - see notes below
 }}
 width={1000}
 keyboardShortcuts={keyboardShortcuts} */
type noteRange = {
  first: int,
  last: int,
};

[@genType]
external make:
  (
    ~noteRange: noteRange,
    ~width: int,
    ~playNote: int => unit,
    ~stopNote: int => unit,
    'a
  ) =>
  ReasonReact.component(
    ReasonReact.stateless,
    ReasonReact.noRetainedProps,
    ReasonReact.actionless,
  ) =
  "";