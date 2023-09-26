import r2wc from "@r2wc/react-to-web-component";

import { Button, Header, Page } from "./index";

customElements.define(
  "r-button",
  r2wc(Button, {
    props: {
      primary: "boolean",
      backgroundColor: "string",
      size: "string",
      label: "string",
      onClick: "function",
    },
  })
);

customElements.define(
  "r-header",
  r2wc(Header, {
    props: {
      user: "json",
      onLogin: "function",
      onLogout: "function",
      onCreateAccount: "function",
    },
  })
);

customElements.define("r-page", r2wc(Page));
