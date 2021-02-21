import React from "react";
import styles from "./CounterBtnSettings.module.css";
import PropTypes from "prop-types";

function CounterBtnSettings(props) {
  const { isAdd, isRunning, handleDirection, step, handleChengeStep } = props;

  return (
    <>
      <div className={styles.add}>
        Add?{" "}
        <input
          type="checkbox"
          checked={isAdd}
          onChange={handleDirection}
          disabled={isRunning}
        />
      </div>
      <div className={styles.count}>
        Will be {isAdd ? " + " : " - "}:{" "}
        <input
          type="number"
          value={step}
          onChange={handleChengeStep}
          disabled={isRunning}
        />
      </div>
    </>
  );
}
CounterBtnSettings.propTypes = {
  isAdd: PropTypes.bool.isRequired,
  isRunning: PropTypes.bool.isRequired,
  handleDirection: PropTypes.func.isRequired,
  step: PropTypes.number.isRequired,
  handleChengeStep: PropTypes.func.isRequired,
}

export default CounterBtnSettings;
