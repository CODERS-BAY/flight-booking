package model;

import com.google.gson.annotations.SerializedName;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name="passenger")
public class PassengerModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public int passenger_id;

    @Column(name="first_name", nullable = false)
    @SerializedName("first_name")
    private String firstName;

    @Column(name="last_name", nullable = false)
    @SerializedName("last_name")
    private String lastName;

    @Column(name="email")
    @SerializedName("email")
    private String email;

    @Column(name="birthdate")
    @SerializedName("birthdate")
    private Date birthdate;

    @Column(name="phone_number")
    @SerializedName("phone_number")
    private String phoneNumber;

    @Column(name="street_number")
    @SerializedName("street_number")
    private String streetNumber;

    @Column(name="post_code")
    @SerializedName("post_code")
    private int postCode;

    @Column(name="city")
    @SerializedName("city")
    private String city;

    @Column(name="webuser")
    @SerializedName("webuser")
    private boolean webuser;

    @Column(name="password")
    @SerializedName("password")
    private String password;

    public PassengerModel(){}

    public PassengerModel(String firstName, String lastName, String email, Date birthdate, String phoneNumber, String streetNumber, int postCode, String city) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.birthdate = birthdate;
        this.phoneNumber = phoneNumber;
        this.streetNumber = streetNumber;
        this.postCode = postCode;
        this.city = city;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Date getBirthdate() {
        return birthdate;
    }

    public void setBirthdate(Date birthdate) {
        this.birthdate = birthdate;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getStreetNumber() {
        return streetNumber;
    }

    public void setStreetNumber(String streetNumber) {
        this.streetNumber = streetNumber;
    }

    public int getPostCode() {
        return postCode;
    }

    public void setPostCode(int postCode) {
        this.postCode = postCode;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public void setWebuser(boolean webuser) { this.webuser = webuser; }

    public boolean isWebuser() { return webuser; }

    public void setPassword(String password) { this.password = password; }

    public String getPassword() { return password; }
 }
