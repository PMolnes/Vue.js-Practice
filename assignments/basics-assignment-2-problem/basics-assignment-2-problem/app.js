const app = Vue.createApp({
    data() {
        return {
            input1: "OUTPUT",
            confirmedInput2: "OUTPUT"
        };
    },
    methods: {
        showAlert() {
            alert("Show alert button was pressed!");
        },
        updateInput1(event) {
            this.input1 = event.target.value;
        },
        confirmInput() {
            this.confirmedInput2 = this.input1;
        }
    }
});

app.mount("#assignment")