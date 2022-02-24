package com.example.epafproject.waterpurification;

import android.app.ActivityOptions;
import android.content.BroadcastReceiver;
import android.content.Intent;
import android.media.Ringtone;
import android.os.Bundle;
import android.view.MenuItem;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;

import com.example.epafproject.Event;
import com.example.epafproject.Forum;
import com.example.epafproject.MainActivity;
import com.example.epafproject.R;
import com.example.epafproject.databinding.ActivityWaterpurificationBinding;
import com.example.epafproject.pollutionandfire.PollutionAndFire;
import com.google.android.material.bottomnavigation.BottomNavigationView;

public class WaterPurification extends AppCompatActivity {

    private static final String TAG = "BatteryActivity:";
    private static final int REQUEST_SUBMIT_APPLICATION = 200;
    private static final String CHANNEL_ID = "BatteryActivity";

    ActivityWaterpurificationBinding binding;

    private Ringtone ringtone;

    private BroadcastReceiver batteryBroadcast;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        binding = ActivityWaterpurificationBinding.inflate(getLayoutInflater());
        setContentView(binding.getRoot());

        BottomNavigationView bottomNavigationView = findViewById(R.id.bottom_navigation);

//        bottomNavigationView.setSelectedItemId(R.id.waterPurification);

        bottomNavigationView.setOnNavigationItemSelectedListener(new BottomNavigationView.OnNavigationItemSelectedListener() {
            @Override
            public boolean onNavigationItemSelected(@NonNull MenuItem item) {

                switch (item.getItemId()) {
                    case R.id.polutfire:
                        Intent intentW = new Intent(getApplicationContext(), PollutionAndFire.class);
                        ActivityOptions optionsW = ActivityOptions.makeCustomAnimation(getApplicationContext(), android.R.anim.slide_in_left, android.R.anim.slide_out_right);
                        startActivityForResult(intentW, REQUEST_SUBMIT_APPLICATION, optionsW.toBundle());
                        return true;
                    case R.id.home:
                        Intent intentH = new Intent(getApplicationContext(), MainActivity.class);
                        ActivityOptions optionsH = ActivityOptions.makeCustomAnimation(getApplicationContext(), android.R.anim.slide_in_left, android.R.anim.slide_out_right);
                        startActivityForResult(intentH, REQUEST_SUBMIT_APPLICATION, optionsH.toBundle());
                        return true;

//                    case R.id.waterPurification:
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


    }
}