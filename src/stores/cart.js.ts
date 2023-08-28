import { defineStore } from 'pinia';
import  { ref, computed } from 'vue';
import PriceData from '../data/price_config.js';
import type { ItemType, PerkType } from '../types.js';

export const useCartStore = defineStore('cart', () => {
    const items = ref([]);
    
    const numItems = computed(() => {
        return items.value.length;
    });

    const total = computed(() => {
            let total = 0;

            for (let i = 0; i < numItems.value; i++) {
                total += PriceData[items.value[i].rarity];
            }
        
            return total;
    });

    function addItem(item: ItemType | PerkType) {
        items.value.push(item);
    };

    function removeItem(index: number) {
        items.value.splice(index, 1);
    };

    function reset() {
        items.value = [];
    };

    return { items, numItems, total, addItem, removeItem, reset };
});