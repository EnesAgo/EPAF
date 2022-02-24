package com.example.epafproject.pollutionandfire;

import android.Manifest;
import android.app.ActivityOptions;
import android.app.DatePickerDialog;
import android.app.TimePickerDialog;
import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.content.pm.PackageManager;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.location.Address;
import android.location.Geocoder;
import android.location.Location;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.provider.MediaStore;
import android.text.Editable;
import android.text.InputType;
import android.util.Base64;
import android.util.Log;
import android.view.MenuItem;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.DatePicker;
import android.widget.EditText;
import android.widget.TimePicker;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.app.ActivityCompat;
import androidx.core.content.ContextCompat;

import com.android.volley.AuthFailureError;
import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.StringRequest;
import com.android.volley.toolbox.Volley;
import com.example.epafproject.Event;
import com.example.epafproject.Forum;
import com.example.epafproject.MainActivity;
import com.example.epafproject.R;

import com.example.epafproject.forum.TripsAdapter;
import com.example.epafproject.pollutionandfire.OurDataSet;
import com.example.epafproject.pollutionandfire.OurRetrofit;
import com.example.epafproject.test.MyActivity;
import com.example.epafproject.waterpurification.WaterPurification;
import com.example.epafproject.databinding.ActivityPollutionandfireBinding;
import com.example.epafproject.pollutionandfire.map.MapsActivity;
import com.google.android.gms.location.FusedLocationProviderClient;
import com.google.android.gms.location.LocationCallback;
import com.google.android.gms.location.LocationRequest;
import com.google.android.gms.location.LocationResult;
import com.google.android.gms.location.LocationServices;
import com.google.android.gms.tasks.OnSuccessListener;
import com.google.android.material.bottomnavigation.BottomNavigationView;


import org.apache.http.client.HttpClient;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.StringWriter;
import java.net.MalformedURLException;
import java.net.URL;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.net.ssl.HttpsURLConnection;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

public class PollutionAndFire extends AppCompatActivity {

    private static final int REQUEST_SUBMIT_APPLICATION = 200;
    private static final int PERMISSIONS_FINE_LOCATION = 99;
    static final int REQUEST_IMAGE_CAPTURE = 100;
    private static final String POST_API_URL = "https://epafbackend.agoenes.repl.co/api/report";

    ActivityPollutionandfireBinding binding;

    Location currentLocation;

    List<Location> savedLocations;

    String encodedFile, dateTimeSet, place;


    Calendar calendar;


    LocationCallback locationCallback;

    FusedLocationProviderClient fusedLocationProviderClient;

    boolean updateOn = false;

    private static final int DEFAULT_UPDATE_INTERFAL = 30;
    private static final int FAST_UPDATE_INTERFAL = 5;


    LocationRequest locationRequest;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        binding = ActivityPollutionandfireBinding.inflate(getLayoutInflater());
        setContentView(binding.getRoot());

        final SharedPreferences sharedPrefC1R6 = PollutionAndFire.this.getPreferences(Context.MODE_PRIVATE);


        BottomNavigationView bottomNavigationView = findViewById(R.id.bottom_navigation);

        bottomNavigationView.setSelectedItemId(R.id.polutfire);


        bottomNavigationView.setOnNavigationItemSelectedListener(new BottomNavigationView.OnNavigationItemSelectedListener() {
            @Override
            public boolean onNavigationItemSelected(@NonNull MenuItem item) {

                switch (item.getItemId()) {
                    case R.id.polutfire:

                        return true;
                    case R.id.home:
                        Intent intentH = new Intent(getApplicationContext(), MainActivity.class);
                        ActivityOptions optionsH = ActivityOptions.makeCustomAnimation(getApplicationContext(), android.R.anim.slide_in_left, android.R.anim.slide_out_right);

                        startActivityForResult(intentH, REQUEST_SUBMIT_APPLICATION, optionsH.toBundle());
                        return true;

//                    case R.id.waterPurification:
//                        Intent intentPF = new Intent(getApplicationContext(), WaterPurification.class);
//                        ActivityOptions optionsPF = ActivityOptions.makeCustomAnimation(getApplicationContext(), android.R.anim.slide_in_left, android.R.anim.slide_out_right);
//
//                        startActivityForResult(intentPF, REQUEST_SUBMIT_APPLICATION, optionsPF.toBundle());
//                        return true;

                    case R.id.event:
                        Intent intentE = new Intent(getApplicationContext(), Event.class);
                        ActivityOptions optionsE = ActivityOptions.makeCustomAnimation(getApplicationContext(), android.R.anim.slide_in_left, android.R.anim.slide_out_right);

                        startActivityForResult(intentE, REQUEST_SUBMIT_APPLICATION, optionsE.toBundle());

                        return true;

                    case R.id.forum:
                        Intent intentF = new Intent(getApplicationContext(), Forum.class);
                        ActivityOptions optionsF = ActivityOptions.makeCustomAnimation(getApplicationContext(), android.R.anim.slide_in_left, android.R.anim.slide_out_right);

                        startActivityForResult(intentF, REQUEST_SUBMIT_APPLICATION, optionsF.toBundle());
                        return true;


                }
                return false;
            }
        });


