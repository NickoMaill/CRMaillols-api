class LogColors {
    public readonly Reset: string
    public readonly Bright: string
    public readonly Dim: string
    public readonly Underscore: string
    public readonly Blink: string
    public readonly Reverse: string
    public readonly Hidden: string
    public readonly Reload: string
    public readonly FgBlack: string
    public readonly FgRed: string
    public readonly FgGreen: string
    public readonly FgYellow: string
    public readonly FgBlue: string
    public readonly FgMagenta: string
    public readonly FgCyan: string
    public readonly FgWhite: string
    public readonly BgBlack: string
    public readonly BgRed: string
    public readonly BgGreen: string
    public readonly BgYellow: string
    public readonly BgBlue: string
    public readonly BgMagenta: string
    public readonly BgCyan: string
    public readonly BgWhite: string
    constructor() {
        this.Reset = '\x1b[0m';
        this.Bright = '\x1b[1m';
        this.Dim = '\x1b[2m';
        this.Underscore = '\x1b[4m';
        this.Blink = '\x1b[5m';
        this.Reverse = '\x1b[7m';
        this.Hidden = '\x1b[8m';
        this.Reload = '\x1b[0m';
        this.FgBlack = '\x1b[30m';
        this.FgRed = '\x1b[31m';
        this.FgGreen = '\x1b[32m';
        this.FgYellow = '\x1b[33m';
        this.FgBlue = '\x1b[34m';
        this.FgMagenta = '\x1b[35m';
        this.FgCyan = '\x1b[36m';
        this.FgWhite = '\x1b[37m';
        this.BgBlack = '\x1b[40m';
        this.BgRed = '\x1b[41m';
        this.BgGreen = '\x1b[42m';
        this.BgYellow = '\x1b[43m';
        this.BgBlue = '\x1b[44m';
        this.BgMagenta = '\x1b[45m';
        this.BgCyan = '\x1b[46m';
        this.BgWhite = '\x1b[47m';
    }
}

export default new LogColors();
