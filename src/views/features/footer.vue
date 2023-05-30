<template>
    <footer>
        <div class="footer__row__1">
            <h4>Questions? Call 0812-2366-2003</h4>
        </div>
        <div class="footer__row__2">
            <div class="column__1">
                <p>FAQ</p>
                <p>Investor Relations</p>
                <p>Privacy</p>
                <p>Speed Test</p>
            </div>
            <div class="column__2">
                <p>Help Centre</p>
                <p>Jobs</p>
                <p>Cookie Preferences</p>
                <p>Legal Notices</p>
            </div>
            <div class="column__3">
                <p>Account</p>
                <p>Ways to Watch</p>
                <p>Corporate Information</p>
                <p>Only on Netflix</p>
            </div>
            <div class="column__4">
                <p>Media Centre</p>
                <p>Terms of Use</p>
                <p>Contact Us</p>
            </div>
        </div>
        <div class="footer__row__3">
            <div class="dropdown__container">
                <i class="fas fa-globe"></i>
                <select
                    name="languages"
                    id="languagesSelect"
                    class="language__drop__down"
                >
                    <option value="english" selected>English</option>
                    <option value="en-uk" selected>British</option>
                    <option disabled selected hidden>language</option>
                </select>
            </div>
        </div>
        <div class="footer__row__4">
            <p>Netflix</p>
        </div>
    </footer>
</template>

<script>
export default {
    name: "Footer",
};
</script>
<style scoped>
@import "../../public/src/styles.css";
</style>
