export type ErrorStatusType = "FATAL" | "UNAUTHORIZED" | "FORBIDDEN" | "BAD_REQUEST" | "NOT_FOUND" | "UNAVAILABLE";

export class StandardError<T extends any = {}> extends Error {
	private _key: string;
    private _status: ErrorStatusType;
	private _errorCode: string;
	private _message: string;
	private _detailedMessage?: string;
	private _data?: T;

	public get key() {
		return this._key;
	}
	
    public get status() {
		return this._status;
	}

	public get errorCode() {
		return this._errorCode;
	}

	public get message() {
		return this._message;
	}

	public get detailedMessage() {
		return this._detailedMessage;
	}

	public get datas() {
		return this._data;
	}

    constructor(key : string, status: ErrorStatusType, errorCode: string, message: string, detailedMessage?: string, data?: T) {
        super(message);

        this._key = key;
        this._status = status;
        this._errorCode = errorCode;
        this._message = message;
        this._detailedMessage = detailedMessage
        this._data = data;

        if (detailedMessage) {
        }

        if (data) {
        }

    }
}
