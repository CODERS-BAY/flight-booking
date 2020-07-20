package model;

import com.google.gson.annotations.SerializedName;

public class User {
    @SerializedName("first_name")
    public String first_name;
    @SerializedName("last_name")
    public String last_name;
}
