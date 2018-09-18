class UI {
    constructor(){
        this.profile = document.getElementById('profile');
    }
    showUser(user){
        this.profile.innerHTML = `
        <h2 class="text-center">
            ${user.name}
            <small class="text-muted"><span class="badge badge-secondary">${user.login}</span></small>
        </h2>
        <div class = "col-md-3">
        <img src="${user.avatar_url}" class="rounded float-left img-fluid mb-2">
        <a href = "${user.html_url}" target = "_blank" class ="btn btn-outline-secondary btn-sm pb-2 mb-4">Github link</a>
        </div>
        <div class = " row col-md-9 text-center">
        <span class ="badge badge-primary">Public Repos: ${user.public_repos} </span>
        <span class ="badge badge-secondary">Public Repos: ${user.public_gists} </span>
        <span class ="badge badge-success">Followers: ${user.followers} </span>
        <span class ="badge badge-info">Following: ${user.following} </span>
       </div>
       <br><br>
         `;
    }
}
