<script setup lang="ts">
    import { ref, computed } from 'vue';
    import StoreItem from './StoreItem.vue';
    import StorePerk from './StorePerk.vue';
    import Perks from '../data/surv_perks.js';
    import Items from '../data/surv_items.js';
    import Addons from '../data/surv_addons.js';

    const typeFilter = ref('');
    const searchFilter = ref('');

    const generalPerks = computed(() => {
        let filteredPerks = {};
        for (const key in Perks) {
            if (Perks[key].character === null) {
                filteredPerks[key] = Perks[key];
                Perks[key].rarity = 'perk_general';
            }
        }
        return filteredPerks;
    });

    function toggleTypeFilter(type: string): void {
        if (typeFilter.value === type) {
            typeFilter.value = '';
        } else {
            typeFilter.value = type;
        }
    }

    function filterButtonClass(type: string): string {
        return typeFilter.value === type ? 'btn-light' : 'btn-outline-light';
    }

</script>

<template>

    <div class="store">
        <div class="store-filters row g-2">

            <div class="col-6 col-md-auto">
                <button class="btn" :class="filterButtonClass('perk')" @click="toggleTypeFilter('perk')">Perks</button>
            </div>

            <div class="col-6 col-md-auto">
                <button class="btn" :class="filterButtonClass('item')" @click="toggleTypeFilter('item')">Items</button>
            </div>

            <div class="col-6 col-md-auto">
                <button class="btn" :class="filterButtonClass('itemaddon')" @click="toggleTypeFilter('itemaddon')">Addons</button>
            </div>

            <div class="col-auto ms-auto">
                <div class="input-group">
                    <input type="text" class="form-control">
                    <button class="btn btn-outline-light">Search</button>
                </div>
            </div>

        </div>

        <div class="store-items">
            <div class="row g-4">

                <StorePerk 
                    v-for="perk in generalPerks" 
                    :perk="perk"
                    :key="perk.name" 
                    :typeFilter="typeFilter"
                />

                <StoreItem 
                    v-for="item in Items" 
                    :item="item"
                    :key="item.name" 
                    :typeFilter="typeFilter"
                />

                <StoreItem 
                    v-for="addon in Addons" 
                    :item="addon"
                    :key="addon.name" 
                    :typeFilter="typeFilter"
                />

            </div>
        </div>
    </div>

</template>

<style scoped>

    .store {
        flex: 0 0 auto;
        display: flex;
        flex-direction: column;
    }

    .store-items {
        padding: 0 2rem;
        overflow-y: scroll;
        overflow-x: hidden;
        height: calc(50vh - 78px);
        flex: 1 1 auto;
    }

    .store-filters {
        padding-bottom: 2rem;
    }

</style>