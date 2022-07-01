
import { BehaviorSubject} from "rxjs";

const subject = new BehaviorSubject('Sydney');

export const messageService= {
    sendMessage: (message: string) => subject.next(message),
    getMessage: () => subject.asObservable(),
    unsubscribeMessage: () => subject.unsubscribe()
};

