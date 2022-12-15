var app = new Vue({
    el: '#app',

    data: {
        jsonArray : [],
        genresArray: [],
        genre: 'all',
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
            if(this.genre != 'all'){
                axios.get(`./api/index.php?genre=${this.genre}`)
                .then((res) => {
                    this.jsonArray = res.data;
                })
            }else{
                axios.get('./api/index.php')
                    .then((res) => {
                        this.jsonArray = res.data;
                    })
            }
            
        }
    }  
})