'use strict';
const swapi = require('../swapi.js');
module.exports.detail = async (event) => {
    const url_aws = event.headers.Host;
    return {
        statusCode: 200,
        body: swapi.response(
            {
                "people": "https://"+url_aws+"/api/people/", 
                "planets": "https://"+url_aws+"/api/planets/", 
                "films": "https://"+url_aws+"/api/films/", 
                "species": "https://"+url_aws+"/api/species/", 
                "vehicles": "https://"+url_aws+"/api/vehicles/", 
                "starships": "https://"+url_aws+"/api/starships/"
            },
            event
        )
    };
};