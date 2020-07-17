package model;

import com.google.gson.annotations.SerializedName;
import org.eclipse.persistence.annotations.SerializedConverter;

public class AirportModel {

    @SerializedName("IAC")
    private String iac;

    @SerializedName("City")
    private String city;

    @SerializedName("Name")
    private String name;

    public AirportModel(String iac, String city, String name) {
        this.iac = iac;
        this.city = city;
        this.name = name;
    }

    public String getIac() {
        return iac;
    }

    public void setIac(String iac) {
        this.iac = iac;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
