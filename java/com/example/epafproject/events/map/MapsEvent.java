package com.example.epafproject.events.map;

import androidx.fragment.app.FragmentActivity;

import android.os.Bundle;

import com.example.epafproject.R;
import com.google.android.gms.maps.CameraUpdateFactory;
import com.google.android.gms.maps.GoogleMap;
import com.google.android.gms.maps.OnMapReadyCallback;
import com.google.android.gms.maps.SupportMapFragment;
import com.google.android.gms.maps.model.LatLng;
import com.google.android.gms.maps.model.MarkerOptions;

public class MapsEvent extends FragmentActivity implements OnMapReadyCallback {

    private GoogleMap mMap;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_maps_event);
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

        Bundle bundle = getIntent().getExtras();

        double mLat = bundle.getDouble("latD");
        double mLon = bundle.getDouble("lonD");


//        try{
//            int lat = Integer.parseInt(mLat);
//            int lon = Integer.parseInt(mLon);
//            LatLng latLng = new LatLng(lat, lon);
//            mMap.addMarker(new MarkerOptions().position(latLng).title("Marker on Pollution Report"));
//        }
//        catch (NumberFormatException ex){
//            ex.printStackTrace();
//        }

        try{

            MarkerOptions markerOptions = new MarkerOptions();
            LatLng latLng = new LatLng(mLat, mLon);

            markerOptions.position(latLng);
            markerOptions.title("Lat" + latLng.latitude + " Lon:" + latLng.longitude);
            mMap.addMarker(markerOptions);
            mMap.animateCamera(CameraUpdateFactory.newLatLngZoom(latLng, 10.0F));

        }catch (NumberFormatException ex){
            ex.printStackTrace();
        }



    }
}