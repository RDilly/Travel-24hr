import navbars from "./navbar"
const $ = document.querySelector.bind(document)

const navbarGeneralFull = () => {
    $("#navbarSection").innerHTML = navbars.navbarGeneral()
}
export default navbarGeneralFull