package com.example.epafproject.facts;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;

import android.app.ActivityOptions;
import android.content.Intent;
import android.os.Bundle;
import android.view.MenuItem;

import com.bumptech.glide.Glide;
import com.example.epafproject.Event;
import com.example.epafproject.Forum;
import com.example.epafproject.waterpurification.WaterPurification;
import com.example.epafproject.pollutionandfire.PollutionAndFire;
import com.example.epafproject.MainActivity;
import com.example.epafproject.R;
import com.example.epafproject.Utils;
import com.example.epafproject.databinding.ActivityFactsBinding;
import com.google.android.material.bottomnavigation.BottomNavigationView;

public class FactsActivity extends AppCompatActivity {

    public static final String FACTS_ID_KEY = "factId";
    private static final int REQUEST_SUBMIT_APPLICATION = 200;


    ActivityFactsBinding binding;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        binding = ActivityFactsBinding.inflate(getLayoutInflater());
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

        Intent intent = getIntent();
        if (null != intent){
            int factId = intent.getIntExtra(FACTS_ID_KEY, -1);
            if (factId != -1){
                Facts incomingFact = Utils.getInstance().getFactById(factId);
                if (null != incomingFact){
                    setData(incomingFact);
                }
            }
        }

    }

    private void setData(Facts fact) {
        binding.txtFactName.setText(fact.getName());
        binding.txtAuthor.setText(fact.getAuthor());
        binding.txtDescription.setText(fact.getLongDesc());
        Glide.with(this).asBitmap().load(fact.getImageUrl()).into(binding.imgFact);
    }

}