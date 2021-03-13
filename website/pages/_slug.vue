<template>
  <div class="mx-auto">
    <article
      class="w-full mx-auto content-column md:w-3/4 lg:w-9/12 xl:3/4 lg:text-xl xl:text-2xl"
    >
      <div class="p-8 pb-12 mb-8 bg-white rounded-lg shadow-lg">
        <div class="overflow-hidden rounded">
          <img
            :src="require(`~/assets/img_new/processed/${article.img}`)"
            :alt="article.imgAlt"
          />
        </div>
        <div
          class="pl-8 pr-8 mx-auto sm:max-w-lg md:max-w-xl md:text-4xl lg:max-w-3xl xl:max-w-4xl"
        >
          <UiHeadline class="mt-4"  level="1" @click="shout('h1')">{{article.title}} - UIHeadline</UiHeadline>
          <div class="flex">
              <ShowPill :showtype="article.showtype"></ShowPill>
            </div>
          <div
            class="mb-8 text-sm font-semibold leading-relaxed tracking-wide uppercase"
          >
            <div class="flex flex-wrap">
              <div class="mr-4">
                <span class="text-gray-600">DATE: </span>
                {{ article.eventTime | formatDate }}
              </div>
              <div class="mr-4">
                <span class="text-gray-600">TIME: </span>
                {{ article.eventTime | formatTime }}
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
            class="mb-8 prose max-w-none md:prose-lg lg:prose-xl lg:prose-2xl"
          />

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
export default {
  async asyncData({ $content, params }) {
    const article = await $content("shows", params.slug).fetch();
    return { article };
  },
  layout: "NewLayout",
};
</script>
