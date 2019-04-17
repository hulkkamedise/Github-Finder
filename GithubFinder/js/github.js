class Github {
    constructor () {
        this.client_id = 'b253d45d45e6ec382a41';
        this.client_secret = 'd694d763ada38c33d1873a3f3d8f81fcfcb552c7';
        this.repos_count = 5;
        this.repos_sort = 'Created: asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&$client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await reposResponse.json();

        return {
            profile,
            repos
        }
    }

}