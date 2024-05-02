const inputText = document.getElementById("input-username")
const button = document.getElementById("button")

const reposQuant = 10 /* Repository quantity shown */

const htmlTags = {
    userSection: document.getElementById("user-section"),
    avatar: document.getElementById("user-img"),
    name: document.getElementById("user-name"),
    userName: document.getElementById("user-login"),
    bio: document.getElementById("user-bio"),
    followers: document.getElementById("user-followers"),
    following: document.getElementById("user-following"),
    repository: document.getElementById("user-repos"),
    events: document.getElementById("event-section")
}

export { inputText, button, reposQuant, htmlTags }