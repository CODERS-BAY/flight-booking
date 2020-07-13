<<<<<<< Updated upstream
package dao;

import javax.persistence.*;

@Entity
@Table(name = "flightevent", schema = "flight_booking", catalog = "")
public class FlighteventEntity {
    private int flighteventId;
    private String flightId;
    private int aircraftId;

    @Id
    @Column(name = "flightevent_id")
    public int getFlighteventId() {
        return flighteventId;
    }

    public void setFlighteventId(int flighteventId) {
        this.flighteventId = flighteventId;
    }

    @Basic
    @Column(name = "flight_id")
    public String getFlightId() {
        return flightId;
    }

    public void setFlightId(String flightId) {
        this.flightId = flightId;
    }

    @Basic
    @Column(name = "aircraft_id")
    public int getAircraftId() {
        return aircraftId;
    }

    public void setAircraftId(int aircraftId) {
        this.aircraftId = aircraftId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        FlighteventEntity that = (FlighteventEntity) o;

        if (flighteventId != that.flighteventId) return false;
        if (aircraftId != that.aircraftId) return false;
        if (flightId != null ? !flightId.equals(that.flightId) : that.flightId != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = flighteventId;
        result = 31 * result + (flightId != null ? flightId.hashCode() : 0);
        result = 31 * result + aircraftId;
        return result;
    }
}
=======
package dao;

import javax.persistence.*;

@Entity
@Table(name = "flightevent", schema = "flight_booking", catalog = "")
public class FlighteventEntity {
    private int flighteventId;
    private String flightId;
    private int aircraftId;

    @Id
    @Column(name = "flightevent_id")
    public int getFlighteventId() {
        return flighteventId;
    }

    public void setFlighteventId(int flighteventId) {
        this.flighteventId = flighteventId;
    }

    @Basic
    @Column(name = "flight_id")
    public String getFlightId() {
        return flightId;
    }

    public void setFlightId(String flightId) {
        this.flightId = flightId;
    }

    @Basic
    @Column(name = "aircraft_id")
    public int getAircraftId() {
        return aircraftId;
    }

    public void setAircraftId(int aircraftId) {
        this.aircraftId = aircraftId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        FlighteventEntity that = (FlighteventEntity) o;

        if (flighteventId != that.flighteventId) return false;
        if (aircraftId != that.aircraftId) return false;
        if (flightId != null ? !flightId.equals(that.flightId) : that.flightId != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = flighteventId;
        result = 31 * result + (flightId != null ? flightId.hashCode() : 0);
        result = 31 * result + aircraftId;
        return result;
    }
}
>>>>>>> Stashed changes
