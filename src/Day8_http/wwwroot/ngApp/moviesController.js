var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var MoviesController = (function () {
            function MoviesController($http) {
                this.$http = $http;
                this.getMovies();
            }
            // this method will use the $http service that will make a call to the serverside to bring back a list of movies
            MoviesController.prototype.getMovies = function () {
                var _this = this;
                this.$http.get('/api/movies').then(function (data) {
                    //>> the then() method executes when the data comes back successfully
                    //>> list of movies will be inside of data.data
                    console.log(data.data);
                    //write code here so that data.data is assigned to this.movies
                    _this.movies = data.data;
                });
            };
            return MoviesController;
        }());
        Controllers.MoviesController = MoviesController;
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
//# sourceMappingURL=moviesController.js.map