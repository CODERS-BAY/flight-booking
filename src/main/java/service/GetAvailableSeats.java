package service;

import com.google.gson.Gson;
import dao.TicketEntity;
import model.HibernatePersister;
import org.hibernate.Session;

import javax.persistence.Query;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import java.util.ArrayList;
import java.util.List;

@Path("/getAvailableSeats")
public class GetAvailableSeats {
    Gson gson = new Gson();

    @POST
    //@Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public String availableSeats(String userJson) {
        TicketEntity ticket = gson.fromJson(userJson, TicketEntity.class);
        HibernatePersister hibernatePersister = new HibernatePersister();

        Session session = hibernatePersister.getSessionFactory().openSession();
        session.beginTransaction();
        String hql = "from TicketEntity T where T.flightId = :flightId";
        Query query = session.createQuery(hql);
        query.setParameter("flightId", ticket.getFlightId());
        List<TicketEntity> ticketList = query.getResultList();
        List<String> availableBusinessSeats = new ArrayList<String>();
        List<String> availableEconomySeats = new ArrayList<String>();

        for (TicketEntity t : ticketList) {
            if (t.getBusiness() == 1){
                availableBusinessSeats.add(t.getSeat());
            } else {
                availableEconomySeats.add(t.getSeat());
            }
        }

        ArrayList<String> availableSeats = new ArrayList<String>();
        availableSeats.addAll(availableBusinessSeats);
        availableSeats.addAll(availableEconomySeats);
        
        String seats = gson.toJson(availableSeats);

        session.close();

        return seats;
    }

}
