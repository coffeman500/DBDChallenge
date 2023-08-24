<script setup lang="ts">
    import DashboardOverview from '../components/DashboardOverview.vue';
    import DashboardTabs from '../components/DashboardTabs.vue';
    import DashboardStore from '../components/DashboardStore.vue';
    import DashboardSurvivors from '../components/DashboardSurvivors.vue';
    import DashboardLoadout from '../components/DashboardLoadout.vue';

</script>

<template>

    <div id="main" class="container-fluid">
        <div class="row dashboard-row">
            
            <div class="col-12 col-lg-6 col-xl-8 col-xxl-9 dashboard-leftcol">
                
                <div class="dashboard-loadout">
                    
                    <DashboardLoadout />

                </div>

                <div class="left-bottom-tabs">
                    <ul class="nav nav-tabs" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link active" id="survivors-tab" data-bs-toggle="tab" data-bs-target="#survivors-tab-pane" type="button" role="tab" aria-controls="survivors-tab-pane" aria-selected="true">Survivors</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="store-tab" data-bs-toggle="tab" data-bs-target="#store-tab-pane" type="button" role="tab" aria-controls="store-tab-pane" aria-selected="false">Shop</button>
                        </li>
                    </ul>

                    <div class="tab-content left-bottom-tabs-wrapper">
                        <div class="tab-pane fade show active" id="survivors-tab-pane" role="tabpanel" tabindex="0">
                            <DashboardSurvivors />
                        </div>
                        <div class="tab-pane fade" id="store-tab-pane" role="tabpanel" tabindex="0">
                            <DashboardStore />
                        </div>
                    </div>       
                </div>

            </div>

            <div class="col-12 col-lg-6 col-xl-4 col-xxl-3 dashboard-rightcol">
                
                <div class="dashboard-overview text-center py-5">
                    <DashboardOverview />
                </div>

                <div class="dashboard-tabs">
                    <DashboardTabs />
                </div>

            </div>

        </div>
    </div>

</template>

<style scoped>

    #main {
        height: 100vh;
        overflow: hidden;
    }
    .dashboard-leftcol {
        display: flex;
        flex-direction: column;
    }
    .dashboard-rightcol {
        border-left: 1px solid rgba(255, 255, 255, .1);
    }
    .dashboard-loadout {
        margin-top: auto;
        text-align:center;
    }
    .dashboard-overview {
        height: 150px;
    }

    .left-bottom-tabs {
        margin-top: auto;
    }
    .left-bottom-tabs .nav-tabs {
        margin-bottom: 1rem;
    }
    .left-bottom-tabs-wrapper {
        min-height: 50vh;
    }

    .dashboard-tabs {
        height: calc(100vh - 150px);
    }

</style>
