const { createApp } = Vue;

createApp({
    data() {
        return {
            randomEmails: [],
        }
    },

    // methods
    methods: {
        getRandomEmail() {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            // arrow function reference 'this' parent
                .then( (response) => {
                    const result = response.data.response;
                    this.randomEmails = result
                });
        },

        createEmailList(){
            for (let i = 0; i < 10; i++) {
                const element = array[i];
                
            }
            
        }

        
    },
    //call function at every reload page
    created() {
        this.createEmailList();
    }

}).mount('#app')

