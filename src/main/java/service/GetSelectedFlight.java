package service;

import com.google.gson.Gson;
import dao.FlightEntity;
import model.HibernatePersister;
import org.hibernate.Session;

import javax.persistence.Query;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import java.util.List;


    @Path("/getSelectedFlight")
    public class GetSelectedFlight {
        Gson gson = new Gson();

        @POST
        @Consumes(MediaType.APPLICATION_JSON)
        @Produces(MediaType.APPLICATION_JSON)
        public String selectedFlight(String userJson) {
            FlightEntity flightEntity = gson.fromJson(userJson, FlightEntity.class);
            HibernatePersister hibernatePersister = new HibernatePersister();

            Session session = hibernatePersister.getSessionFactory().openSession();
            session.beginTransaction();
            String hql = "from FlightEntity F where F.departureIac= :depature_IAC and F.arrivalIac= :arrival_IAC and F.departureTime = :depature_time";
            Query query = session.createQuery(hql);
            query.setParameter("depature_IAC", flightEntity.getDepartureIac()).setParameter( "arrival_IAC", flightEntity.getArrivalIac()).setParameter("depature_time", flightEntity.getDepartureTime());
            List flightList = query.getResultList();


            String selectedFlight = gson.toJson(flightList);

            return selectedFlight;
        }
    
}