        // DISCRIPTION INPUT
        binding.editText.setInputType(InputType.TYPE_CLASS_TEXT);
        String disInfo = binding.editText.getText().toString();



        //button
        binding.btnSubmit.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                String url = "https://epafbackend.agoenes.repl.co";
//                RequestQueue requestQueue = Volley.newRequestQueue(PollutionAndFire.this);
//                StringRequest stringRequest = new StringRequest(Request.Method.POST, url, response -> Toast.makeText(PollutionAndFire.this, "Success", Toast.LENGTH_SHORT).show(),
//                        error -> Toast.makeText(PollutionAndFire.this, "Error", Toast.LENGTH_SHORT).show()){
//                    @Override
//                    protected Map<String, String> getParams(){
//                        Map<String, String> params = new HashMap<String, String>();
////                        params.put("coordinates", "312");
//                        params.put("pollution", binding.editText.getText().toString());
////                        params.put("coordinates1", "312");
//                        params.put("pollution2", binding.editText.getText().toString());
//
//                        return params;
//                    }
//
//                    @Override
//                    public Map<String, String> getHeaders() throws AuthFailureError{
//                        Map<String, String> params = new HashMap<String, String>();
//                        params.put("Content-Type", "application/json");
//
//                        return params;
//                    }
//                };
//                requestQueue.add(stringRequest);

                String description = binding.editText.getText().toString();

//                int lat = 1;
//                int lon = 1;

                Bundle extras = getIntent().getExtras();
                String lon = extras.getString("Longitude");
                String lat = extras.getString("Latitude");

                String dateTime = binding.editDateTime.getText().toString();

                Retrofit retrofit = new Retrofit.Builder().baseUrl("https://epafbackend.agoenes.repl.co/").addConverterFactory(GsonConverterFactory.create()).build();

                OurRetrofit ourRetrofit = retrofit.create(OurRetrofit.class);
                OurDataSet ourDataSet = new OurDataSet(lat, lon, description, encodedFile, dateTime, place);
                Call<OurDataSet> call = ourRetrofit.PostData(ourDataSet);

                call.enqueue(new Callback<OurDataSet>() {
                        @Override
                        public void onResponse(Call<OurDataSet> call, Response<OurDataSet> response) {
                        }

                        @Override
                        public void onFailure(Call<OurDataSet> call, Throwable t) {
                        }
                });




            }
        });


        //date time
        binding.btnDatetime.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                showDateTimeDialog(binding.editDateTime);
            }
        });


        locationRequest = new LocationRequest();
        locationRequest.setInterval(1000 * DEFAULT_UPDATE_INTERFAL);
        locationRequest.setFastestInterval(1000 * FAST_UPDATE_INTERFAL);

        locationRequest.setPriority(LocationRequest.PRIORITY_BALANCED_POWER_ACCURACY);

        locationCallback = new LocationCallback() {
            @Override
            public void onLocationResult(@NonNull LocationResult locationResult) {
                super.onLocationResult(locationResult);
                updateUIValues(locationResult.getLastLocation());
            }
        };

        binding.btnNewWayPoint.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                MyApplication myApplication = (MyApplication) getApplicationContext();
                savedLocations = myApplication.getMyLocations();
                savedLocations.add(currentLocation);
            }
        });


        binding.btnShowMap.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent i = new Intent(PollutionAndFire.this, MapsActivity.class);
                startActivity(i);
            }
        });



