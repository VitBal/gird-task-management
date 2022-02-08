export  default class Task {
    constructor(title, text) {
        this.title = title;
        this.text = text;
    }

    show() {
        alert(this.title + ' ' + this.text);
    }
}
