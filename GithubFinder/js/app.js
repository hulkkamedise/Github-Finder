// Init Github
const github = new Github;
// Init Ui
const ui = new UI;

// Search input
const searchUser = document.querySelector('#searchUser');

// Search Input event listener
searchUser.addEventListener('keyup', (e) => {
    const userText = e.target.value;
   

    if (userText !== '') {
      github.getUser(userText)
      .then(data => {
          console.log(data);
          if (data.profile.messsge === 'Not Found') {
        //   Show Alert
        ui.showAlert('User not found', 'alert alert-danger');
          }else {
        //  Show profile
          ui.showProfile(data.profile);
          ui.showRepos(data.repos);
          }
      })
      .catch(err => console.log(`Something went wrong ${err}`))
     
    } else {
        //   Clear Profile
        ui.clearProfile();
    }

});