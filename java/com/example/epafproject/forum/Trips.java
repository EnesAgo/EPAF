package com.example.epafproject.forum;

public class Trips {
    String _id;
    String lat;
    String lon;
    String sendFrom;
    String title;
    String encodedImg;
    String description;
    int likes;

    public Trips(String lat, String lon, String sendFrom, String title, String encodedImg, String description, int likes, String _id) {
        this.lat = lat;
        this.lon = lon;
        this.sendFrom = sendFrom;
        this.title = title;
        this.encodedImg = encodedImg;
        this.description = description;
        this.likes = likes;
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

    public String getSendFrom() {
        return sendFrom;
    }

    public void setSendFrom(String sendFrom) {
        this.sendFrom = sendFrom;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getEncodedImg() {
        return encodedImg;
    }

    public void setEncodedImg(String encodedImg) {
        this.encodedImg = encodedImg;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getLikes() {
        return likes;
    }

    public void setLikes(int likes) {
        this.likes = likes;
    }

    public String get_id() {
        return _id;
    }

    public void set_id(String _id) {
        this._id = _id;
    }
}
