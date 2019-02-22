    
const HTMLgenerators = {
    formPlacesSlots: () => { return `
    <label for="Name">Name: </label>
    <input id="placesName" type="text" placeholder=title>
    <label for="placesVisa">Visa: </label>
    <input id="placesVisa" type="text" placeholder="Visa">
    <button id="placesPostButton">Add Place</button>`},

    formInterestSlots: () => { return `
    <label for="Name">Name: </label>
    <input id="interestName" type="text" placeholder=title>
    <label for="Place">Place: </label>
    <input id="interestPlace" type="text" placeholder="place">
    <label for="interestDescriptoin: </label>
    <input id="interestDescriptoin" type="text" placehold="interestDescriptoin">
    <button id="newsPostButton">Post New Article</button>`
},
}

export default HTMLgenerators