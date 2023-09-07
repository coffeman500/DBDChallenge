<script setup lang="ts">
    import type { ItemType, PerkType } from '../types.js';
    import { useInventoryStore } from '../stores/inventory.js';

    const props = defineProps<{
        item: ItemType | PerkType,
        index: string,
    }>()

    const inventory = useInventoryStore();

</script>

<template>
    <div class="inventory-item col-4 col-sm-3 col-md-2 col-lg-3 col-xl-2 col-xxl-3">
        <div class="inventory-item-inner">

            <div class="inventory-item-icon">
                <img :src="item.image" :alt="item.name" />
            </div>

            <div class="inventory-item-quantity" v-show="typeof(item.quantity) !== 'undefined' && item.quantity > 1">{{ item.quantity }}</div>

        </div>
    </div>
</template>

<style scoped>

    .inventory-item {
        cursor: pointer;
    }
    .inventory-item-inner {
        position: relative;
    }
    .inventory-item:hover .inventory-item-icon {
        transition: all ease .2s;
        transform: scale(1.1);
    }
    .inventory-item-icon {
        transition: all ease .8s;
    }
    .inventory-item-quantity {
        position: absolute;
        bottom: 5px;
        right: 5px;
        background: white;
        border-radius: 30px;
        color: black;
        font-weight: bold;
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 0 10px black;
    }

</style>