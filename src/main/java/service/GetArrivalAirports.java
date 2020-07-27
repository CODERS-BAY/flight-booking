package service;

import com.google.gson.Gson;
import model.HibernatePersister;
import org.hibernate.Session;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import java.util.List;

@Path("/getArrivalAirports")
public class GetArrivalAirports {

    Gson gson = new Gson();

    @POST
    @Consumes(MediaType.TEXT_PLAIN)
    @Produces(MediaType.APPLICATION_JSON)
    public String departureAirport(String departureCity) {

        HibernatePersister persister = new HibernatePersister();

        Session session = persister.getSessionFactory().openSession();
        session.beginTransaction();

        String hql = "from FlightEntity F where F.departureIac = :theCity";
        List airportsList = session.createQuery(hql).setParameter("theCity", departureCity).list();

        session.getTransaction().commit();
        session.close();

        return gson.toJson(airportsList);
    }
}
