<script setup lang="ts">
    import CartItem from './CartItem.vue';
    import { useCartStore } from '../stores/cart.js';
    import { useBankStore } from '../stores/bank.js';
    import { useInventoryStore } from '../stores/inventory.js';

    const cart = useCartStore();
    const bank = useBankStore();
    const inventory = useInventoryStore();

    function checkout() {
        if (!bank.spend(cart.total)) return;

        for (let i = 0; i < cart.numItems; i++) {
            inventory.addItem(cart.items[i]);
        }

        cart.reset();
    }

</script>

<template>

    <div class="cart-tab-items container-fluid py-3">
        <div class="row g-3">

            <h5 class="text-muted text-center mt-5" v-show="cart.numItems === 0">add items from the shop</h5>

            <CartItem 
                v-for="(item, index) in cart.items" 
                :item="item"
                :index="index"
                :key="item.name" 
            />
        </div>
    </div>

    <div class="cart-tab-footer row align-items-center">

        <div class="cart-tab-checkout col">
            <button class="btn btn-sm btn-primary" :class="{ 'btn-outline-danger': !bank.canAfford(cart.total) }" :disabled="!bank.canAfford(cart.total)" @click="checkout">Purchase Items</button>
        </div>

        <div class="cart-tab-price col-auto">
            <img class="icon-xs" src="/UI/Icons/HelpLoading/iconHelpLoading_bloodpoints.png" />
            <span class="cart-tab-price-text ms-1" :class="{ 'text-danger': !bank.canAfford(cart.total) }">{{ cart.total }}</span>
        </div>

    </div>

</template>

<style scoped>

    .cart-tab-footer {
        padding: 1rem;
    }
    .cart-tab-checkout {
        line-height: 1;
    }
    .cart-tab-items {
        height: calc(100vh - 260px);
        overflow-y: auto;
    }
    .cart-tab-price {
        font-size: 1.5rem;
    }

</style>
