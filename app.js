const github = new Profile();
const ui = new UI();

document.getElementById('searchUser').addEventListener('keyup', (e) => {
    const text = e.target.value;
    if(text !== ''){
        github.getuser(text)
        .then(data => {
           if(data.profile.message === 'Not Found'){
            ui.alertDanger('User not Found');
           } else{
            ui.showUser(data.profile);
           }
        });
    } else{
        ui.clearProfile();
    }

})