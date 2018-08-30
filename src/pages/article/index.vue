<template>
  <div>
    <div v-html="content"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        id: '',
        content: '',
      };
    },
    mounted() {
      this.id = this.$root.$mp.query.id;
      this.getArticle();
    },
    methods: {
      // 获取文章详情
      getArticle() {
        this.$get('https://entry-view-storage-api-ms.juejin.im/v1/getEntryView', {
          device_id: undefined,
          token: undefined,
          src: 'web',
          entryId: this.id,
        }).then(json => {
          this.content = json.d.content;
        });
      },
    },
  };
</script>

<style lang="stylus" type="text/stylus" scoped>

</style>
