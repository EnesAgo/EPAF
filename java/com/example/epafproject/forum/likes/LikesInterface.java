package com.example.epafproject.forum.likes;


import retrofit2.Call;
import retrofit2.http.Body;
import retrofit2.http.POST;

public interface LikesInterface {
    @POST("/like")
    Call<Likes> PostLikes(@Body Likes likes);
}
