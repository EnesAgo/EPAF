package com.example.epafproject.forum.postsuggestion;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.app.ActivityCompat;
import androidx.core.content.ContextCompat;

import android.Manifest;
import android.app.ActivityOptions;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.graphics.Bitmap;
import android.location.Address;
import android.location.Geocoder;
import android.location.Location;
import android.os.Bundle;
import android.provider.MediaStore;
import android.util.Base64;
import android.view.MenuItem;
import android.view.View;

import com.example.epafproject.Event;
import com.example.epafproject.Forum;
import com.example.epafproject.MainActivity;
import com.example.epafproject.R;
import com.example.epafproject.databinding.ActivityPostSuggestionBinding;
import com.example.epafproject.forum.postsuggestion.OurDataSetTrip;
import com.example.epafproject.forum.map.MapsTrip;


import com.example.epafproject.pollutionandfire.MyApplication;
import com.example.epafproject.pollutionandfire.OurDataSet;
import com.example.epafproject.pollutionandfire.OurRetrofit;
import com.example.epafproject.pollutionandfire.PollutionAndFire;

import com.example.epafproject.waterpurification.WaterPurification;
import com.google.android.material.bottomnavigation.BottomNavigationView;

import java.io.ByteArrayOutputStream;
import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

public class PostSuggestion extends AppCompatActivity {

    private static final int REQUEST_SUBMIT_APPLICATION = 200;
    static final int REQUEST_IMAGE_CAPTURE = 100;
    String encodedFile;

    List<Address> address;
    String place;


    ActivityPostSuggestionBinding binding;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        binding = ActivityPostSuggestionBinding.inflate(getLayoutInflater());
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
                        Intent intentF = new Intent(getApplicationContext(), Forum.class);
                        ActivityOptions optionsF = ActivityOptions.makeCustomAnimation(getApplicationContext(), android.R.anim.slide_in_left, android.R.anim.slide_out_right);

                        startActivityForResult(intentF, REQUEST_SUBMIT_APPLICATION,  optionsF.toBundle());

                        return true;
                }
                return false;
            }
        });


        //camera
        if (ContextCompat.checkSelfPermission(PostSuggestion.this, Manifest.permission.CAMERA) != PackageManager.PERMISSION_GRANTED) {
            ActivityCompat.requestPermissions(PostSuggestion.this, new String[]{
                    Manifest.permission.CAMERA
            }, 100);
        }

        binding.btnOpen.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(MediaStore.ACTION_IMAGE_CAPTURE);
                startActivityForResult(intent, 100);
            }
        });

        //map
        binding.btnNewWayPoint.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent i = new Intent(PostSuggestion.this, MapsTrip.class);
                startActivity(i);
            }
        });



        //submit
        binding.btnSubmit.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                String description = binding.editTextDesc.getText().toString();
                String title = binding.editTextTitle.getText().toString();
                String sendFrom = binding.editTextSendFrom.getText().toString();




                Bundle extras = getIntent().getExtras();
                String lon = extras.getString("LongitudeTrip");
                String lat = extras.getString("LatitudeTrip");


                double mLat = Double.parseDouble(lat);
                double mLon = Double.parseDouble(lon);


                Geocoder geocoder = new Geocoder(PostSuggestion.this);
                try {
                    List<Address> address = geocoder.getFromLocation(mLat, mLon, 1);
                    place = address.get(0).getAddressLine(0);
                } catch (Exception e) {
                }



                Retrofit retrofit = new Retrofit.Builder().baseUrl("https://epafbackend.agoenes.repl.co/").addConverterFactory(GsonConverterFactory.create()).build();

                OurRetforitTrip ourRetforitTrip = retrofit.create(OurRetforitTrip.class);
                OurDataSetTrip ourDataSetTrip = new OurDataSetTrip(lat,lon,description,title,encodedFile,sendFrom, place);
                Call<OurDataSetTrip> call = ourRetforitTrip.PostData(ourDataSetTrip);

                call.enqueue(new Callback<OurDataSetTrip>() {
                    @Override
                    public void onResponse(Call<OurDataSetTrip> call, Response<OurDataSetTrip> response) {
                    }

                    @Override
                    public void onFailure(Call<OurDataSetTrip> call, Throwable t) {
                    }
                });





                Intent i = new Intent(PostSuggestion.this, Forum.class);
                startActivity(i);

            }
        });



    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        if (requestCode == REQUEST_IMAGE_CAPTURE && resultCode == RESULT_OK) {
            Bundle extras = data.getExtras();
            Bitmap captureImage = (Bitmap)extras.get("data");
//            binding.imageView.setImageBitmap(captureImage);


            ByteArrayOutputStream baos = new ByteArrayOutputStream();
//            Bitmap bitmap = BitmapFactory.decodeResource(getResources(), R.drawable.logo);
            captureImage.compress(Bitmap.CompressFormat.PNG, 100, baos);
            byte[] imageBytes = baos.toByteArray();
            encodedFile = Base64.encodeToString(imageBytes, Base64.DEFAULT);


        }


    }

}