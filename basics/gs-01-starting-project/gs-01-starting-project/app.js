// const button = document.querySelector('button');
// const input = document.querySelector('input');
// const list = document.querySelector('ul');

// function addGoal() {
//     const enteredValue = input.value;
//     if (enteredValue != '') {
//         const listItem = document.createElement('li');
//         listItem.textContent = enteredValue;
//         list.appendChild(listItem);
//         input.value = '';
//     }
// }

// button.addEventListener('click', addGoal);

Vue.createApp({
    data() {
        return {
            goals: [],
            enteredValue: ''

        };
    },
    methods: {
        addGoal() {
            if (this.enteredValue != '') {
                this.goals.push(this.enteredValue);
                this.enteredValue = '';
            }
        }
    }
}).mount('#app');