<style scoped>
@import "../public/detail/style.css";
</style>

<template>
    <div>
        <head>
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
            />
            <link
                rel="stylesheet"
                href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
            />
        </head>
        <header>
            <RouterLink to="/home" class="logo"
                ><img src="/detail/logo.png" alt=""
            /></RouterLink>
            <ul class="navigation">
                <li><RouterLink to="/home">HOME</RouterLink></li>
                <li v-if="movieById.user.MemberId">
                    <RouterLink to="/home#wishlist">WISHLIST</RouterLink>
                </li>
                <li><RouterLink to="/account">PROFILE'S</RouterLink></li>
            </ul>
            <div class="search">
                <input type="text" placeholder="search" />
                <i class="fa fa-search" aria-hidden="true"></i>
            </div>
        </header>
        <div class="shadow">
            <div class="banner">
                <img
                    :src="`/images/${movieById.data.location}/${movieById.data.image}.jpg`"
                    class="bg"
                />
                <div class="content">
                    <img
                        :src="`/detail/logo/${movieById.data.trailer}.png`"
                        class="movieTitle"
                    />
                    <h4>
                        <span>{{ movieById.data.releasedYear }}</span>
                        <span
                            ><i>{{ movieById.data.minimumAge }}</i></span
                        >
                        <span>{{ movieById.data.duration }}</span>
                        <span>{{ movieById.data.genre }}</span>
                    </h4>
                    <p>{{ movieById.data.description }}</p>
                    <div class="button">
                        <a href="#"
                            ><i class="fa fa-play" aria-hidden="true"></i>
                            Play</a
                        >
                        <a
                            v-if="movieById.user.MemberId"
                            href="#"
                            @click.prevent="wishlist(movieById.data.id)"
                            ><i
                                :class="
                                    movieById.wishlist
                                        ? 'fa fa-minus'
                                        : 'fa fa-plus'
                                "
                                aria-hidden="true"
                            ></i>
                            Wishlist</a
                        >
                    </div>
                </div>
                <a class="play" @click="video()"
                    ><img src="/detail/play.png" alt="play" />Watch Trailer</a
                >
            </div>
            <div class="trailer">
                <video
                    :src="`/detail/trailer/${movieById.data.trailer}.mp4`"
                    controls="true"
                ></video>
                <img src="/detail/close.png" class="close" @click="video()" />
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useMovieStore } from "../stores/movie";
import { RouterLink } from "vue-router";

export default {
    methods: {
        ...mapActions(useMovieStore, ["fetchMovieById", "wishlistAdd"]),
        video() {
            const trailer = document.querySelector(".trailer");
            const video = document.querySelector("video");
            trailer.classList.toggle("show");
            video.currentTime = 0;
            video.pause();
        },
        wishlist(id) {
            this.wishlistAdd(id);
        },
    },
    computed: {
        ...mapState(useMovieStore, ["movieById"]),
    },
    created() {
        this.fetchMovieById(this.$route.params.id);
    },
};
</script>

<style scoped>
@import "../../public/detail/style.css";
</style>
