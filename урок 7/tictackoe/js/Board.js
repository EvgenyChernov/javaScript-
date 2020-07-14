class Board {
    constructor() {
        this.gameTableElement = document.getElementById('game');
    }

    init(game, status) {
        this.game = game;
        this.status = status;
    }

    /**
     * функция отрисоввывает игровое поле
     */
    renderMap() {
        for (let row = 0; row < 3; row++) {
            const tr = document.createElement('tr');
            this.gameTableElement.appendChild(tr);
            for (let col = 0; col < 3; col++) {
                let td = document.createElement('td');
                td.dataset.row = row.toString();
                td.dataset.col = col.toString();
                tr.appendChild(td);
            }
        }
    }

    /**
     * инициализация обработчика событий на клик
     */
    initEventHandlers() {
        this.gameTableElement.addEventListener('click', event => this.game.cellClickHandler(event));
    }

    /**
     * функция проверяет нажал ли игрок на ячейку
     * @param event
     * @return {boolean}
     */
    isClickByCell(event) {
        return event.target.tagName == "TD";
    }

    /**
     * функция проверяет была ли пуста ячейка при нажатии
     * @param event
     */
    isCellEmpty(event) {
        let row = +event.target.dataset.row;
        let col = +event.target.dataset.col;

        return this.status.mapValues[row][col] === '';
    }

    /**
     * функция отрисоввывает в массиве значений X и в ячейке браузера X крестик
     * @param event
     */
    fillCell(event) {
        let row = +event.target.dataset.row;
        let col = +event.target.dataset.col;

        this.status.mapValues[row][col] = this.status.phase;
        event.target.textContent = this.status.phase;
    }
}