export  default class Task {
    constructor(
        title,
        text,
        date = null,
        status = null,
        profiles = null,
        files = null
    ) {
        this.title = title;
        this.text = text;
        this.date = date; // время исполнения задачи
        this.status = status; // статус задачи - отдельный id и таблица 1-1
        this.profiles = profiles; // кто является исполнителями задачи - прикрепить профили - отедельная таблица 1-n
        this.files = files; // прикрепить файлы 1-n
    }

    // методы
}
