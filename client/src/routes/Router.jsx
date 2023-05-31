import React from "react";
import { Route, Routes } from "react-router-dom";
import ROUTES from "./routesModel";
import CardsPage from "../cards/pages/CardsPage";
import AboutPage from "../pages/AboutPage";
import ErrorPage from "../pages/ErrorPage";
import SignUpPage from "../users/pages/SignUpPage";
import Sandbox from "../sandbox/Sandbox";
import LoginPage from "../users/pages/LoginPage";
import CardDetailsPage from "../cards/pages/CardDetailsPage";
import Loops from "../sandbox/loops/Loops";
import UseState from "../sandbox/hooks/useState/UseState";
import SANDBOX_ROUTES from "./sandboxRoutesModel";
import LifeCycleHooks from "../sandbox/lifeCycleHooks/LifeCycleHooks";
import UseCounter from "../sandbox/useCounter/UseCounter";
import UseCallBackComp from "../sandbox/memozation/UseCallBackComp";
import A from "../sandbox/use-context/exeTwo/components/A";
import FormTest from "../sandbox/forms/FormTest";

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTES.ROOT} element={<CardsPage />} />
      <Route path={ROUTES.CARDS} element={<CardsPage />} />
      <Route path={ROUTES.ABOUT} element={<AboutPage />} />
      <Route path={ROUTES.SIGNUP} element={<SignUpPage />} />
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route path={`${ROUTES.CARD_INFO}/:id`} element={<CardDetailsPage />} />
      <Route path={ROUTES.SANDBOX} element={<Sandbox />}>
        <Route path={SANDBOX_ROUTES.LOOPS} element={<Loops />} />
        <Route path={SANDBOX_ROUTES.USE_STATE} element={<UseState />} />
        <Route path={SANDBOX_ROUTES.HOOKS} element={<LifeCycleHooks />} />
        <Route path={SANDBOX_ROUTES.USE_COUNTER} element={<UseCounter />} />
        <Route path={SANDBOX_ROUTES.USE_CALLBACK_BTN} element={<UseCallBackComp />} />
        <Route path={SANDBOX_ROUTES.USE_CONTEXT} element={<A />} />
        <Route path={SANDBOX_ROUTES.FORMS} element={<FormTest />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default Router;
