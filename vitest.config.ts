import { defineConfig } from "vitest/config";
import { storybookTest } from "@storybook/addon-vitest/vitest-plugin";

export default defineConfig({
    test: {
        workspace: [
            {
                test: {
                    name: "unit"
                }
            },
            {
                extends: "vite.config.ts",
                plugins: [
                    // The plugin will run tests for the stories defined in your Storybook config
                    // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
                    storybookTest({ configDir: ".storybook" })
                ],
                test: {
                    name: "storybook",
                    browser: {
                        enabled: true,
                        headless: true,
                        provider: "playwright",
                        instances: [{ browser: "chromium" }]
                    },
                    setupFiles: [".storybook/vitest.setup.ts"]
                }
            }
        ]
    }
});
