import DomPrint from "./printToDom"
import navPops from "./navbarPop"
import navbars from "./navbars"
import HTMLgenerators from "./HTMLgen"
const $ = document.querySelector.bind(document)

const navButtons = {
    navInterestButton: () => {
        $("#interestNavbar").addEventListener("click", () => {
            //prints news form to DOM
            $("#form_section").innerHTML = ""
            $("#form_section").innerHTML = HTMLgenerators.formInterestSlots()
        })
    },

    navPlacesButton: () => {
        $("#placesNavbar").addEventListener("click", () => {
            //prints news form to DOM
            $("#form_section").innerHTML = ""
            $("#form_section").innerHTML = HTMLgenerators.formPlacesSlots()
        })
    },

    navLogoutButton: () => {
        $("#logoutButton").addEventListener("click", () => {
            //prints news form to DOM
            $("#form_section").innerHTML = ""
            $("#navbarSection").innerHTML = ""
            navbars.navbarLoginPops()
            $("#display_section").innerHTML = ""
        })
    },

    navLoginButton: () => {
        $("#loginButton").addEventListener("click", () => {
            //check username/password
            if ($("#userName").value === "Mira" &&
            $("#Password").value === "password") {
                DomPrint.entriesDisplay()
                navPops.navbarGeneralFull()

            } else {
                alert("hold up, Youre not Mira. Get out of here, Scamp.")
            }
        })
    },

}

export default navButtons