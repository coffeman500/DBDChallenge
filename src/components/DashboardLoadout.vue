<script setup lang="ts">
    import { useLoadoutStore } from '../stores/loadout.js';
    import LoadoutPerk from './Loadout/LoadoutPerk.vue';

    const loadout = useLoadoutStore();

</script>

<template>

    <div class="active-loadout">

        <div class="row align-items-center">

            <div class="col-4">
                <div class="active-loadout-survivor">
                    <img :src="loadout.getSurvivorDetails.image" :alt="loadout.getSurvivorDetails.name"/>
                </div>
            </div>

            <div class="col-8">

                <div class="row active-loadout-top">

                    <div class="active-loadout-offering col-3">
                        Offering
                    </div>

                    <div class="active-loadout-item col-3">
                        Item
                    </div>

                    <div class="active-loadout-addon1 col-3">
                        Addon 1
                    </div>

                    <div class="active-loadout-addon2 col-3">
                        Addon 2
                    </div>

                </div>

                <div class="row active-loadout-bottom">

                    <div class="active-loadout-perk1 col-3">
                        <LoadoutPerk :index="1" />
                    </div>

                    <div class="active-loadout-perk2 col-3">
                        <LoadoutPerk :index="2" />
                    </div>

                    <div class="active-loadout-perk3 col-3">
                        <LoadoutPerk :index="3" />
                    </div>

                    <div class="active-loadout-perk4 col-3">
                        <LoadoutPerk :index="4" />
                    </div>

                </div>

            </div>

        </div>

    </div>

</template>

<style scoped>

    .active-loadout {
        max-width: 500px;
        margin: 0 auto;
    }
    .active-loadout-survivor img {
        width: 150px;
    }

</style>