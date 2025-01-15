import React from "react";
import { globalStyles } from "../../global/globalStyles";
import ComponentsContainer from "../../components/others/ComponentsContainer";
import { BasicProgressBarCode } from "../../components/progressBarComponents/basicProgressBar/BasicProgressBarCode";
import BasicProgressBar from "../../components/progressBarComponents/basicProgressBar/BasicProgressBar";
import { LabeledProgressBarCode } from "../../components/progressBarComponents/labeledProgressBar/LabeledProgressBarCode";
import LabeledProgressBar from "../../components/progressBarComponents/labeledProgressBar/LabeledProgressBar";

const ProgressBarPage = () => {
  return (
    <div className={globalStyles.container2}>
      <h1 className={globalStyles.header}>Progress bar components</h1>
      <div className="w-full flex flex-col gap-10">
        <ComponentsContainer
          title="progress bar"
          code={BasicProgressBarCode}
          component={<BasicProgressBar value={30} maxValue={100} />}
        />
        <ComponentsContainer
          title="labeled progress bar"
          code={LabeledProgressBarCode}
          component={
            <LabeledProgressBar value={60} maxValue={100} label="Task progress" />
          }
        />
      </div>
    </div>
  );
};

export default ProgressBarPage;
