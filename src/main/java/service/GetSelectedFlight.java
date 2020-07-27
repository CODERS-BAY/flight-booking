package service;

import com.google.gson.Gson;
import com.google.gson.JsonElement;
import dao.FlightEntity;
import dao.TicketEntity;
import model.HibernatePersister;
import org.hibernate.Session;
import javax.persistence.Query;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Calendar;
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

        cal.add(Calendar.DAY_OF_WEEK, -7);
        Timestamp dateStart = new Timestamp(cal.getTime().getTime());

        Session session = hibernatePersister.getSessionFactory().openSession();
        session.beginTransaction();

        String hql = "from FlightEntity F where F.departureIac= :departure_IAC and F.arrivalIac= :arrival_IAC and F.departureTime >= :dateStart and F.departureTime <= :dateEnd";
        Query query = session.createQuery(hql);
        query.setParameter("departure_IAC", flights.getDepartureIac()).setParameter("arrival_IAC", flights.getArrivalIac()).setParameter("dateStart", dateStart).setParameter("dateEnd", dateEnd);

        List<FlightEntity> flightList = query.getResultList();
        List<String> selectedFlight = new ArrayList<String>();
        String returnJson = "";

        for (FlightEntity flight : flightList) {
            String addToJson = getAvailableSeats(flight);

            returnJson += addToJson + "\r";

            selectedFlight.add(addToJson);

        }

        session.close();
        return returnJson;
    }

    /**
     * Counts available Seats for specific Flight and returns arr of business and economy seats
     * arr[0] business seats
     * arr[1] economy seats
     */
    private String getAvailableSeats(FlightEntity flight) {
        final int totalBusinessSeats = 50; // add real seat values
        final int totalEconomySeats = 100; // add real seat values

        HibernatePersister hibernatePersister = new HibernatePersister();
        int[] availableSeats = new int[]{totalBusinessSeats, totalEconomySeats};

        Session session = hibernatePersister.getSessionFactory().openSession();
        session.beginTransaction();
        String hql = "FROM TicketEntity T where T.flightId = :flightId";
        Query query = session.createQuery(hql).setParameter("flightId", flight.getFlightId());
        List<TicketEntity> ticketList = query.getResultList();

        for (TicketEntity ticket : ticketList) {
            if (ticket.getBusiness() == 1) {
                availableSeats[0]--;
            } else {
                availableSeats[1]--;
            }
        }

        JsonElement jsonElement = gson.toJsonTree(flight);
        jsonElement.getAsJsonObject().addProperty("businessSeat", availableSeats[0]);
        jsonElement.getAsJsonObject().addProperty("economySeat", availableSeats[1]);

        return gson.toJson(jsonElement);
    }
}
