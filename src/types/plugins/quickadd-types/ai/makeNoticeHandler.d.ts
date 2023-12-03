interface NoticeHandler {
    setMessage: (status: string, msg: string) => void;
    hide: () => void;
}
export declare function makeNoticeHandler(showMessages: boolean): NoticeHandler;
export {};
