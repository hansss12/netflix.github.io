<template>
    <div class="home-body">
        <Header :membership="membership" />
        <Slider :slider="slider" />
        <Content
            :favorite="favorite"
            :popular="popular"
            :sport="sport"
            :trending="trending"
            :parallax="parallax"
            :wishList="wishList"
        />
        <Footer />
    </div>
</template>

<script>
import Header from "./homepages/header.vue";
import Slider from "./homepages/slider.vue";
import Footer from "./homepages/footer.vue";
import Content from "./homepages/content.vue";
import { mapActions, mapState } from "pinia";
import { useMovieStore } from "../stores/movie";
import "../jquery.js";
export default {
    components: {
        Header,
        Slider,
        Footer,
        Content,
    },
    computed: {
        ...mapState(useMovieStore, [
            "slider",
            "membership",
            "favorite",
            "popular",
            "sport",
            "trending",
            "parallax",
            "wishList",
        ]),
    },
    async created() {
        await this.fetchMovie();
    },
    methods: {
        ...mapActions(useMovieStore, ["fetchMovie"]),
    },
    mounted() {
        // $(document).ready(function () {
        function activaTav(pill) {
            $(pill).addClass("active show");
        }

        // sticky header anmation and height
        function headerHeight() {
            var height = $("#main-header").height();
            $(".iq-height").css("height", height + "px");
        }

        $(function () {
            var header = $("#main-header"),
                yOffset = 0,
                triggerPoint = 80;
            headerHeight();
            $(window).resize(headerHeight);
            $(window).on("scroll", function () {
                yOffset = $(window).scrollTop();

                if (yOffset >= triggerPoint) {
                    header.addClass("menu-sticky animated slideDown");
                } else {
                    header.removeClass("menu-sticky animated slideDown");
                }
            });
        });

        // header menu dropdown
        $("[data-toggle=more-toggle]").on("click", function () {
            $(this).next().toggleClass("show");
        });

        $(document).on("click", function (e) {
            let myTargetElement = e.target;
            let selector, mainElement;
            if (
                $(myTargetElement).hasClass("search-toggle") ||
                $(myTargetElement).parent().hasClass("search-toggle") ||
                $(myTargetElement).parent().parent().hasClass("search-toggle")
            ) {
                if ($(myTargetElement).hasClass("search-toggle")) {
                    selector = $(myTargetElement).parent();
                    mainElement = $(myTargetElement);
                } else if (
                    $(myTargetElement).parent().hasClass("search-toggle")
                ) {
                    selector = $(myTargetElement).parent().parent();
                    mainElement = $(myTargetElement).parent();
                } else if (
                    $(myTargetElement)
                        .parent()
                        .parent()
                        .hasClass("search-toggle")
                ) {
                    selector = $(myTargetElement).parent().parent().parent();
                    mainElement = $(myTargetElement).parent().parent();
                }
                if (
                    !mainElement.hasClass("active") &&
                    $(".navbar-list li").find(".active")
                ) {
                    $(".navbar-right li").removeClass(".iq-show");
                    $(".navbar-right li .search-toggle").removeClass("active");
                }

                selector.toggleClass("iq-show");
                mainElement.toggleClass("active");
                e.preventDefault();
            } else if ($(myTargetElement).is("search-input")) {
            } else {
                $(".navbar-right li").removeClass(".iq-show");
                $(".navbar-right li .search-toggle").removeClass("active");
            }
        });
        // sampe sini
        $(document).on("click", function (event) {
            var $trigger = $(".main-header .navbar");
            if (
                $trigger !== event.target &&
                !$trigger.has(event.target).length
            ) {
                $(".main-header .navbar-collapse").collapse("hide");
                $("body").removeClass("nav-open");
            }
        });
        $(".c-toggler").on("click", function () {
            $("body").addClass("nav-open");
        });
    },
};
</script>
<style scoped>
@import "../public/css/all.min.css";
@import "../public/css/animate.min.css";
@import "../public/css/bootstrap.min.css";
@import "../public/css/magnific-popup.css";
@import "../public/css/owl.carousel.min.css";
@import "../public/css/select2-bootstrap4.min.css";
@import "../public/css/select2.min.css";
@import "../public/css/slick-animation.css";
@import "../public/css/slick-theme.css";
@import "../public/css/slick.css";
@import "../public/style.css";
</style>
