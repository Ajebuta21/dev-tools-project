import React from "react";
import { Route, Routes } from "react-router-dom";
import BasicLayout from "./layouts/BasicLayout";
import Home from "./pages/Home";
import SecondLayout from "./layouts/SecondLayout";
import ComponentsPage from "./pages/ComponentsPage";
import GetStartedPage from "./pages/GetStartedPage";
import ButtonsPage from "./pages/componentPages/ButtonsPage";
import InputsPage from "./pages/componentPages/InputsPage";
import ModalsPage from "./pages/componentPages/ModalsPage";
import SpinnersPage from "./pages/componentPages/SpinnersPage";
import DropDownsPage from "./pages/componentPages/DropDownsPage";
import AccordionsPage from "./pages/componentPages/AccordionsPage";
import CarouselPage from "./pages/componentPages/CarouselPage";
import NavbarsPage from "./pages/componentPages/NavbarsPage";
import TogglesPage from "./pages/componentPages/TogglesPage";
import PaginationsPage from "./pages/componentPages/PaginationsPage";
import AvatarsPage from "./pages/componentPages/AvatarsPage";
import ProgressBarPage from "./pages/componentPages/ProgressBarPage";
import BreadCrumbPage from "./pages/componentPages/BreadCrumbPage";
import FormPage from "./pages/componentPages/FormPage";
import CardsPage from "./pages/componentPages/CardsPage";
import TablesPage from "./pages/componentPages/TablesPage";
import TabsPage from "./pages/componentPages/TabsPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <BasicLayout>
              <Home />
            </BasicLayout>
          }
        />
        <Route
          path="/get-started"
          element={
            <SecondLayout>
              <GetStartedPage />
            </SecondLayout>
          }
        />
        <Route
          path="/components"
          element={
            <SecondLayout>
              <ComponentsPage />
            </SecondLayout>
          }
        />
        {/* Basic components */}
        <Route
          path="/components/buttons"
          element={
            <SecondLayout>
              <ButtonsPage />
            </SecondLayout>
          }
        />
        <Route
          path="/components/inputs"
          element={
            <SecondLayout>
              <InputsPage />
            </SecondLayout>
          }
        />
        <Route
          path="/components/modals"
          element={
            <SecondLayout>
              <ModalsPage />
            </SecondLayout>
          }
        />
        <Route
          path="/components/spinners-loaders"
          element={
            <SecondLayout>
              <SpinnersPage />
            </SecondLayout>
          }
        />
        <Route
          path="/components/dropdowns"
          element={
            <SecondLayout>
              <DropDownsPage />
            </SecondLayout>
          }
        />
        <Route
          path="/components/accordions"
          element={
            <SecondLayout>
              <AccordionsPage />
            </SecondLayout>
          }
        />
        <Route
          path="/components/carousels"
          element={
            <SecondLayout>
              <CarouselPage />
            </SecondLayout>
          }
        />
        <Route
          path="/components/navbars"
          element={
            <SecondLayout>
              <NavbarsPage />
            </SecondLayout>
          }
        />
        <Route
          path="/components/toggles-switches"
          element={
            <SecondLayout>
              <TogglesPage />
            </SecondLayout>
          }
        />
        <Route
          path="/components/paginations"
          element={
            <SecondLayout>
              <PaginationsPage />
            </SecondLayout>
          }
        />
        <Route
          path="/components/avatars"
          element={
            <SecondLayout>
              <AvatarsPage />
            </SecondLayout>
          }
        />
        <Route
          path="/components/progress-bars"
          element={
            <SecondLayout>
              <ProgressBarPage />
            </SecondLayout>
          }
        />
        <Route
          path="/components/breadcrumbs"
          element={
            <SecondLayout>
              <BreadCrumbPage />
            </SecondLayout>
          }
        />
        <Route
          path="/components/forms"
          element={
            <SecondLayout>
              <FormPage />
            </SecondLayout>
          }
        />
        <Route
          path="/components/cards"
          element={
            <SecondLayout>
              <CardsPage />
            </SecondLayout>
          }
        />
        <Route
          path="/components/tables"
          element={
            <SecondLayout>
              <TablesPage />
            </SecondLayout>
          }
        />
        <Route
          path="/components/tabs"
          element={
            <SecondLayout>
              <TabsPage />
            </SecondLayout>
          }
        />
      </Routes>
    </>
  );
};

export default App;
