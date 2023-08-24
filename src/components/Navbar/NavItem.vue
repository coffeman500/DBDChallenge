<script setup lang="ts">

    const props = defineProps<{
        wrapperClasses?: string,
        linkClasses?: string,
        link: string,
        title: string,
    }>();

</script>

<template>

    <li :class="[{ wrapperClasses }, 'nav-item']">
        <RouterLink :class="[{ linkClasses }, 'nav-link']" :to="link">{{ title }}</RouterLink>
    </li>

</template>