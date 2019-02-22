
const apiButlerPlaces = {
    getPlaces: (userId) => {
        return fetch(`http://localhost:8088/Places?_expand=user&userId=${userId}`)
            .then(res => res.json())
    },
    getOnePlaces: (id) => {
        return fetch(`http://localhost:8088/Places/${id}`)
            .then(res => res.json())
    },
    postPlaces: (userId, obj) => {
        return fetch(`http://localhost:8088/Places?_expand=user&userId=${userId}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        })
    },
    editPlaces: (id, obj) => {
        return fetch(`http://localhost:8088/Places/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        })
    },
    deletePlaces: (id) => {
        return fetch(`http://localhost:8088/Places/${id}`, {
            method: "DELETE",
        })
    },

    getInterests: (userId) => {
        return fetch(`http://localhost:8088/Interests?_expand=user&userId=${userId}`)
            .then(res => res.json())
    },
    getOneInterests: (id) => {
        return fetch(`http://localhost:8088/Interests/${id}`)
            .then(res => res.json())
    },
    postInterests: (userId, obj) => {
        return fetch(`http://localhost:8088/Interests?_expand=user&userId=${userId}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        })
    },
    editInterests: (id, obj) => {
        return fetch(`http://localhost:8088/Interests/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        })
    },
    deleteInterests: (id) => {
        return fetch(`http://localhost:8088/Interests/${id}`, {
            method: "DELETE",
        })
    }

};

export default apiButlerPlaces