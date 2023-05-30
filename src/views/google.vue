<script>
import { mapActions } from "pinia";
import { useUserStore } from "../stores/login";

export default {
    methods: {
        ...mapActions(useUserStore, ["loginGoogle"]),
        callback(response) {
            this.loginGoogle(response.credential);
        },
    },
};
</script>

<template>
    <GoogleLogin :callback="callback" prompt />
</template>
