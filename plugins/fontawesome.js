import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faAngleLeft,
  faAngleRight,
  faArrowUp,
  faArrowDown,
  faCheck,
  faGlobe,
  faInfoCircle,
  faSadTear,
  faSearch,
  faTimes
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

config.autoAddCss = false

library.add(
  faAngleLeft,
  faAngleRight,
  faArrowUp,
  faArrowDown,
  faCheck,
  faGlobe,
  faInfoCircle,
  faSadTear,
  faSearch,
  faTimes,
  faGithub
)

Vue.component('font-awesome-icon', FontAwesomeIcon)
