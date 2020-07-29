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

@Path("/savePayment")
public class SavePayment {

    Gson gson = new Gson();

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public void savePayment(String paymentJson) {

        HibernatePersister persister = new HibernatePersister();

        Session session = persister.getSessionFactory().openSession();
        session.beginTransaction();

        //From JSON to Object
        PaymentEntity newPayment = gson.fromJson(paymentJson, PaymentEntity.class);

        //Set PaymentDate
        long millis = System.currentTimeMillis();
        Date today = new Date(millis);
        newPayment.setPaymentDate(today);

        //Check and set the Credit Card Issuer
//        int firstNumber = Character.getNumericValue(newPayment.getCardNumber().charAt(0));
//        System.out.println(firstNumber);
//        if(firstNumber == 4) {
//            newPayment.setCardType("Visa");
//        } else if(firstNumber == 5) {
//            newPayment.setCardType("MasterCard");
//        }

        session.save(newPayment);

        //Save payment in database
        session.getTransaction().commit();
        session.close();
    }

}
