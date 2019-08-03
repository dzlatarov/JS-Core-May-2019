const movieModel = function () {

    const getAllMovies = function () {
        let sortCriteria = JSON.stringify({
            tickets: -1
        });
        let url = `/appdata/${storage.appKey}/movies?query={}&sort=${sortCriteria}`;
        let headers = {
            headers: {}
        };

        return requester.get(url, headers);
    };

    const createMovie = function (params){        
        let url = `/appdata/${storage.appKey}/movies`;
        let headers = {
            body: JSON.stringify({...params}),
            headers: {}
        };

        return requester.post(url, headers);
    };

    const getMovie = function (id){
        let url = `/appdata/${storage.appKey}/movies/${id}`;
        let headers = {
            headers: {}
        };

        return requester.get(url, headers);
    };

    const myMovies = function (){
        let userId = JSON.parse(storage.getData('userInfo'))._id;
        let url = `/appdata/${storage.appKey}/movies?query={"_acl.creator":"${userId}"}`;
        let headers = {
            headers: {}
        };

        return requester.get(url, headers);
    };

    const editMovie = function(params){
        let url = `/appdata/${storage.appKey}/movies/${params.eventId}`;
        delete params.eventId;
        let headers = {
            body: JSON.stringify({...params}),
            headers: {}
        };

        return requester.put(url, headers);
    };

    const deleteMovie = function(id){
        let url = `/appdata/${storage.appKey}/movies/${id}`;
        let headers = {
            headers: {}
        };

        return requester.del(url, headers);
    };

    const updateTickets = function(params, id){
        let data = {...params};
        let url = `/appdata/${storage.appKey}/movies/${id}`;
        let headers = {
            body: JSON.stringify(data),
            headers: {}
        };

        return requester.put(url, headers);
    };

    return {
        getAllMovies,
        createMovie,
        getMovie,
        myMovies,
        editMovie,
        deleteMovie,
        updateTickets
    }
}();