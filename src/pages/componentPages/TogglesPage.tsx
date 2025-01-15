import React from "react";
import { globalStyles } from "../../global/globalStyles";
import ComponentsContainer from "../../components/others/ComponentsContainer";
import { ToggleComponentCode } from "../../components/toggleComponents/toggleComponent/ToggleComponentCode";
import ToggleComponent from "../../components/toggleComponents/toggleComponent/ToggleComponent";
import ToggleComponent2 from "../../components/toggleComponents/toggleComponent2/ToggleComponent2";
import { ToggleComponentCode2 } from "../../components/toggleComponents/toggleComponent2/ToggleComponentCode2";

const TogglesPage = () => {
  return (
    <div className={globalStyles.container2}>
      <h1 className={globalStyles.header}>Toggle/Switch components</h1>
      <div className="w-full flex flex-col gap-10">
        <ComponentsContainer
          title="Simple toggle"
          code={ToggleComponentCode}
          component={<ToggleComponent />}
        />
        <ComponentsContainer
          title="Simple toggle 2"
          code={ToggleComponentCode2}
          component={<ToggleComponent2 />}
        />
      </div>
    </div>
  );
};

export default TogglesPage;
