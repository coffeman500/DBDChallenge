<script setup lang="ts">
    import { useLoadoutStore } from '../stores/loadout.js';

    const loadout = useLoadoutStore();

    console.log(loadout.getSurvivorDetails.image);

</script>

<template>

    <div class="active-loadout">

        <div class="active-loadout-offering">
            
        </div>
        <div class="active-loadout-survivor">
            
            <img :src="loadout.getSurvivorDetails.image" :alt="loadout.getSurvivorDetails.name"/>

        </div>
        <div class="active-loadout-item">
            
        </div>

    </div>

</template>

<style scoped>

    .active-loadout-survivor img {
        width: 150px;
    }

</style>