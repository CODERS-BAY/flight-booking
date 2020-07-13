package dao;

import javax.persistence.*;
import java.sql.Time;

@Entity
@Table(name = "flight", schema = "flight_booking", catalog = "")
public class FlightEntity {
    private String flightId;
    private Time departureTime;
    private Time arrivalTime;
    private String arrivalIac;
    private String departureIac;

    @Id
    @Column(name = "flight_id")
    public String getFlightId() {
        return flightId;
    }

    public void setFlightId(String flightId) {
        this.flightId = flightId;
    }

    @Basic
    @Column(name = "departure_time")
    public Time getDepartureTime() {
        return departureTime;
    }

    public void setDepartureTime(Time departureTime) {
        this.departureTime = departureTime;
    }

    @Basic
    @Column(name = "arrival_time")
    public Time getArrivalTime() {
        return arrivalTime;
    }

    public void setArrivalTime(Time arrivalTime) {
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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        FlightEntity that = (FlightEntity) o;

        if (flightId != null ? !flightId.equals(that.flightId) : that.flightId != null) return false;
        if (departureTime != null ? !departureTime.equals(that.departureTime) : that.departureTime != null)
            return false;
        if (arrivalTime != null ? !arrivalTime.equals(that.arrivalTime) : that.arrivalTime != null) return false;
        if (arrivalIac != null ? !arrivalIac.equals(that.arrivalIac) : that.arrivalIac != null) return false;
        if (departureIac != null ? !departureIac.equals(that.departureIac) : that.departureIac != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = flightId != null ? flightId.hashCode() : 0;
        result = 31 * result + (departureTime != null ? departureTime.hashCode() : 0);
        result = 31 * result + (arrivalTime != null ? arrivalTime.hashCode() : 0);
        result = 31 * result + (arrivalIac != null ? arrivalIac.hashCode() : 0);
        result = 31 * result + (departureIac != null ? departureIac.hashCode() : 0);
        return result;
    }
}
