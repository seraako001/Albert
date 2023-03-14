const app = Vue.createApp({
    data() {
        return {
            title: 'The Final Empire',
            author: 'Jonald Bergancia',
            age: '77',
            gender: 'Male',
            skills: 'Mataas tumalon, Mabilis tumakbo'
           
        }
    },
    methods: {
        changeTitle() {
            this.title = 'Words of Randiance' 
        }
        
    }
})

app.mount('#app')
