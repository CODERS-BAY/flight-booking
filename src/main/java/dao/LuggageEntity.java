package dao;

import javax.persistence.*;

@Entity
@Table(name = "luggage", schema = "flight_booking", catalog = "")
public class LuggageEntity {
    private int luggageId;
    private int ticketId;

    @Id
    @Column(name = "luggage_id")
    public int getLuggageId() {
        return luggageId;
    }

    public void setLuggageId(int luggageId) {
        this.luggageId = luggageId;
    }

    @Basic
    @Column(name = "ticket_id")
    public int getTicketId() {
        return ticketId;
    }

    public void setTicketId(int ticketId) {
        this.ticketId = ticketId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        LuggageEntity that = (LuggageEntity) o;

        if (luggageId != that.luggageId) return false;
        if (ticketId != that.ticketId) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = luggageId;
        result = 31 * result + ticketId;
        return result;
    }
}
