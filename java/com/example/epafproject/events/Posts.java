package com.example.epafproject.events;

public class Posts {

    private int idNo;
    String _id;
    int interestedPeople;
    String lat;
    String lon;
    String description;
    String encodedImg;
    String dateTime;

    public Posts(int idNo, String lat, String lon, String description, String encodedImg, String dateTime, int interestedPeople, String _id) {
        this.idNo = idNo;
        this.lat = lat;
        this.lon = lon;
        this.description = description;
        this.encodedImg = encodedImg;
        this.dateTime = dateTime;
        this.interestedPeople = interestedPeople;
        this._id = _id;
    }

    public String getLat() {
        return lat;
    }

    public void setLat(String lat) {
        this.lat = lat;
    }

    public String getLon() {
        return lon;
    }

    public void setLon(String lon) {
        this.lon = lon;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getEncodedImg() {
        return encodedImg;
    }

    public void setEncodedimg(String encodedimg) {
        this.encodedImg = encodedImg;
    }

    public int getIdNo() {
        return idNo;
    }

    public void setId(int idNo) {
        this.idNo = idNo;
    }

    public String getDateTime() {
        return dateTime;
    }

    public void setDateTime(String dateTime) {
        this.dateTime = dateTime;
    }

    public int getInterestedPeople() {
        return interestedPeople;
    }

    public void setInterestedPeople(int interestedPeople) {
        this.interestedPeople = interestedPeople;
    }

    public String get_id() {
        return _id;
    }

    public void set_id(String _id) {
        this._id = _id;
    }
}