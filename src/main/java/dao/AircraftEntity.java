<<<<<<< Updated upstream
package dao;

import javax.persistence.*;

@Entity
@Table(name = "aircraft", schema = "flight_booking", catalog = "")
public class AircraftEntity {
    private int aircraftId;
    private String aircraftType;
    private String aircraftName;

    @Id
    @Column(name = "aircraft_id")
    public int getAircraftId() {
        return aircraftId;
    }

    public void setAircraftId(int aircraftId) {
        this.aircraftId = aircraftId;
    }

    @Basic
    @Column(name = "aircraft_type")
    public String getAircraftType() {
        return aircraftType;
    }

    public void setAircraftType(String aircraftType) {
        this.aircraftType = aircraftType;
    }

    @Basic
    @Column(name = "aircraft_name")
    public String getAircraftName() {
        return aircraftName;
    }

    public void setAircraftName(String aircraftName) {
        this.aircraftName = aircraftName;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        AircraftEntity that = (AircraftEntity) o;

        if (aircraftId != that.aircraftId) return false;
        if (aircraftType != null ? !aircraftType.equals(that.aircraftType) : that.aircraftType != null) return false;
        if (aircraftName != null ? !aircraftName.equals(that.aircraftName) : that.aircraftName != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = aircraftId;
        result = 31 * result + (aircraftType != null ? aircraftType.hashCode() : 0);
        result = 31 * result + (aircraftName != null ? aircraftName.hashCode() : 0);
        return result;
    }
}
=======
package dao;

import javax.persistence.*;

@Entity
@Table(name = "aircraft", schema = "flight_booking", catalog = "")
public class AircraftEntity {
    private int aircraftId;
    private String aircraftType;
    private String aircraftName;

    @Id
    @Column(name = "aircraft_id")
    public int getAircraftId() {
        return aircraftId;
    }

    public void setAircraftId(int aircraftId) {
        this.aircraftId = aircraftId;
    }

    @Basic
    @Column(name = "aircraft_type")
    public String getAircraftType() {
        return aircraftType;
    }

    public void setAircraftType(String aircraftType) {
        this.aircraftType = aircraftType;
    }

    @Basic
    @Column(name = "aircraft_name")
    public String getAircraftName() {
        return aircraftName;
    }

    public void setAircraftName(String aircraftName) {
        this.aircraftName = aircraftName;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        AircraftEntity that = (AircraftEntity) o;

        if (aircraftId != that.aircraftId) return false;
        if (aircraftType != null ? !aircraftType.equals(that.aircraftType) : that.aircraftType != null) return false;
        if (aircraftName != null ? !aircraftName.equals(that.aircraftName) : that.aircraftName != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = aircraftId;
        result = 31 * result + (aircraftType != null ? aircraftType.hashCode() : 0);
        result = 31 * result + (aircraftName != null ? aircraftName.hashCode() : 0);
        return result;
    }
}
>>>>>>> Stashed changes
