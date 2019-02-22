import DomPrint from "./printToDom"
import navpops from "./navbarPop"
import navbarListeners from "./navbarListeners"

navpops.navbarGeneralFull()
DomPrint.entriesDisplay()
navbarListeners.navInterestButton()
navbarListeners.navLogoutButton()
navbarListeners.navPlacesButton()