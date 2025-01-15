import React from "react";
import { globalStyles } from "../../global/globalStyles";
import ComponentsContainer from "../../components/others/ComponentsContainer";
import { InputCode } from "../../components/inputComponents/input/InputCode";
import Input from "../../components/inputComponents/input/Input";
import SearchInput from "../../components/inputComponents/searchInput/SearchInput";
import { SearchInputCode } from "../../components/inputComponents/searchInput/SearchInputCode";
import { TextAreaCode } from "../../components/inputComponents/textarea/TextAreaCode";
import TextArea from "../../components/inputComponents/textarea/TextArea";
import NotResizeableTextArea from "../../components/inputComponents/textareaNoResize/NotResizeableTextArea";
import { NotResizeableTextAreaCode } from "../../components/inputComponents/textareaNoResize/NotResizeableTextAreaCode";
import { FileInputCode } from "../../components/inputComponents/fileInput/FileInputCode";
import FileInput from "../../components/inputComponents/fileInput/FileInput";
import { PasswordInputCode } from "../../components/inputComponents/passwordInput/PasswordInputCode";
import PasswordInput from "../../components/inputComponents/passwordInput/PasswordInput";
import { SelectInputCode } from "../../components/inputComponents/selectInput/SelectInputCode";
import SelectInput from "../../components/inputComponents/selectInput/SelectInput";

const InputsPage = () => {
  return (
    <div className={globalStyles.container2}>
      <h1 className={globalStyles.header}>Input components</h1>
      <div className="w-full flex flex-col gap-10">
        <ComponentsContainer
          title="basic input"
          code={InputCode}
          component={<Input />}
        />
        <ComponentsContainer
          title="password input"
          code={PasswordInputCode}
          component={<PasswordInput />}
        />
        <ComponentsContainer
          title="file input"
          code={FileInputCode}
          component={<FileInput />}
        />
        <ComponentsContainer
          title="search input"
          code={SearchInputCode}
          component={<SearchInput />}
        />
        <ComponentsContainer
          title="select options input"
          code={SelectInputCode}
          component={<SelectInput />}
        />
        <ComponentsContainer
          title="textarea"
          code={TextAreaCode}
          component={<TextArea />}
        />
        <ComponentsContainer
          title="non-resizeable textarea"
          code={NotResizeableTextAreaCode}
          component={<NotResizeableTextArea />}
        />
      </div>
    </div>
  );
};

export default InputsPage;
