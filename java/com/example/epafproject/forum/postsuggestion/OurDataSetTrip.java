package com.example.epafproject.forum.postsuggestion;

public class OurDataSetTrip {
    String lat;
    String lon;
    String title;
    String description;
    String encodedFile;
    String sendFrom;
    String place;

    public OurDataSetTrip(String lat, String lon, String description, String title, String encodedFile, String sendFrom, String place) {
        this.lat = lat;
        this.title = title;
        this.lon = lon;
        this.description = description;
        this.encodedFile = encodedFile;
        this.sendFrom = sendFrom;
        this.place = place;
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

    public String getEncodedFile() {
        return encodedFile;
    }

    public void setEncodedFile(String encodedFile) {
        this.encodedFile = encodedFile;
    }

    public String getSendFrom() {
        return sendFrom;
    }

    public void setSendFrom(String sendFrom) {
        this.sendFrom = sendFrom;
    }

}
