import React from "react";
import { globalStyles } from "../../global/globalStyles";
import ComponentsContainer from "../../components/others/ComponentsContainer";
import { ModalCode } from "../../components/modalComonents/modal/ModalCode";
import Modal from "../../components/modalComonents/modal/Modal";
import { ModalWithActionCode } from "../../components/modalComonents/modalWithAction/ModalWithActionCode";
import ModalWithAction from "../../components/modalComonents/modalWithAction/ModalWithAction";

const ModalsPage = () => {
  return (
    <div className={globalStyles.container2}>
      <h1 className={globalStyles.header}>Modal components</h1>
      <div className="w-full flex flex-col gap-10">
        <ComponentsContainer
          title="Basic modal"
          code={ModalCode}
          component={<Modal />}
        />
        <ComponentsContainer
          title="modal with action"
          code={ModalWithActionCode}
          component={<ModalWithAction />}
        />
      </div>
    </div>
  );
};

export default ModalsPage;
