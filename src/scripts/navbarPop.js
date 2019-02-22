import navbars from "./navbars"
const $ = document.querySelector.bind(document)

const navbarGeneralFull = () => {
    $("#navbarSection").innerHTML = navbars.navbarGeneral()
}
export default navbarGeneralFull