import * as React from "react";

import { storiesOf } from "@storybook/react";
import { PageHome } from "../PageHome";

storiesOf("Page | Home", module).add("Default", () => (
  <PageHome welcomeMessage="Bienvenido a mi aplicación" />
));
