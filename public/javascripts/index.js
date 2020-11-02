window.onload = function () {
    const vm = new Vue({
        el: '#main',
        data() {
            return {
                status_text: 'NO OPERATION'
            };
        },
        methods: {
            start() {
                this.status_text = 'TOUCH START';
            },
            leave() {
                this.status_text = 'LEAVE';
            },
            move() {
                this.status_text = 'MOVE';
            },
            end() {
                this.status_text = 'TOUCH END';
            }
        }
    });
};