package com.example.epafproject.pollutionandfire;


import retrofit2.Call;
import retrofit2.http.Body;
import retrofit2.http.POST;

public interface OurRetrofit {

    @POST("/post")
    Call<com.example.epafproject.pollutionandfire.OurDataSet> PostData(@Body OurDataSet ourDataSet);

}
