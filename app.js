const App = Vue.createApp({
    data(){
        return{
            API_KEY : "b74dd403d5804731bd7234931231611",
            BASE_URL : "https://api.weatherapi.com/v1/",
            searchQuery: "Yangon",
            errorMsg: "",
            weather: {}
        }
    },
    methods:{
        async getWeather(){
            const response = await fetch(
                 `${this.BASE_URL}weather?q=${this.searchQuery}&appid=${this.API_KEY}`
                // `${this.BASE_URL}weather?lat=39.099724&lon=-94.578331&dt=1643803200&appid=${this.API_KEY}`
                 );
           if (response.status === 200) {
            const data = await response.json();
            this.weather = data;
            console.log(data)
           }else{
            this.errorMsg = "Please choose a valid country of city"
           }


        }
    }
});

App.mount('#app')