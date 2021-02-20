<template>
  <div class="home-page">
	  <h2>Latest Posts</h2>


	  <div class="m-4 sm:m-8 md:flex md:m-8 md:mr-4">
		  <div class="article" v-for="article of shows" :key="article">
			  <nuxt-link :to="{ name: 'slug', params: { slug: article.slug } }">
          <!-- image card -->
				  <div class="relative md:w-2/3 rounded-lg overflow-hidden shadow-lg">
						<img :src="require(`~/assets/${article.img}`)" alt="" class="h-full w-full object-cover" />
          </div>
          
          <!-- details card -->
          <div class="relative -mt-1 bg-gray-200 rounded-b-lg md:mt-0 md:rounded-b-none md:rounded-r-lg md:-ml-4 md:flex md:w-1/3  md:p-0 shadow-lg">
						<div class="p-6 pt-2 w-full">
							<h3 class="font-semibold text-4xl">{{ article.title }}</h3>
							<p>{{ article.description }}</p>
						</div>
				  </div>
			  </nuxt-link>
		  </div>
	  </div>
  </div>
</template>

<script>

export default {

	async asyncData({ $content, params }) {
		let shows = await $content('shows', params.slug)
			.only(['title', 'description', 'img', 'slug', 'createdAt', 'eventDate'])
			.sortBy('createdAt', 'asc')
      .fetch();
      

    // const n = new Date();
    // const now = n.getTime();
   

    // shows.forEach(element => {
    //   const ed = new Date(element.eventDate)
    //   const eventDate = ed.getTime();
    //   console.log("now", now, "eventDate", eventDate);
    //   console.log("event in future:", ed > n);
    //   console.log("element", element)
    // });


      shows.forEach(element => {
        console.log("elem", element)
      });
    
      // filter out past events
      const now = new Date()
      shows = shows.filter(article =>  new Date(article.eventDate) > now)


		return {
			shows
		}
	}
}
</script>

<style>


</style>