//        binding.swLocationsupdates.setOnClickListener(new View.OnClickListener() {
//            @Override
//            public void onClick(View v) {
//                if (binding.swLocationsupdates.isChecked()) {
//                    startLocationUpdates();
//                } else {
//                    stopLocationUpdates();
//                }
//            }
//        });


        updateGPS();


        if (ContextCompat.checkSelfPermission(PollutionAndFire.this, Manifest.permission.CAMERA) != PackageManager.PERMISSION_GRANTED) {
            ActivityCompat.requestPermissions(PollutionAndFire.this, new String[]{
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



    }




    private void stopLocationUpdates() {
//        binding.tvUpdates.setText("Location is NOT being tracked");
//        binding.tvLat.setText("Not tracking");
//        binding.tvLon.setText("Not tracking");
//        binding.tvSpeed.setText("Not tracking location");
        binding.tvAddress.setText("Not tracking location");
//        binding.tvAccuracy.setText("Not tracking location");

//        binding.tvSensor.setText("Not tracking location");

        fusedLocationProviderClient.removeLocationUpdates(locationCallback);
    }

    private void startLocationUpdates() {
//        binding.tvUpdates.setText("Location is being tracked");

//        fusedLocationProviderClient.requestLocationUpdates(locationRequest, locationCallback, null);
        updateGPS();
    }

    @Override
    public void onRequestPermissionsResult(int requestCode, @NonNull String[] permissions, @NonNull int[] grantResults) {
        super.onRequestPermissionsResult(requestCode, permissions, grantResults);

        switch (requestCode) {
            case PERMISSIONS_FINE_LOCATION:
                if (grantResults[0] == PackageManager.PERMISSION_GRANTED) {
                    updateGPS();
                } else {
                    Toast.makeText(this, "This application requires permission", Toast.LENGTH_SHORT).show();
                    finish();
                }
                break;
        }
    }

    private void updateGPS() {
        fusedLocationProviderClient = LocationServices.getFusedLocationProviderClient(PollutionAndFire.this);

        if (ActivityCompat.checkSelfPermission(this, Manifest.permission.ACCESS_FINE_LOCATION) == PackageManager.PERMISSION_GRANTED) {
            fusedLocationProviderClient.getLastLocation().addOnSuccessListener(this, new OnSuccessListener<Location>() {
                @Override
                public void onSuccess(@NonNull Location location) {
                    updateUIValues(location);
                    currentLocation = location;
                }
            });
        } else {
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
                requestPermissions(new String[]{Manifest.permission.ACCESS_FINE_LOCATION}, PERMISSIONS_FINE_LOCATION);
            }
        }
    }

    private void updateUIValues(Location location) {
//        binding.tvLat.setText(String.valueOf(location.getLatitude()));
//        binding.tvLon.setText(String.valueOf(location.getLongitude()));

        Geocoder geocoder = new Geocoder(PollutionAndFire.this);
        try {
            List<Address> address = geocoder.getFromLocation(location.getLatitude(), location.getLongitude(), 1);
            place = address.get(0).getAddressLine(0);
            binding.tvAddress.setText(place);
        } catch (Exception e) {
            binding.tvAddress.setText("Didn't work");
        }

        MyApplication myApplication = (MyApplication) getApplicationContext();
        savedLocations = myApplication.getMyLocations();

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

    private void showDateTimeDialog(final EditText date_time_in) {
        calendar=Calendar.getInstance();
        DatePickerDialog.OnDateSetListener dateSetListener=new DatePickerDialog.OnDateSetListener() {
            @Override
            public void onDateSet(DatePicker view, int year, int month, int dayOfMonth) {
                calendar.set(Calendar.YEAR,year);
                calendar.set(Calendar.MONTH,month);
                calendar.set(Calendar.DAY_OF_MONTH,dayOfMonth);

                TimePickerDialog.OnTimeSetListener timeSetListener=new TimePickerDialog.OnTimeSetListener() {
                    @Override
                    public void onTimeSet(TimePicker view, int hourOfDay, int minute) {
                        calendar.set(Calendar.HOUR_OF_DAY,hourOfDay);
                        calendar.set(Calendar.MINUTE,minute);

                        SimpleDateFormat simpleDateFormat=new SimpleDateFormat("dd.MM.yyyy - HH:mm");

                        dateTimeSet = simpleDateFormat.format(calendar.getTime());
                        date_time_in.setText(dateTimeSet);
                    }
                };

                new TimePickerDialog(PollutionAndFire.this,timeSetListener,calendar.get(Calendar.HOUR_OF_DAY),calendar.get(Calendar.MINUTE),false).show();
            }
        };

        new DatePickerDialog(PollutionAndFire.this,dateSetListener,calendar.get(Calendar.YEAR),calendar.get(Calendar.MONTH),calendar.get(Calendar.DAY_OF_MONTH)).show();

    }
}
