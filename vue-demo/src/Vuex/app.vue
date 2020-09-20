<template>
  <div>
    <Add></Add>
    <hr />
    <Sub></Sub>
  </div>
</template>

<script>
import Add from "./add.vue";
import Sub from "./sub.vue";
export default {
  data() {
    return {};
  },
  components: {
    Add,
    Sub,
  },
};
</script>
