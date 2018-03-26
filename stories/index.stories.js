import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import WithFontsStory from "./with-fonts/index.stories";

storiesOf("WithFonts", module).add("default usage", () => <WithFontsStory />);
