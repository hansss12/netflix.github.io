<template>
    <div class="login_body" id="register">
        <div class="login_box">
            <h2>Register</h2>
            <form @submit.prevent="submitForm">
                <div class="input_box">
                    <input
                        v-model="username"
                        name="username"
                        type="text"
                        placeholder="Username"
                    />
                </div>
                <div class="input_box">
                    <input
                        v-model="email"
                        name="email"
                        type="text"
                        placeholder="Email or phone number"
                    />
                </div>
                <div class="input_box">
                    <input
                        v-model="password"
                        name="password"
                        type="password"
                        placeholder="Password"
                    />
                </div>
                <div>
                    <button class="submit">
                        <input type="submit" style="display: none" />
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
                    <a href="#">Need help?</a>
                </div>
            </div>
            <div class="login_footer">
                <div class="login_facebook">
                    <span
                        ><img
                            height="20px"
                            src="../../public/assets/img/Facebook_logo.png"
                            alt="facebook"
                    /></span>
                    <span
                        ><a
                            href="https://www.facebook.com/?stype=lo&jlou=AffgJGzFHrWUWp0lKYcGcynx6AdoDXKOOjaUWTHixZlhOnnqPlPm-qN7zLQMeufvqDj2mTtxmLwRCr2g-TVYMvVlk58LMKG23RDbGcmLh3YLxg&smuh=19632&lh=Ac8QMas8hmtMZCxsCJs"
                            >Connect to Facebook</a
                        ></span
                    >
                </div>
                <div class="sign_up">
                    <p>
                        Have an account?
                        <a class="click" @click="show()">Sign In</a>
                    </p>
                </div>
                <div class="terms">
                    <p>
                        This page is protected by google reCaptcha to ensure
                        you're not a bot. <a href="#">Learn More</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from "pinia";
import { useUserStore } from "../../stores/login";

export default {
    data() {
        return {
            username: "",
            email: sessionStorage.getItem("tempEmail")
                ? sessionStorage.getItem("tempEmail")
                : "",
            password: "",
        };
    },
    methods: {
        ...mapActions(useUserStore, ["register"]),
        submitForm() {
            this.register(this.username, this.email, this.password);
        },
        show() {
            this.$emit("showRegister");
        },
    },
};
</script>
<style scoped>
@import "../../public/assets/css/style.css";
#register {
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
    height: 40rem;
}
.click {
    cursor: pointer;
}
</style>
