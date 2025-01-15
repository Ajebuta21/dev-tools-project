import React from "react";
import { globalStyles } from "../../global/globalStyles";
import ComponentsContainer from "../../components/others/ComponentsContainer";
import { SimpleAccordionCode } from "../../components/accordionComponents/SimpleAccordion/SimpleAccordionCode";
import SimpleAccordion from "../../components/accordionComponents/SimpleAccordion/SimpleAccordion";
import HighlightAccordion from "../../components/accordionComponents/HighlightAccordion/HighlightAccordion";

const AccordionsPage = () => {
  return (
    <div className={globalStyles.container2}>
      <h1 className={globalStyles.header}>Accordion components</h1>
      <div className="w-full flex flex-col gap-10">
        <ComponentsContainer
          title="simple accordion"
          code={SimpleAccordionCode}
          component={<SimpleAccordion />}
        />
        <ComponentsContainer
          title="simple accordion 2"
          code={SimpleAccordionCode}
          component={<HighlightAccordion />}
        />
      </div>
    </div>
  );
};

export default AccordionsPage;
