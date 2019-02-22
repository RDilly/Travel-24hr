import navButtons from "./navbarListeners"
const $ = document.querySelector.bind(document)


const navbars= {
    navbarLogin: () => { return `
            <div class="navbar">
            <input id="userName" type="text" placeholder="Username">
            <input id="Password" type="text" placeholder="Password">
            <button id="loginButton">Login</button>
            </div>
    `},
    navbarGeneral: () => { return `
            <div class="navbar">
            <button id="interestNavbar">New Interest</button>
            <button id="placesNavbar">New Place</button>
            <button id="logoutButton">Logout</button>
            </div>
    `},
    navbarLoginPops: () => {
            $("#navbarSection").innerHTML = navbars.navbarLogin()
            navButtons.navLoginButton()

    }
    }
    export default navbars