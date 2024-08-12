import React, { Fragment, useEffect, useRef, useState } from "react";

const Stepper = ({ stepsConfig = [] }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isCompleted, setIsCompleted] = useState(false);
  const [margin, setMargin] = useState({
    marginLeft: 0,
    marginRight: 0,
  });

  const stepRef = useRef([]);

  useEffect(() => {
    setMargin({
      marginLeft: stepRef.current[0].offsetWidth / 2,
      marginRight: stepRef.current[stepsConfig.length - 1].offsetWidth / 2,
    });
  }, [stepRef, stepsConfig.length]);

  if (!stepsConfig.length) {
    return <></>;
  }

  const handleNext = () => {
    setCurrentStep((prev) => {
      if (prev === stepsConfig.length) {
        setIsCompleted(true);
        return prev;
      } else {
        return prev + 1;
      }
    });
  };

  const calculateProgressBarWidth = () => {
    return ((currentStep - 1) / (stepsConfig.length - 1)) * 100;
  };

  const ActiveComponent = stepsConfig[currentStep - 1].Component;

  return (
    <Fragment>
      <div className="stepper">
        {stepsConfig.map((step, index) => (
          <div
            ref={(element) => (stepRef.current[index] = element)}
            key={step.name}
            className={`step ${
              currentStep > index + 1 || isCompleted ? "complete" : ""
            } ${currentStep === index + 1 ? "active" : ""}`}
          >
            <div className="step-number">
              {currentStep > index + 1 || isCompleted ? (
                <span>&#10003;</span>
              ) : (
                index + 1
              )}
            </div>
            <div className="step-name">{step.name}</div>
          </div>
        ))}
      </div>
      <div
        className="progress-bar"
        style={{
          width: `calc(100%-${margin.marginLeft + margin.marginRight}px)`,
          marginLeft: margin.marginLeft,
          marginRight: margin.marginRight,
        }}
      >
        <div
          className="progress"
          style={{
            width: `${calculateProgressBarWidth()}%`,
          }}
        ></div>
      </div>
      <ActiveComponent />
      {!isCompleted && (
        <button onClick={handleNext}>
          {currentStep === stepsConfig.length ? "Finished" : "Next"}
        </button>
      )}
    </Fragment>
  );
};

export default Stepper;
