package com.example.epafproject;

import android.app.ActivityOptions;
import android.content.Intent;
import android.os.Bundle;
import android.view.MenuItem;
import android.view.View;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.GridLayoutManager;

import com.example.epafproject.databinding.ActivityMainBinding;
import com.example.epafproject.facts.FactsRecViewAdapter;

import com.example.epafproject.pollutionandfire.PollutionAndFire;

import com.example.epafproject.test.MyActivity;
import com.example.epafproject.waterpurification.WaterPurification;
import com.google.android.material.bottomnavigation.BottomNavigationView;


public class MainActivity extends AppCompatActivity {

    ActivityMainBinding binding;

    private static final int REQUEST_SUBMIT_APPLICATION = 200;

    private FactsRecViewAdapter adapter;



    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        binding = ActivityMainBinding.inflate(getLayoutInflater());
        setContentView(binding.getRoot());


        BottomNavigationView bottomNavigationView = findViewById(R.id.bottom_navigation);

        bottomNavigationView.setSelectedItemId(R.id.home);

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
                        Intent intentF = new Intent(getApplicationContext(), Forum.class);
                        ActivityOptions optionsF = ActivityOptions.makeCustomAnimation(getApplicationContext(), android.R.anim.slide_in_left, android.R.anim.slide_out_right);

                        startActivityForResult(intentF, REQUEST_SUBMIT_APPLICATION,  optionsF.toBundle());
                        return true;


                }
                return false;
            }
        });

        binding.button.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intentAB = new Intent(getApplicationContext(), AboutUs.class);
                ActivityOptions optionsAB = ActivityOptions.makeCustomAnimation(getApplicationContext(), android.R.anim.slide_in_left, android.R.anim.slide_out_right);

                startActivityForResult(intentAB, REQUEST_SUBMIT_APPLICATION,  optionsAB.toBundle());
            }
        });

        adapter = new FactsRecViewAdapter(this);

        binding.factRecView.setAdapter(adapter);
        binding.factRecView.setLayoutManager(new GridLayoutManager(this,4));

        adapter.setFacts(Utils.getInstance().getAllFacts());



        binding.layoutFeatures1.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(getApplicationContext(), PollutionAndFire.class);

                startActivityForResult(intent, REQUEST_SUBMIT_APPLICATION);

            }
        });

        binding.layoutFeatures2.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(getApplicationContext(), WaterPurification.class);

                startActivityForResult(intent, REQUEST_SUBMIT_APPLICATION);

            }
        });







    }




}