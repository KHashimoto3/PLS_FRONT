import { createApp } from "vue";
import AccountPage from "./AccountPage.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faList);

createApp(AccountPage)
  .mount("#app")
  .component("font-awesome-icon", FontAwesomeIcon);
