class Profile{
    constructor(){
        this.client_id = 'ae67c517c768a7daf136';
        this.client_secret = '9caec34aca4302044a5f911b59bf629a2fd7362a';
    };

    async getuser(user) {
       const response = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client-secret=${this.client_secret}`);   
       const profile = await response.json();
       return {
        profile
       }
    }
}