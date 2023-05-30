<template>
    <div class="container">
        <span class="x-icon">&#10006;</span>
        <div class="content">
            <div class="left">
                <div class="poster-img">
                    <img :src="image_path + tmdbById.poster_path" alt="" />
                </div>
            </div>
            <div class="right">
                <h1 style="color: white">{{ tmdbById.title }}</h1>
                <h3 style="color: rgba(255, 0, 0, 1)">
                    {{ tmdbById.tagline }}
                </h3>
                <div class="single-info-container">
                    <div class="single-info" style="color: white">
                        <span>Language: </span>
                        <span>{{ tmdbById.spoken_languages[0].name }}</span>
                    </div>
                    <div class="single-info" style="color: white">
                        <span>Length: </span>
                        <span>{{ tmdbById.runtime }} minutes</span>
                    </div>
                    <div class="single-info" style="color: white">
                        <span>Rate: </span>
                        <span>{{ tmdbById.vote_average }} / 10</span>
                    </div>
                    <div class="single-info" style="color: white">
                        <span>Budget: </span>
                        <span>{{ tmdbById.budget }}</span>
                    </div>
                    <div class="single-info" style="color: white">
                        <span>Release Date: </span>
                        <span>{{ tmdbById.release_date }}</span>
                    </div>
                </div>
                <div class="genres" style="color: white">
                    <h2>Genres</h2>
                    <ul>
                        <li v-for="el in tmdbById.genres">{{ el.name }}</li>
                    </ul>
                </div>
                <div class="overview" style="color: white">
                    <h2>Overview</h2>
                    <p>
                        {{ tmdbById.overview }}
                    </p>
                </div>
                <div class="trailer">
                    <h2>Trailer</h2>
                    <iframe
                        width="560"
                        height="315"
                        :src="tmdbTrailer"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    ></iframe>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useMovieStore } from "../stores/movie";
export default {
    data() {
        return {
            image_path: `https://image.tmdb.org/t/p/w1280`,
        };
    },
    methods: {
        ...mapActions(useMovieStore, ["tmdbMovieById", "tmdbMovieTrailer"]),
    },
    computed: {
        ...mapState(useMovieStore, ["tmdbById", "tmdbTrailer"]),
    },
    created() {
        this.tmdbMovieById(this.$route.params.id);
        this.tmdbMovieTrailer(this.$route.params.id);
    },
};
</script>

<style scoped>
::-webkit-scrollbar {
    display: none;
}
.content {
    display: flex;
    align-items: flex-start;
    gap: 3rem;
    width: 1200px;
    padding-top: 10rem;
}
.content .left .single-info {
    color: white;
    font-size: 1rem;
    padding: 0.5rem 0;
}
.poster-img {
    width: 300px;
    height: 400px;
    overflow: hidden;
    border-radius: 0.5rem;
    box-shadow: 0 0 0.5rem rgba(255, 0, 0, 1);
    border: 1px solid rgba(255, 0, 0, 1);
}
.poster-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.single-info-container {
    width: 200px;
}
.right > *:not(h1) {
    margin: 1rem 0;
}
.trailer iframe {
    border: 2px solid rgba(255, 0, 0, 1);
    box-shadow: 0 0 0.5rem rgba(255, 0, 0, 1);
    border-radius: 0.5rem;
    max-width: 400px;
    width: 100%;
    height: 200px;
}
.x-icon {
    font-size: 2rem;
    position: absolute;
    top: 100px;
    right: 100px;
    cursor: pointer;
    user-select: none;
}
.x-icon:hover {
    transform: scale(1.3);
}
.x-icon:active {
    transform: scale(1);
}

.show-popup {
    transform: scale(1);
}

.change-color {
    color: #ff0000;
}

@media only screen and (max-width: 800px) {
    .popup-container * {
        padding: 0;
    }
    .popup-container {
        padding: 2rem;
    }
    .content {
        flex-direction: column;
        margin-top: 50rem;
    }
    .x-icon {
        top: 10px;
        right: 20px;
    }
}
</style>
