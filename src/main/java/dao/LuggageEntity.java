<<<<<<< Updated upstream
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
=======
package dao;

<<<<<<< HEAD
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
=======
import javax.persistence.*;
>>>>>>> dev

@Entity
@Table(name = "luggage", schema = "flight_booking", catalog = "")
public class LuggageEntity {
    private int luggageId;
<<<<<<< HEAD
=======
    private int ticketId;
>>>>>>> dev

    @Id
    @Column(name = "luggage_id")
    public int getLuggageId() {
        return luggageId;
    }

    public void setLuggageId(int luggageId) {
        this.luggageId = luggageId;
    }

<<<<<<< HEAD
=======
    @Basic
    @Column(name = "ticket_id")
    public int getTicketId() {
        return ticketId;
    }

    public void setTicketId(int ticketId) {
        this.ticketId = ticketId;
    }

>>>>>>> dev
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        LuggageEntity that = (LuggageEntity) o;

        if (luggageId != that.luggageId) return false;
<<<<<<< HEAD
=======
        if (ticketId != that.ticketId) return false;
>>>>>>> dev

        return true;
    }

    @Override
    public int hashCode() {
<<<<<<< HEAD
        return luggageId;
=======
        int result = luggageId;
        result = 31 * result + ticketId;
        return result;
>>>>>>> dev
    }
}
>>>>>>> Stashed changes
