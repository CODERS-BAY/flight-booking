package service;

import javax.ws.rs.GET;
import javax.ws.rs.Produces;
import javax.ws.rs.Path;

import dao.AircraftEntity;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;


// The Java class will be hosted at the URI path "/user"
@Path("/airport")
public class AirportService {
    // The Java method will process HTTP GET requests
    @GET
    // The Java method will produce content identified by the MIME Media type "text/plain"
    @Produces("text/json")
    public String getClichedMessage() {
        // Return some cliched textual content
        SessionFactory factory = new Configuration().configure().buildSessionFactory();
        Session session = factory.openSession();
        Transaction tx = null;
        Integer airportId = null;

        try {
            tx = session.beginTransaction();
//            EmployeeEntity employee = new EmployeeEntity();
//            employee.setFirstName("Max");
//            employee.setLastName("Max");
//            employee.setSalary(10000);
//            AirportEntity airportEntity = new AirportEntity();
//            airportEntity.setCity("Linz");
//            airportEntity.setIac("LI5212");
//            airportEntity.setName("Hörsching");
//            airportEntity.setState("Österreich");

//            airportId = (Integer) session.save(airportEntity);

            AircraftEntity aircraft = new AircraftEntity();
            aircraft.setAircraftName("B747");
            aircraft.setAircraftType("Boeing");
            airportId = (Integer) session.save(aircraft);

            tx.commit();
        } catch (HibernateException e) {
            if (tx!=null) tx.rollback();
            e.printStackTrace();
        } finally {
            session.close();
        }

        return airportId.toString();
    }
}
