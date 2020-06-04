import React from "react";
import Button from "./Button";
import "./Button.scss";

class App extends React.Component {
  state = {
    value: 0,
  };
  render() {
    const style = {
      flexGrow: 2,
    };
    return (
      <div className="main-container">
        <div className="button-container">
          <input
            type="text"
            value={this.state.value}
            style={{ fontSize: 30, color: "white", textAlign: "end" }}
          />
          <Button text="C" />
          <Button text="+/-" />
          <Button text="%" />
          <Button text="/" />
          <Button text="7" />
          <Button text="8" />
          <Button text="9" />
          <Button text="X" />
          <Button text="4" />
          <Button text="5" />
          <Button text="6" />
          <Button text="-" />
          <Button text="1" />
          <Button text="2" />
          <Button text="3" />
          <Button text="+" />
          <Button text="0" style={style} />
          <Button text="." />
          <Button text="=" />
        </div>
      </div>
    );
  }
}
export default App;
