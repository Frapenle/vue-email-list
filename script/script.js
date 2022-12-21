const { createApp } = Vue;

createApp({
    data() {
        return {
            randomEmail: '',
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
                    this.randomEmail = result
                    this.randomEmailsList.push(result)
                });
        },

        createEmailList(){
            for (let i = 0; i < 10; i++) {
                this.getRandomEmail();
            }
        }

        
    },
    //call function at every reload page
    created() {
        this.createEmailList();
    }

}).mount('#app')

