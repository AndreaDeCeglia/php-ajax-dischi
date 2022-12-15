var app = new Vue({
    el: '#app',

    data: {

    },

    mounted(){
        axios.get('./api/index.php')
            .then((response) => {
                console.log(`i'm response.data`, this.response.data)
            })
    },

    methods: {

    }  
})