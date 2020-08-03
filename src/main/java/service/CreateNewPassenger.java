package service;

import com.google.gson.Gson;
import dao.PassengerEntity;
import model.HibernatePersister;
import org.hibernate.Session;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;



////////////////////////////////////////////////////////////////////////
///////////////////////// UNUSED ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////





@Path("/CreateNewPassenger")
public class CreateNewPassenger {

    Gson gson = new Gson();

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public String createNewPassenger(String newPassengerJson) {

        HibernatePersister persister = new HibernatePersister();

        Session session = persister.getSessionFactory().openSession();
        session.beginTransaction();

        PassengerEntity newPassenger = gson.fromJson(newPassengerJson, PassengerEntity.class);
        Integer passengerId = (Integer) session.save(newPassenger);

        session.getTransaction().commit();
        session.close();

        return  "{\"passengerId\":\"" + passengerId + "\"}";
    }
}
