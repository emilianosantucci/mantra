export default class ActionsUtils {
    static createMessage(label: string, message: string): string {
        return `[${label}] - ${message}`;
    }
}
