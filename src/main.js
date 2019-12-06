import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// BootstrapVue
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.use(BootstrapVue);

// vue-vuelidate
import Vuelidate from "vuelidate";
Vue.use(Vuelidate);

// TOASTED
import Toasted from "vue-toasted";

Vue.use(Toasted, {
  position: "top-right",
  duration: 5000,
  keepOnHover: true,
  theme: "bubble"
});

// vue select
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
Vue.component("v-select", vSelect);

// vue multiSelect
import Multiselect from "vue-multiselect";
Vue.component("vue-multiselect", Multiselect);
import "vue-multiselect/dist/vue-multiselect.min.css";

// vue-the-mask
import VueTheMask from "vue-the-mask";
Vue.use(VueTheMask);

// vue-tel-input
import VueTelInput from "vue-tel-input";
Vue.use(VueTelInput);

import service from "./service/apiservice.js";

Vue.filter("uploadpath", function(input, width, height, style) {
  var other = "";
  if (width && width !== "") {
    other += "&width=" + width;
  }
  if (height && height !== "") {
    other += "&height=" + height;
  }
  if (style && style !== "") {
    other += "&style=" + style;
  }
  if (input) {
    if (input.indexOf("https://") == -1) {
      return service.readFileUrl + "?file=" + input + other;
    } else {
      return input;
    }
  }
});

// vue momemt
Vue.use(require("vue-moment"));
// import VueMoment from 'vue-moment'
// Vue.use(VueMoment, {
//     moment,
// })

//vue lodash
import VueLodash from "vue-lodash";
window._ = require("lodash");
const options = { name: "lodash" };
Vue.use(VueLodash, options);

//FontAwesomeIcon
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faYoutube,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faStar,
  faCalendar,
  faCopyright
} from "@fortawesome/free-regular-svg-icons"; //far
import {
  faChevronRight,
  faChevronLeft,
  faTrashAlt,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons"; //fas

library.add(faCoffee);
library.add(faFacebookF, faYoutube, faInstagram); //fab
library.add(faStar, faCalendar, faCopyright); //far
library.add(faChevronRight, faChevronLeft, faTrashAlt, faEnvelope); //fas

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
