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
          shortDesc: "A selfish, cynical television executive is haunted by three spirits bearing lessons on Christmas Eve.",
          description: "A selfish, cynical television executive is haunted by three spirits bearing lessons on Christmas Eve.",
          imageUrl: "/img_new/processed/scrooged_result.jpg",
          imageAlt: "image alt text",
          formattedPrice: "Donation",
        },
        { 
          title: "Goldfinger",
          date: "January 11, 2021",
          time: "7:00 PM",
          category: "Friday Flick",
          location: "The Red Rooster",
          shortDesc: "While investigating a gold magnate's smuggling, James Bond uncovers a plot to contaminate the Fort Knox gold reserve.",
          description: "British secret agent James Bond is tasked by the Bank of England and Mi6 to investigate gold magnate Auric Goldfinger, who they suspect is building up a vast inventory of gold bars. At first, nothing seems all too special about the gold obsessed tycoon, but after Bond gains knowledge of a secret scheme involving Goldfinger which is about to be initiated; codename 'Operation Grand Slam', he realizes that the fate of the entire western economy may be at stake if the bullion dealer is not stopped.",
          imageUrl: "/img_new/processed/goldfinger_result.jpg",
          imageAlt: "Some Alt Text",
          formattedPrice: "Donation",
        },
        { 
          title: "Nunsense",
          date: "February 11, 2021",
          time: "7:00 PM",
          category: "Theater",
          location: "The Old Theater",
          shortDesc: "An unfortunate convent cooking accident causes most of the order of the Little Sisters of Hoboken to die of botulism.",
          description: "An unfortunate convent cooking accident causes most of the order of the Little Sisters of Hoboken to die of botulism. Before all of the deceased sisters can be buried, Reverend Mother Superior (Rue McClanahan) buys a camcorder and VCR for the convent - resulting in not having enough money to bury the four remaining sisters (which, by the way, are temporarily being stored in the freezer). In order to raise money to bury the four dead sisters, the Little Sisters of Hoboken (well, what's left of them) put on a riotous revue packed with hilarious, show-stopping song and dance numbers.",
          imageUrl: "/img_new/processed/nunsense-big_result.jpg",
          imageAlt: "Some Alt Text",
          formattedPrice: "21.99",
        },
        { 
          title: "Barbra Lica",
          date: "February 14, 2021",
          time: "7:00 PM",
          category: "Live Music",
          location: "The Old Theater",
          shortDesc: "Pamlico Musical Society presents Barbra Lica for two performances on Valentine’s Day Friday, February 14",
          description: "Pamlico Musical Society presents Barbra Lica for two performances on Valentine’s Day Friday, February 14. <br> Juno-nominated Barbra Lica is a fast-rising Canadian jazz vocalist and songwriter. She approaches singing with her signature style stressing subtlety, grace, and storytelling.<br>A seasoned act on the Canadian and American club and festival circuits, Barbra has performed everywhere from New York City’s legendary Birdland Jazz Club to Toronto’s prestigious Koerner Hall. She’s headlined at festivals including Festival International de Jazz de Montréal and Vancouver International Jazz Festival, and opened for the likes of Christian McBride, Pat Metheny, Bob Dorough, and Terence Blanchard.<br>Barbra conducts an informance, free and open to the public, at 1:30p at Oriental United Methodist Church, hosted by Prime Time. The evening performance is at The Old Theater at 7:30p. Both events are sponsored by the Pamlico Musical Society.<br>The Oriental United Methodist Church ‘informance’ is free. The evening event is ticketed. Tickets to the concert are $22 and are available in Oriental at Nautical Wheelers, 411 Broad Street, and online at www.pamlicomusic.org. For more information, call 252-617-2125.",
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



