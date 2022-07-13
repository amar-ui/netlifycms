<template>
  <b-container class="mt-3">
    <div v-for="post of posts" :key="post.slug" class="mt-2">
      <b-card bg-variant="dark" text-variant="white" :title="post.title">
        <b-card-text>
          {{ post.body.children[0].children[0].value }}
        </b-card-text>
        <b-button href="#" variant="primary">view</b-button>
      </b-card>
    </div>
  </b-container>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const posts = await $content("blog").fetch();

    return {
      posts,
    };
  },
};
</script>
<style scoped>
</style>