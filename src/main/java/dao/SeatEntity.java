<<<<<<< Updated upstream
package dao;

import javax.persistence.*;

@Entity
@Table(name = "seat", schema = "flight_booking", catalog = "")
public class SeatEntity {
    private String seatId;
    private int seatRow;
    private String seatColumn;
    private int aircraftId;

    @Id
    @Column(name = "seat_id")
    public String getSeatId() {
        return seatId;
    }

    public void setSeatId(String seatId) {
        this.seatId = seatId;
    }

    @Basic
    @Column(name = "seat_row")
    public int getSeatRow() {
        return seatRow;
    }

    public void setSeatRow(int seatRow) {
        this.seatRow = seatRow;
    }

    @Basic
    @Column(name = "seat_column")
    public String getSeatColumn() {
        return seatColumn;
    }

    public void setSeatColumn(String seatColumn) {
        this.seatColumn = seatColumn;
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

        SeatEntity that = (SeatEntity) o;

        if (seatRow != that.seatRow) return false;
        if (aircraftId != that.aircraftId) return false;
        if (seatId != null ? !seatId.equals(that.seatId) : that.seatId != null) return false;
        if (seatColumn != null ? !seatColumn.equals(that.seatColumn) : that.seatColumn != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = seatId != null ? seatId.hashCode() : 0;
        result = 31 * result + seatRow;
        result = 31 * result + (seatColumn != null ? seatColumn.hashCode() : 0);
        result = 31 * result + aircraftId;
        return result;
    }
}
=======
package dao;

import javax.persistence.*;

@Entity
@Table(name = "seat", schema = "flight_booking", catalog = "")
public class SeatEntity {
    private String seatId;
    private int seatRow;
    private String seatColumn;
<<<<<<< HEAD
=======
    private int aircraftId;
>>>>>>> dev

    @Id
    @Column(name = "seat_id")
    public String getSeatId() {
        return seatId;
    }

    public void setSeatId(String seatId) {
        this.seatId = seatId;
    }

    @Basic
    @Column(name = "seat_row")
    public int getSeatRow() {
        return seatRow;
    }

    public void setSeatRow(int seatRow) {
        this.seatRow = seatRow;
    }

    @Basic
    @Column(name = "seat_column")
    public String getSeatColumn() {
        return seatColumn;
    }

    public void setSeatColumn(String seatColumn) {
        this.seatColumn = seatColumn;
    }

<<<<<<< HEAD
=======
    @Basic
    @Column(name = "aircraft_id")
    public int getAircraftId() {
        return aircraftId;
    }

    public void setAircraftId(int aircraftId) {
        this.aircraftId = aircraftId;
    }

>>>>>>> dev
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        SeatEntity that = (SeatEntity) o;

        if (seatRow != that.seatRow) return false;
<<<<<<< HEAD
=======
        if (aircraftId != that.aircraftId) return false;
>>>>>>> dev
        if (seatId != null ? !seatId.equals(that.seatId) : that.seatId != null) return false;
        if (seatColumn != null ? !seatColumn.equals(that.seatColumn) : that.seatColumn != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = seatId != null ? seatId.hashCode() : 0;
        result = 31 * result + seatRow;
        result = 31 * result + (seatColumn != null ? seatColumn.hashCode() : 0);
<<<<<<< HEAD
=======
        result = 31 * result + aircraftId;
>>>>>>> dev
        return result;
    }
}
>>>>>>> Stashed changes
