const { createApp } = Vue;

createApp({
    data() {
        return {
            randomEmail: null,
        }
    },

    // methods
    methods: {
        getRandomEmail() {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            // arrow function reference 'this' parent
                .then( (response) => {
                    const result = response.data.response;
                    this.randomEmail = response.data.response
                    console.log(this)
                });
        },

        
    },
    //call function at every reload page
    created() {
        this.getRandomEmail();
    }

}).mount('#app')

