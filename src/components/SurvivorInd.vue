<script setup lang="ts">
    import { computed } from 'vue';
    import { SurvivorType } from '../types.js';
    import { useLoadoutStore } from '../stores/loadout.js';

    const props = defineProps<{
        survivor: SurvivorType,
    }>()

    const loadout = useLoadoutStore();

    const survivorClasses = computed(() => ({
        selectedSurvivor: loadout.getSurvivorDetails.id === props.survivor.id,
    }));

</script>

<template>
    <div :class="survivorClasses" class="survivor col-4 col-sm-3 col-md-2 col-lg-3 col-xl-2 col-xxl-1" @click="loadout.selectSurvivor(survivor)">
        <div class="survivor-inner">

            <div class="survivor-icon">
                <img :src="survivor.image" :alt="survivor.name" />
            </div>

            <div v-if="loadout.getSurvivorDetails.id === props.survivor.id" class="survivor-selected-icon">
                <i class="bi bi-check-circle-fill"></i>
            </div>

        </div>
    </div>
</template>

<style scoped>

    .survivor {
        cursor: pointer;
        transition: all ease .4s;
    }
    .survivor:hover .survivor-icon {
        transition: all ease .2s;
        transform: scale(1.1);
    }
    .survivor-icon {
        transition: all ease .8s;
    }
    .survivor-inner {
        position: relative;
    }

    .selectedSurvivor .survivor-selected-icon {
        position: absolute;
        top: 0px;
        left: 0px;
        font-size: 1.5rem;
        line-height: 0;
    }
    .selectedSurvivor {
        transform: scale(1.1);
    }

</style>