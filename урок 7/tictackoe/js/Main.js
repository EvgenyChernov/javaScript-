window.addEventListener('load', function () {
    const board = new Board();
    const game = new Game();
    const status = new Status();

    game.init( status, board );
    board.init(game, status);

    board.renderMap();
    board.initEventHandlers();
})