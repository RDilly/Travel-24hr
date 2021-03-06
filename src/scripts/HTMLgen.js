
const HTMLgenerators = {
    formPlacesSlots: () => { return `
    <label for="Name">Place: </label>
    <input id="placesName" type="text" placeholder="Location">
    <label for="placesVisa">Visa: </label>
    <input id="placesVisa" type="text" placeholder="Visa">
    <button id="placesPostButton">Add Place</button>`},

    formInterestSlots: () => {
        return `
    <label for="Name">Name: </label>
    <input id="interestName" type="text" placeholder=title>
    <label for="Place">Place: </label>
    <input id="interestPlace" type="text" placeholder="place">
    <label for="interestDescription">description: </label>
    <input id="interestDescription" type="text" placehold="interestDescriptoin">
    <button id="newsPostButton">Add Interest</button>`
    },
    entryHTML: (interestName, placeName, visa, description) => {
        return `
    <article>
        <h1>${interestName}</h1>
            <ul>
                <li>${placeName}</li>
                <li>Will you need a Visa?   -----   ${visa}</li>
                <li>${description}</li>
            </ul>
            <button id="editEntry">Edit</button>
            <button id="deleteEntry">Delete</button>
    </article>
    `
    }
}

export default HTMLgenerators