import React from "react";
import { SignaturePreview } from "./SignaturePreview";

export const SignaturePage = () => {
  return (
    <div>
      <h1>Edit your email signature</h1>

      <SignaturePreview
        name="Name"
        surname="Surname"
        email="Email"
        roleName="Role"
      />
    </div>
  );
};
