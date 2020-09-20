<template>
  <div>
    <p>number</p>
    <span>{{ count }}</span>
    <button value="+" @click="add"></button>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["count"]),
  },
  methods: {
    addCount() {},
    ...mapMutations([add]),
  },
};
</script>
