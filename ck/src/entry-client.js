import { createApp } from "./main";

const { app, router } = createApp();

router.isReady().then(() => {
    app.mount("#app");
    console.log("Commercial Kitchen Consultants - Lynn & Michael (2023)");
});