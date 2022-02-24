package com.example.epafproject;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.GridLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.app.ActivityOptions;
import android.content.Intent;
import android.os.Bundle;
import android.view.MenuItem;
import android.view.View;
import android.widget.ProgressBar;
import android.widget.Toast;

import com.example.epafproject.databinding.ActivityForumBinding;

import com.example.epafproject.forum.RetrofitClientTrip;
import com.example.epafproject.forum.Trips;
import com.example.epafproject.forum.TripsAdapter;
import com.example.epafproject.forum.postsuggestion.PostSuggestion;
import com.example.epafproject.pollutionandfire.PollutionAndFire;
import com.example.epafproject.waterpurification.WaterPurification;
import com.google.android.material.bottomnavigation.BottomNavigationView;

import java.util.ArrayList;
import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class Forum extends AppCompatActivity {


    static final int REQUEST_IMAGE_CAPTURE = 100;

    RecyclerView recyclerView;

    ProgressBar progressBar;

    TripsAdapter adapter;
    List<Trips> postsTrip = new ArrayList<>();


    ActivityForumBinding binding;

    private static final int REQUEST_SUBMIT_APPLICATION = 200;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        binding = ActivityForumBinding.inflate(getLayoutInflater());
        setContentView(binding.getRoot());



        BottomNavigationView bottomNavigationView = findViewById(R.id.bottom_navigation);

        bottomNavigationView.setSelectedItemId(R.id.forum);

        bottomNavigationView.setOnNavigationItemSelectedListener(new BottomNavigationView.OnNavigationItemSelectedListener() {
            @Override
            public boolean onNavigationItemSelected(@NonNull MenuItem item) {

                switch (item.getItemId()){
                    case R.id.polutfire:
                        Intent intentPF = new Intent(getApplicationContext(), PollutionAndFire.class);
                        ActivityOptions optionsPF = ActivityOptions.makeCustomAnimation(getApplicationContext(), android.R.anim.slide_in_left, android.R.anim.slide_out_right);

                        startActivityForResult(intentPF, REQUEST_SUBMIT_APPLICATION,  optionsPF.toBundle());

                        return true;
                    case R.id.home:
                        Intent intentH = new Intent(getApplicationContext(), MainActivity.class);
                        ActivityOptions optionsH = ActivityOptions.makeCustomAnimation(getApplicationContext(), android.R.anim.slide_in_left, android.R.anim.slide_out_right);

                        startActivityForResult(intentH, REQUEST_SUBMIT_APPLICATION,  optionsH.toBundle());
                        return true;
//                    case R.id.waterPurification:
//                        Intent intentW = new Intent(getApplicationContext(), WaterPurification.class);
//                        ActivityOptions optionsW = ActivityOptions.makeCustomAnimation(getApplicationContext(), android.R.anim.slide_in_left, android.R.anim.slide_out_right);
//
//                        startActivityForResult(intentW, REQUEST_SUBMIT_APPLICATION,  optionsW.toBundle());
//                        return true;
                    case R.id.event:
                        Intent intentE = new Intent(getApplicationContext(), Event.class);
                        ActivityOptions optionsE = ActivityOptions.makeCustomAnimation(getApplicationContext(), android.R.anim.slide_in_left, android.R.anim.slide_out_right);

                        startActivityForResult(intentE, REQUEST_SUBMIT_APPLICATION,  optionsE.toBundle());

                        return true;

                    case R.id.forum:

                        return true;
                }
                return false;
            }
        });

        binding.btnTrip.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent i = new Intent(Forum.this, PostSuggestion.class);
                startActivity(i);
            }
        });




        recyclerView = findViewById(R.id.recyclerviewForum);
        progressBar = findViewById(R.id.progressBar);
        recyclerView.setLayoutManager(new GridLayoutManager(this,1));
        adapter = new TripsAdapter(postsTrip, this);
        recyclerView.setAdapter(adapter);

        adapter.notifyDataSetChanged();

        fetchPosts();
    }

    private void fetchPosts() {
        progressBar.setVisibility(View.VISIBLE);
        RetrofitClientTrip.getRerfotitClient().getPosts().enqueue(new Callback<List<Trips>>() {
            @Override
            public void onResponse(Call<List<Trips>> call, Response<List<Trips>> response) {
                if(response.isSuccessful() && response.body() != null){
                    postsTrip.addAll(response.body());
                    adapter.notifyDataSetChanged();
                    progressBar.setVisibility(View.GONE);
                }
            }

            @Override
            public void onFailure(Call<List<Trips>> call, Throwable t) {
                progressBar.setVisibility(View.GONE);
                Toast.makeText(Forum.this, "Error", Toast.LENGTH_SHORT).show();
            }
        });
    }








}