package com.example.epafproject.events;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.app.ActivityCompat;

import android.Manifest;
import android.app.ActivityOptions;
import android.content.Context;
import android.content.Intent;

import android.content.pm.PackageManager;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.location.Address;
import android.location.Geocoder;
import android.location.Location;
import android.os.Build;
import android.os.Bundle;
import android.util.Base64;
import android.view.MenuItem;
import android.view.View;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.TextView;
import android.widget.Toast;

import com.example.epafproject.Event;
import com.example.epafproject.Forum;
import com.example.epafproject.MainActivity;
import com.example.epafproject.R;
import com.example.epafproject.databinding.ActivityEventsBinding;

import com.example.epafproject.events.map.MapsEvent;
import com.example.epafproject.pollutionandfire.PollutionAndFire;
import com.example.epafproject.waterpurification.WaterPurification;
import com.google.android.material.bottomnavigation.BottomNavigationView;

import java.io.IOException;
import java.util.List;


public class EventsActivity extends AppCompatActivity {
    ActivityEventsBinding binding;

    private static final int REQUEST_SUBMIT_APPLICATION = 200;

    Context mContext;

    TextView locations, address, dateTime, intNumber;

    TextView latlon_tv;
    String mLat, mLon, mDesc, mImage, mDateTime;

    String adress;
    int mInterested;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        binding = ActivityEventsBinding.inflate(getLayoutInflater());
        setContentView(binding.getRoot());

        ImageView imageEvent = findViewById(R.id.imgEvent);
//        latlon_tv = findViewById(R.id.LatLon);
        TextView desc_tv = findViewById(R.id.Desc);


        BottomNavigationView bottomNavigationView = findViewById(R.id.bottom_navigation);

        bottomNavigationView.setSelectedItemId(R.id.event);

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
                        Intent intentF = new Intent(getApplicationContext(), Forum.class);
                        ActivityOptions optionsF = ActivityOptions.makeCustomAnimation(getApplicationContext(), android.R.anim.slide_in_left, android.R.anim.slide_out_right);

                        startActivityForResult(intentF, REQUEST_SUBMIT_APPLICATION,  optionsF.toBundle());
                        return true;


                }
                return false;
            }
        });


        //need
        locations = findViewById(R.id.location);
        dateTime = findViewById(R.id.txtDateTime);
        intNumber = findViewById(R.id.intNumber);

        Button btn_coords = findViewById(R.id.btnCoords);


        Bundle bundle = getIntent().getExtras();

        mLat = bundle.getString("lat");
        mLon = bundle.getString("lon");
        mDesc = bundle.getString("desc");
        mImage = bundle.getString("encodedImg");
        mDateTime = bundle.getString("dateTime");

        mInterested = bundle.getInt("interestedPeople");
        intNumber.setText(String.valueOf(mInterested));


        double lat = Double.parseDouble(mLat);
        double lon = Double.parseDouble(mLon);

//        latlon_tv.setText("Latitude: " + mLat +"\n"+ "Longitude: " + mLon);
        desc_tv.setText(mDesc);
        dateTime.setText(mDateTime);



        btn_coords.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(EventsActivity.this, MapsEvent.class);
                Bundle bundle = new Bundle();
                bundle.putDouble("latD" , lat);
                bundle.putDouble("lonD" , lon);
                intent.putExtras(bundle);

                startActivity(intent);
            }
        });

        Geocoder geocoder = new Geocoder(EventsActivity.this);
        try {
            List<Address> addressList = geocoder.getFromLocation(lat, lon, 1);
            if (addressList != null && addressList.size() > 0) {
                // Help here to get only the street name
                adress = addressList.get(0).getAddressLine(0);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }

        locations.setText(adress);




        //image
        byte[] imageBytes = Base64.decode(mImage, Base64.DEFAULT);
        Bitmap decodedImage = BitmapFactory.decodeByteArray(imageBytes, 0, imageBytes.length);
        imageEvent.setImageBitmap(decodedImage);





    }
}