package model;

import java.sql.Timestamp;

public class FlightEntityModelSeats {
    private int flightId;
    private Timestamp departureTime;
    private Timestamp arrivalTime;
    private String arrivalIac;
    private String departureIac;
    private double price;
    private int businessSeat;
    private int economySeat;

    public int getFlightId() {
        return flightId;
    }

    public void setFlightId(int flightId) {
        this.flightId = flightId;
    }

    public Timestamp getDepartureTime() {
        return departureTime;
    }

    public void setDepartureTime(Timestamp departureTime) {
        this.departureTime = departureTime;
    }

    public Timestamp getArrivalTime() {
        return arrivalTime;
    }

    public void setArrivalTime(Timestamp arrivalTime) {
        this.arrivalTime = arrivalTime;
    }

    public String getArrivalIac() {
        return arrivalIac;
    }

    public void setArrivalIac(String arrivalIac) {
        this.arrivalIac = arrivalIac;
    }

    public String getDepartureIac() {
        return departureIac;
    }

    public void setDepartureIac(String departureIac) {
        this.departureIac = departureIac;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public int getBusinessSeat() {
        return businessSeat;
    }

    public void setBusinessSeat(int businessSeat) {
        this.businessSeat = businessSeat;
    }

    public int getEconomySeat() {
        return economySeat;
    }

    public void setEconomySeat(int economySeat) {
        this.economySeat = economySeat;
    }

    public FlightEntityModelSeats(int flightId, Timestamp departureTime, Timestamp arrivalTime, String arrivalIac, String departureIac, double price, int businessSeat, int economySeat) {
        this.flightId = flightId;
        this.departureTime = departureTime;
        this.arrivalTime = arrivalTime;
        this.arrivalIac = arrivalIac;
        this.departureIac = departureIac;
        this.price = price;
        this.businessSeat = businessSeat;
        this.economySeat = economySeat;


    }
}
