<template>
    <div class="body">
        <header>
            <nav class="navbar">
                <div class="navbar__brand">
                    <img
                        src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
                        alt="logo"
                        class="brand__logo"
                    />
                </div>

                <div class="navbar__nav__items">
                    <div class="nav__item">
                        <div class="dropdown__container">
                            <i class="fas fa-globe"></i>
                            <select
                                name="languages"
                                id="languagesSelect"
                                class="language__drop__down"
                            >
                                <option value="en-uk" selected>British</option>
                                <option value="english" selected>
                                    English
                                </option>
                                <option disabled selected hidden>
                                    language
                                </option>
                            </select>
                        </div>
                    </div>

                    <div class="nav__item">
                        <RouterLink to="login">
                            <button class="signin__button">Sign in</button>
                        </RouterLink>
                    </div>
                </div>
            </nav>
        </header>

        <main>
            <section class="hero" id="hero">
                <div class="hero__bg__image__container">
                    <img
                        src="https://assets.nflxext.com/ffe/siteui/vlv3/9c5457b8-9ab0-4a04-9fc1-e608d5670f1a/710d74e0-7158-408e-8d9b-23c219dee5df/IN-en-20210719-popsignuptwoweeks-perspective_alpha_website_small.jpg"
                        alt="BG hero image"
                        class="hero__bg__image"
                    />
                </div>
                <div class="hero__bg__overlay"></div>

                <div class="hero__card">
                    <h1 class="hero__title">
                        Unlimited Movies TV,<br />
                        Shows and More.
                    </h1>
                    <p class="hero__subtitle">
                        Watch anywhere and cancel anytime.
                    </p>
                    <p class="hero__description">
                        Ready to watch? Enter your email to create or continue
                        membership.
                    </p>
                    <form @submit.prevent="submitEmail">
                        <div class="email__form__container">
                            <div class="form__container">
                                <input
                                    v-model="email"
                                    type="email"
                                    class="email__input"
                                    placeholder=" "
                                />
                                <label class="email__label"
                                    >Email Address</label
                                >
                            </div>
                            <button class="primary__button">
                                Get Started
                                <i class="fal fa-chevron-right"></i>
                            </button>
                        </div>
                    </form>
                </div>
            </section>
            <section class="features__container">
                <featureV1 />
            </section>
            <section class="FAQ__list__container">
                <featureV2 />
            </section>
        </main>

        <footerV3 />
    </div>
</template>

<script>
import { RouterLink } from "vue-router";
import featureV1 from "./features/featv1.vue";
import featureV2 from "./features/featv2.vue";
import footerV3 from "./features/footer.vue";
export default {
    data() {
        return {
            email: "",
        };
    },
    mounted() {
        let accordian = document.getElementsByClassName("FAQ__title");

        for (let i = 0; i < accordian.length; i++) {
            accordian[i].addEventListener("click", function () {
                if (this.childNodes[1].classList.contains("fa-plus")) {
                    this.childNodes[1].classList.remove("fa-plus");
                    this.childNodes[1].classList.add("fa-times");
                } else {
                    this.childNodes[1].classList.remove("fa-times");
                    this.childNodes[1].classList.add("fa-plus");
                }

                let content = this.nextElementSibling;
                if (content.style.maxHeight) {
                    content.style.maxHeight = null;
                } else {
                    content.style.maxHeight = content.scrollHeight + "px";
                }
            });
        }
    },
    methods: {
        submitEmail() {
            if (this.email.includes(".com")) {
                sessionStorage.setItem("tempEmail", this.email);
                this.$router.push("/login");
            }
        },
    },
    components: {
        featureV1,
        featureV2,
        footerV3,
    },
};
</script>
<style scoped>
@import "../public/src/styles.css";
</style>
