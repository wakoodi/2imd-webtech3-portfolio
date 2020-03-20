class App{
    constructor(){
        this.getLocation();
        this.lat;
        this.lng;
        this.getHero();
    }

    getLocation(){
        navigator.geolocation.getCurrentPosition(
        this.gotLocation.bind(this),
        this.errorLocation.bind(this)
        );
    }

    gotLocation(result){
        //console.log(result);
        this.lat = result.coords.latitude;
        this.lng = result.coords.longitude;
        //console.log(this.lat);
        this.getWeather();
    }

    getWeather(){
        //https://api.darksky.net/forecast/c1e93f827bcaf164be0e1e36ed5091c5/37.8267,-122.4233
        const key = "c1e93f827bcaf164be0e1e36ed5091c5";
        const cors = "https://cors-anywhere.herokuapp.com/";
        let url = `${cors}https://api.darksky.net/forecast/${key}/${this.lat},${this.lng}?units=si`
        fetch(url)
            .then(response =>{
                //console.log(response);
               return response.json();
            }).then(data =>{
                //console.log(data);
                document.querySelector("#weather").innerHTML = data.currently.summary;
                document.querySelector("#temperature").innerHTML = "Current temperature : " + data.currently.temperature + " degrees ";
            }).catch(err =>{
                console.log(err);
            });
    }


    errorLocation(err){
        console.log(err);
    }

    getHero(){
        //https://superheroapi.com/api/access-token
        const key = "2800701240020944";
        const cors = "https://cors-anywhere.herokuapp.com/";
        const characterid = Math.floor(Math.random() * 731) + 1 
        let url = `${cors}https://superheroapi.com/api/${key}/${characterid}`;
        fetch(url)
            .then(response =>{
               // console.log(response);
               return response.json();
            }).then(data =>{
               // console.log(data);
                document.querySelector("#heroimg").src = data.image.url;
                document.querySelector("#hero").innerHTML = data.name;
            }).catch(err =>{
                console.log(err);
            });
    }

}

let app = new App();