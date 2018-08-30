<template>
  <ul class="bookList">
    <li class="list" v-for="(item, index) in bookList" :key="index">
      <div class="left">
        <img class="img" :src="item.img" alt="">
        <div class="info">
          <span class="title">{{item.title}}</span>
          <span class="author">{{item.userData.username}}</span>
          <span class="detail">{{item.lastSectionCount}}小节 &nbsp;{{item.buyCount}}人已购买</span>
        </div>
      </div>
      <span class="price">￥{{item.price}}</span>
    </li>
  </ul>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        bookList: [],
        pageNum: 1,
        loadMore: true,
      };
    },
    mounted() {
      this.getBookList();
    },
    methods: {
      // 获取小册列表
      getBookList(refresh, pageNum = this.pageNum) {
        this.$get('https://xiaoce-timeline-api-ms.juejin.im/v1/getListByLastTime', {
          src: 'web',
          uid: '',
          device_id: '',
          token: '',
          pageNum,
        }).then(json => {
          if (refresh) {
            wx.stopPullDownRefresh();  // 停止下拉刷新
            this.bookList = json.d;
            return;
          }
          (json.s === 2) && (this.loadMore = false);  // 无更多数据
          this.bookList = this.bookList.concat(json.d);
        });
      },
    },
    // 下拉刷新
    onPullDownRefresh() {
      this.loadMore = true;
      this.pageNum = 1;
      this.getBookList(true);
    },
    // 上拉触底加载更多
    onReachBottom() {
      if (this.loadMore) {
        this.pageNum++;
        this.getBookList();
      }
    },
  };
</script>

<style lang="stylus" type="text/stylus" scoped>
  .bookList
    .list
      display: flex
      align-items: center
      padding: 15px
      border-bottom: 1px solid #ddd
      .left
        flex: 1
        display: flex
        align-items: center
        .img
          width: 65px
          height: 91px
          box-shadow: 3px 3px 8px #ccc
        .info
          flex: 1
          display: flex
          flex-direction: column
          justify-content: space-between
          height: 91px
          padding: 0 10px
          font-size: 15px
          .title
            display: -webkit-box
            -webkit-box-orient: vertical
            -webkit-line-clamp: 2
            overflow: hidden
            font-weight: bold
          .author
            font-size: 13px
          .detail
            color: #aaaaaa
            font-size: 11px
      .price
        display: inline-block
        padding: 5px 10px
        background: #f1f7fe
        border-radius: 20px
        color: #3281ff
        font-size: 13px
</style>
