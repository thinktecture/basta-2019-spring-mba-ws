export class CreateSessionModel {
    constructor(
        public title: string,
        public abstract: string,
        public speaker: string) {

    }

    public static createEmpty(){
        return new CreateSessionModel('','','');
    }
}
