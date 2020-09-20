<template>
  <div>
    <p>number</p>
    <button value="-" @click="sub"></button>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState({ count }),
  },
  methods: {
    ...mapMutations({ sub }),
  },
};
</script>
