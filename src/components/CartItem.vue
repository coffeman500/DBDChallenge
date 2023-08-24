<script setup lang="ts">
    import { ItemType } from '../types.js';
    import { useCartStore } from '../stores/cart.js';

    const props = defineProps<{
        item: ItemType,
        index: number,
    }>()

    const cart = useCartStore();

</script>

<template>
    <div class="store-item col-4 col-sm-3 col-md-2 col-lg-3 col-xl-2 col-xxl-3" @click="cart.removeItem(index)">
        <div class="store-item-inner">

            <div class="store-item-icon">
                <img :src="item.image" :alt="item.name" />
            </div>

        </div>
    </div>
</template>

<style scoped>

    .store-item {
        cursor: pointer;
    }
    .store-item:hover .store-item-icon {
        transition: all ease .2s;
        transform: scale(1.1);
    }
    .store-item-icon {
        transition: all ease .8s;
    }

</style>