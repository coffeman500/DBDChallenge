import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import type { ItemType, PerkType } from '../types.js';

export const useInventoryStore = defineStore('inventory', () => {
    const items = ref<Array<ItemType | PerkType>>([]);
    
    const numItems = computed(() => {
        return Object.keys(items.value).length;
    });

    function addItem(item: ItemType) {
        let itemIndex = items.value.indexOf(item);
        if (itemIndex >= 0) {
            items.value[itemIndex].quantity++;
        } else {
            item.quantity = 1;
            items.value.push(item);
        }
    };

    function removeItem(item: ItemType) {
        let itemIndex = items.value.indexOf(item);
        if (items.value[itemIndex].quantity > 1) {
            items.value[itemIndex].quantity--;
        } else {
            items.value.splice(itemIndex, 1);
        }
    };

    function getItems() {
        let arr = [];
        for (let i = 0; i < items.value.length; i++) {
            if (typeof(items.value[i].character) === 'undefined') {
                arr.push(items.value[i]);
            }
        }
        return arr;
    }

    function getPerks() {
        let arr = [];
        for (let i = 0; i < items.value.length; i++) {
            if (typeof(items.value[i].character) !== 'undefined') {
                arr.push(items.value[i]);
            }
        }
        return arr;
    }

    return { items, numItems, addItem, removeItem, getItems, getPerks };
});