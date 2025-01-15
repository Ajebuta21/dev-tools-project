import React from "react";
import { globalStyles } from "../../global/globalStyles";
import ComponentsContainer from "../../components/others/ComponentsContainer";
import { SpinnerCode } from "../../components/spinnerComponents/spinner/SpinnerCode";
import Spinner from "../../components/spinnerComponents/spinner/Spinner";
import { DotLoaderCode } from "../../components/spinnerComponents/dotLoader/DotLoaderCode";
import DotLoader from "../../components/spinnerComponents/dotLoader/DotLoader";
import { BarLoaderCode } from "../../components/spinnerComponents/barLoader/BarLoaderCode";
import BarLoader from "../../components/spinnerComponents/barLoader/BarLoader";

const SpinnersPage = () => {
  return (
    <div className={globalStyles.container2}>
      <h1 className={globalStyles.header}>Spinner/Loader components</h1>
      <div className="w-full flex flex-col gap-10">
        <ComponentsContainer
          title="spinner"
          code={SpinnerCode}
          component={<Spinner />}
        />
        <ComponentsContainer
          title="bar loader"
          code={BarLoaderCode}
          component={<BarLoader />}
        />
        <ComponentsContainer
          title="dot loader"
          code={DotLoaderCode}
          component={<DotLoader />}
        />
      </div>
    </div>
  );
};

export default SpinnersPage;
