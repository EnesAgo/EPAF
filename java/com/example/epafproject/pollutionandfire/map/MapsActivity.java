package com.example.epafproject.pollutionandfire.map;

import androidx.annotation.NonNull;
import androidx.fragment.app.FragmentActivity;

import android.content.Intent;
import android.location.Location;
import android.os.Bundle;
import android.widget.Toast;

import com.example.epafproject.pollutionandfire.MyApplication;
import com.example.epafproject.R;
import com.example.epafproject.pollutionandfire.PollutionAndFire;
import com.google.android.gms.maps.CameraUpdateFactory;
import com.google.android.gms.maps.GoogleMap;
import com.google.android.gms.maps.OnMapReadyCallback;
import com.google.android.gms.maps.SupportMapFragment;
import com.google.android.gms.maps.model.BitmapDescriptorFactory;
import com.google.android.gms.maps.model.LatLng;
import com.google.android.gms.maps.model.Marker;
import com.google.android.gms.maps.model.MarkerOptions;

import java.util.LinkedList;
import java.util.List;

public class MapsActivity extends FragmentActivity implements OnMapReadyCallback {

    private GoogleMap mMap;
    List<Location> savedLocations;
    LinkedList<Marker> locations;
    double mapLt, mapLn;
    Marker marker;
    LatLng latLng1;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_maps);
        // Obtain the SupportMapFragment and get notified when the map is ready to be used.
        SupportMapFragment mapFragment = (SupportMapFragment) getSupportFragmentManager()
                .findFragmentById(R.id.map);
        mapFragment.getMapAsync(this);

        MyApplication myApplication = (MyApplication)getApplicationContext();
        savedLocations = myApplication.getMyLocations();


    }

    /**
     * Manipulates the map once available.
     * This callback is triggered when the map is ready to be used.
     * This is where we can add markers or lines, add listeners or move the camera. In this case,
     * we just add a marker near Sydney, Australia.
     * If Google Play services is not installed on the device, the user will be prompted to install
     * it inside the SupportMapFragment. This method will only be triggered once the user has
     * installed Google Play services and returned to the app.
     */


    @Override
    public void onMapReady(GoogleMap googleMap) {
        mMap = googleMap;

//         Add a marker in Sydney and move the camera
//        LatLng sydney = new LatLng(0, 0);
//        mMap.addMarker(new MarkerOptions().position(sydney).title("Marker in Sydney"));
//        mMap.moveCamera(CameraUpdateFactory.newLatLng(sydney));
//
//        LatLng lastLocationPlaced = sydney;


//        for (Location location: savedLocations) {
//            LatLng latLng = new LatLng(location.getLatitude(), location.getLongitude());
//            MarkerOptions markerOptions = new MarkerOptions();
//            markerOptions.position(latLng);
//            markerOptions.title("Lat" + location.getLatitude() + " Lon:" + location.getLongitude());
//            mMap.addMarker(markerOptions);
//
//            lastLocationPlaced = latLng;
//        }
//
//
//
//
//
//        mMap.animateCamera(CameraUpdateFactory.newLatLngZoom(lastLocationPlaced, 10.0F));

        mMap.setOnMarkerClickListener(new GoogleMap.OnMarkerClickListener() {
            @Override
            public boolean onMarkerClick(@NonNull Marker marker) {

                Integer clicks = (Integer) marker.getTag();


                if (clicks == null){
                    clicks = 0;
                }
                clicks++;

                marker.setTag(clicks);
                Toast.makeText(MapsActivity.this, "Marker " + marker.getTitle() + " was clicked " + marker.getTag(), Toast.LENGTH_SHORT).show();


                return false;
            }
        });




        mMap.setOnMapClickListener(new GoogleMap.OnMapClickListener() {
            @Override
            public void onMapClick(@NonNull LatLng latLng) {
                mapLt = latLng.latitude;
                mapLn = latLng.longitude;

                mMap.clear();

                MarkerOptions markerOptions = new MarkerOptions();
                latLng1 = new LatLng(latLng.latitude, latLng.longitude);

                markerOptions.position(latLng1);
                markerOptions.title("Lat" + latLng.latitude + " Lon:" + latLng.longitude);
                mMap.addMarker(markerOptions);

                Intent intent = new Intent(MapsActivity.this, PollutionAndFire.class);
                Bundle extras = new Bundle();

//                extras.putDouble("Longitude", mapLn);
//                extras.putDouble("Latitude", mapLt);

                extras.putString("Longitude", mapLn + "");
                extras.putString("Latitude", mapLt + "");
                intent.putExtras(extras);
                startActivity(intent);
            }
        });



    }
}