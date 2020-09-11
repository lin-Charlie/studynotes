<template>
  <div>
    <h3>下载界面</h3>
    <ul class="mui-table-view" v-for="(item,i) in list" :key="i">
      <li class="mui-table-view-cell mui-media">
        <!-- 根据不同id选择展示不同的下载详情  vbind中常量用''包裹-->
        <router-link :to="'/home/DoloadInfo/'+item.id">
          <img class="mui-media-object mui-pull-left" src="/src/img/download.png" />
          <div class="mui-media-body">
            幸福
            <p class="mui-ellipsis">能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [{ id: "1" }, { id: "2" }, { id: "3" }, { id: "4" }],
    };
  },
};
</script>
<style lang="scss" scoped></style>
