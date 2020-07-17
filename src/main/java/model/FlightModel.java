package model;

import com.google.gson.annotations.SerializedName;
import org.eclipse.persistence.jpa.jpql.parser.DateTime;

public class FlightModel {
    @SerializedName("depature_time")
    private DateTime depatureTime;
    @SerializedName("arrival_time")
    private DateTime arrivalTime;
    @SerializedName("depature_IAC")
    private String depatureIac;
    @SerializedName("arrival_IAC")
    private String arrivalIac;
    @SerializedName("price")
    private double price;
    @SerializedName("seats")
    private int seats;

    public FlightModel(DateTime depatureTime, DateTime arrivalTime, String depatureIac, String arrivalIac, double price, int seats) {
        this.depatureTime = depatureTime;
        this.arrivalTime = arrivalTime;
        this.depatureIac = depatureIac;
        this.arrivalIac = arrivalIac;
        this.price = price;
        this.seats = seats;
    }

    public DateTime getDepatureTime() {
        return depatureTime;
    }

    public void setDepatureTime(DateTime depatureTime) {
        this.depatureTime = depatureTime;
    }

    public DateTime getArrivalTime() {
        return arrivalTime;
    }

    public void setArrivalTime(DateTime arrivalTime) {
        this.arrivalTime = arrivalTime;
    }

    public String getDepatureIac() {
        return depatureIac;
    }

    public void setDepatureIac(String depatureIac) {
        this.depatureIac = depatureIac;
    }

    public String getArrivalIac() {
        return arrivalIac;
    }

    public void setArrivalIac(String arrivalIac) {
        this.arrivalIac = arrivalIac;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public int getSeats() {
        return seats;
    }

    public void setSeats(int seats) {
        this.seats = seats;
    }
}
