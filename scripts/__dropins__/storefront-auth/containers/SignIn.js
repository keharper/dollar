/*! Copyright 2024 Adobe
All Rights Reserved. */
import{jsx as r}from"@dropins/tools/preact-jsx-runtime.js";import"@dropins/tools/lib.js";import"@dropins/tools/components.js";import"@dropins/tools/event-bus.js";import"@dropins/tools/recaptcha.js";import"@dropins/tools/preact-hooks.js";/* empty css              */import{S as u}from"../chunks/SignInForm.js";import"../chunks/Button2.js";import"@dropins/tools/preact-compat.js";import"@dropins/tools/i18n.js";import"../chunks/getCustomerToken.js";import"../chunks/network-error.js";import"@dropins/tools/fetch-graphql.js";import"../chunks/initialize.js";import"../fragments.js";import"../chunks/getStoreConfig.js";import"../chunks/setReCaptchaToken.js";import"../chunks/resendConfirmationEmail.js";import"../chunks/simplifyTransformAttributesForm.js";import"../chunks/transform-attributes-form.js";import"../chunks/focusOnEmptyPasswordField.js";import"../chunks/confirmEmail.js";const L=({slots:i,labels:o,enableEmailConfirmation:t,initialEmailValue:m,formSize:p,renderSignUpLink:n,hideCloseBtnOnEmailConfirmation:s,routeRedirectOnEmailConfirmationClose:a,routeRedirectOnSignIn:e,routeForgotPassword:c,routeSignUp:d,onSuccessCallback:f,onErrorCallback:g,onSignUpLinkClick:l})=>r("div",{className:"auth-sign-in",children:r(u,{slots:i,labels:o,formSize:p,renderSignUpLink:n,initialEmailValue:m,enableEmailConfirmation:t,hideCloseBtnOnEmailConfirmation:s,routeRedirectOnEmailConfirmationClose:a,routeSignUp:d,onErrorCallback:g,onSuccessCallback:f,onSignUpLinkClick:l,routeForgotPassword:c,routeRedirectOnSignIn:e})});export{L as SignIn,L as default};
