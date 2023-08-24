<script setup lang="ts">
    import LogoMain from './Navbar/LogoMain.vue';
    import NavItem from './Navbar/NavItem.vue';
</script>

<template>

    <nav class="navbar navbar-expand-lg">
        <div class="container">
            
            <RouterLink class="navbar-brand" to="/">
                <LogoMain />
            </RouterLink>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse flex-grow-0" id="navbarNav">
                <ul class="navbar-nav">
                    <NavItem 
                        link="/"
                        title="Dashboard" />
                </ul>
            </div>
        </div>
    </nav>

</template>