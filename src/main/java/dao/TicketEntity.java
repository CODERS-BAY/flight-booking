<<<<<<< Updated upstream
package dao;

import javax.persistence.*;

@Entity
@Table(name = "ticket", schema = "flight_booking", catalog = "")
public class TicketEntity {
    private int ticketId;
    private double price;
    private String seatId;
    private int flighteventId;
    private int passengerId;
    private Integer webuserId;
    private int paymentId;

    @Id
    @Column(name = "ticket_id")
    public int getTicketId() {
        return ticketId;
    }

    public void setTicketId(int ticketId) {
        this.ticketId = ticketId;
    }

    @Basic
    @Column(name = "price")
    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    @Basic
    @Column(name = "seat_id")
    public String getSeatId() {
        return seatId;
    }

    public void setSeatId(String seatId) {
        this.seatId = seatId;
    }

    @Basic
    @Column(name = "flightevent_id")
    public int getFlighteventId() {
        return flighteventId;
    }

    public void setFlighteventId(int flighteventId) {
        this.flighteventId = flighteventId;
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
    @Column(name = "webuser_id")
    public Integer getWebuserId() {
        return webuserId;
    }

    public void setWebuserId(Integer webuserId) {
        this.webuserId = webuserId;
    }

    @Basic
    @Column(name = "payment_id")
    public int getPaymentId() {
        return paymentId;
    }

    public void setPaymentId(int paymentId) {
        this.paymentId = paymentId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        TicketEntity that = (TicketEntity) o;

        if (ticketId != that.ticketId) return false;
        if (Double.compare(that.price, price) != 0) return false;
        if (flighteventId != that.flighteventId) return false;
        if (passengerId != that.passengerId) return false;
        if (paymentId != that.paymentId) return false;
        if (seatId != null ? !seatId.equals(that.seatId) : that.seatId != null) return false;
        if (webuserId != null ? !webuserId.equals(that.webuserId) : that.webuserId != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result;
        long temp;
        result = ticketId;
        temp = Double.doubleToLongBits(price);
        result = 31 * result + (int) (temp ^ (temp >>> 32));
        result = 31 * result + (seatId != null ? seatId.hashCode() : 0);
        result = 31 * result + flighteventId;
        result = 31 * result + passengerId;
        result = 31 * result + (webuserId != null ? webuserId.hashCode() : 0);
        result = 31 * result + paymentId;
        return result;
    }
}
=======
package dao;

import javax.persistence.*;

@Entity
@Table(name = "ticket", schema = "flight_booking", catalog = "")
public class TicketEntity {
    private int ticketId;
    private double price;
<<<<<<< HEAD
=======
    private String seatId;
    private int flighteventId;
    private int passengerId;
    private Integer webuserId;
    private int paymentId;
>>>>>>> dev

    @Id
    @Column(name = "ticket_id")
    public int getTicketId() {
        return ticketId;
    }

    public void setTicketId(int ticketId) {
        this.ticketId = ticketId;
    }

    @Basic
    @Column(name = "price")
    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

<<<<<<< HEAD
=======
    @Basic
    @Column(name = "seat_id")
    public String getSeatId() {
        return seatId;
    }

    public void setSeatId(String seatId) {
        this.seatId = seatId;
    }

    @Basic
    @Column(name = "flightevent_id")
    public int getFlighteventId() {
        return flighteventId;
    }

    public void setFlighteventId(int flighteventId) {
        this.flighteventId = flighteventId;
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
    @Column(name = "webuser_id")
    public Integer getWebuserId() {
        return webuserId;
    }

    public void setWebuserId(Integer webuserId) {
        this.webuserId = webuserId;
    }

    @Basic
    @Column(name = "payment_id")
    public int getPaymentId() {
        return paymentId;
    }

    public void setPaymentId(int paymentId) {
        this.paymentId = paymentId;
    }

>>>>>>> dev
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        TicketEntity that = (TicketEntity) o;

        if (ticketId != that.ticketId) return false;
        if (Double.compare(that.price, price) != 0) return false;
<<<<<<< HEAD
=======
        if (flighteventId != that.flighteventId) return false;
        if (passengerId != that.passengerId) return false;
        if (paymentId != that.paymentId) return false;
        if (seatId != null ? !seatId.equals(that.seatId) : that.seatId != null) return false;
        if (webuserId != null ? !webuserId.equals(that.webuserId) : that.webuserId != null) return false;
>>>>>>> dev

        return true;
    }

    @Override
    public int hashCode() {
        int result;
        long temp;
        result = ticketId;
        temp = Double.doubleToLongBits(price);
        result = 31 * result + (int) (temp ^ (temp >>> 32));
<<<<<<< HEAD
=======
        result = 31 * result + (seatId != null ? seatId.hashCode() : 0);
        result = 31 * result + flighteventId;
        result = 31 * result + passengerId;
        result = 31 * result + (webuserId != null ? webuserId.hashCode() : 0);
        result = 31 * result + paymentId;
>>>>>>> dev
        return result;
    }
}
>>>>>>> Stashed changes
