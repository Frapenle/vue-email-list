const { createApp } = Vue;

createApp({
    data() {
        return {
            emailNumbers: 50,
            randomEmailsList: [],
        }
    },

    // methods
    methods: {
        getRandomEmail() {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            // arrow function reference 'this' parent
                .then( (response) => {
                    const result = response.data.response;
                    this.randomEmailsList.push(result)
                });
        },

        createEmailList(){
            for (let i = 0; i < this.emailNumbers; i++) {
                this.getRandomEmail();
            }
        }

        
    },
    //call function at every reload page
    created() {
        this.createEmailList();
    }

}).mount('#app')

