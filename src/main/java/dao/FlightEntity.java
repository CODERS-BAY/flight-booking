package dao;

import javax.persistence.*;
import java.sql.Timestamp;

@Entity
@Table(name = "flight", schema = "flight_booking", catalog = "")
public class FlightEntity {
    private int flightId;
    private Timestamp departureTime;
    private Timestamp arrivalTime;
    private String arrivalIac;
    private String departureIac;
    private double price;

    @Id
    @Column(name = "flight_id")
    public int getFlightId() {
        return flightId;
    }

    public void setFlightId(int flightId) {
        this.flightId = flightId;
    }

    @Basic
    @Column(name = "departure_time")
    public Timestamp getDepartureTime() {
        return departureTime;
    }

    public void setDepartureTime(Timestamp departureTime) {
        this.departureTime = departureTime;
    }

    @Basic
    @Column(name = "arrival_time")
    public Timestamp getArrivalTime() {
        return arrivalTime;
    }

    public void setArrivalTime(Timestamp arrivalTime) {
        this.arrivalTime = arrivalTime;
    }

    @Basic
    @Column(name = "arrival_IAC")
    public String getArrivalIac() {
        return arrivalIac;
    }

    public void setArrivalIac(String arrivalIac) {
        this.arrivalIac = arrivalIac;
    }

    @Basic
    @Column(name = "departure_IAC")
    public String getDepartureIac() {
        return departureIac;
    }

    public void setDepartureIac(String departureIac) {
        this.departureIac = departureIac;
    }

    @Basic
    @Column(name = "price")
    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        FlightEntity that = (FlightEntity) o;

        if (flightId != that.flightId) return false;
        if (Double.compare(that.price, price) != 0) return false;
        if (departureTime != null ? !departureTime.equals(that.departureTime) : that.departureTime != null)
            return false;
        if (arrivalTime != null ? !arrivalTime.equals(that.arrivalTime) : that.arrivalTime != null) return false;
        if (arrivalIac != null ? !arrivalIac.equals(that.arrivalIac) : that.arrivalIac != null) return false;
        if (departureIac != null ? !departureIac.equals(that.departureIac) : that.departureIac != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result;
        long temp;
        result = flightId;
        result = 31 * result + (departureTime != null ? departureTime.hashCode() : 0);
        result = 31 * result + (arrivalTime != null ? arrivalTime.hashCode() : 0);
        result = 31 * result + (arrivalIac != null ? arrivalIac.hashCode() : 0);
        result = 31 * result + (departureIac != null ? departureIac.hashCode() : 0);
        temp = Double.doubleToLongBits(price);
        result = 31 * result + (int) (temp ^ (temp >>> 32));
        return result;
    }
}
