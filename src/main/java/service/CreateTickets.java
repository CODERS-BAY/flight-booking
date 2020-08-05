package service;

import com.google.gson.Gson;
import dao.PassengerEntity;
import dao.PaymentEntity;
import dao.TicketEntity;
import model.Booking;
import model.HibernatePersister;
import org.hibernate.Session;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.core.MediaType;
import java.sql.Date;

@Path("/createTickets")
public class CreateTickets {

    Gson gson = new Gson();

    @POST

    public String createTickets(String ticketsJson) {

        HibernatePersister persister = new HibernatePersister();
        Session session = persister.getSessionFactory().openSession();
        session.beginTransaction();

        //From JSON to Object
        Booking booking = gson.fromJson(ticketsJson, Booking.class);

        int paymentId = insertPayment(booking.payment, session);
        int[] passengersIds = insertPassengers(booking.passengers, session);

        TicketEntity[] tickets = new TicketEntity[passengersIds.length];
        Integer[] ticketsIds = new Integer[passengersIds.length];

        for (int i = 0; i < tickets.length; i++) {
            tickets[i] = new TicketEntity();
            tickets[i].setPassengerId(passengersIds[i]);
            tickets[i].setPaymentId(paymentId);
            tickets[i].setSeat(booking.seats[i]);
            tickets[i].setBusiness(booking.business);
            tickets[i].setFlightId(booking.flightId);

            ticketsIds[i] = (Integer) session.save(tickets[i]);
            session.flush();
            session.clear();
        }

        session.close();

        String ticketsIdsJson = "[";
        for(int i = 0; i < ticketsIds.length; i++) {
            if(i != ticketsIds.length - 1) {
                ticketsIdsJson += ticketsIds[i] + ",";
            } else {
                ticketsIdsJson += ticketsIds[i];
                ticketsIdsJson += "]";
            }
        }
        return ticketsIdsJson;
    }

    private int insertPayment(PaymentEntity payment, Session session) {

        long millis = System.currentTimeMillis();
        Date today = new Date(millis);
        payment.setPaymentDate(today);

        int paymentId = (Integer) session.save(payment);
        session.flush();
        session.clear();

        return paymentId;
    }

    private int[] insertPassengers(PassengerEntity[] passengers, Session session) {

        int counter = 0;
        int[] passengersIds = new int[passengers.length];
        for(PassengerEntity passenger : passengers) {
            passengersIds[counter] = (Integer) session.save(passenger);
            session.flush();
            session.clear();
            counter++;
        }
        return passengersIds;
    }
}
