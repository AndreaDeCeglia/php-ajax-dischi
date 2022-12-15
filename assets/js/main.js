var app = new Vue({
    el: '#app',

    data: {
        jsonArray : [],
        genresArray: [],
        genre: '',
    },

    mounted(){
        axios.get('./api/index.php')
            .then((res) => {
                console.log(`i'm response.data`, res.data);
                this.jsonArray = res.data;
                console.log(`i'm jsonArray`, this.jsonArray);
                //cicle for filtering music's genres and push'em
                //in proper array for filling select's options
                this.jsonArray.forEach((element) => {
                    console.log(`i'm the element in jsonArray`, element);
                    //condition for not reapiting the same genre
                    if(!this.genresArray.includes(element.genre)){
                        this.genresArray.push(element.genre);
                    }
                })
            })
    },

    methods: {
        selectGenre(){
            axios.get(`./api/index.php?tipo=${this.genre}`)
                .then((res) => {
                    this.jsonArray = res.data;
                })
        }
    }  
})