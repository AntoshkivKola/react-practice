import React, { Component } from "react";
import CounterAutoBtnSettings from "../CounterAutoBtnSettings";
import CounterBtnSettings from "../CounterBtnSettings";
import styles from "./CounterSettings.module.scss";
import stylesBtn from "../Counter.module.scss";
import PropTypes from "prop-types";

class CounterSettings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customize: false,
    };
  }
  handleSettingsShow = () => {
    this.setState({ customize: true });
  };
  handleSettingsHide = () => {
    this.setState({ customize: false });
  };
  render() {
    const {
      isAdd,
      isRunning,
      handleDirection,
      step,
      handleChengeStep,
      interval,
      time,
      handleChengeInterval,
    } = this.props;
    const { customize } = this.state;
    return (
      <>
        {" "}
        <div
          className={customize ? styles.containerShow : styles.containerHide}
        >
          <button
            className={styles.hideButton}
            onClick={this.handleSettingsHide}
          >
            X
          </button>
          <CounterBtnSettings
            isAdd={isAdd}
            isRunning={isRunning}
            handleDirection={handleDirection}
            step={step}
            handleChengeStep={handleChengeStep}
          />
          <CounterAutoBtnSettings
            interval={interval}
            isRunning={isRunning}
            time={time}
            handleChengeInterval={handleChengeInterval}
          />
        </div>
        <button
          className={stylesBtn.btn}
          disabled={customize}
          onClick={this.handleSettingsShow}
        >
          Settings
        </button>
      </>
    );
  }
}

CounterSettings.propTypes = {
  isAdd: PropTypes.bool.isRequired,
  isRunning: PropTypes.bool.isRequired,
  handleDirection: PropTypes.func.isRequired,
  step: PropTypes.number.isRequired,
  handleChengeStep: PropTypes.func.isRequired,
  interval: PropTypes.number.isRequired,
  time: PropTypes.number.isRequired,
  handleChengeInterval: PropTypes.func.isRequired,
};
export default CounterSettings;
