<script setup lang="ts">
    import InventoryItem from './InventoryItem.vue';
    import { useInventoryStore } from '../stores/inventory.js';
    
    const inventory = useInventoryStore();


</script>

<template>

    <div class="inventory-tab-items container-fluid py-3">
        <div class="row g-3">

            <h5 class="text-muted text-center mt-5" v-show="inventory.numItems === 0">inventory empty</h5>

            <InventoryItem 
                v-for="(item, index) in inventory.items" 
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

</style>
