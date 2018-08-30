<template>
  <div>
    <ul class="list-wrapper">
      <li
        class="list"
        v-for="(item, index) in dataList"
        :key="index"
        @click="navToArticle(item.objectId)">
        <div class="header">
          <span>
            <img v-if="item.user.avatarLarge" class="avatar" :src="item.user.avatarLarge" alt="">
            <i v-else class="avatar iconfont icon-avatar"></i>
            <span class="username">{{item.user.username}}</span>
          </span>
          <span class="tag" v-if="item.tags.length">
            {{item.tags[0].title}}
            <template v-if="item.tags[1]">
              / {{item.tags[1].title}}
            </template>
          </span>
        </div>
        <div class="body">
          <div class="info">
            <p class="title">{{item.title}}</p>
            <p class="content">{{item.content}}</p>
          </div>
          <img class="screenshot" v-if="item.screenshot" :src="item.screenshot" alt="">
        </div>
        <div class="footer">
          <span class="like">
            <i class="iconfont icon-love"></i>
            <span>{{item.collectionCount || '喜欢'}}</span>
          </span>
          <span class="comment">
            <i class="iconfont icon-comment"></i>
            <span>{{item.commentsCount || '评论'}}</span>
          </span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        dataList: [],
        loadMore: true,
      };
    },
    mounted() {
      this.getDataList();
    },
    computed: {
      getBeforeTime() {
        return this.dataList.length ? this.dataList[this.dataList.length - 1].verifyCreatedAt : '';
      },
    },
    methods: {
      // 获取数据列表
      getDataList(refresh) {
        this.$get('https://timeline-merger-ms.juejin.im/v1/get_entry_by_timeline', {
          src: 'web',
          uid: '',
          device_id: undefined,
          token: undefined,
          limit: 20,
          category: 'all',
          recomment: 1,
          before: this.getBeforeTime,
        }).then(json => {
          if (refresh) {
            wx.stopPullDownRefresh();  // 停止下拉刷新
            this.dataList = json.d.entrylist;
            return;
          }
          (json.s === 2) && (this.loadMore = false);  // 无更多数据
          this.dataList = this.dataList.concat(json.d.entrylist);
        });
      },
      // 跳转到文章页面
      navToArticle(id) {
        wx.navigateTo({
          url: `/pages/article/main?id=${id}`,
        });
      },
    },
    // 下拉刷新
    onPullDownRefresh() {
      this.loadMore = true;
      this.getDataList(true);
    },
    // 上拉触底加载更多
    onReachBottom() {
      if (this.loadMore) {
        this.getDataList();
      }
    },
  };
</script>

<style lang="stylus" type="text/stylus" scoped>
  .list-wrapper
    background: #f4f6f9
    .list
      margin: 10px 0
      padding: 10px 15px
      background: #fff
      .header
        display: flex
        justify-content: space-between
        align-items: center
        font-size: 14px
        .avatar, .username
          vertical-align: middle
        .avatar
          width: 20px
          height: 20px
          border-radius: 50%
          margin-right: 5px
          &.iconfont
            display: inline-block
            font-size: 19px
            color: #aaa
        .tag
          color: #aaa
      .body
        display: flex
        margin: 12px 0
        .info
          flex: 1
          .title, .content
            display: -webkit-box
            -webkit-box-orient: vertical
            -webkit-line-clamp: 2
            overflow: hidden
          .title
            font-size: 15px
          .content
            margin-top: 7px
            color: #aaa
            font-size: 14px
        .screenshot
          width: 75px
          height: 75px
          margin-left: 10px
      .footer
        color: #aaa
        font-size: 13px
        .like
          margin-right: 15px
        .iconfont
          display: inline
          margin-right: 5px
          font-size: 13px
</style>
