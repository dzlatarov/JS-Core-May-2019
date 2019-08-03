const app = Sammy("#container", function () {

    this.use('Handlebars', 'hbs');

    // Home
    this.get('#/home', homeController.getHome);

    // User
    this.get('#/register', userController.getRegister);
    this.get('#/login', userController.getLogin);

    this.post('#/register', userController.postRegister);
    this.post('#/login', userController.postLogin);
    this.get('#/logout', userController.logout);

    this.get('#/cinema', movieController.getCinema);
    this.get('#/createMovie', movieController.getCreateMovie);
    this.post('#/createMovie', movieController.postCreateMovie);
    this.get('#/movieDetails/:eventId', movieController.getMovieDetails);
    this.get('#/myMovies', movieController.getMyMovies);
    this.get('#/editMovie/:eventId', movieController.getEditMovie);
    this.post('#/editMovie/:eventId', movieController.postEditMovie);
    this.get('#/deleteMovie/:eventId', movieController.getDeleteMovie);
    this.post('#/deleteMovie/:eventId', movieController.postDeleteMovie);
    this.get('#/buyTickets/:eventId', movieController.getBuyTickets);
    
});

(() => {
    app.run('#/home');
})();