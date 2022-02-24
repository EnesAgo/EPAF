package com.example.epafproject.pollutionandfire;

import java.util.List;

public class OurDataSet {
    String lat;
    String lon;
    String description;
    String encodedFile;
    String dateTime;
    String place;

    com.example.epafproject.pollutionandfire.json.json json;

    public com.example.epafproject.pollutionandfire.json.json getJson() {
        return json;
    }

    public void setJson(com.example.epafproject.pollutionandfire.json.json json) {
        this.json = json;
    }

    public OurDataSet(){

    }

    public OurDataSet(String lat, String lon, String description, String encodedFile, String dateTime, String place){
        this.description = description;
        this.lat = lat;
        this.lon = lon;
        this.encodedFile = encodedFile;
        this.dateTime = dateTime;
        this.place = place;
    }

    public String getDescription(){
        return description;
    }
    public void setDescription(String description){
        this.description = description;
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

    public void setLng(String lon) {
        this.lon = lon;
    }

    public String getEncodedFile() {
        return encodedFile;
    }

    public void setEncodedFile(String encodedFile) {
        this.encodedFile = encodedFile;
    }

    public String getDateTime() {
        return dateTime;
    }

    public void setDateTime(String dateTime) {
        this.dateTime = dateTime;
    }

    public String getPlace() {
        return place;
    }

    public void setPlace(String place) {
        this.place = place;
    }
}
