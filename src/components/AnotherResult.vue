<template>
  <div class="">
    <p>Counter multiplied by 2 is: {{ doubleCounter }}</p>
    <p>
      <span> Counter multiplied by </span>
      <input type="number"
            min="1"
            max="10"
            style="width: 25px"
            v-model="multiple">
      <span> is {{ multipleCounter }} </span>
   </p>
   <p>Number of clicks: {{ stringCounter }}</p>
  </div>


</template>

<script>
    import { mapGetters } from 'vuex';
    export default {
        data(){
          return {
            multiple: 1,
          }
        },
        watch: {
          multiple: function(number){
            this.$store.state.multiple = number;
          }
        },
        computed: {
          // without the ... mapGetters would not work, we need to add them
          //to allow other computed properties
          //need npm install --save-dev babel-preset-state-2
          ...mapGetters([
              'doubleCounter',
              'stringCounter',
              'multipleCounter',
            ]),
        }



    }
</script>

<style>
input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
