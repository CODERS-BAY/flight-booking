package service;

import com.google.gson.Gson;
import dao.AirportEntity;
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

    /**
     * Searches for specific Airports in the database
     * @return list of Airports
     */
    @POST
    @Produces(MediaType.APPLICATION_JSON)
    public String airports() {

        HibernatePersister persister = new HibernatePersister();

        Session session = persister.getSessionFactory().openSession();
        session.beginTransaction();

        List<AirportEntity> airportsList = session.createQuery("from AirportEntity").list();

        session.getTransaction().commit();
        session.close();

        String allAirports = gson.toJson(airportsList);

        session.close();

        return allAirports;
    }
}
