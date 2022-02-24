package com.example.epafproject.forum;


import java.util.List;

import retrofit2.Call;
import retrofit2.http.GET;

public interface ApiInterfaceTrip {
    @GET("/Tripsuggestion")
    Call<List<Trips>> getPosts();
}
