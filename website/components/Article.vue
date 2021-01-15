<template>
  <div class="article" >
    <div class="bg-blue-400">blueness</div>
    <nuxt-link :to="{ name: 'slug', params: { slug: article.slug } }">
      <div class="article-inner">
        <img :src="require(`~/assets/${article.img}`)" alt="" />
        <div class="detail">
          <h3>{{ article.title }}</h3>
          <p>{{ article.description }}</p>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

