"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// React.js Oscillator Synth by Alex Fairchild
// https://codepen.io/FairchildHeavyIndustries/pen/rVpYYQ
var Synth = {
  audioContext: new AudioContext(),
  oscillators: {
    osc1: {},
    osc2: {},
    bass: {}
  },
  waveforms: ["sawtooth", "square", "sine"],
  currentWaveform: "",
  subWaveForm: "",
  setWaveform: function setWaveform(waveform) {
    this.currentWaveform = waveform;
  },
  setSubWaveform: function setSubWaveform(waveform) {
    this.subWaveForm = waveform;
  },
  noteOff: function noteOff() {
    if (typeof this.oscillators.osc1.stop === "function") {
      for (key in this.oscillators) {
        this.oscillators[key].stop();
      }
    }
  },
  play: function play(note) {
    var pitch = this.notes[note];

    for (key in this.oscillators) {
      this.oscillators[key] = this.audioContext.createOscillator();
      this.oscillators[key].type = this.currentWaveform;
      this.oscillators[key].frequency.value = pitch;
      this.oscillators[key].connect(this.audioContext.destination);

      switch (key) {
        case "osc1":
          this.oscillators[key].detune.value = -15;
          break;

        case "osc2":
          this.oscillators[key].detune.value = 15;
          break;

        case "bass":
          this.oscillators[key].frequency.value = pitch / 2;
          this.oscillators[key].type = this.subWaveForm;
          break;
      }

      this.oscillators[key].start();
      console.log(this.currentWaveform);
    }
  },
  notes: {
    C4: 261.63,
    Db4: 277.18,
    D4: 293.66,
    Eb4: 311.13,
    E4: 329.63,
    F4: 349.23,
    Gb4: 369.99,
    G4: 392.0,
    Ab4: 415.3,
    A4: 440.0,
    Bb4: 466.16,
    B4: 493.88
  },
  render: function render() {
    return null;
  }
};

var Key = _react.default.createClass({
  displayName: "Key",
  playNote: function playNote() {
    Synth.play(this.props.note);
  },
  stopNote: function stopNote() {
    Synth.noteOff();
  },
  render: function render() {
    return _react.default.createElement("div", {
      className: this.props.color,
      onMouseDown: this.playNote,
      onMouseUp: this.stopNote,
      onMouseLeave: this.stopNote
    });
  }
});

var JS303 = _react.default.createClass({
  displayName: "JS303",
  getInitialState: function getInitialState() {
    Synth.setWaveform(Synth.waveforms[0]);
    Synth.setSubWaveform(Synth.waveforms[0]);
    return {
      waveforms: Synth.waveforms
    };
  },
  changeWaveform: function changeWaveform(waveform) {
    Synth.setWaveform(waveform);
  },
  changeSubWaveform: function changeSubWaveform(waveform) {
    Synth.setSubWaveform(waveform);
  },
  render: function render() {
    return _react.default.createElement(
      "div",
      null,
      _react.default.createElement(
        "div",
        null,
        _react.default.createElement(
          "label",
          null,
          "OSC Waveform",
          " ",
          _react.default.createElement(WaveformSelector, {
            waveforms: this.state.waveforms,
            changeWaveform: this.changeWaveform
          })
        )
      ),
      _react.default.createElement(
        "div",
        null,
        _react.default.createElement(
          "label",
          null,
          "SUB Waveform",
          " ",
          _react.default.createElement(WaveformSelector, {
            waveforms: this.state.waveforms,
            changeWaveform: this.changeSubWaveform
          })
        )
      ),
      _react.default.createElement(Keyboard, null)
    );
  }
});

var WaveformSelector = _react.default.createClass({
  displayName: "WaveformSelector",
  handleChange: function handleChange(event) {
    this.props.changeWaveform(event.target.value);
  },
  render: function render() {
    var options = this.props.waveforms.map(function(wform) {
      return _react.default.createElement(
        "option",
        {
          value: wform
        },
        wform
      );
    });
    return _react.default.createElement(
      "select",
      {
        onChange: this.handleChange
      },
      options
    );
  }
});

var pianoStyle = {
  width: "50%",
  height: 300,
  margin: "auto",
  borderRadius: "20px 20px 0 0",
  overflow: "hidden",
  background: "linear-gradient(#1e1d1d, #000)"
};

var Keyboard = _react.default.createClass({
  displayName: "Keyboard",
  render: function render() {
    return _react.default.createElement(
      "div",
      {
        style: pianoStyle
      },
      _react.default.createElement(
        "div",
        {
          id: "piano-container"
        },
        _react.default.createElement(
          "li",
          null,
          _react.default.createElement(Key, {
            color: "white",
            note: "C4"
          }),
          _react.default.createElement(Key, {
            color: "black",
            note: "Db4"
          })
        ),
        _react.default.createElement(
          "li",
          null,
          _react.default.createElement(Key, {
            color: "white",
            note: "D4"
          }),
          _react.default.createElement(Key, {
            color: "black",
            note: "Eb4"
          })
        ),
        _react.default.createElement(
          "li",
          null,
          _react.default.createElement(Key, {
            color: "white",
            note: "E4"
          })
        ),
        _react.default.createElement(
          "li",
          null,
          _react.default.createElement(Key, {
            color: "white",
            note: "F4"
          }),
          _react.default.createElement(Key, {
            color: "black",
            note: "Gb4"
          })
        ),
        _react.default.createElement(
          "li",
          null,
          _react.default.createElement(Key, {
            color: "white",
            note: "G4"
          }),
          _react.default.createElement(Key, {
            color: "black",
            note: "Ab4"
          })
        ),
        _react.default.createElement(
          "li",
          null,
          _react.default.createElement(Key, {
            color: "white",
            note: "A4"
          }),
          _react.default.createElement(Key, {
            color: "black",
            note: "Bb4"
          })
        ),
        _react.default.createElement(
          "li",
          null,
          _react.default.createElement(Key, {
            color: "white",
            note: "B4"
          })
        )
      )
    );
  }
});

_react.default.render(
  _react.default.createElement(JS303, null),
  document.getElementById("js303")
);

var _default = JS303;
exports.default = _default;
