<template>
    <div class="container">
        <Header :membership="membership" />
        <RouterView />
    </div>
</template>

<script>
import { mapActions, mapState } from "pinia";
import Header from "./homepages/header.vue";
import { useMovieStore } from "../stores/movie";
export default {
    components: {
        Header,
    },
    methods: {
        ...mapActions(useMovieStore, ["fetchMovie"]),
    },
    computed: {
        ...mapState(useMovieStore, ["membership"]),
    },
    created() {
        this.fetchMovie();
    },
};
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Poppins:100,100italic,200,200italic,300,300italic,regular,italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic);
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
}
.container {
    background-color: #151515;
    height: 100%;
}
</style>
