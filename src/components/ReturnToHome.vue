<!-- 10/11-  Bouton retour à la page d'accueil  -->
<template>
    <div>
        <router-link to="/">
            <md-button class="md-icon-button md-raised md-accent returnHome">
                <md-icon class="leave">highlight_off</md-icon>
            </md-button>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'ReturnToHome',
}
</script>

<style scoped lang="scss">
.leave {
    font-size: 20px;
}
@media screen and (max-width: 640px) {
    .returnHome {
        display: none;
    }
}
</style>
