<template>
  <div>
    <article class="w-full max-w-4xl mx-auto lg:text-xl xl:text-2xl">
      <div class="p-8 pb-12 mb-8 bg-white rounded-lg shadow-lg">
        <div class="overflow-hidden rounded">
          <img
            :src="require(`~/assets/img_new/processed/${article.img}`)"
            :alt="article.imgAlt"
          />
        </div>
        <div
          class="pl-8 pr-8 mx-auto"
        >
          <UiHeadline class="mt-4"  level="1">{{article.title}}</UiHeadline>
          <div class="flex">
              <ShowPill :showtype="article.showtype"></ShowPill>
            </div>
          <div
            class="mb-8 text-sm font-semibold leading-relaxed tracking-wide uppercase"
          >
            <div class="flex flex-wrap lg:text-lg">
              <div class="mr-4">
                <span class="text-gray-600">DATE: </span>
                {{ article.showDate }}
              </div>
              <div class="mr-4">
                <span class="text-gray-600">TIME: </span>
                {{ article.showTime }}
              </div>
              <div class="mr-4">
                <span class="text-gray-600">COST: </span>
                ${{ article.formattedPrice }}
              </div>
              <div v-if="article.location" class="mr-4">
                <span class="text-gray-600">LOCATION: </span>{{ article.location }}
              </div>
            </div>
          </div>
          
          <nuxt-content
            :document="article"
            class="mb-8 prose md:prose-lg lg:prose-xl lg:prose-2xl"
          />

          <client-only>
            <YoutubeWidget v-if="article.youtubeVideo" :videoUrl="article.youtubeVideo"/>
          </client-only>
            
          <a
            v-if="article.ticketURL"
            :href="article.ticketURL"
            class="block w-full px-4 py-2 mb-3 mr-2 text-lg font-bold tracking-wide text-center text-white uppercase bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700"
            >Buy tickets</a
          >
        </div>
      </div>
    </article>
  </div>
</template>


<script>
import NavBar from "@/components/NavBar";
import UiHeadline from "@/components/ui/UiHeadline";
import YoutubeWidget from "@/components/YoutubeWidget";
import ShowPill from "@/components/ShowPill";
export default {

  async asyncData({ $content, params }) {
    const article = await $content("shows", params.slug).fetch();
    return { article };
  },
  layout: "NewLayout",
  
  components: {
    NavBar,
    UiHeadline,
    YoutubeWidget,
    ShowPill
  }
};
</script>
