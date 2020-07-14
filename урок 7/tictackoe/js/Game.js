class Game {
    init(status, board) {
        this.status = status;
        this.board = board;
    }

    /**
     * основная функция игры, получет объект event при click  проверяет на корректность
     * (1 проверяет попал ли пользователь на ячейку таблицы, пустая ли она, и запущена ли игра )
     * @param event
     */
    cellClickHandler(event) {
        //проверка на корректность
        if (!this.isCorrectClick(event)) {
            return;
        }
        // отрисовка крестика или нолика в выбранной ячейки
        this.board.fillCell(event);

        /**
         * проверка на выйгрыш
         */
        if (this.hasWon()) {
            //останавливаем игру меняя статус игры
            this.status.setStatusStopped();
            //сообщаем о победе пользователя
            this.sayWonPhrase();
        }
        // Замена фигуры крестик на нолик
        this.status.togglePhrase();

    }

    /**
     * основная проверка если все ок возвращает true
     * (1 проверяет попал ли пользователь на ячейку таблицы, пустая ли она, и запущена ли игра )
     * @param event
     * @return {boolean}
     */
    isCorrectClick(event) {
        return this.status.isStatusPlaying() && this.board.isClickByCell(event) && this.board.isCellEmpty(event);
    }

    hasWon() {
        return this.isLineWon({x: 0, y: 0}, {x: 1, y: 0}, {x: 2, y: 0}) ||
            this.isLineWon({x: 0, y: 1}, {x: 1, y: 1}, {x: 2, y: 1}) ||
            this.isLineWon({x: 0, y: 2}, {x: 1, y: 2}, {x: 2, y: 2}) ||

            this.isLineWon({x: 0, y: 0}, {x: 1, y: 1}, {x: 2, y: 2}) ||
            this.isLineWon({x: 0, y: 2}, {x: 1, y: 1}, {x: 2, y: 0});

    }
    isLineWon(a,b,c){
        let value = this.status.mapValues[a.x][a.y] + this.status.mapValues[b.x][b.y] + this.status.mapValues[c.x][c.y];
        return value ==='XXX'|| value ==="000";
    }

    sayWonPhrase(){
        let figure = this.status.phase === "X" ? 'крестики' : 'нолики';
        alert(`${figure} выйграли!`)
    }

}