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
        <span class ="badge badge-primary mr-4 mt-2">Public Repos: ${user.public_repos} </span>
        <span class ="badge badge-secondary mr-4 mt-2">Public Repos: ${user.public_gists} </span>
        <span class ="badge badge-success mr-4 mt-2">Followers: ${user.followers} </span>
        <span class ="badge badge-info mr-4 mt-2">Following: ${user.following} </span>
       </div>
       <br><br>
       <ul class="list-group">
       <li class="list-group-item">Company: ${user.company}</li>
       <li class="list-group-item">Location: ${user.location}</li>
       <li class="list-group-item">Website: ${user.blog}</li>
       <li class="list-group-item">Member from: ${user.created_at}</li>
       </ul>
       
         `;
    }
    clearProfile(){
        this.profile.innerHTML = '';
    }
    alertDanger(msg){
        this.clearAlert();
        const alert = document.createElement('p');
        alert.className = 'alert alert-danger';
        alert.textContent = msg;
        const card = document.querySelector('.card');
        const srch = document.querySelector('.searchContainer');
        srch.insertBefore(alert, card);
        setTimeout(() => {
            this.clearAlert();
        }, 3000);
    }
    clearAlert(){
        const err = document.querySelector('.alert');
        if(err){
            err.remove();
        }
    }
}
