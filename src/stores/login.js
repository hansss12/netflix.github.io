import axios from "axios"

import { defineStore } from "pinia"

export const useUserStore = defineStore('user', {
    state: () => ({ user: [] }),
    actions: {
        async login(email, password) {
            try {
                const { data } = await axios({
                    method: "post",
                    url: "https://netflix-clone-production-5bbd.up.railway.app/sign-in",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                    data: {
                        email,
                        password,
                    }
                })
                console.log(data);
                localStorage.setItem("access_token", data.access_token);
                this.router.push('/home')
                const Toast = Swal.mixin({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 2000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener("mouseenter", Swal.stopTimer);
                        toast.addEventListener("mouseleave", Swal.resumeTimer);
                    },
                });

                Toast.fire({
                    icon: "success",
                    title: "Signed in successfully",
                });
                this.router.push('/home')
            } catch (error) {
                Swal.fire({
                    icon: "warning",
                    title: error.response.data.message,
                    showConfirmButton: false,
                    timer: 1000,
                });
            }
        },
        async register(username, email, password) {
            try {
                const { data } = await axios({
                    method: "post",
                    url: "https://netflix-clone-production-5bbd.up.railway.app/register",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                    data: {
                        username,
                        email,
                        password,
                    },
                });
                console.log(data);
                this.router.push('/home')
                const Toast = Swal.mixin({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 2000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener("mouseenter", Swal.stopTimer);
                        toast.addEventListener("mouseleave", Swal.resumeTimer);
                    },
                });

                Toast.fire({
                    icon: "success",
                    title: "Account created successfully",
                });
                this.router.push('/login')
            } catch (error) {
                Swal.fire({
                    icon: "warning",
                    title: error.response.data.message,
                    showConfirmButton: false,
                    timer: 1000,
                });
            }
        },
        async loginGoogle(response) {
            try {
                const { data } = await axios({
                    method: "POST",
                    url: "https://netflix-clone-production-5bbd.up.railway.app/google",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                        googletoken: response,
                    },
                });
                console.log(data);
                localStorage.setItem("access_token", data.accessToken)
                this.router.push('/home')
                const Toast = Swal.mixin({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 2000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener("mouseenter", Swal.stopTimer);
                        toast.addEventListener("mouseleave", Swal.resumeTimer);
                    },
                });

                Toast.fire({
                    icon: "success",
                    title: "Signed in successfully",
                });
            } catch (error) {
                Swal.fire({
                    icon: "warning",
                    title: error.response.data.message,
                    showConfirmButton: false,
                    timer: 1000,
                });
            }
        },
    },
})
