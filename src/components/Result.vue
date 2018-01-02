<template>
  <div class="">
    <p>Counter is: {{ counter }}</p>
  </div>
</template>

<script>
    export default {
        computed: {
          counter(){
            return this.$store.getters.counter
          },
        }
    }
</script>
