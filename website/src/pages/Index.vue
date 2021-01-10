<template>
  <DefaultLayout>
    <div v-for="(show, i) in shows" :key="i">
      <ShowCard :item="show"/>
    </div>
    <Education :item="educationData"/>
    <Membership :item="membershipData"/>
    <NewsWidget :items="newsItems"/>

  </DefaultLayout>
</template>

<script>
import DefaultLayout from '~/layouts/Default.vue'
import ShowCard from '~/components/ShowCard.vue';
import Education from '~/components/Education.vue';
import Membership from '~/components/Membership.vue';
import NewsWidget from '~/components/NewsWidget.vue';

export default {
  metaInfo: {
    title: 'The Old Theater'
  },
   components: {
    DefaultLayout,
    ShowCard,
    Education,
    Membership,
    NewsWidget
  },
    data() {
    return {
      shows: [
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
        }
      ],
      educationData: { 
          title: "Education",
          category: "Education",
          description: "The Old Theater impacts area youth though education and engagement programs.",
          imageUrl: "/img/childrens_theater_workshop_crop.jpg",
          imageAlt: "education image",
          cta: "Learn More",
        },
      membershipData:         { 
          title: "Membership",
          subhead: "PATREON MEMBERSHIP",
          category: "Membership",
          location: "The Old Theater",
          description: "Enjoy the benefits of membership while providing the support that enables us to continue creating magical experiences both in front of and behind the curtains. We thank our generous donors who help the Old Theater bring outstanding entertainment to our community.",
          imageUrl: "/img_new/processed/cast-edit_result.jpg",
          imageAlt: "Membership Photo",
          cta: "Join",
        },
        newsItems: [
          {
            title: 'Casting call for production of Sex Please We’re Sixty, “A Saucy Senior Scandal”',
            category: "News",
            description: "On January 21st at 6:00pm there will be a casting call for The Old Theater's production of Sex Please We’re Sixty.. ",
            cta: "Read More",
            date: '1/3/2020',
            link: "/news/2020-01-03-casting-call/"
          },
          {
            title: "Old Theater is seeking board members",
            category: "News",
            location: "The Old Theater",
            description: "The Old Theater has the following open board positions open...",
            cta: "Read More",
            date: '1/5/2020',
            link: "/news/2020-01-03-new-board-members/"
          },
        ]
    };
  },
}
</script>



