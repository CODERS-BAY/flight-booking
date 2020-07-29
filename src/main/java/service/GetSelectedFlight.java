package service;

import com.google.gson.Gson;
import com.google.gson.JsonElement;
import dao.FlightEntity;
import dao.TicketEntity;
import model.FlightEntityModelSeats;
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
    //@Consumes(MediaType.APPLICATION_JSON)
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

        List<FlightEntityModelSeats> flightEntityModelSeatsList = new ArrayList<FlightEntityModelSeats>();
        List<FlightEntity> flightList = query.getResultList();

        for (FlightEntity flight : flightList) {

            flightEntityModelSeatsList.add(getAvailableSeatsModel(flight));

        }
        String returnJson = gson.toJson(flightEntityModelSeatsList);

        session.close();
        return returnJson;
    }


    /**
     * creates a new FlightEntity but with added values for business and eco-seats
     * @param flight
     * @return
     */
    private FlightEntityModelSeats getAvailableSeatsModel(FlightEntity flight) {
        final int totalBusinessSeats = 48; // add real seat values
        final int totalEconomySeats = 180; // add real seat values
        
        FlightEntityModelSeats flightModel = new FlightEntityModelSeats(flight.getFlightId(),flight.getDepartureTime(),flight.getArrivalTime(),
                flight.getArrivalIac(),flight.getDepartureIac(),flight.getPrice(),totalBusinessSeats, totalEconomySeats);

        HibernatePersister hibernatePersister = new HibernatePersister();

        Session session = hibernatePersister.getSessionFactory().openSession();
        session.beginTransaction();
        String hql = "FROM TicketEntity T where T.flightId = :flightId";
        Query query = session.createQuery(hql).setParameter("flightId", flight.getFlightId());
        List<TicketEntity> ticketList = query.getResultList();

        for (TicketEntity ticket : ticketList) {
            if (ticket.getBusiness() == 1) {
                flightModel.setBusinessSeat(-1);
            } else {
                flightModel.setEconomySeat(-1);
            }
        }

        return flightModel;
    }
}
