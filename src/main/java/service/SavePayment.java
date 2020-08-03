package service;

import com.google.gson.Gson;
import dao.PaymentEntity;
import model.HibernatePersister;
import org.hibernate.Session;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import java.sql.Date;


////////////////////////////////////////////////////////////////////////
///////////////////////// UNUSED ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////




@Path("/savePayment")
public class SavePayment {

    Gson gson = new Gson();

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public String savePayment(String paymentJson) {

        HibernatePersister persister = new HibernatePersister();

        Session session = persister.getSessionFactory().openSession();
        session.beginTransaction();

        PaymentEntity newPayment = gson.fromJson(paymentJson, PaymentEntity.class);

        long millis = System.currentTimeMillis();
        Date today = new Date(millis);
        newPayment.setPaymentDate(today);

        Integer paymentId = (Integer) session.save(newPayment);

        session.getTransaction().commit();
        session.close();

        return  "{\"paymentId\":\"" + paymentId + "\"}";
    }
}
