<script setup lang="ts">
    import { ItemType } from '../types.js';
    import PriceData from '../data/price_config.js';
    import { computed } from 'vue';
    import { useCartStore } from '../stores/cart.js';
    

    const props = defineProps<{
        item: ItemType,
        typeFilter: string,
    }>()

    const cart = useCartStore();

    const itemPrice = computed(() => {
        return PriceData[props.item.rarity];
    });

</script>

<template>
    <div class="store-item col-4 col-sm-3 col-md-2 col-lg-3 col-xl-2 col-xxl-1" @click="cart.addItem(item)" v-show="typeFilter == '' || typeFilter == item.type">
        <div class="store-item-inner">

            <div class="store-item-icon">
                <img :src="item.image" :alt="item.name" />
            </div>

            <div class="store-item-price">
                <span>{{ itemPrice }}</span>
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
    .store-item-price {
        text-align: center;
    }
    .store-item-price span {
        background: #006500;
        padding: 1px 8px 3px;
        line-height: 1;
        border-radius: 5px;
    }

</style>