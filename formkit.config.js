import { generateClasses } from "@formkit/themes";
import { genesisIcons } from "@formkit/icons";
import myTailwindTheme from "./tailwind-theme.js";
import { defaultConfig } from '@formkit/vue';
import { createAutoAnimatePlugin, createMultiStepPlugin } from "@formkit/addons";
import '@formkit/addons/css/multistep';
import { de, en, tr } from '@formkit/i18n';

const config = defaultConfig({
  icons: {
    ...genesisIcons,
  },
  config: {
    classes: generateClasses(myTailwindTheme),
  },
  plugins: [createMultiStepPlugin(), createAutoAnimatePlugin()],
  locales: { en, de, tr },
  locale: 'en',
})

export default config