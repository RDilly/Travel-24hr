import navbars from "./navbars"
import navButtons from "./navbarListeners"
const $ = document.querySelector.bind(document)
const navpops = {
navbarLogin: () => {
    $("#navbarSection").innerHTML = navbars.navbarLogin()
},

navbarGeneralFull: () => {
    $("#navbarSection").innerHTML = navbars.navbarGeneral()
    navButtons.navPlacesButton()
    navButtons.navLogoutButton()
    navButtons.navInterestButton()
}
}

export default navpops