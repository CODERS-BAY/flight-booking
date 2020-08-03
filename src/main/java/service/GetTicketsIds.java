package service;

import com.google.gson.Gson;
import dao.TicketEntity;
import model.HibernatePersister;
import org.hibernate.Session;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import java.util.ArrayList;
import java.util.List;

@Path("/getTicketsIds")
    public class GetTicketsIds {

        Gson gson = new Gson();

        @POST
        @Consumes(MediaType.APPLICATION_JSON)
        @Produces(MediaType.APPLICATION_JSON)
        public String getTicketsIds(String ticketIdsJson) {

            HibernatePersister persister = new HibernatePersister();
            Session session = persister.getSessionFactory().openSession();
            session.beginTransaction();

            int[] ticketsIds = gson.fromJson(ticketIdsJson, int[].class);

            List<TicketEntity> ticketsList = new ArrayList<TicketEntity>();
            for(int ticketId : ticketsIds) {
                String hql = "from TicketEntity T where T.ticketId = :ticketId";
                ticketsList.addAll(session.createQuery(hql).setParameter("ticketId", ticketId).list());
                session.flush();
                session.clear();
            }
            session.close();

            return gson.toJson(ticketsList);
        }

}
