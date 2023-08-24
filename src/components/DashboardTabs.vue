<script setup lang="ts">
    import { watch, inject } from 'vue';
    import CartTab from './CartTab.vue';
    // @ts-ignore
    import { Tab } from '~bootstrap';
    import { useCartStore } from '../stores/cart.js';
    import InventoryTab from './InventoryTab.vue';

    const cart = useCartStore();

    watch(cart, (items) => {
        if (cartTabTrigger !== null) cartTabTrigger.show();
    });

    let cartTabTrigger = null;
    document.addEventListener('DOMContentLoaded', function () {
        const cartTab = document.getElementById('cart-tab');
        cartTabTrigger = new Tab(cartTab);
    }, false);

</script>

<template>

    <ul class="nav nav-tabs" id="rightSidebarTabs" role="tablist">
        <li class="nav-item" role="presentation">
            <button class="nav-link active" id="inventory-tab" data-bs-toggle="tab" data-bs-target="#inventory-tab-pane" type="button" role="tab" aria-controls="inventory-tab-pane" aria-selected="true">
                Inventory
            </button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link" id="cart-tab" data-bs-toggle="tab" data-bs-target="#cart-tab-pane" type="button" role="tab" aria-controls="cart-tab-pane" aria-selected="false">
                <i class="bi bi-cart2"></i> Cart
            </button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Contact</button>
        </li>
    </ul>
    <div class="tab-content">
        <div class="tab-pane fade show active" id="inventory-tab-pane" role="tabpanel" aria-labelledby="inventory-tab" tabindex="0">
            <InventoryTab />
        </div>
        <div class="tab-pane fade" id="cart-tab-pane" role="tabpanel" aria-labelledby="cart-tab" tabindex="0">
            <CartTab />
        </div>
        <div class="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">

        </div>
    </div>

</template>

<style scoped>

</style>
