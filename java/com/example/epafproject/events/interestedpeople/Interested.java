package com.example.epafproject.events.interestedpeople;

import com.example.epafproject.pollutionandfire.OurDataSet;

import retrofit2.Call;
import retrofit2.http.Body;
import retrofit2.http.POST;

public interface Interested {

    @POST("/interestedPeople")
    Call<InterestedPeople> PostInterested(@Body InterestedPeople interestedPeople);
}
