<template>
  <Layout>
    <div v-for="(item, i) in items" :key="i">
      <ShowCard :item="item"/>
    </div>

  </Layout>
</template>

<script>
import ShowCard from "~/components/ShowCard.vue";

export default {
  metaInfo: {
    title: 'The Old Theater'
  },
   components: {
    ShowCard
  },
    data() {
    return {
      items: [
        { 
          title: "Scrooged",
          date: "December 21, 2020",
          time: "7:30 PM",
          category: "Friday Flick",
          location: "The Red Rooster",
          description: "A book on philosphy about the origins of man",
          imageUrl: "/img_new/processed/scrooged_result.jpg",
          imageAlt: "image alt text",
          formattedPrice: "Donation",
        },
        { 
          title: "Goldfinger",
          date: "January 11, 2020",
          time: "7:00 PM",
          category: "Friday Flick",
          location: "The Red Rooster",
          description: "The true search for one's treasure",
          imageUrl: "/img_new/processed/goldfinger_result.jpg",
          imageAlt: "Some Alt Text",
          formattedPrice: "Donation",
        },
        { 
          title: "Nunsense",
          date: "February 11, 2020",
          time: "7:00 PM",
          category: "Theater",
          location: "The Old Theater",
          description: "Sci-Fi Futuristic book about mind reading",
          imageUrl: "/img_new/processed/nunsense-big_result.jpg",
          imageAlt: "Some Alt Text",
          formattedPrice: "21.99",
        },
        { 
          title: "Barbra Lica",
          date: "February 1, 2020",
          time: "7:00 PM",
          category: "Live Music",
          location: "The Old Theater",
          description: "Motivational book on wealth building",
          imageUrl: "/img_new/processed/barbra-lica_result.jpg",
          imageAlt: "Some Alt Text",
          formattedPrice: "11.99",
        },
        { 
          title: "Education",
          date: "February 11, 2020",
          time: "7:00 PM",
          category: "Education",
          description: "Conspiracy theories about secrets of the holy grail",
          imageUrl: "/img_new/processed/education_result.jpg",
          imageAlt: "Some Alt Text",
          formattedPrice: "17.99",
        },
        { 
          title: "Support",
          date: "February 11, 2020",
          time: "7:00 PM",
          category: "Support",
          location: "The Old Theater",
          description: "Travel back in time and experience the banking system",
          imageUrl: "/img_new/processed/cast-edit_result.jpg",
          imageAlt: "Some Alt Text",
          formattedPrice: "16.99",
        },
      ],
    };
  },
}
</script>



