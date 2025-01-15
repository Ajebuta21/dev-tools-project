import React from "react";
import { globalStyles } from "../../global/globalStyles";
import ComponentsContainer from "../../components/others/ComponentsContainer";
import { DropDownCode } from "../../components/dropdownComponents/dropDown/DropDownCode";
import DropDown from "../../components/dropdownComponents/dropDown/DropDown";
import { DropDownWithIconsCode } from "../../components/dropdownComponents/dropDownWithIcons/DropDownWithIconsCode";
import DropDownWithIcons from "../../components/dropdownComponents/dropDownWithIcons/DropDownWithIcons";

const DropDownsPage = () => {
  return (
    <div className={globalStyles.container2}>
      <h1 className={globalStyles.header}>Dropdown components</h1>
      <div className="w-full flex flex-col gap-10">
        <ComponentsContainer
          title="dropdown"
          code={DropDownCode}
          component={<DropDown />}
        />
        <ComponentsContainer
          title="dropdown with icons"
          code={DropDownWithIconsCode}
          component={<DropDownWithIcons />}
        />
      </div>
    </div>
  );
};

export default DropDownsPage;
