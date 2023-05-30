<template>
    <!-- main content starts  -->
    <div class="main-content">
        <!-- favorite section starts   -->
        <section id="iq-favorites">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-12 overflow-hidden">
                        <div
                            class="iq-main-header d-flex align-items-center justify-content-between"
                        >
                            <h4 class="main-title">Top Picks For You</h4>
                            <a href="#" class="iq-view-all">View All</a>
                        </div>
                        <div class="favorite-contens">
                            <Carousel
                                id="thumbnails"
                                :items-to-show="4"
                                :wrap-around="true"
                                v-model="currentSlide"
                                ref="carousel"
                            >
                                <Slide
                                    class="slide-item"
                                    v-for="(element, i) in favorite"
                                >
                                    <div
                                        class="carousel__item"
                                        @click="slideTo(i)"
                                    >
                                        <!-- slide item 1 -->
                                        <div
                                            class="block-images position-relative"
                                        >
                                            <div class="img-box">
                                                <img
                                                    :src="`/images/favorite/f${
                                                        i + 1
                                                    }.jpg`"
                                                    class="img-fluid"
                                                    alt=""
                                                />
                                            </div>
                                            <div class="block-description">
                                                <h6
                                                    class="iq-title"
                                                    style="
                                                        margin: 0 !important;
                                                        text-align: start !important;
                                                    "
                                                >
                                                    <!-- ini harus diganti -->
                                                    <RouterLink
                                                        :to="`/detail/${element.id}`"
                                                        >{{ element.name }}
                                                    </RouterLink>
                                                </h6>
                                                <div
                                                    class="movie-time d-flex align-items-center my-2"
                                                >
                                                    <div
                                                        class="badge badge-secondary p-1 mr-2"
                                                    >
                                                        {{
                                                            element.minimumAge
                                                        }}+
                                                    </div>
                                                    <span class="text-white">{{
                                                        element.duration
                                                    }}</span>
                                                </div>
                                                <div class="hover-buttons">
                                                    <span
                                                        class="btn btn-hover iq-button"
                                                    >
                                                        <i
                                                            class="fa fa-play mr-1"
                                                        ></i>
                                                        Play Now
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="block-social-info">
                                                <ul
                                                    class="list-inline p-0 m-0 music-play-lists"
                                                >
                                                    <li class="share">
                                                        <span
                                                            ><i
                                                                class="fa fa-share-alt"
                                                            ></i
                                                        ></span>
                                                        <div class="share-box">
                                                            <div
                                                                class="d-flex align-items-center"
                                                            >
                                                                <a
                                                                    href="#"
                                                                    class="share-ico"
                                                                    ><i
                                                                        class="fa fa-share-alt"
                                                                    ></i
                                                                ></a>
                                                                <a
                                                                    href="#"
                                                                    class="share-ico"
                                                                    ><i
                                                                        class="fa fa-youtube"
                                                                    ></i
                                                                ></a>
                                                                <a
                                                                    href="#"
                                                                    class="share-ico"
                                                                    ><i
                                                                        class="fa fa-instagram"
                                                                    ></i
                                                                ></a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <span
                                                            ><i
                                                                class="fa fa-heart"
                                                            ></i
                                                        ></span>
                                                        <span class="count-box"
                                                            >99+</span
                                                        >
                                                    </li>
                                                    <li>
                                                        <span
                                                            ><i
                                                                class="fa fa-plus"
                                                            ></i
                                                        ></span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </Slide>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- favourite section ends -->

        <!-- upcoming contents section starts  -->
        <section id="iq-upcoming-movie" style="margin-top: 2rem">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-12 overflow-hidden">
                        <div
                            class="iq-main-header d-flex align-items-center justify-content-between"
                        >
                            <h4 class="main-title">Popular Movies</h4>
                            <a href="#" class="iq-view-all">View All</a>
                        </div>
                        <div class="favorite-contens">
                            <Carousel
                                id="gallery"
                                :items-to-show="1"
                                :wrap-around="false"
                                v-model="currentSlidePop"
                            >
                                <Slide
                                    class="slide-item"
                                    v-for="(element, i) in popular"
                                >
                                    <div class="carousel__item">
                                        <div
                                            class="block-image position-relative"
                                        >
                                            <div class="img-box">
                                                <img
                                                    :src="`/images/popular/u${
                                                        i + 1
                                                    }.jpg`"
                                                    class="img-fluid"
                                                    alt=""
                                                />
                                            </div>

                                            <div class="block-description">
                                                <img
                                                    :src="`/detail/logo/${element.trailer}.png`"
                                                    class="movieTitle"
                                                    style="
                                                        max-width: 500px;
                                                        min-width: 15rem;
                                                        margin-bottom: 2rem;
                                                    "
                                                />
                                                <h6 class="iq-title">
                                                    <!-- ini harus diganti -->
                                                    <RouterLink
                                                        :to="`/detail/${element.id}`"
                                                        style="
                                                            margin: 0 !important;
                                                        "
                                                        >{{ element.name }}
                                                    </RouterLink>
                                                </h6>
                                                <div
                                                    class="movie-time d-flex align-items-center my-2"
                                                    style="
                                                        position: relative;
                                                        left: 40%;
                                                    "
                                                >
                                                    <div
                                                        class="badge badge-secondary p-1 mr-2"
                                                    >
                                                        {{
                                                            element.minimumAge
                                                        }}+
                                                    </div>
                                                    <span class="text-white">{{
                                                        element.duration
                                                    }}</span>
                                                </div>
                                                <div class="hover-buttons">
                                                    <span
                                                        class="btn btn-hover iq-button"
                                                    >
                                                        <i
                                                            class="fa fa-play mr-1"
                                                        ></i>
                                                        Play Now
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Slide>
                            </Carousel>

                            <Carousel
                                id="thumbnails"
                                :items-to-show="4"
                                :wrap-around="true"
                                v-model="currentSlidePop"
                                ref="carousel"
                            >
                                <Slide
                                    class="slide-item"
                                    v-for="(element, i) in popular"
                                >
                                    <div
                                        class="carousel__item"
                                        @click="slideToPop(i)"
                                    >
                                        <!-- slide item 1 -->
                                        <div
                                            class="block-images position-relative"
                                        >
                                            <div class="img-box">
                                                <img
                                                    :src="`/images/popular/u${
                                                        i + 1
                                                    }.jpg`"
                                                    class="img-fluid"
                                                    alt=""
                                                />
                                            </div>
                                            <div class="block-description">
                                                <h6
                                                    class="iq-title"
                                                    style="
                                                        margin: 0 !important;
                                                        text-align: start !important;
                                                    "
                                                >
                                                    <!-- ini harus diganti -->
                                                    <RouterLink
                                                        :to="`/detail/${element.id}`"
                                                        >{{ element.name }}
                                                    </RouterLink>
                                                </h6>
                                                <div
                                                    class="movie-time d-flex align-items-center my-2"
                                                >
                                                    <div
                                                        class="badge badge-secondary p-1 mr-2"
                                                    >
                                                        {{
                                                            element.minimumAge
                                                        }}+
                                                    </div>
                                                    <span class="text-white">{{
                                                        element.duration
                                                    }}</span>
                                                </div>
                                                <div class="hover-buttons">
                                                    <span
                                                        class="btn btn-hover iq-button"
                                                    >
                                                        <i
                                                            class="fa fa-play mr-1"
                                                        ></i>
                                                        Play Now
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="block-social-info">
                                                <ul
                                                    class="list-inline p-0 m-0 music-play-lists"
                                                >
                                                    <li class="share">
                                                        <span
                                                            ><i
                                                                class="fa fa-share-alt"
                                                            ></i
                                                        ></span>
                                                        <div class="share-box">
                                                            <div
                                                                class="d-flex align-items-center"
                                                            >
                                                                <a
                                                                    href="#"
                                                                    class="share-ico"
                                                                    ><i
                                                                        class="fa fa-share-alt"
                                                                    ></i
                                                                ></a>
                                                                <a
                                                                    href="#"
                                                                    class="share-ico"
                                                                    ><i
                                                                        class="fa fa-youtube"
                                                                    ></i
                                                                ></a>
                                                                <a
                                                                    href="#"
                                                                    class="share-ico"
                                                                    ><i
                                                                        class="fa fa-instagram"
                                                                    ></i
                                                                ></a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <span
                                                            ><i
                                                                class="fa fa-heart"
                                                            ></i
                                                        ></span>
                                                        <span class="count-box"
                                                            >99+</span
                                                        >
                                                    </li>
                                                    <li>
                                                        <span
                                                            ><i
                                                                class="fa fa-plus"
                                                            ></i
                                                        ></span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </Slide>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- upcoming contents section ends -->

        <!-- top ten trending  -->

        <section id="iq-upcoming-movie" style="margin-top: 2rem">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-12 overflow-hidden">
                        <div
                            class="iq-main-header d-flex align-items-center justify-content-between"
                        >
                            <h4 class="main-title">Movie Series</h4>
                            <a href="#" class="iq-view-all">View All</a>
                        </div>
                        <Carousel
                            id="thumbnails top-ten-slider-nav"
                            class="list-inline p-0 m-0 d-flex align-items-center"
                            :items-to-show="4"
                            :wrap-around="true"
                            v-model="currentSlide"
                            ref="carousel"
                        >
                            <Slide
                                class="slide-item"
                                v-for="(element, i) in trending"
                            >
                                <div class="carousel__item">
                                    <!-- slide item 1 -->
                                    <div class="block-images position-relative">
                                        <div class="img-box">
                                            <img
                                                :src="`/images/${
                                                    element.location
                                                }/0${i + 1}.jpg`"
                                                class="img-fluid"
                                                alt=""
                                            />
                                        </div>
                                        <div class="block-description">
                                            <h6
                                                class="iq-title"
                                                style="
                                                    margin: 0 !important;
                                                    text-align: start !important;
                                                    font-size: 1rem;
                                                    position: relative;
                                                    top: 0%;
                                                    left: 0%;
                                                "
                                            >
                                                <a>{{ element.name }}</a>
                                            </h6>
                                            <div
                                                class="movie-time d-flex align-items-center my-2"
                                            >
                                                <div
                                                    class="badge badge-secondary p-1 mr-2"
                                                >
                                                    {{ element.minimumAge }}+
                                                </div>
                                                <span class="text-white">{{
                                                    element.duration
                                                }}</span>
                                            </div>
                                            <div class="hover-buttons">
                                                <span
                                                    class="btn btn-hover iq-button"
                                                >
                                                    <i
                                                        class="fa fa-play mr-1"
                                                    ></i>
                                                    Play Now
                                                </span>
                                            </div>
                                        </div>
                                        <div class="block-social-info">
                                            <ul
                                                class="list-inline p-0 m-0 music-play-lists"
                                            >
                                                <li class="share">
                                                    <span
                                                        ><i
                                                            class="fa fa-share-alt"
                                                        ></i
                                                    ></span>
                                                    <div class="share-box">
                                                        <div
                                                            class="d-flex align-items-center"
                                                        >
                                                            <a
                                                                href="#"
                                                                class="share-ico"
                                                                ><i
                                                                    class="fa fa-share-alt"
                                                                ></i
                                                            ></a>
                                                            <a
                                                                href="#"
                                                                class="share-ico"
                                                                ><i
                                                                    class="fa fa-youtube"
                                                                ></i
                                                            ></a>
                                                            <a
                                                                href="#"
                                                                class="share-ico"
                                                                ><i
                                                                    class="fa fa-instagram"
                                                                ></i
                                                            ></a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <span
                                                        ><i
                                                            class="fa fa-heart"
                                                        ></i
                                                    ></span>
                                                    <span class="count-box"
                                                        >99+</span
                                                    >
                                                </li>
                                                <li>
                                                    <span
                                                        ><i
                                                            class="fa fa-plus"
                                                        ></i
                                                    ></span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </Slide>
                        </Carousel>
                    </div>
                </div>
            </div>
        </section>

        <section id="iq-suggested" class="s-margin">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-12 overflow-hidden">
                        <div
                            class="iq-main-header d-flex align-items-center justify-content-between"
                        >
                            <h4 class="main-title">Suggested Sports</h4>
                            <a href="#" class="iq-view-all">View All</a>
                        </div>
                        <div class="favorite-contens">
                            <Carousel
                                id="thumbnails"
                                :items-to-show="4"
                                :wrap-around="true"
                                v-model="currentSlide"
                                ref="carousel"
                            >
                                <Slide
                                    class="slide-item"
                                    v-for="(element, i) in sport"
                                >
                                    <div class="carousel__item">
                                        <!-- slide item 1 -->
                                        <div
                                            class="block-images position-relative"
                                        >
                                            <div class="img-box">
                                                <img
                                                    :src="`/images/${element.location}/${element.image}.jpg`"
                                                    class="img-fluid"
                                                    alt=""
                                                />
                                            </div>
                                            <div class="block-description">
                                                <h6
                                                    class="iq-title"
                                                    style="
                                                        margin: 0 !important;
                                                        text-align: start !important;
                                                    "
                                                >
                                                    <!-- ini harus diganti -->
                                                    <RouterLink
                                                        :to="`/detail/${element.id}`"
                                                        >{{ element.name }}
                                                    </RouterLink>
                                                </h6>
                                                <div
                                                    class="movie-time d-flex align-items-center my-2"
                                                >
                                                    <div
                                                        class="badge badge-secondary p-1 mr-2"
                                                    >
                                                        {{
                                                            element.minimumAge
                                                        }}+
                                                    </div>
                                                    <span class="text-white">{{
                                                        element.duration
                                                    }}</span>
                                                </div>
                                                <div class="hover-buttons">
                                                    <span
                                                        class="btn btn-hover iq-button"
                                                    >
                                                        <i
                                                            class="fa fa-play mr-1"
                                                        ></i>
                                                        Play Now
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="block-social-info">
                                                <ul
                                                    class="list-inline p-0 m-0 music-play-lists"
                                                >
                                                    <li class="share">
                                                        <span
                                                            ><i
                                                                class="fa fa-share-alt"
                                                            ></i
                                                        ></span>
                                                        <div class="share-box">
                                                            <div
                                                                class="d-flex align-items-center"
                                                            >
                                                                <a
                                                                    href="#"
                                                                    class="share-ico"
                                                                    ><i
                                                                        class="fa fa-share-alt"
                                                                    ></i
                                                                ></a>
                                                                <a
                                                                    href="#"
                                                                    class="share-ico"
                                                                    ><i
                                                                        class="fa fa-youtube"
                                                                    ></i
                                                                ></a>
                                                                <a
                                                                    href="#"
                                                                    class="share-ico"
                                                                    ><i
                                                                        class="fa fa-instagram"
                                                                    ></i
                                                                ></a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <span
                                                            ><i
                                                                class="fa fa-heart"
                                                            ></i
                                                        ></span>
                                                        <span class="count-box"
                                                            >99+</span
                                                        >
                                                    </li>
                                                    <li>
                                                        <span
                                                            ><i
                                                                class="fa fa-plus"
                                                            ></i
                                                        ></span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </Slide>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- parallax section  -->
        <section id="parallex" class="parallax-window" style="margin-top: 2rem">
            <div class="container-fluid h-100">
                <div
                    class="row align-items-center justify-content-center h-100 parallaxt-details"
                >
                    <div class="col-lg-4 r-mb-23">
                        <div class="text-left" v-for="element in parallax">
                            <a href="javascript:void(0)">
                                <h1 class="parallax-heading">
                                    {{ element.name }}
                                </h1>
                            </a>
                            <div
                                class="parallax-ratting d-flex align-items-center mt-3 mb-3"
                            >
                                <ul
                                    class="ratting-start p-o m-0 list-inline text-primary d-flex align-items-center justify-content-left"
                                >
                                    <li>
                                        <a href="#" class="text-primary"
                                            ><i class="fa fa-star"></i
                                        ></a>
                                    </li>
                                    <li>
                                        <a href="#" class="text-primary"
                                            ><i class="pl-2 fa fa-star"></i
                                        ></a>
                                    </li>
                                    <li>
                                        <a href="#" class="text-primary"
                                            ><i class="pl-2 fa fa-star"></i
                                        ></a>
                                    </li>
                                    <li>
                                        <a href="#" class="text-primary"
                                            ><i class="pl-2 fa fa-star"></i
                                        ></a>
                                    </li>
                                    <li>
                                        <a href="#" class="text-primary"
                                            ><i
                                                class="pl-2 fa fa-star-half-o"
                                            ></i
                                        ></a>
                                    </li>
                                </ul>
                                <span class="text-white ml-3"
                                    >{{ element.rating }}.8(Imbd)</span
                                >
                            </div>
                            <div
                                class="movie-time d-flex align-items-center mb-3"
                            >
                                <div class="badge badge-secondary p-1 mr-2">
                                    {{ element.minimumAge }}+
                                </div>
                                <span class="text-white">{{
                                    element.duration
                                }}</span>
                            </div>
                            <p>
                                {{ element.description }}
                            </p>
                            <div class="parallax-buttons">
                                <a href="#" class="btn btn-hover">Play Now</a>
                                <!-- ini harus diubah -->
                                <RouterLink
                                    :to="`/detail/${element.id}`"
                                    class="btn btn-link"
                                    >More Details
                                </RouterLink>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-8">
                        <div class="parallax-img">
                            <a href="#"
                                ><img
                                    src="../../assets/images/parallax/avatar.jpg"
                                    alt=""
                                    class="img-fluid w-100"
                            /></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- wishList -->
        <section id="iq-suggested" class="s-margin" v-if="showWishlist">
            <div class="container-fluid" id="wishlist">
                <div class="row">
                    <div class="col-sm-12 overflow-hidden">
                        <div
                            class="iq-main-header d-flex align-items-center justify-content-between"
                        >
                            <h4 class="main-title">WISHLIST</h4>
                            <a href="#" class="iq-view-all">View All</a>
                        </div>
                        <div class="favorite-contens">
                            <Carousel
                                id="thumbnails"
                                :items-to-show="4"
                                :wrap-around="true"
                                v-model="currentSlide"
                                ref="carousel"
                            >
                                <Slide
                                    class="slide-item"
                                    v-for="(element, i) in wishList"
                                >
                                    <div class="carousel__item">
                                        <!-- slide item 1 -->
                                        <div
                                            class="block-images position-relative"
                                        >
                                            <div class="img-box">
                                                <img
                                                    :src="`/images/${element.Movie.location}/${element.Movie.image}.jpg`"
                                                    class="img-fluid"
                                                    alt=""
                                                />
                                            </div>
                                            <div class="block-description">
                                                <h6
                                                    class="iq-title"
                                                    style="
                                                        margin: 0 !important;
                                                        text-align: start !important;
                                                    "
                                                >
                                                    <!-- ini harus diganti -->
                                                    <RouterLink
                                                        :to="`/detail/${element.Movie.id}`"
                                                        >{{
                                                            element.Movie.name
                                                        }}
                                                    </RouterLink>
                                                </h6>
                                                <div
                                                    class="movie-time d-flex align-items-center my-2"
                                                >
                                                    <div
                                                        class="badge badge-secondary p-1 mr-2"
                                                    >
                                                        {{
                                                            element.Movie
                                                                .minimumAge
                                                        }}+
                                                    </div>
                                                    <span class="text-white">{{
                                                        element.Movie.duration
                                                    }}</span>
                                                </div>
                                                <div class="hover-buttons">
                                                    <span
                                                        class="btn btn-hover iq-button"
                                                    >
                                                        <i
                                                            class="fa fa-play mr-1"
                                                        ></i>
                                                        Play Now
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="block-social-info">
                                                <ul
                                                    class="list-inline p-0 m-0 music-play-lists"
                                                >
                                                    <li class="share">
                                                        <span
                                                            ><i
                                                                class="fa fa-share-alt"
                                                            ></i
                                                        ></span>
                                                        <div class="share-box">
                                                            <div
                                                                class="d-flex align-items-center"
                                                            >
                                                                <a
                                                                    href="#"
                                                                    class="share-ico"
                                                                    ><i
                                                                        class="fa fa-share-alt"
                                                                    ></i
                                                                ></a>
                                                                <a
                                                                    href="#"
                                                                    class="share-ico"
                                                                    ><i
                                                                        class="fa fa-youtube"
                                                                    ></i
                                                                ></a>
                                                                <a
                                                                    href="#"
                                                                    class="share-ico"
                                                                    ><i
                                                                        class="fa fa-instagram"
                                                                    ></i
                                                                ></a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <span
                                                            ><i
                                                                class="fa fa-heart"
                                                            ></i
                                                        ></span>
                                                        <span class="count-box"
                                                            >99+</span
                                                        >
                                                    </li>
                                                    <li>
                                                        <span
                                                            ><i
                                                                class="fa fa-plus"
                                                            ></i
                                                        ></span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </Slide>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import { Carousel, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";
export default {
    props: ["favorite", "popular", "sport", "trending", "parallax", "wishList"],
    data() {
        return {
            showWishlist: true,
            currentSlide: 0,
            currentSlidePop: 0,
            currentSlideTren: 0,
        };
    },
    methods: {
        show() {
            if (this.wishList.length == 0) {
                this.showWishlist = true;
            }
        },
        slideTo(val) {
            this.currentSlide = val;
        },
        slideToPop(val) {
            this.currentSlidePop = val;
        },
        slideToTren(val) {
            this.currentSlideTren = val;
        },
    },
    created() {
        this.show();
    },
    name: "Gallery",
    components: {
        Carousel,
        Slide,
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
