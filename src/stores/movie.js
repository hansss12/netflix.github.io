import axios from "axios"
import { defineStore } from "pinia"

const API_KEY = `724c8df48ea7f7c3a158f13afd2e1164`;
export const useMovieStore = defineStore('movie', {
    state: () => ({
        movies: [],
        slider: [],
        favorite: [],
        popular: [],
        trending: [],
        sport: [],
        parallax: [],
        wishList: [],
        membership: [],
        movieById: {},
        profile: { fullname: null },
        dataCard: {},
        membership: {},
        tmdbSearch: [],
        tmdbById: {},
        tmdbTrailer: '',
        tmdbTrending: []
    }),
    actions: {
        async fetchMovie() {
            try {
                const { data } = await axios({
                    method: "get",
                    url: "https://netflix-clone-production-5bbd.up.railway.app/movies",
                    headers: {
                        authorization: localStorage.getItem("access_token"),
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                })
                this.movies = data.movies
                this.slider = data.slider
                this.favorite = data.favorite
                this.popular = data.popular
                this.trending = data.trending
                this.sport = data.sport
                this.parallax = data.parallax
                this.wishList = data.wishList
                this.membership = data.membership
            } catch (error) {
                console.log(error)
            }
        },
        async fetchMovieById(id) {
            try {
                const { data } = await axios({
                    method: "get",
                    url: `https://netflix-clone-production-5bbd.up.railway.app/movies/${id}`,
                    headers: {
                        authorization: localStorage.getItem("access_token"),
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                })
                this.movieById = data
            } catch (error) {
                console.log(error)
            }
        },
        async wishlistAdd(id) {
            try {
                const { data } = await axios({
                    method: "POST",
                    url: `https://netflix-clone-production-5bbd.up.railway.app/movies/${id}/wishlist`,
                    headers: {
                        authorization: localStorage.getItem("access_token"),
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                })
                this.fetchMovieById(id)
                // this.router.push('/home')
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
                    title: data.message,
                });
            } catch (error) {
                console.log(error)
                Swal.fire({
                    icon: "warning",
                    title: error.response.data.message,
                    showConfirmButton: false,
                    timer: 1000,
                });
            }
        },
        async profiles() {
            try {
                const { data } = await axios({
                    method: "get",
                    url: `https://netflix-clone-production-5bbd.up.railway.app/movies/account`,
                    headers: {
                        authorization: localStorage.getItem("access_token"),
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                })
                this.profile = data.data
            } catch (error) {
                console.log(error)
            }
        },
        async profileUp(fullname, phone, card) {
            try {
                const { data } = await axios({
                    method: "PUT",
                    url: `https://netflix-clone-production-5bbd.up.railway.app/movies/account`,
                    headers: {
                        authorization: localStorage.getItem("access_token"),
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                    data: {
                        fullname, phone, card
                    }
                })
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
                    title: data.message,
                });
                this.router.push('/home')
            } catch (error) {
                console.log(error)
                Swal.fire({
                    icon: "warning",
                    title: error.response.data.message,
                    showConfirmButton: false,
                    timer: 1000,
                });
            }
        },
        async profileAdd(fullname, phone, card) {
            try {
                const { data } = await axios({
                    method: "POST",
                    url: `https://netflix-clone-production-5bbd.up.railway.app/movies/account`,
                    headers: {
                        authorization: localStorage.getItem("access_token"),
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                    data: {
                        fullname, phone, card
                    }
                })
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
                    title: data.message,
                });
                this.router.push('/home')
            } catch (error) {
                console.log(error)
                Swal.fire({
                    icon: "warning",
                    title: error.response.data.message,
                    showConfirmButton: false,
                    timer: 1000,
                });
            }
        },
        async card() {
            try {
                const { data } = await axios({
                    method: "GET",
                    url: `https://netflix-clone-production-5bbd.up.railway.app/card`,
                    headers: {
                        authorization: localStorage.getItem("access_token"),
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                })
                this.dataCard = data.data
            } catch (error) {
                console.log(error)
            }
        },
        async addCard(cardNumber, holder, month, year, cvv) {
            try {
                const { data } = await axios({
                    method: "POST",
                    url: `https://netflix-clone-production-5bbd.up.railway.app/card`,
                    headers: {
                        authorization: localStorage.getItem("access_token"),
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                    data: {
                        cardNumber, holder, month, year, cvv
                    }
                })
                localStorage.setItem("card_token", data.card_token)
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
                    title: data.message,
                });
                this.router.push('/home')
            } catch (error) {
                console.log(error)
                Swal.fire({
                    icon: "warning",
                    title: error.response.data.message,
                    showConfirmButton: false,
                    timer: 1000,
                });
            }
        },
        async member(id) {
            try {
                const { data } = await axios({
                    method: "GET",
                    url: `https://netflix-clone-production-5bbd.up.railway.app/card/${id}`,
                    headers: {
                        authorization: localStorage.getItem("access_token"),
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                })
                this.membership = data.membership
            } catch (error) {
                console.log(error)
            }
        },
        async validateCard(id, cardNumber, holder, month, year, cvv) {
            try {
                const { data } = await axios({
                    method: "POST",
                    url: `https://netflix-clone-production-5bbd.up.railway.app/card/${id}`,
                    headers: {
                        authorization: localStorage.getItem("access_token"),
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                    data: {
                        cardNumber, holder, month, year, cvv
                    }
                })
                this.subscribed(id)
            } catch (error) {
                console.log(error)
            }

        },
        async subs(id) {
            try {
                const { data } = await axios({
                    method: "PATCH",
                    url: `https://netflix-clone-production-5bbd.up.railway.app/movies/update/${id}`,
                    headers: {
                        authorization: localStorage.getItem("access_token"),
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                })
                this.profiles()
                this.router.push('/home')
            } catch (error) {
                console.log(error)
            }
        },
        async subscribed(id) {
            try {
                const { data } = await axios({
                    method: "POST",
                    url: `https://netflix-clone-production-5bbd.up.railway.app/movies/payment/${id}`,
                    headers: {
                        authorization: localStorage.getItem("access_token"),
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                })
                const cb = this.subs
                window.snap.pay(data.token, {
                    onSuccess: function (result) {
                        /* You may add your own implementation here */
                        console.log(result);
                        cb(id)
                    },
                })
            } catch (error) {
                Swal.fire({
                    icon: "warning",
                    title: error.response.data.message,
                    showConfirmButton: false,
                    timer: 1000,
                });
            }
        },
        async movieBySearch(search) {
            try {
                const { data } = await axios({
                    method: "GET",
                    url: `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${search}`
                })
                this.tmdbSearch = data.results
            } catch (error) {
                console.log(error)
            }
        },
        async tmdbMovieById(id) {
            try {
                const { data } = await axios({
                    method: "GET",
                    url: `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
                })
                this.tmdbById = data
            } catch (error) {
                console.log(error)
            }
        },
        async tmdbMovieTrailer(id) {
            try {
                const { data } = await axios({
                    method: "GET",
                    url: `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`
                })
                this.tmdbTrailer = 'https://www.youtube.com/embed/' + data.results[0].key
            } catch (error) {
                console.log(error)
            }
        },
        async fetchTmdbTrending() {
            try {
                const { data } = await axios({
                    method: "GET",
                    url: `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`
                })
                this.tmdbTrending = data.results
            } catch (error) {
                console.log(error)
            }
        }
    },
})
