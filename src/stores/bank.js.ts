import { defineStore } from 'pinia';
import  { ref } from 'vue';

export const useBankStore = defineStore('bank', () => {
    const bp = ref(1000000);

    function canAfford(n: number): boolean {
        return n <= bp.value;
    }

    function add(n: number): void {
        bp.value += n;
    };

    function spend(n: number): boolean {
        if (!canAfford(n)) return false;
        
        bp.value -= n;
        return true;
    };

    function set(n: number): void {
        bp.value = n;
    };

    return { bp, canAfford, add, spend, set };
});