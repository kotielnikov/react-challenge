import { Link, Typography } from "@material-ui/core";
import React from "react";
import { Logo } from "./Logo";
import { Meta } from "./Meta";

export const SignaturePreview = ({ name, surname, email, roleName }) => {
  return (
    <div>
      <Logo />
      <div>
        <b>
          {name} {surname}
        </b>
        <br />
        {roleName}
        <br />
        <Link href={`mailto: ${email}`}>{email}</Link>
      </div>
      <Meta
        address={{
          street: "Sample address",
          code: "Sample Code",
          city: "Sample City"
        }}
        owners={["Owner 1", "Owner 2"]}
      />
      <Typography variant="caption">
        <b>Neues von Capmo:</b>

        <Link href="https://www.capmo.de/blog/baustellenmamagement-software">
          eBook &quot;Wirtschaftlich erfolgreich am Bau&quot; – jetzt gratis
          herunterladen!
          <br />
          Neues aus unserem Baumagazin: So unterstützt Sie eine
          Baustellenmanagement Software
          <br />
          Erfolgsgeschichten unserer Kunden: Brand Berger digitalisieren die
          Projektsteuerung mit Capmo
        </Link>
      </Typography>
    </div>
  );
};
