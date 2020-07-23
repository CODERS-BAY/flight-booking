package model;

import org.hibernate.SessionFactory;
import org.hibernate.boot.MetadataSources;
import org.hibernate.boot.registry.StandardServiceRegistry;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;
import java.io.File;

public class HibernatePersister {

    private SessionFactory sessionFactory = null;

    public HibernatePersister() {

        File configFile = new File("C:\\Users\\codersbay\\Desktop\\Something\\flight-booking\\src\\main\\resources\\hibernate.cfg.xml");

        StandardServiceRegistry registry = new StandardServiceRegistryBuilder()
                .configure(configFile)
                .build();

        sessionFactory = new MetadataSources(registry)
                .buildMetadata()
                .buildSessionFactory();
    }

    public SessionFactory getSessionFactory() {
        return sessionFactory;
    }
}
