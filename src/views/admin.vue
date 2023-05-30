<style scoped>
@import "../public/assets/css/style.css";
</style>
<template>
    <div>
        <div class="header">
            <div class="logo">
                <a href="#" @click="movePage('register')">
                    <img src="../public/assets/img/netflixlogo.png" alt="" />
                </a>
            </div>
        </div>

        <section>
            <!--for demo wrap-->
            <h1>User List</h1>
            <div class="tbl-header">
                <table cellpadding="0" cellspacing="0" border="0">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Membership</th>
                            <th>Card</th>
                            <th>Action</th>
                            <th><a href="/movies/admin/list">Movies</a></th>
                        </tr>
                    </thead>
                </table>
            </div>
            <div class="tbl-content">
                <table cellpadding="0" cellspacing="0" border="0">
                    <tbody>
                        <tr v-for="element in data" :key="element.id">
                            <td>
                                {{
                                    element.Detail
                                        ? element.Detail.fullname
                                        : element.username
                                }}
                            </td>
                            <td>{{ element.email }}</td>
                            <td>
                                {{
                                    element.Member
                                        ? element.Member.name
                                        : "this user doesnt subscribe"
                                }}
                            </td>
                            <td>
                                {{
                                    element.Card
                                        ? element.Card.cardNumber
                                        : "this user doesnt have card"
                                }}
                            </td>
                            <td>
                                <a :href="'/movies/delete/' + element.id"
                                    >delete</a
                                >
                            </td>
                            <td>
                                <a href="/movies/admin/list">List movies</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    data() {
        return {
            data: [],
        };
    },
    created() {},
    methods: {
        movePage(toPage) {
            this.currentPage = toPage;
        },
    },
};
</script>
