package service;

import com.google.gson.Gson;
import model.User;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;

@Path("/firstTest")
public class MyFirstTestService {

    Gson myGson = new Gson();

    @GET
    @Produces(MediaType.TEXT_PLAIN)
    public String sayPlainTextHello() {
        return "Hello EVERYBODY! :O";
    }

    @GET
    @Produces(MediaType.TEXT_XML)
    public String sayXMLHello() {
        return "<?xml version=\"1.0\"?>" + "<hello> Hello Marco</hello>";
    }

    @POST
    @Consumes(MediaType.TEXT_PLAIN)
    @Produces(MediaType.TEXT_PLAIN)
    public String sayPost(String parameter) {
        return "Viva la Pizza!";
    }

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public String movingUsers(String usersJSON) {
        User[] users = myGson.fromJson(usersJSON, User[].class);
        User[] bigUsers = new User[users.length + 1];

        for(int i = 0; i < users.length; i++) {
            bigUsers[i] = users[i];
        }
        bigUsers[bigUsers.length - 1] = new User();
        bigUsers[bigUsers.length - 1].first_name = "Antonio";
        bigUsers[bigUsers.length - 1].last_name = "Panda";

//        String wordsString = "";
//        for(int i = 0; i < users.length; i++) {
//            wordsString += "User" + i + ": " + users[i].firstName + " " + users[i].lastName + "\r";
//        }
//        return wordsString;

        String toReturn = myGson.toJson(bigUsers, User[].class);
        return toReturn;
    }

}
