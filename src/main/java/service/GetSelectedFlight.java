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
import java.sql.Time;
import java.sql.Timestamp;
import java.util.Calendar;
import java.util.Date;
import java.util.List;


    @Path("/getSelectedFlight")
    public class GetSelectedFlight {
        Gson gson = new Gson();

        @POST
        @Consumes(MediaType.APPLICATION_JSON)
        @Produces(MediaType.APPLICATION_JSON)
        public String selectedFlight(String userJson) {
            FlightEntity flights = gson.fromJson(userJson, FlightEntity.class);
            HibernatePersister hibernatePersister = new HibernatePersister();

            Timestamp date = flights.getDepartureTime();

            Calendar cal = Calendar.getInstance();
            cal.setTime(date);
            cal.add(Calendar.DAY_OF_WEEK, 4);
            Timestamp dateEnd = new Timestamp(cal.getTime().getTime());

            cal.add(Calendar.DAY_OF_WEEK,-7);
            Timestamp dateStart = new Timestamp(cal.getTime().getTime());


            Session session = hibernatePersister.getSessionFactory().openSession();
            session.beginTransaction();
            String hql = "from FlightEntity F where F.departureIac= :departure_IAC and F.arrivalIac= :arrival_IAC and F.departureTime >= :dateStart and F.departureTime <= :dateEnd";
            Query query = session.createQuery(hql);
            query.setParameter("departure_IAC", flights.getDepartureIac()).setParameter("arrival_IAC", flights.getArrivalIac()).setParameter("dateStart", dateStart).setParameter("dateEnd", dateEnd);
            List flightList = query.getResultList();


            String selectedFlight = gson.toJson(flightList);

            return selectedFlight;
        }
    
}
