const app = Vue.createApp({
    data() {
        return {
            goals: [],
            enteredGoal: "",
            taskListIsVisible: true
        };
    },
    computed: {
        buttonCaption() {
            return this.taskListIsVisible ? "Hide list" : "Show list";
        }
    },
    methods: {
        addGoal() {
            this.goals.push(this.enteredGoal);
        },
        toggleList() {
            this.taskListIsVisible = !this.taskListIsVisible;
        }
    }
});
app.mount("#assignment");