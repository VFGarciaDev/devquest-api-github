const user = {
    avatarUrl: "",
    name: "",
    userName: "",
    bio: "",
    repositories: [],
    followers: "",
    following: "",
    setInfo(data){
        this.avatarUrl = data.avatar_url
        this.name = data.name
        this.userName = data.login
        this.bio = data.bio
        this.followers = data.followers
        this.following = data.following
    }
}
const repository = {
    list: [],
    name: "",
    htmlUrl: "",
    forks: "",
    stars: "",
    watchers: "",
    langague: "",
    setRepositoryInfo(data){
        this.name = data.name
        this.htmlUrl = data.html_url
        this.forks = data.forks_count
        this.stars = data.stargazers_count  /* Dúvida Dev. Quest -> Linha 48 */
        this.watchers = data.watchers_count
        this.langague = data.language
    }
}
const event = {
    list: [],
    type: "",
    name: "",
    message: "",
    setEvents(data){
        this.name = data.repo.name
        this.message = data.payload.commits[0].message
    }
}

export { user, event, repository }

// Dúvida referente a linha 30: criei os objetos informados para substituir o caminho conforme feito no vídeo "projeto mundo real", todos funcionam perfeitamente, exceto 'repository.stars' que está sempre retornando 'undefined'. Conferi todos os nomes usados, inclusive na screen.js, e estão todos perfeitamente iguais e o '.stars' é o unico que não funciona, porém funciona se eu usar seu caminho correto '.stargazers_count'