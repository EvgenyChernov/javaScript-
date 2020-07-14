class Status {
    constructor() {
        this.status = 'playing';
        this.mapValues = [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ];
        this.phase = 'X';
    }

    isStatusPlaying() {
        return this.status === 'playing';
    }

    togglePhase() {
        this.phase = this.phase === 'X' ? '0' : 'X';
    }
    statusStopped(){
        this.status = 'stopped'
    }
}