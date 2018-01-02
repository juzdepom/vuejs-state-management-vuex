<template>
    <div>
        <button class="btn btn-primary" @click="increment(100)">Increment</button>
        <button class="btn btn-primary" @click="decrement">Decrement</button>
        <button class="btn btn-primary" @click="asyncIncrement({by: 50, duration: 500})">Async Increment</button>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'
    export default {
        methods: {
            ...mapActions([
              'increment',
              'decrement',
              'asyncIncrement',
            ]),
        }
    }
</script>
