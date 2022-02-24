package com.example.epafproject.forum.postsuggestion;

import retrofit2.Call;
import retrofit2.http.Body;
import retrofit2.http.POST;

public interface OurRetforitTrip {

    @POST("/Tripsuggestion")
    Call<OurDataSetTrip> PostData(@Body OurDataSetTrip ourDataSetTrip);
}
