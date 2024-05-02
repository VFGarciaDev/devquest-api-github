import { user } from "./objects/user.js"
import { screen } from "./objects/screen.js"
import { inputText, button } from "./variables.js"
import { getUser, getUserRepository, getUserEvents } from "./services/userData.js"

button.addEventListener("click", () => {
    const userName = inputText.value
    if (validateInput(userName)) return
    displayUserProfile(userName)
})
inputText.addEventListener("keyup", (e) => {
    const userName = e.target.value
    const key = e.which || e.keyCode
    const enterKey = key === 13
    if (enterKey){
        if (validateInput(userName)) return
        displayUserProfile(userName)
    }
})

async function displayUserProfile(userName){
    setUserProfile(userName)
    setUserRepository(userName)
    setUserEvents(userName)
}

function setUserProfile(userName) {
    getUser(userName).then(userData => {
        user.setInfo(userData)
        screen.displayData()
    })
}
function setUserRepository(userName){
    getUserRepository(userName).then(reposData => {
        screen.displayRepositories(reposData)
    })
}
function setUserEvents(userName){
    getUserEvents(userName).then(eventsData => {
        screen.displayEvents(eventsData)
    })
}

function validateInput(userName){
    if(userName.length === 0){
        alert("Preencha o campo 'Nome de usuário'")
        return true
    }
}