package dao;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "luggage", schema = "flight_booking", catalog = "")
public class LuggageEntity {
    private int luggageId;

    @Id
    @Column(name = "luggage_id")
    public int getLuggageId() {
        return luggageId;
    }

    public void setLuggageId(int luggageId) {
        this.luggageId = luggageId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        LuggageEntity that = (LuggageEntity) o;

        if (luggageId != that.luggageId) return false;

        return true;
    }

    @Override
    public int hashCode() {
        return luggageId;
    }
}
