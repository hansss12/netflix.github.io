<template>
    <section id="home" class="iq-main-slider p-0">
        <Carousel id="gallery" :items-to-show="1" :wrap-around="false">
            <Slide
                v-for="(slide, i) in slider"
                :key="slide.id"
                id="home-slider"
                class="slider m-0 p-0"
            >
                <div class="carousel__item" style="width: inherit">
                    <div class="slide slick-bg" :class="`s-bg-${i + 1}`">
                        <div class="container-fluid position-relative h-100">
                            <div class="slider-inner h-100">
                                <div class="row align-items-center h--100">
                                    <div class="col-xl-6 col-lg-12 col-md-12">
                                        <a href="javascript:void(0)">
                                            <div
                                                class="channel-logo"
                                                data-delay-in="0.5"
                                            >
                                                <img
                                                    src="../../public/images/logo.png"
                                                    class="c-logo"
                                                    alt=""
                                                />
                                            </div>
                                        </a>
                                        <h1
                                            class="slider-text big-title title text-uppercase"
                                            data-delay-in="0.6"
                                        >
                                            {{ slide.name }}
                                        </h1>
                                        <div
                                            class="d-flex flex-wrap align-items-center fadeInLeft animated"
                                            data-animation-in="fadeInLeft"
                                            style="opacity: 1"
                                        >
                                            <div
                                                class="slider-ratting d-flex align-items-center mr-4 mt-2 mt-md-3"
                                            >
                                                <ul
                                                    class="ratting-start p-0 m-0 list-inline text-primary d-flex align-items-center justify-content-left"
                                                >
                                                    <li>
                                                        <i
                                                            class="fa fa-star"
                                                        ></i>
                                                    </li>
                                                    <li>
                                                        <i
                                                            class="fa fa-star"
                                                        ></i>
                                                    </li>
                                                    <li>
                                                        <i
                                                            class="fa fa-star"
                                                        ></i>
                                                    </li>
                                                    <li>
                                                        <i
                                                            class="fa fa-star"
                                                        ></i>
                                                    </li>
                                                    <li>
                                                        <i
                                                            class="fa fa-star-half"
                                                        ></i>
                                                    </li>
                                                </ul>
                                                <span class="text-white ml-2">{{
                                                    slide.rating
                                                }}</span>
                                            </div>
                                            <div
                                                class="d-flex align-items-center mt-2 mt-md-3"
                                            >
                                                <span
                                                    class="badge badge-secondary p-2"
                                                    >{{
                                                        slide.minimumAge
                                                    }}
                                                    +</span
                                                >
                                                <span class="ml-3">{{
                                                    slide.duration
                                                }}</span>
                                            </div>
                                        </div>
                                        <p style="text-align: start">
                                            {{ slide.description }}
                                        </p>
                                        <div
                                            class="trending-list"
                                            data-delay-in="1.2"
                                        >
                                            <div
                                                class="text-primary title starring"
                                                style="text-align: start"
                                            >
                                                Starring :
                                                <span class="text-body">{{
                                                    slide.actress
                                                }}</span>
                                            </div>
                                            <div
                                                class="text-primary title genres"
                                            >
                                                Genres :
                                                <span class="text-body">{{
                                                    slide.genre
                                                }}</span>
                                            </div>
                                            <div class="text-primary title tag">
                                                Tags :
                                                <span class="text-body">{{
                                                    slide.tags
                                                }}</span>
                                            </div>
                                        </div>
                                        <div
                                            class="d-flex align-items-center r-mb-23 mt-4"
                                            data-delay-in="1.2"
                                        >
                                            <a
                                                href="#"
                                                class="btn btn-hover iq-button"
                                                ><i class="fa fa-play mr-3"></i
                                                >Play Now</a
                                            >
                                            <!-- ini harus dirubah -->
                                            <RouterLink
                                                :to="`/detail/${slide.id}`"
                                                class="btn btn-link"
                                                >More Details</RouterLink
                                            >
                                        </div>
                                    </div>
                                </div>
                                <div
                                    class="col-xl-5 col-lg-12 col-md-12 trailor-video"
                                >
                                    <!-- ini harus dirubah -->
                                    <a href="#" class="video-open playbtn">
                                        <img
                                            src="../../assets/play.png"
                                            class="play"
                                            alt=""
                                        />
                                        <span class="w-trailor"
                                            >Watch Trailer</span
                                        >
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Slide>

            <template #addons>
                <Navigation />
                <Pagination />
            </template>
        </Carousel>
    </section>
</template>

<script>
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";
// import playImg from "images/play.png";

import "vue3-carousel/dist/carousel.css";
export default {
    data() {},
    props: ["slider"],
    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation,
    },
};
</script>

<style scoped>
@import "../../public/css/all.min.css";
@import "../../public/css/animate.min.css";
@import "../../public/css/bootstrap.min.css";
@import "../../public/css/magnific-popup.css";
@import "../../public/css/owl.carousel.min.css";
@import "../../public/css/select2-bootstrap4.min.css";
@import "../../public/css/select2.min.css";
@import "../../public/css/slick-animation.css";
@import "../../public/css/slick-theme.css";
@import "../../public/css/slick.css";
@import "../../public/style.css";
</style>

<style>
.carousel__icon {
    fill: #e50914 !important;
}
</style>
