import HTMLgenerators from "./HTMLgen"
const $ = document.querySelector.bind(document)

const entriesDisplay = () => {
    fetch("http://localhost:8088/interests")
        .then(response => response.json())
        .then(myParsedinterests => {
            myParsedinterests.forEach(interest => {
                   fetch(`http://localhost:8088/places/${interest.placeId}`)
                        .then(response => response.json())
                        .then(place => {
                                const interestName = interest.name
                                const placeName = place.name
                                const visa = place.visa_required
                                const description = interest.description

                                let entryHTML = HTMLgenerators.entryHTML(interestName, placeName, visa, description)
                                $("#display_section").innerHTML += entryHTML
                            })
                        })
            }
            )
        }
export default entriesDisplay