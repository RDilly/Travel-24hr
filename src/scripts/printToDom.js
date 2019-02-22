import HTMLgenerators from "./HTMLgen"
const $ = document.querySelector.bind(document)

const entriesDisplay = () => {
    return fetch("http://localhost:8088/interests")
        .then(response => response.json())
        .then(myParsedInterests => {
            myParsedInterests.forEach(interest => {
                const interestName = interest.name
                const description = interest.description
                const placeFinder = parseint(interest.placeId)
                    .then(fetch(`http://localhost:8088/places/${placeFinder}`)
                        .then(response => response.json())
                        .then(myParsedPlaces => {
                            myParsedPlaces.forEach(place => {
                                const placeName = place.name
                                const visa = place.visa_required

                                let entryHTML = HTMLgenerators.entryHTML(interestName, placeName, visa, description)
                                $("#news_display").innerHTML += entryHTML
                            })
                        })
                    )
            }
            )
        })}
export default entriesDisplay