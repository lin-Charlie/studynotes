<template>
  <div>
    <h4>发表评论---{{ NewsId }}</h4>
    <hr />

    <textarea
      class="content"
      placeholder="请输入评论内容"
      v-model="msg"
    ></textarea>
    <mt-button type="primary" size="large" @click="printMsg"
      >发表评论</mt-button
    >
    <div class="item">
      <div class="item-list" v-for="(item, i) in cmtlist" :key="i">
        <div class="item-list-tittle">
          用户：{{ item.name }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;发表时间：{{ item.time | timeFormat() }}
        </div>
        <div class="item-list-content">{{ item.content }}</div>
      </div>
    </div>
    <mt-button type="danger" size="large" plain>加载更多</mt-button>
  </div>
</template>

<script>
// 导入mint-ui中的toast弹出框
import { Toast } from "mint-ui";

export default {
  data() {
    return {
      commentId: this.NewsId,
      cmtlist: [
        {
          name: "zzc",
          time: "2020.9.10",
          content: "my-vue-demo",
        },
      ], //评论数据列表
      msg: "",
    };
  },
  props: ["NewsId"],
  created() {
    // this.getNewsComment();
  },
  methods: {
    // 请求评论数据
    async getNewsComment() {
      const { data } = await this.$axios({
        // axios的url中有变量用``包裹
        url: `/src/${this.commentId}`,
        method: "get",
      });
      this.cmtlist = this.cmtlist.concat(data.message);
    },
    printMsg() {
      // trim去除字符串头尾空格
      if (this.msg.trim().length <= 0) return Toast("请输入评论");
      this.cmtlist.unshift({
        name: "zzx",
        time: new Date(),
        content: this.msg.trim(),
      });
      this.msg = "";
      // const { data } = await this.$axios({
      //   url: `/src/${this.commentId}/${this.msg}`,
      //   method: "post",
      // });
      // // 刷新列表
      // if(data.status===0){
      //   this.getNewsComment()
      //   // 重新调用getNewsComment()会清空之前的评论列表，为了避免我们直接在客户端
      //   // 创建一个评论对象添加到cmtlist中
      //   this.cmtlist.unshift({
      //     content:this.msg.trim()
      //   })
      //   this.msg = ''
      // }
    },
  },
};
</script>

<style lang="scss" scoped>
.content {
  margin-bottom: 5px;
}
.item {
  margin: 10px 0;
  .item-list {
    .item-list-tittle {
      padding: 0 5px;
      font-size: 15px;
      background-color: rgb(185, 184, 184);
      // display: flex;
      // justify-content: space-between;
    }
    .item-list-content {
      background-color: white;
      border: 1px solid greenyellow;
      text-align: left;
      padding: 0 5px;
      height: 30px;
    }
  }
}
</style>
