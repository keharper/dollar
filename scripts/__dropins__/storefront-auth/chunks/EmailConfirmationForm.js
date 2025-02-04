import{jsxs as c,jsx as n}from"@dropins/tools/preact-jsx-runtime.js";import{classes as b}from"@dropins/tools/lib.js";import{InLineAlert as C,Header as y}from"@dropins/tools/components.js";import"@dropins/tools/event-bus.js";import"@dropins/tools/recaptcha.js";import{r as x}from"./resendConfirmationEmail.js";import{useState as E,useCallback as F}from"@dropins/tools/preact-hooks.js";import{useText as d}from"@dropins/tools/i18n.js";import{B as f}from"./useInLineAlert.js";const p=({userEmail:r,handleSetInLineAlertProps:a})=>{const i=d({emailConfirmationMessage:"Auth.Notification.emailConfirmationMessage",technicalErrorSendEmail:"Auth.Notification.technicalErrors.technicalErrorSendEmail"}),[l,e]=E(!1);return{handleEmailConfirmation:F(async()=>{var o,m;if(e(!0),r){const t=await x(r);if(t){const u=(o=t==null?void 0:t.errors)==null?void 0:o.length,h=(m=t==null?void 0:t.data)==null?void 0:m.resendConfirmationEmail;a(u?{type:"error",text:i.technicalErrorSendEmail}:{type:h?"success":"error",text:i.emailConfirmationMessage})}}e(!1)},[a,i,r]),disabledButton:l}},M=({formSize:r,userEmail:a,inLineAlertProps:i,hideCloseBtnOnEmailConfirmation:l,handleSetInLineAlertProps:e,onPrimaryButtonClick:s})=>{const o=d({title:"Auth.EmailConfirmationForm.title",subtitle:"Auth.EmailConfirmationForm.subtitle",mainText:"Auth.EmailConfirmationForm.mainText",buttonPrimary:"Auth.EmailConfirmationForm.buttonPrimary",buttonSecondary:"Auth.EmailConfirmationForm.buttonSecondary"}),{handleEmailConfirmation:m,disabledButton:t}=p({userEmail:a,handleSetInLineAlertProps:e});return c("div",{className:b(["auth-emailConfirmationForm",r]),children:[i.text?n(C,{className:"auth-signInForm__notification",type:i.type,variant:"secondary",heading:i.text,icon:i.icon,"data-testid":"authInLineAlert"}):null,n(y,{title:o.title,divider:!1,className:"auth-emailConfirmationForm__title"}),a!=null&&a.length?n("span",{className:"auth-emailConfirmationForm__subtitle",children:`${o.subtitle} ${a}`}):null,n("span",{className:"auth-emailConfirmationForm__text",children:o.mainText}),c("div",{className:"auth-emailConfirmationForm-buttons",children:[n(f,{type:"button",variant:"tertiary",style:{padding:0},buttonText:o.buttonSecondary,enableLoader:!1,onClick:m,disabled:t}),l?null:n(f,{type:"submit",buttonText:o.buttonPrimary,variant:"primary",enableLoader:!1,disabled:t,onClick:s})]})]})};export{M as E};
