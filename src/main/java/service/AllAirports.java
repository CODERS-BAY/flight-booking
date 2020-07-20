package service;

import com.google.gson.Gson;
import dao.AirportEntity;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;

public class AllAirports {

    Gson myGson = new Gson();

    @POST
    @Produces(MediaType.APPLICATION_JSON)
    public String fetchAllAirports() {

        return "Hello EVERYBODY345! :O";
    }

}
