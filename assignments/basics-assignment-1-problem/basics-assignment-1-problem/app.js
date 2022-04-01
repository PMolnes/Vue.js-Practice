const app = Vue.createApp({
    data() {
        return {
            name: "Petter",
            age: 21,
            imgUrl: "image.jfif"
        };
    },
    methods: {
        favoriteNumber() {
            return Math.random();
        }
    }
});

app.mount('#assignment');