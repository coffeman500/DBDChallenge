import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import type { ItemType } from '../types.js';

export const useInventoryStore = defineStore('inventory', () => {
    const items = ref({});

    const numItems = computed(() => {
        return Object.keys(items.value).length;
    });

    function addItem(item: ItemType) {
        if (item.modifier in items.value) {
            items.value[item.modifier].quantity++;
        } else {
            items.value[item.modifier] = item;
            items.value[item.modifier].quantity = 1;
        }
    };

    function removeItem(item: ItemType) {
        if (item.modifier in items.value) {

            if (items.value[item.modifier].quantity === 1) {
                delete items.value[item.modifier];
            } else {
                items.value[item.modifier].quantity--;
            }

        }
    };

    return { items, numItems, addItem, removeItem };
});