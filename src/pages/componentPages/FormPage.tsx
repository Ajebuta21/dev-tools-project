import React from "react";
import { globalStyles } from "../../global/globalStyles";
import ComponentsContainer from "../../components/others/ComponentsContainer";
import { LoginFormCode } from "../../components/formComponents/loginForm/LoginFormCode";
import LoginForm from "../../components/formComponents/loginForm/LoginForm";
import { SignupFormCode } from "../../components/formComponents/signupForm/SignupFormCode";
import SignupForm from "../../components/formComponents/signupForm/SignupForm";
import FormWithLabel from "../../components/formComponents/formWithLabel/FormWithLabel";
import { FormWithLabelCode } from "../../components/formComponents/formWithLabel/FormWithLabelCode";
import ModalForm from "../../components/formComponents/modalForm/ModalForm";
import { ModalFormCode } from "../../components/formComponents/modalForm/ModalFormCode";

const FormPage = () => {
  return (
    <div className={globalStyles.container2}>
      <h1 className={globalStyles.header}>Form components</h1>
      <div className="w-full flex flex-col gap-10">
        <ComponentsContainer
          title="login form"
          code={LoginFormCode}
          component={<LoginForm />}
        />
        <ComponentsContainer
          title="signup form"
          code={SignupFormCode}
          component={<SignupForm />}
        />
        <ComponentsContainer
          title="form with label"
          code={FormWithLabelCode}
          component={<FormWithLabel />}
        />
        <ComponentsContainer
          title="modal form"
          code={ModalFormCode}
          component={<ModalForm />}
        />
      </div>
    </div>
  );
};

export default FormPage;
