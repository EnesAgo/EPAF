package com.example.epafproject.events;


import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.location.Address;
import android.location.Geocoder;
import android.os.Bundle;
import android.util.Base64;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.TextView;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.cardview.widget.CardView;
import androidx.recyclerview.widget.RecyclerView;

import com.example.epafproject.Event;
import com.example.epafproject.R;
import com.example.epafproject.events.interestedpeople.Interested;
import com.example.epafproject.events.interestedpeople.InterestedPeople;
import com.example.epafproject.pollutionandfire.OurDataSet;
import com.example.epafproject.pollutionandfire.OurRetrofit;


import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;


public class PostsAdapter extends RecyclerView.Adapter<com.example.epafproject.events.PostsAdapter.ViewHolder>{
    private List<com.example.epafproject.events.Posts> postsList;

    Context mContext;

    String adress;

    Bitmap decodedImage;

    private ArrayList<Posts> events = new ArrayList<>();

    public PostsAdapter(List<Posts> postsList, Context mContext) {
        this.postsList = postsList;
        this.mContext = mContext;
    }


    @NonNull
    @Override
    public com.example.epafproject.events.PostsAdapter.ViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.list_item_events, parent, false);
        return new ViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull com.example.epafproject.events.PostsAdapter.ViewHolder holder, int position) {

//        holder.tvLat.setText(postsList.get(position).getLat());
//        holder.tvLon.setText(postsList.get(position).getLon());
        holder.tvDesc.setText(postsList.get(position).getDescription());

        holder.tvDateTime.setText(postsList.get(position).getDateTime());


//        decode image
        byte[] imageBytes = Base64.decode(postsList.get(position).getEncodedImg(), Base64.DEFAULT);
        decodedImage = BitmapFactory.decodeByteArray(imageBytes, 0, imageBytes.length);
        holder.tvImage.setImageBitmap(decodedImage);



        holder.btnInterested.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Retrofit retrofit = new Retrofit.Builder().baseUrl("https://epafbackend.agoenes.repl.co/").addConverterFactory(GsonConverterFactory.create()).build();

//                int increment = postsList.get(position).getInterestedPeople();
//                int posting = increment + 1;

                String id = postsList.get(position).get_id();

                Interested interested = retrofit.create(Interested.class);
                InterestedPeople interestedPeople = new InterestedPeople(id);
                Call<InterestedPeople> call = interested.PostInterested(interestedPeople);


                call.enqueue(new Callback<InterestedPeople>() {
                    @Override
                    public void onResponse(Call<InterestedPeople> call, Response<InterestedPeople> response) {
                    }

                    @Override
                    public void onFailure(Call<InterestedPeople> call, Throwable t) {
                    }
                });

                // to be continued
//                SharedPreferences saved = "✔ Interested";
//                holder.btnInterested.setText("✔ Interested");
            }
        });

        holder.parent.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(mContext , EventsActivity.class);

                Bundle bundle = new Bundle();
                bundle.putString("lat" , postsList.get(position).getLat());
                bundle.putString("lon" , postsList.get(position).getLon());
                bundle.putString("desc" , postsList.get(position).getDescription());
                bundle.putDouble("idNo" , postsList.get(position).getIdNo());
                bundle.putString("encodedImg" , postsList.get(position).getEncodedImg());
                bundle.putString("dateTime" , postsList.get(position).getDateTime());

                bundle.putInt("interestedPeople", postsList.get(position).getInterestedPeople());

                intent.putExtras(bundle);

                mContext.startActivity(intent);
            }
        });






        //address

        double lat = Double.parseDouble(postsList.get(position).getLat());
        double lon = Double.parseDouble(postsList.get(position).getLon());

        Geocoder geocoder = new Geocoder(mContext);
        try {
            List<Address> addressList = geocoder.getFromLocation(lat, lon, 1);
            if (addressList != null && addressList.size() > 0) {
                // Help here to get only the street name
                adress = addressList.get(0).getAddressLine(0);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }

        holder.tvAddress.setText(adress);


    }

    @Override
    public int getItemCount() {
        return postsList.size();
    }


    public Posts getItem(int position) {
        return postsList.get(position);
    }

     class ViewHolder  extends RecyclerView.ViewHolder{

        ImageView tvImage;
        TextView tvLat, tvLon, tvDesc, tvAddress, tvDateTime;
        Button btnInterested;
        private CardView parent;

        public ViewHolder(@NonNull View itemView) {
            super(itemView);

            parent = itemView.findViewById(R.id.parent);

            tvDateTime = itemView.findViewById(R.id.txtDateTime);

            btnInterested = itemView.findViewById(R.id.btnInterested);
//            tvLat = itemView.findViewById(R.id.txtLat);
//            tvLon = itemView.findViewById(R.id.txtLon);
            tvDesc = itemView.findViewById(R.id.txtDesc);
            tvImage = itemView.findViewById(R.id.imgEvent);

            tvAddress = itemView.findViewById(R.id.txtAddress);
        }
    }
}
