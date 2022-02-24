package com.example.epafproject.forum.map;

import androidx.annotation.NonNull;
import androidx.fragment.app.FragmentActivity;

import android.content.Intent;
import android.os.Bundle;

import com.example.epafproject.R;
import com.example.epafproject.forum.postsuggestion.PostSuggestion;
import com.google.android.gms.maps.GoogleMap;
import com.google.android.gms.maps.OnMapReadyCallback;
import com.google.android.gms.maps.SupportMapFragment;
import com.google.android.gms.maps.model.LatLng;
import com.google.android.gms.maps.model.MarkerOptions;

public class MapsTrip extends FragmentActivity implements OnMapReadyCallback {

    private GoogleMap mMap;


    double mapLt, mapLn;
    LatLng latLng1;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_maps_trip);
        // Obtain the SupportMapFragment and get notified when the map is ready to be used.
        SupportMapFragment mapFragment = (SupportMapFragment) getSupportFragmentManager()
                .findFragmentById(R.id.map);
        mapFragment.getMapAsync(this);
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

        // Add a marker in Sydney and move the camera
//        LatLng sydney = new LatLng(-34, 151);
//        mMap.addMarker(new MarkerOptions().position(sydney).title("Marker in Sydney"));
//        mMap.moveCamera(CameraUpdateFactory.newLatLng(sydney));


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

                Intent intent = new Intent(MapsTrip.this, PostSuggestion.class);
                Bundle extras = new Bundle();

//                extras.putDouble("Longitude", mapLn);
//                extras.putDouble("Latitude", mapLt);

                extras.putString("LongitudeTrip", mapLn + "");
                extras.putString("LatitudeTrip", mapLt + "");
                intent.putExtras(extras);
                startActivity(intent);
            }
        });
    }
}