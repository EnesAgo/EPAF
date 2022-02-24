package com.example.epafproject.facts;

import android.content.Context;
import android.content.Intent;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.RelativeLayout;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.cardview.widget.CardView;
import androidx.recyclerview.widget.RecyclerView;
import androidx.transition.TransitionManager;

import com.bumptech.glide.Glide;
import com.example.epafproject.R;
import com.example.epafproject.databinding.ListItemFactsBinding;

import java.util.ArrayList;

import static com.example.epafproject.facts.FactsActivity.FACTS_ID_KEY;

public class FactsRecViewAdapter extends RecyclerView.Adapter<FactsRecViewAdapter.ViewHolder> {

    private ArrayList<Facts> facts = new ArrayList<>();
    private Context mContext;

    private static final String TAG = "FactsRecViewAdapter";

    public FactsRecViewAdapter(Context mContext) {
        this.mContext = mContext;
    }

    @NonNull
    @Override
    public ViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.list_item_facts, parent, false);

        return new ViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull ViewHolder holder, int position) {
        Log.d(TAG, "onBindViewHolder:Called");

        holder.txtName.setText(facts.get(position).getName());
        Glide.with(mContext)
                .asBitmap()
                .load(facts.get(position).getImageUrl())
                .into(holder.imgBook);

        holder.parent.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(mContext, FactsActivity.class);
                intent.putExtra(FACTS_ID_KEY, facts.get(position).getId());
                mContext.startActivity(intent);
            }
        });


        holder.txtAuthor.setText(facts.get(position).getAuthor());
        holder.txtDescription.setText(facts.get(position).getShortDesc());



        if (facts.get(position).isExpanded()){
            TransitionManager.beginDelayedTransition(holder.parent);
            holder.expandedRelLayout.setVisibility(View.VISIBLE);
            holder.downArrow.setVisibility(View.GONE);
        }else{
            TransitionManager.beginDelayedTransition(holder.parent);
            holder.expandedRelLayout.setVisibility(View.GONE);
            holder.downArrow.setVisibility(View.VISIBLE);
        }
    }

    @Override
    public int getItemCount() {
        return facts.size();
    }

    public void setFacts(ArrayList<Facts> books) {
        this.facts = books;
        notifyDataSetChanged();
    }

    public class ViewHolder extends RecyclerView.ViewHolder{


        private CardView parent;
        private ImageView imgBook;
        private TextView txtName;

        private ImageView downArrow, upArrow;
        private RelativeLayout expandedRelLayout;
        private TextView txtAuthor, txtDescription;

        public ViewHolder(@NonNull View itemView) {
            super(itemView);
            parent = itemView.findViewById(R.id.parent);
            imgBook = itemView.findViewById(R.id.imgFact);
            txtName = itemView.findViewById(R.id.txtFactName);

            downArrow = itemView.findViewById(R.id.btnDownArrow);
            upArrow = itemView.findViewById(R.id.btnYpArrow);
            expandedRelLayout = itemView.findViewById(R.id.expandedRelLayout);
            txtAuthor = itemView.findViewById(R.id.txtAuthor);
            txtDescription = itemView.findViewById(R.id.txtShortDesc);

            downArrow.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View v) {
                    Facts fact = facts.get(getAdapterPosition());
                    fact.setExpanded(!fact.isExpanded());
                    notifyItemChanged(getAdapterPosition());
                }
            });

            upArrow.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View v) {
                    Facts fact = facts.get(getAdapterPosition());
                    fact.setExpanded(!fact.isExpanded());
                    notifyItemChanged(getAdapterPosition());
                }
            });


        }
    }
}