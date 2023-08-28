<script setup lang="ts">
    import { useLoadoutStore } from '../../stores/loadout.js';

    const props = defineProps<{
        index: number,
    }>();

    const loadout = useLoadoutStore();



</script>

<template>

    <div class="loadout-perk">

        <img :src="loadout.getPerkDetails(index).image" :alt="loadout.getPerkDetails(index).name" />

    </div>

</template>

<style scoped>


</style>