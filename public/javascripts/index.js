window.onload = function () {
    const vm = new Vue({
        el: '#main',
        data() {
            return {
                status_text: 'NO OPERATION',
                x: -150,
                y: -150,
                show_circle: false
            };
        },
        methods: {
            start(e) {
                this.x = e.offsetX;
                this.y = e.offsetY - 50;    // 50はsvg要素の上に重なる#statusの高さ

                this.show_circle = true;
                this.status_text = 'TOUCH START';
            },
            leave() {
                this.show_circle = false;
                this.status_text = 'LEAVE';
            },
            move(e) {
                if (this.show_circle) {
                    this.x += e.movementX;
                    this.y += e.movementY;
                    this.status_text = 'MOVE';
                }
            },
            end() {
                this.show_circle = false;
                this.status_text = 'TOUCH END';
            }
        }
    });
};