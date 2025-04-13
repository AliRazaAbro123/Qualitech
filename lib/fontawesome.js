// utils/fontawesome.js
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
// Add icons to the library
library.add(faFacebook, faLinkedin);
