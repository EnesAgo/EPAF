package com.example.epafproject.forum;

import com.example.epafproject.events.ApiInterface;

import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

public class RetrofitClientTrip {
    private static final String BASE_URL = "https://epafbackend.agoenes.repl.co/";
    private static Retrofit retrofit = null;

    public static com.example.epafproject.forum.ApiInterfaceTrip getRerfotitClient(){
        if(retrofit == null){
            retrofit = new Retrofit.Builder().baseUrl(BASE_URL).addConverterFactory(GsonConverterFactory.create()).build();
        }
        return retrofit.create(ApiInterfaceTrip.class);
    }
}
