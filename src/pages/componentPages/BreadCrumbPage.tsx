import React from "react";
import { globalStyles } from "../../global/globalStyles";
import ComponentsContainer from "../../components/others/ComponentsContainer";
import { BasicBreadCrumbCode } from "../../components/breadcrumbComponents/basicBreadcrumb/BasicBreadCrumbCode";
import BasicBreadcrumb from "../../components/breadcrumbComponents/basicBreadcrumb/BasicBreadcrumb";
import IconBreadcrumb from "../../components/breadcrumbComponents/iconBreadcrumb/IconBreadcrumb";
import { IconBreadcrumbCode } from "../../components/breadcrumbComponents/iconBreadcrumb/IconBreadcrumbCode";
import BorderedBreadcrumb from "../../components/breadcrumbComponents/borderedBreadcrumb/BorderedBreadcrumb";
import { BorderedBreadcrumbCode } from "../../components/breadcrumbComponents/borderedBreadcrumb/BorderedBreadcrumbCode";

const BreadCrumbPage = () => {
  return (
    <div className={globalStyles.container2}>
      <h1 className={globalStyles.header}>Breadcrumb components</h1>
      <div className="w-full flex flex-col gap-10">
        <ComponentsContainer
          title="Basic breadcrumb"
          code={BasicBreadCrumbCode}
          component={<BasicBreadcrumb path="/products/electronics" />}
        />
        <ComponentsContainer
          title="breadcrumb with icons"
          code={IconBreadcrumbCode}
          component={<IconBreadcrumb path="/products/electronics" />}
        />
        <ComponentsContainer
          title="bordered breadcrumb"
          code={BorderedBreadcrumbCode}
          component={<BorderedBreadcrumb path="/products/electronics" />}
        />
      </div>
    </div>
  );
};

export default BreadCrumbPage;
