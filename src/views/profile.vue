<template>
    <div class="body-form">
        <div class="header">
            <div class="logo">
                <RouterLink to="/home">
                    <img src="../public/assets/img/netflixlogo.png" alt="" />
                </RouterLink>
            </div>
        </div>
        <div class="login_body" id="sign-in">
            <div class="login_box">
                <h2>
                    {{
                        profile?.Detail?.fullname
                            ? `${profile?.Detail.fullname}'s Profile's`
                            : "Profile"
                    }}
                </h2>
                <form @submit.prevent="submitDetail">
                    <div class="input_box">
                        <input
                            v-model="fullname"
                            type="text"
                            placeholder="fullname"
                        />
                    </div>

                    <div class="input_box">
                        <input
                            v-model="card"
                            disabled
                            type="text"
                            placeholder="Card (optional)"
                        />
                    </div>

                    <div class="input_box">
                        <input
                            v-model="phone"
                            type="text"
                            placeholder="Phone"
                        />
                    </div>

                    <div>
                        <button type="submit" class="submit">Confirm</button>
                    </div>
                </form>

                <div class="support">
                    <div class="remember">
                        <span
                            ><input
                                type="checkbox"
                                style="margin: 0; padding: 0; height: 13px"
                        /></span>
                        <span>Keep me update</span>
                    </div>
                    <div class="help">
                        <a href="#"> Need help? </a>
                    </div>
                </div>

                <div class="sign_up">
                    <p>
                        {{
                            profile?.Member
                                ? profile?.Member.name
                                : "Please Subscribe to netflix for more benefits"
                        }}
                    </p>
                    <p>Please fill the input</p>
                </div>

                <div class="terms">
                    <p>
                        This page allow you to fill more details to your
                        <strong>Netflix</strong> account
                    </p>
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
            fullname: "",
            phone: "",
            card: "",
        };
    },
    methods: {
        ...mapActions(useMovieStore, ["profiles", "profileAdd", "profileUp"]),
        submitDetail() {
            if (!this.profile.Detail) {
                this.profileAdd(this.fullname, this.phone, this.card);
            } else {
                this.profileUp(this.fullname, this.phone, this.card);
            }
        },
    },
    computed: {
        ...mapState(useMovieStore, ["profile"]),
    },
    created() {
        this.profiles();
    },
    watch: {
        profile(value) {
            this.fullname = value.Detail.fullname;
            this.phone = value.Detail.phone;
            this.card = value.Card.cardNumber;
        },
    },
};
</script>
<style scoped>
@import "../public/assets/css/style.css";

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
    height: 40rem;
}
</style>
