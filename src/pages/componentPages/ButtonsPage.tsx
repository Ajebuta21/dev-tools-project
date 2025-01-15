import React from "react";
import { globalStyles } from "../../global/globalStyles";
import ComponentsContainer from "../../components/others/ComponentsContainer";
import { ButtonPrimaryCode } from "../../components/buttonComponents/buttonPrimary/ButtonPrimaryCode";
import ButtonPrimary from "../../components/buttonComponents/buttonPrimary/ButtonPrimary";
import { ButtonSecondaryCode } from "../../components/buttonComponents/buttonSecondary/ButtonSecondaryCode";
import ButtonSecondary from "../../components/buttonComponents/buttonSecondary/ButtonSecondary";
import ButtonBorder from "../../components/buttonComponents/buttonBorder/ButtonOutline";
import { ButtonOutlineCode } from "../../components/buttonComponents/buttonBorder/ButtonOutlineCode";
import { ButtonIconCode } from "../../components/buttonComponents/buttonIcon/ButtonIconCode";
import ButtonIcon from "../../components/buttonComponents/buttonIcon/ButtonIcon";
import { ButtonLoaderCode } from "../../components/buttonComponents/buttonLoader/ButtonLoaderCode";
import ButtonLoader from "../../components/buttonComponents/buttonLoader/ButtonLoader";

const ButtonsPage = () => {
  return (
    <div className={globalStyles.container2}>
      <h1 className={globalStyles.header}>Button components</h1>
      <div className="w-full flex flex-col gap-10">
        <ComponentsContainer
          code={ButtonPrimaryCode}
          component={<ButtonPrimary />}
          title="primary button"
        />
        <ComponentsContainer
          code={ButtonSecondaryCode}
          component={<ButtonSecondary />}
          title="secondary button"
        />
        <ComponentsContainer
          code={ButtonOutlineCode}
          component={<ButtonBorder />}
          title="outline button"
        />
        <ComponentsContainer
          code={ButtonIconCode}
          component={<ButtonIcon />}
          title="icon button"
        />
        <ComponentsContainer
          code={ButtonLoaderCode}
          component={<ButtonLoader />}
          title="loading button"
        />
      </div>
    </div>
  );
};

export default ButtonsPage;
