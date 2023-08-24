<script setup lang="ts">
    import { inject } from 'vue';
    import { useBankStore } from '../stores/bank.js';
    
    const bank = useBankStore();

</script>

<template>

    <div class="bloodpoints-counter">
        <img class="icon-sm" src="/UI/Icons/HelpLoading/iconHelpLoading_bloodpoints.png" />
        <h2 class="bloodpoints-value">{{ bank.bp }}</h2>
    </div>

</template>

<style scoped>

    .bloodpoints-counter {
        display: flex;
        align-items:center; 
        justify-content: center;
    }
    .bloodpoints-counter h2 {
        margin: 0 0 0 .75rem;
        font-size: 3rem;
    }

</style>
