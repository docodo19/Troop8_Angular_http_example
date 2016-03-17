namespace MyApp.Controllers {


    export class MoviesController {
        public movies;

        constructor(private $http: ng.IHttpService) {
            this.getMovies();
        }

        // this method will use the $http service that will make a call to the serverside to bring back a list of movies
        getMovies() {
            this.$http.get('/api/movies').then((data) => {
                //>> the then() method executes when the data comes back successfully
                //>> list of movies will be inside of data.data
                console.log(data.data);
                //write code here so that data.data is assigned to this.movies
                this.movies = data.data;
            });
        }

    }

}