<template>
    <div class="body-form">
        <div class="login">
            <div class="header">
                <div class="logo">
                    <RouterLink to="/">
                        <img
                            src="../public/assets/img/netflixlogo.png"
                            alt=""
                        />
                    </RouterLink>
                </div>
            </div>

            <div class="login_body" id="sign-in" v-if="currentPage == 'login'">
                <div class="login_box">
                    <h2>Sign In</h2>
                    <form @submit.prevent="signIn">
                        <div class="input_box">
                            <input
                                v-model="email"
                                type="email"
                                placeholder="Email or phone number"
                            />
                        </div>

                        <div class="input_box">
                            <input
                                v-model="password"
                                type="password"
                                placeholder="Password"
                            />
                        </div>

                        <div>
                            <button type="submit" class="submit">
                                Sign In
                            </button>
                        </div>
                    </form>

                    <div class="support">
                        <div class="remember">
                            <span
                                ><input
                                    type="checkbox"
                                    style="margin: 0; padding: 0; height: 13px"
                            /></span>
                            <span>Remember me</span>
                        </div>
                        <div class="help">
                            <a href="#"> Need help? </a>
                        </div>
                    </div>

                    <div class="login_footer">
                        <div class="login_facebook">
                            <Google />
                        </div>

                        <div class="sign_up">
                            <p>
                                New to Netflix
                                <a class="click" @click="showSignUp"
                                    >Sign up now</a
                                >
                            </p>
                        </div>

                        <div class="terms">
                            <p>
                                This page is protected by Google reCAPTCHA to
                                ensure you're not a bot.
                                <a href="#">Learn More</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <register
            v-if="currentPage == 'register'"
            @showRegister="showRegister"
        />
    </div>
</template>

<script>
import register from "./register/register.vue";
import { mapActions } from "pinia";
import { useUserStore } from "../stores/login";
import Google from "./google.vue";
export default {
    data() {
        return {
            email: "",
            password: "",
            currentPage: "login",
        };
    },
    methods: {
        ...mapActions(useUserStore, ["login"]),
        signIn() {
            this.login(this.email, this.password);
        },
        showSignUp() {
            this.currentPage = "register";
        },
        showRegister() {
            this.currentPage = "login";
        },
    },
    components: {
        register,
        Google,
    },
};
</script>

<style scoped>
@import "../public/assets/css/style.css";
.click {
    cursor: pointer;
}
#sign-in {
    position: fixed;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(20px);
    visibility: visible;
    opacity: 1;
    max-width: 30rem;
}
</style>
