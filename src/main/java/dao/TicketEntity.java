package dao;

import javax.persistence.*;

@Entity
@Table(name = "ticket", schema = "flight_booking", catalog = "")
public class TicketEntity {
    private int ticketId;
    private int passengerId;
    private int paymentId;
    private String seat;
    private Byte business;
    private int flightId;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) //We had to add this line! Not automatic!
    @Column(name = "ticket_id")
    public int getTicketId() {
        return ticketId;
    }

    public void setTicketId(int ticketId) {
        this.ticketId = ticketId;
    }

    @Basic
    @Column(name = "passenger_id")
    public int getPassengerId() {
        return passengerId;
    }

    public void setPassengerId(int passengerId) {
        this.passengerId = passengerId;
    }

    @Basic
    @Column(name = "payment_id")
    public int getPaymentId() {
        return paymentId;
    }

    public void setPaymentId(int paymentId) {
        this.paymentId = paymentId;
    }

    @Basic
    @Column(name = "seat")
    public String getSeat() {
        return seat;
    }

    public void setSeat(String seat) {
        this.seat = seat;
    }

    @Basic
    @Column(name = "business")
    public Byte getBusiness() {
        return business;
    }

    public void setBusiness(Byte business) {
        this.business = business;
    }

    @Basic
    @Column(name = "flight_id")
    public int getFlightId() {
        return flightId;
    }

    public void setFlightId(int flightId) {
        this.flightId = flightId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        TicketEntity that = (TicketEntity) o;

        if (ticketId != that.ticketId) return false;
        if (passengerId != that.passengerId) return false;
        if (paymentId != that.paymentId) return false;
        if (flightId != that.flightId) return false;
        if (seat != null ? !seat.equals(that.seat) : that.seat != null) return false;
        if (business != null ? !business.equals(that.business) : that.business != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = ticketId;
        result = 31 * result + passengerId;
        result = 31 * result + paymentId;
        result = 31 * result + (seat != null ? seat.hashCode() : 0);
        result = 31 * result + (business != null ? business.hashCode() : 0);
        result = 31 * result + flightId;
        return result;
    }
}
