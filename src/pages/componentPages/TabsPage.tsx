import React from "react";
import { globalStyles } from "../../global/globalStyles";
import ComponentsContainer from "../../components/others/ComponentsContainer";
import { BasicTabsCode } from "../../components/tabComponents/basicTabs/BasicTabsCode";
import BasicTabs from "../../components/tabComponents/basicTabs/BasicTabs";
import { FiHome, FiUser, FiSettings } from "react-icons/fi";
import { IconsTabsCode } from "../../components/tabComponents/iconTabs/IconTabsCode";
import IconTabs from "../../components/tabComponents/iconTabs/IconTabs";

const TabsPage = () => {
  const tabsData = [
    { label: "Tab 1", content: "This is the content of Tab 1" },
    { label: "Tab 2", content: "This is the content of Tab 2" },
    { label: "Tab 3", content: "This is the content of Tab 3" },
  ];
  const tabsWithIcons = [
    { label: "Home", icon: FiHome, content: "Welcome to the home page!" },
    {
      label: "Profile",
      icon: FiUser,
      content: "This is your profile information.",
    },
    {
      label: "Settings",
      icon: FiSettings,
      content: "Adjust your settings here.",
    },
  ];
  return (
    <div className={globalStyles.container2}>
      <h1 className={globalStyles.header}>Tab components</h1>
      <div className="w-full flex flex-col gap-10">
        <ComponentsContainer
          title="basic tab"
          code={BasicTabsCode}
          component={<BasicTabs tabs={tabsData} />}
        />
        <ComponentsContainer
          title="icons with tab"
          code={IconsTabsCode}
          component={<IconTabs tabs={tabsWithIcons} />}
        />
      </div>
    </div>
  );
};

export default TabsPage;
