package dao;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "webuser", schema = "flight_booking", catalog = "")
public class WebuserEntity {
    private int webuserId;

    @Id
    @Column(name = "webuser_id")
    public int getWebuserId() {
        return webuserId;
    }

    public void setWebuserId(int webuserId) {
        this.webuserId = webuserId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        WebuserEntity that = (WebuserEntity) o;

        if (webuserId != that.webuserId) return false;

        return true;
    }

    @Override
    public int hashCode() {
        return webuserId;
    }
}
