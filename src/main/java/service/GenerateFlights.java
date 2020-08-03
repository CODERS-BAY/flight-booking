package service;

import com.google.gson.Gson;
import dao.AirportEntity;
import dao.FlightEntity;
import model.HibernatePersister;
import org.hibernate.Session;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import java.sql.Timestamp;
import java.util.Calendar;
import java.util.Date;
import java.util.List;



////////////////////////////////////////////////////////////////////////
///////////////////////// UNUSED ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////



@Path("/generateFlights")
public class GenerateFlights {

    Gson gson = new Gson();

    @POST
    @Consumes(MediaType.TEXT_PLAIN)
    @Produces(MediaType.APPLICATION_JSON)
    public void gGenerateFlights() {

        HibernatePersister persister = new HibernatePersister();

        Session session = persister.getSessionFactory().openSession();
        session.beginTransaction();

        String hql = "from AirportEntity";
        List<AirportEntity> airportsList = session.createQuery(hql).list();

        int counter1 = 0;
        int counter2 = 0;

        for(AirportEntity depAirport : airportsList) {
            for(AirportEntity arrAirport : airportsList) {
                if(depAirport.getIac() != arrAirport.getIac()) {

                    FlightEntity thisFlight = new FlightEntity();

                    thisFlight.setDepartureIac(depAirport.getIac());
                    thisFlight.setArrivalIac(arrAirport.getIac());

                    double price = Math.floor(200 + Math.random( ) * 800);
                    thisFlight.setPrice(price);

                    Calendar cal = Calendar.getInstance();
                    cal.set(2020, 9, 1,5,0,0);

                    cal.add(Calendar.MINUTE, counter1);
                    Timestamp t1 = new Timestamp(cal.getTime().getTime());
                    cal.add(Calendar.HOUR_OF_DAY, 2);
                    Timestamp t2 = new Timestamp(cal.getTime().getTime());

                    thisFlight.setDepartureTime(t1);
                    thisFlight.setArrivalTime(t2);

                    System.out.println(thisFlight.getDepartureIac() + " " + thisFlight.getArrivalIac() + " " + thisFlight.getPrice()
                    + " " + thisFlight.getDepartureTime() + " " + thisFlight.getArrivalTime()
                    );

//                    session.save(thisFlight);
//                    session.flush();
//                    session.clear();

                    counter1 = counter1 + 240;
                }
            }
            counter2 = counter2 + 30;
            counter1 = counter2;
        }
        session.getTransaction().commit();
        session.close();
    }
}
