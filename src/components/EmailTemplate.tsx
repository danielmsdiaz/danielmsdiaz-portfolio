import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
  message: string;
  email: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  message,
  email
}) => (
  <div>
    <h1 className="h1 mb-10">Olá, meu nome é {firstName}!</h1>
    <div className="flex flex-col gap-y-2">
      <span>Meu email é: {email}</span>
      <p className="subtitle">{message}</p>
    </div>
  </div>
);
