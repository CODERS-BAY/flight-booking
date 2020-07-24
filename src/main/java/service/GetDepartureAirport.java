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

@Path("/getDepartureAirport")
public class GetDepartureAirport {

    Gson gson = new Gson();

    @POST
    @Consumes(MediaType.TEXT_PLAIN)
    @Produces(MediaType.APPLICATION_JSON)
    public String departureAirport(String arrCity) {

        HibernatePersister persister = new HibernatePersister();

        Session session = persister.getSessionFactory().openSession();
        session.beginTransaction();

        String hql = "from FlightEntity F where F.arrivalIac = :theCity";
        List airportsList2 = session.createQuery(hql).setParameter("theCity", arrCity).list();
        session.getTransaction().commit();
        session.close();

        String allAirports = gson.toJson(airportsList2);

        return allAirports;
    }
}
