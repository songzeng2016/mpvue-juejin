<template>
  <ul class="bookList">
    <li class="list" v-for="(item, index) in bookList" :key="index">
      <div class="left">
        <img class="img" :src="item.img" alt="">
        <div class="info">
          <span class="title">{{item.title}}</span>
          <span class="author">{{item.userData.username}}</span>
          <span class="detail">{{item.lastSectionCount}}小节  {{item.buyCount}}人已购买</span>
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
        loadMore: true
      };
    },
    mounted() {
      this.getBookList();
    },
    methods: {
      // 获取小册列表
      getBookList(stopRefresh, pageNum = this.pageNum) {
        const that = this;
        wx.request({
          url: 'https://xiaoce-timeline-api-ms.juejin.im/v1/getListByLastTime',
          data: {
            src: 'web',
            uid: '',
            device_id: '',
            token: '',
            pageNum
          },
          success(res) {
            console.log(res.data);
            stopRefresh && wx.stopPullDownRefresh();  // 停止下拉刷新
            (res.data.s === 2) && (that.loadMore = false);  // 无更多数据
            that.bookList = that.bookList.concat(res.data.d);
          }
        });
      }
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
    }
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
        .info
          flex: 1
          display: flex
          flex-direction: column
          justify-content: space-between
          height: 91px
          padding: 0 5px
          font-size: 15px
      .price
        display: inline-block
        padding: 5px 10px
        background: #f1f7fe
        border-radius: 20px
        color: #3281ff
        font-size: 13px
</style>
