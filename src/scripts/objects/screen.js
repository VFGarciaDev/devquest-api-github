import { htmlTags } from "../variables.js"
import { user, event, repository } from "./user.js"
import { getEventList } from "../services/userData.js"

const screen = {
    displayData(){
        htmlTags.avatar.src = user.avatarUrl
        htmlTags.avatar.alt = `Profile image`
        htmlTags.name.innerHTML = user.name ?? "Não possui nome cadastrado"
        htmlTags.userName.innerHTML = `@${user.userName}`
        htmlTags.bio.innerHTML = `"${user.bio ?? "Não possui uma bio"}"`
        htmlTags.followers.innerHTML = `<strong>Followers:</strong> ${user.followers}`
        htmlTags.following.innerHTML = `<strong>Following:</strong> ${user.following}`
    },
    displayRepositories(reposData){
        repository.list = []
        reposData.forEach( item => {
            repository.setRepositoryInfo(item)
            repository.list += `<li class="repository">
            <a href=${item.html_url} target="_blank">${item.name}
            <ul class="status">
                <li>🍴 ${item.forks}</li>
                <li>⭐ ${item.stargazers_count}</li>
                <li>👀 ${item.watchers}</li>
                <li>👨‍💻 ${item.language ?? "N/A"}</li>
            </ul></a></li>`
        })
        htmlTags.repository.innerHTML = repository.list
    },
    displayEvents(eventsData){
        if (getEventList(eventsData).length > 0){
            event.list = []
            getEventList(eventsData).forEach( item => {
                event.setEvents(item)
                event.list += `<li><span>${event.name}:</span> ${event.message}</li>`
            })
            htmlTags.events.innerHTML = `<h3>Eventos:</h3><ul id="events">${event.list}</ul>`
        } else{
            htmlTags.events.innerHTML = `<ul id="events"><li>Nenhum evento disparado ultimamente</li></ul>`
        }
    }
}

export { screen }