import { reposQuant, htmlTags } from "../variables.js"

async function getUser(userName) {
    try{
        const response = await fetch(`https://api.github.com/users/${userName}`)
        if (!response.ok) {
            throw "Usuário não encontrado!"
        } else{
            return await response.json()
        }
    } catch(err){
        alert(err)
        htmlTags.userSection.innerHTML = `<h1>Usuário não encontrado</h1>`
    }
}
async function getUserRepository(userName){
    const response = await fetch(`https://api.github.com/users/${userName}/repos?per_page=${reposQuant}`)
    return await response.json()
}
async function getUserEvents(userName){
    const response = await fetch(`https://api.github.com/users/${userName}/events`)
    return await response.json()
}
function getEventList(eventsData){
    let eventList = []
    eventsData.forEach( event => {
        if ( event.type === 'PushEvent' ||  event.type === "CreateEvent" ){
            eventList.push(event)
        }
    })
    return eventList.slice(0, 10)
}

export { getUser, getUserRepository, getUserEvents, getEventList }