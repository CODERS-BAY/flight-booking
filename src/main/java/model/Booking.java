package model;

import dao.PassengerEntity;
import dao.PaymentEntity;

import java.util.Arrays;

public class Booking {

    public PaymentEntity payment;
    public PassengerEntity[] passengers;
    public String[] seats;
    public int flightId;
    public Byte business;



    ////////////////////////////////////////////////////////////////////////
///////////////////////// UNUSED ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
    @Override
    public String toString() {
        return "Booking{" +
                "payment=" + payment +
                ", passengers=" + Arrays.toString(passengers) +
                ", seats=" + Arrays.toString(seats) +
                ", flightId=" + flightId +
                ", business=" + business +
                '}';
    }
}
