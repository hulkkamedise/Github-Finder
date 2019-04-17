class UI {
    constructor () {
        this.profile = document.querySelector('#profile');
    }

    showProfile(user) {
        this.profile.innerHTML =`
        <div class="card card-body mb-3">
         <div class="row">
            <div class="col-3">
              <img class="img-fluid mb-2" src="${user.avatar_url}">
              <a href="${user.html_url}" class="btn btn-primary btn-blog mb-4" target="_blank">View Profile</a>
              
            </div>
            <div class="col-9">
             <span class="badge badge-primary">Public Respos: ${user.public_repos}</span>
             <span class="badge badge-secondary">Public Gits: ${user.public_gists}</span>
             <span class="badge badge-success">Followers: ${user.followers}</span>
             <span class="badge badge-info">Following: ${user.following}</span>
             <br><br> 
             <ul class="list-group">
                <li class="list-group-item">Name: ${user.name}</li>
                <li class="list-group-item">Company: ${user.company}</li>
                <li class="list-group-item">Website/Blog: ${user.blog}</li>
                <li class="list-group-item">Member Since: ${user.created_at}</li>
                <li class="list-group-item">Location: ${user.location}</li>
             </ul>            
            </div> 
         </div>
        </div>
        
        <h3 class="page-heading mb-3">Latest Repos</h3>
        <div id="repos"></div>
        `;
    }

    showRepos(repos) {
        let output = '';
        repos.forEach((repo) => {
            output += `
            <div class="card card-body">
              <div class="row">
                <div class="col-6">
                  <a class="${repo.html_url}" target="_blank">${repo.name}</a>
                </div>
                <div class="col-6">
                <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
                <span class="badge badge-info">Watchers: ${repo.watchers_count}</span>
                <span class="badge badge-success">Forks ${repo.forks_count}</span>
                </div>
              </div>
            </div>`;

            document.querySelector('#repos').innerHTML = output;
        });
    }

    showAlert(message, className) {
        // Clear Alert
        this.clearAlert();
        // Create a div element
        const div = document.createElement('div');
        // add classname
        div.className = className;
        // Create a textnode
        div.appendChild(document.createTextNode(message));
        // select the parent div
        const container = document.querySelector('.searchContainer');
        // Get search box
        const search = document.querySelector('.search')
        // Insert alert
        container.insertBefore(div, search);

        // set time out for clear alert
        setTimeout(() => {
          this.clearAlert();
        }, 3000);
    }

    clearAlert() {
        const currentAlert = document.querySelector('.alert');
        if (currentAlert) {
            currentAlert.remove();
        }
    }

    clearProfile() {
        this.profile.innerHTML = '';
    }
}