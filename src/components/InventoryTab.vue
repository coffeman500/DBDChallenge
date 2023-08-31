<script setup lang="ts">
    import InventoryItem from './InventoryItem.vue';
    import { useInventoryStore } from '../stores/inventory.js';
    
    const inventory = useInventoryStore();

    console.log(inventory.getPerks().length);

</script>

<template>

    <div class="inventory-tab-items container-fluid py-3">
        <div class="row g-3">

            <h5 class="text-muted text-center mt-5" v-show="inventory.numItems === 0">inventory empty</h5>

            <h5 class="inventory-title" v-show="inventory.getItems().length > 0">Items</h5>

            <InventoryItem 
                v-for="(item, index) in inventory.getItems()" 
                :item="item"
                :index="index"
            />
            
            <h5 class="inventory-title" v-show="inventory.getPerks().length > 0">Perks</h5>
            <InventoryItem 
                v-for="(item, index) in inventory.getPerks()" 
                :item="item"
                :index="index"
            />

        </div>
    </div>

</template>

<style scoped>

    .inventory-tab-items {
        height: calc(100vh - 260px);
        overflow-y: auto;
    }
    .inventory-title {
        margin: 3rem 0 0;
        padding-bottom: .5rem;
        border-bottom: 1px solid rgba(255, 255, 255, .2);
    }

</style>
