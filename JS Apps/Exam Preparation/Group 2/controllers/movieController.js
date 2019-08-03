const movieController = function () {

    const getCinema = function (context) {
        helper.addHeaderInfo(context);

        movieModel.getAllMovies()
            .then(helper.handler)
            .then((movie) => {
                context.movies = movie;

                context.loadPartials({
                    header: './views/common/header.hbs',
                    footer: './views/common/footer.hbs',
                    singleMovie: './views/movies/singleMovie.hbs'
                }).then(function () {
                    this.partial('./views/movies/cinema.hbs')
                })
            })
    };

    const getCreateMovie = function (context) {
        context.loadPartials({
            header: './views/common/header.hbs',
            footer: './views/common/footer.hbs'
        }).then(function () {
            this.partial('./views/movies/createMovie.hbs')
        })
    };

    const postCreateMovie = function (context) {
        movieModel.createMovie(context.params)
            .then(helper.handler)
            .then((data) => {
                context.redirect('#/home')
            })
    };

    const getMovieDetails = async function (context) {
        helper.addHeaderInfo(context);

        let response = await movieModel.getMovie(context.params.eventId);
        let movie = await response.json();

        Object.keys(movie).forEach((key) => {
            context[key] = movie[key]
        });

        context.loadPartials({
            header: './views/common/header.hbs',
            footer: './views/common/footer.hbs'
        }).then(function () {
            this.partial('./views/movies/detailsMovie.hbs')
        })
    };

    const getMyMovies = function (context) {
        helper.addHeaderInfo(context);

        movieModel.myMovies()
            .then(helper.handler)
            .then((data) => {
                context.movies = data

                context.loadPartials({
                    header: './views/common/header.hbs',
                    footer: './views/common/footer.hbs',
                    singleMyMovies: './views/movies/singleMyMovies.hbs'
                }).then(function () {
                    this.partial('./views/movies/myMovies.hbs')
                })
            })
    };

    const getEditMovie = function (context) {
        helper.addHeaderInfo(context);

        movieModel.getMovie(context.params.eventId)
            .then(helper.handler)
            .then((movieInfo) => {


                Object.keys(movieInfo).forEach((info) => {
                    context[info] = movieInfo[info];
                });

                context.loadPartials({
                    header: './views/common/header.hbs',
                    footer: './views/common/footer.hbs'
                }).then(function () {
                    this.partial('./views/movies/editMovie.hbs')
                })
            })
    };

    const postEditMovie = function (context) {
        movieModel.editMovie(context.params)
            .then(helper.handler)
            .then(() => {
                context.redirect('#/cinema')
            })
    };

    const getDeleteMovie = async function (context) {

        helper.addHeaderInfo(context);

        let response = await movieModel.getMovie(context.params.eventId);
        let movie = await response.json();

        Object.keys(movie).forEach((key) => {
            context[key] = movie[key]
        });

        context.loadPartials({
            header: './views/common/header.hbs',
            footer: './views/common/footer.hbs'
        }).then(function () {
            this.partial('./views/movies/deleteMovie.hbs')
        })
    };

    const postDeleteMovie = function (context) {
        helper.addHeaderInfo(context);

        movieModel.deleteMovie(context.params.eventId)
            .then(helper.handler)
            .then(() => {
                context.redirect('#/cinema');
            })
    };

    const getBuyTickets = async function (context) {
        let response = await movieModel.getMovie(context.params.eventId);
        let movie = await response.json();

        movie.tickets = Number(movie.tickets) - 1;

        let updateResponse = await movieModel.updateTickets(movie, context.params.eventId);
        
        context.redirect('#/cinema');
    };

    return {
        getCinema,
        getCreateMovie,
        postCreateMovie,
        getMovieDetails,
        getMyMovies,
        getEditMovie,
        postEditMovie,
        getDeleteMovie,
        postDeleteMovie,
        getBuyTickets
    }
}();