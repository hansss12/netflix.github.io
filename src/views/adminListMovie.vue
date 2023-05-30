<template>
    <div>
        <div class="header">
            <div class="logo">
                <a href="/movies">
                    <img src="/assets/img/netflixlogo.png" alt="" />
                </a>
            </div>
        </div>
        <section>
            <h1>Movie List</h1>
            <form action="/movies/admin/list" method="get">
                <div class="search">
                    <input name="search" type="text" placeholder="search" />
                    <i class="fa fa-search" aria-hidden="true"></i>
                </div>
            </form>
            <div class="tbl-header">
                <table cellpadding="0" cellspacing="0" border="0">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>License</th>
                            <th>Duration</th>
                            <th>Genre</th>
                            <th>Tags</th>
                        </tr>
                    </thead>
                </table>
            </div>
            <div class="tbl-content">
                <table cellpadding="0" cellspacing="0" border="0">
                    <tbody>
                        <tr v-for="element in data" :key="element.id">
                            <td>{{ element.name }}</td>
                            <td>{{ element.licenseDate }}</td>
                            <td>{{ element.duration }}</td>
                            <td>{{ element.genre }}</td>
                            <td>{{ element.tags }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: "MovieList",
    data() {
        return {
            data: [], // your data here
        };
    },
};
</script>

<style>
h1 {
    font-size: 30px;
    color: #fff;
    text-transform: uppercase;
    font-weight: 300;
    text-align: center;
    margin-bottom: 15px;
    position: relative;
}
table {
    z-index: 1000;
    width: 100%;
    table-layout: fixed;
    position: relative;
}
.tbl-header {
    background-color: rgba(0, 0, 0, 0.825);
    position: relative;
}
.tbl-content {
    height: 300px;
    overflow-x: auto;
    margin-top: 0px;
    border: 1px solid rgba(0, 0, 0, 0.825);
    position: relative;
}
th {
    padding: 20px 15px;
    text-align: left;
    font-weight: 500;
    font-size: 12px;
    color: #ff0000;
    text-transform: uppercase;
}
td {
    padding: 15px;
    text-align: left;
    vertical-align: middle;
    font-weight: 300;
    font-size: 12px;
    color: #fff;
    border-bottom: solid 1px rgba(0, 0, 0, 0.825);
}

/* demo styles */

@import url(https://fonts.googleapis.com/css?family=Roboto:400,500,300,700);
body {
    font-family: "Roboto", sans-serif;
}
section {
    margin: 50px;
}
/* for custom scrollbar for webkit browser*/

::-webkit-scrollbar {
    width: 6px;
}
::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}
::-webkit-scrollbar-thumb {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

a {
    text-decoration: none;
    color: #fff;
}
</style>
