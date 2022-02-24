package com.example.epafproject;

import android.content.SharedPreferences;

import com.example.epafproject.facts.Facts;


import java.util.ArrayList;

public class Utils {

    private static com.example.epafproject.Utils instance;

    private static ArrayList<Facts> allFacts;

    private static ArrayList<Facts> alreadyReadFacts;




    private Utils() {
        if (null == allFacts){
            allFacts = new ArrayList<>();
            initData();
        }

        if (null == alreadyReadFacts ){
            alreadyReadFacts = new ArrayList<>();
        }

    }

    private void initData() {

        String longDisc = "Microplastic pollution contaminates soil across Switzerland, even in remote mountains, new research reveals. The scientists said the problem could be worse in other nations with poorer waste management and that research was urgently needed to see if microplastics get into food.\n" +
                "\n" +
                "In the first major study of microplastics in soil, the researchers analysed soil samples from 29 river flood plains in nature reserves across Switzerland. They found microplastics, fragments under 5mm in size, in 90% of the soils. The scientists believe the particles are carried across the country by the wind.\n" +
                "\n" +
                "Research on microplastic pollution to date has largely concentrated on the oceans, in which it is found across the globe, including the Arctic. The particles have been shown to harm marine life and can absorb toxins from the water.";

        String longDics1 = "When we talk about air or water pollution, the reactions garnered are stronger. This is because we can see the effects caused by the pollutants and their extent very clearly. It is normal human psychology to believe in what you see firsthand. Our land, on the other hand, is living a nightmare too.\n" +
                "\n" +
                "We may not be able to see the effects with clarity, but the land is being polluted and abused constantly, and we are unable to calculate the damages incurred. Land Pollution has emerged to become one of the serious concerns that we collectively battle.";

        String longDics2 = "Interviewer: Is it okay to drink stream water if you're out camping or something like that? We're with Dr. Troy Madsen, Emergency Medicine at the University of Utah Hospital. We hear that it's bad. You should always take your own water. But is it? Do you see a lot of people visit in the ER for something like that?\n" +
                "\n" +
                "Dr. Troy Madsen: I've rarely seen it. It's one of those things I've heard the same thing, and I certainly take the precaution where I don't stream water. Maybe that's why we don't see people because they're not drinking stream water. We don't see a lot of people. I've rarely seen anyone in the ER. I have heard of a few cases of people who drank some stream water or lake water and then came to the emergency department with profuse diarrhea, which is often what you get a week or two later.";

        String longDics3 = "Possible infections are described below:\n" +
                "\n" +
                "E Coli is most likely to be contracted by swallowing water contaminated with sewerage.\n" +
                "\n" +
                "Symptoms: rapid onset of diarrhoea without blood\n" +
                "\n" +
                "Treatment: fast for 24 hours, drink clear fluids, water, tea without milk or commercial rehydration solutions\n" +
                "\n" +
                "Shingella and Salmonella.\n" +
                "\n" +
                "Symptoms: generally start 24 hours after exposure and may include fever, vomiting and diarrhoea with blood.\n" +
                "\n" +
                "Treatment: visit your GP. Do not take anti-diarrheatics (for example, Imodium or Kaolin) because these may mask the symptoms.\n" +
                "\n" +
                "Leptospirosis has two forms: Weils Disease (a dangerous condition which results from infection carried in rats’ urine) and the Hardjo form transmitted to humans from cattle.\n" +
                "\n" +
                "Symptoms: fever and flu-like condition\n" +
                "\n" +
                "Treatment: full recovery is probable if a course of penicillin is taken in time but this depends upon immediate treatment. The time factor is crucial. Go straight to your GP, explaining the symptoms and possible source of infection from infected water.\n" +
                "\n" +
                "NB: a small number of cases of Leptospirosis infection have occurred on occasion around the central highlands of Scotland.\n" +
                "\n" +
                "Giardia and Amoebic Dysentery.\n" +
                "\n" +
                "Symptoms: these start 24 hours after exposure and may include vomiting, diarrhoea with mucous and blood, eggy sulphurous burps and foul smelling gas.\n" +
                "\n" +
                "Treatment: visit your GP. A stool test is recommended to get the diagnosis and treatment correct. However, the test may be negative in the case of Giardiasis.";


        allFacts.add(new Facts(1, "The hills are alive with the signs of plastic", "theguardian.com", 1350, "https://i.guim.co.uk/img/media/41868c6e9f5bbb94ded9b3c9bc956a9bffe59d27/0_0_3000_1688/master/3000.jpg?width=620&quality=85&auto=format&fit=max&s=06a3393af136cf4aa6256bdf49f3ee30"
                ,"Major study finds microplastics in soil across Switzerland and scientists warn urgent research is needed into impacts on food safety as other countries may be worse affected", longDisc));

        allFacts.add(new Facts(2, "What is Land Pollution?", "conserve-energy-future.com", 250, "https://www.conserve-energy-future.com/wp-content/uploads/2021/06/grabage-pile-at-landfill-site.webp"
                ,"When we talk about air or water pollution, the reactions garnered are stronger. This is because we can see the effects caused by the pollutants and their extent very clearly. It is normal human psychology to believe in what you see firsthand. Our land, on the other hand, is living a nightmare too.", longDics1));

        allFacts.add(new Facts(3, "Risks Of Drinking Stream Water", "healthcare.utah.edu", 250, "https://www.nicepng.com/png/full/106-1062633_scroll-down-stream-water-png.png"
                ,"You’re hiking and you see a clear stream with what seems to be drinkable water. The question is, do you drink it?", longDics2));

        allFacts.add(new Facts(4, "Water-borne infections", "mountaineering.scot", 250, "https://www.mountaineering.scot/assets/contentimages/WP12-11548-20160610141210.jpeg"
                ,"Buying a light bulb is a little more complicated than it used to be.", longDics3));





    }


    public static com.example.epafproject.Utils getInstance() {
        if (null != instance){
            return instance;
        }else{
            instance = new com.example.epafproject.Utils();
            return instance;
        }

    }

    public static ArrayList<Facts> getAllFacts() {
        return allFacts;
    }


    public Facts getFactById(int id){
        for (Facts b: allFacts) {
            if (b.getId() == id){
                return b;
            }
        }
        return null;
    }




}
