<template>
  <div class="m-4 sm:m-8 md:m-8">
    <!-- image card-->
    <div class="table w-full">
      <div class="table-row-group bg-red-400">
          <div class="table-row ">
            <div class="table-cell w-1/2 bg-red-200 rounded shadow-lg">
             
              <div class="mb-4 text-3xl font-semibold md:text-5xl">
                Don’t forget to use Amazon Smile!
              </div>
              <div class="mb-4 md:text-2xl">
                Click here to support The Old Theater while shopping on Amazon!
              </div>
              <nuxt-link
                to="/support/other"
                class="block px-4 py-2 mb-3 text-lg font-semibold tracking-wide text-center text-white uppercase bg-gray-900 border-2 border-white rounded-lg shadow-md hover:bg-blue-700 sm:w-1/3"
                >{{ item.cta }}</nuxt-link
              >
            </div>
            <div class="table-cell w-8 overflow-hidden"></div>

           
            <nuxt-picture
              v-if="item.img"
              :fit="fit"
              :src="item.img"
              :alt="item.alt"
              sizes=" xs:100vw sm:100vw md:50vw lg:50vw"
              quality="85"
              loading="lazy"
              class="table-cell overflow-hidden bg-white rounded shadow-lg"
            />
        
      </div>
    </div>

        
      </div>
      <!-- details -->
    </div>

</template>

<script>
import ShowPicture from "./ShowPicture.vue";
export default {
  data() {
    return {
      item: {
        title: "Amazon",
        subhead: "PATREON MEMBERSHIP",
        category: "Membership",
        location: "The Old Theater",
        description:
          "Give back to the community by sponsoring a theatrical production, a live music event, or a Friday flick.",
        img: "/images/home/amazon_smile.png",
        alt: "musical or theatrical artist image",
        cta: "Learn More",
      },
    };
  },
  computed: {
    randomImg() {
      const i = Math.floor(Math.random() * 3);
      return this.item.images[i];
    },
  },
  components: {
    ShowPicture,
  },
};
</script>
