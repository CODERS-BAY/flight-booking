package service;

import com.google.gson.Gson;
import model.HibernatePersister;
import org.hibernate.Session;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import java.util.List;

@Path("/getAllAirports")
public class GetAllAirports {

    Gson gson = new Gson();

    @POST
    @Produces(MediaType.APPLICATION_JSON)
    public String airports() {

        HibernatePersister persister = new HibernatePersister();

        Session session = persister.getSessionFactory().openSession();
        session.beginTransaction();
        List airportsList = session.createSQLQuery("Select * from airport").list();
        session.getTransaction().commit();
        session.close();

        String allAirports = gson.toJson(airportsList);

        return allAirports;
    }
}