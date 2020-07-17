package dao;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name = "payment", schema = "flight_booking", catalog = "")
public class PaymentEntity {
    private int paymentId;
    private String cardNumber;
    private String validityDate;
    private int verificationNumber;
    private String cardOwner;
    private String cardType;
    private Date paymentDate;

    @Id
    @Column(name = "payment_id")
    public int getPaymentId() {
        return paymentId;
    }

    public void setPaymentId(int paymentId) {
        this.paymentId = paymentId;
    }

    @Basic
    @Column(name = "card_number")
    public String getCardNumber() {
        return cardNumber;
    }

    public void setCardNumber(String cardNumber) {
        this.cardNumber = cardNumber;
    }

    @Basic
    @Column(name = "validity_date")
    public String getValidityDate() {
        return validityDate;
    }

    public void setValidityDate(String validityDate) {
        this.validityDate = validityDate;
    }

    @Basic
    @Column(name = "verification_number")
    public int getVerificationNumber() {
        return verificationNumber;
    }

    public void setVerificationNumber(int verificationNumber) {
        this.verificationNumber = verificationNumber;
    }

    @Basic
    @Column(name = "card_owner")
    public String getCardOwner() {
        return cardOwner;
    }

    public void setCardOwner(String cardOwner) {
        this.cardOwner = cardOwner;
    }

    @Basic
    @Column(name = "card_type")
    public String getCardType() {
        return cardType;
    }

    public void setCardType(String cardType) {
        this.cardType = cardType;
    }

    @Basic
    @Column(name = "payment_date")
    public Date getPaymentDate() {
        return paymentDate;
    }

    public void setPaymentDate(Date paymentDate) {
        this.paymentDate = paymentDate;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        PaymentEntity that = (PaymentEntity) o;

        if (paymentId != that.paymentId) return false;
        if (verificationNumber != that.verificationNumber) return false;
        if (cardNumber != null ? !cardNumber.equals(that.cardNumber) : that.cardNumber != null) return false;
        if (validityDate != null ? !validityDate.equals(that.validityDate) : that.validityDate != null) return false;
        if (cardOwner != null ? !cardOwner.equals(that.cardOwner) : that.cardOwner != null) return false;
        if (cardType != null ? !cardType.equals(that.cardType) : that.cardType != null) return false;
        if (paymentDate != null ? !paymentDate.equals(that.paymentDate) : that.paymentDate != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = paymentId;
        result = 31 * result + (cardNumber != null ? cardNumber.hashCode() : 0);
        result = 31 * result + (validityDate != null ? validityDate.hashCode() : 0);
        result = 31 * result + verificationNumber;
        result = 31 * result + (cardOwner != null ? cardOwner.hashCode() : 0);
        result = 31 * result + (cardType != null ? cardType.hashCode() : 0);
        result = 31 * result + (paymentDate != null ? paymentDate.hashCode() : 0);
        return result;
    }
}
