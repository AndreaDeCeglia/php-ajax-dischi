var app = new Vue({
    el: '#app',

    data: {
        jsonArray : [],
    },

    mounted(){
        axios.get('./api/index.php')
            .then((res) => {
                console.log(`i'm response.data`, res.data);
                this.jsonArray = res.data;
                console.log(`i'm jsonArray`, this.jsonArray);
            })
    },

    methods: {

    }  
})