<script setup lang="ts">
    import Survivors from '../data/survivors.js';
    import SurvivorInd from './SurvivorInd.vue';

</script>

<template>

    <div class="survivors">
        <div class="row g-3">

            <SurvivorInd 
                v-for="survivor in Survivors" 
                :survivor="survivor"
            />

        </div>
    </div>

</template>

<style scoped>

    .survivors {
        overflow-y: scroll;
        overflow-x: hidden;
        height: calc(50vh);
        padding: 1rem;
    }

</style>