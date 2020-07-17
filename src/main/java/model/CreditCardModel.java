package model;

import com.google.gson.annotations.SerializedName;

public class CreditCardModel {
    @SerializedName("card_number")
    private String cardNumber;
    @SerializedName("validity_date")
    private String validityDate;
    @SerializedName("verification_number")
    private String verificationNumber;
    @SerializedName("card_owner")
    private String cardOwner;
    @SerializedName("card_type")
    private String cardType;

    public CreditCardModel(String cardNumber, String validityDate, String verificationNumber, String cardOwner, String cardType) {
        this.cardNumber = cardNumber;
        this.validityDate = validityDate;
        this.verificationNumber = verificationNumber;
        this.cardOwner = cardOwner;
        this.cardType = cardType;
    }

    public String getCardNumber() {
        return cardNumber;
    }

    public void setCardNumber(String cardNumber) {
        this.cardNumber = cardNumber;
    }

    public String getValidityDate() {
        return validityDate;
    }

    public void setValidityDate(String validityDate) {
        this.validityDate = validityDate;
    }

    public String getVerificationNumber() {
        return verificationNumber;
    }

    public void setVerificationNumber(String verificationNumber) {
        this.verificationNumber = verificationNumber;
    }

    public String getCardOwner() {
        return cardOwner;
    }

    public void setCardOwner(String cardOwner) {
        this.cardOwner = cardOwner;
    }

    public String getCardType() {
        return cardType;
    }

    public void setCardType(String cardType) {
        this.cardType = cardType;
    }
}
