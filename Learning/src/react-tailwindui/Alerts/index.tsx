import React from 'react';

// Define AlertProps type
interface AlertProps {
  baseClasses: string;
  baseAttrs: Record<string, string>;
  classes: string;
  attrs: Record<string, string>;
  dClasses?: string | null;
  dAttrs?: Record<string, string> | null;
  eProps: {
    alertVariant: string;
  };
}

// Define AlertTextProps type
interface AlertTextProps {
  baseClasses: string;
  baseAttrs: Record<string, string>;
  classes: string;
  attrs: Record<string, string>;
  dClasses?: string | null;
  dAttrs?: Record<string, string> | null;
  eProps: object;
}

// Define AlertLinkProps type
interface AlertLinkProps {
  baseClasses: string;
  baseAttrs: Record<string, string>;
  classes: string;
  attrs: Record<string, string>;
  dClasses?: string | null;
  dAttrs?: Record<string, string> | null;
  eProps: object;
}

// Define ListAlertListProps type
interface ListAlertListProps {
  baseClasses: string;
  baseAttrs: Record<string, string>;
  classes: string;
  attrs: Record<string, string>;
  dClasses?: string | null;
  dAttrs?: Record<string, string> | null;
  eProps: object;
}

// Define LinkOnRightAlertProps type
interface LinkOnRightAlertProps {
  baseClasses: string;
  baseAttrs: Record<string, string>;
  classes: string;
  attrs: Record<string, string>;
  dClasses?: string | null;
  dAttrs?: Record<string, string> | null;
  eProps: object;
}

// Define Alert component
const Alert: React.FC<{
  alertProps: AlertProps;
  alertIcon: React.ReactNode;
  children: React.ReactNode;
}> = ({ alertProps, alertIcon, children }) => {
  const { baseAttrs, classes, attrs, dClasses, dAttrs, eProps } = alertProps;
  const prps = eProps.alertVariant === 'RoundedAlert' ?
    { baseClasses: `rounded-md p-4`, baseAttrs, classes, attrs, dClasses, dAttrs, eProps } :
    { baseClasses: `border-l-4 p-4 ${eProps.alertVariant}`, baseAttrs, classes, attrs, dClasses, dAttrs, eProps };

  return (
    <div className={prps.baseClasses}>
      <div className="flex">
        <div className="flex-shrink-0">{alertIcon}</div>
        {children}
      </div>
    </div>
  );
};

// Define AlertHeading component
const AlertHeading: React.FC<{
  alertTextProps: AlertTextProps;
  text: string;
}> = ({ alertTextProps, text }) => (
  <h3 className={alertTextProps.classes}>{text}</h3>
);

// Define AlertLink component
const AlertLink: React.FC<{
  alertLinkProps: AlertLinkProps;
  text: string;
  href: string;
  children: React.ReactNode;
}> = ({ alertLinkProps, text, href, children }) => (
  <a className={alertLinkProps.classes} href={href} {...alertLinkProps.attrs}>
    {text}
    {children}
  </a>
);

// Define ListAlertList component
const ListAlertList: React.FC<{
  listAlertListProps: ListAlertListProps;
  items: string[];
}> = ({ listAlertListProps, items }) => (
  <ul className={listAlertListProps.baseClasses} {...listAlertListProps.baseAttrs}>
    {items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);

// Define LinkOnRightAlert component
const LinkOnRightAlert: React.FC<{
  linkOnRightAlertProps: LinkOnRightAlertProps;
  text: string;
  children: React.ReactNode;
}> = ({ linkOnRightAlertProps, text, children }) => (
  <div className={linkOnRightAlertProps.baseClasses}>
    <p className={linkOnRightAlertProps.classes}>{text}</p>
    {children}
  </div>
);

export {
  Alert,
  AlertHeading,
  AlertLink,
  ListAlertList,
  LinkOnRightAlert,
};
