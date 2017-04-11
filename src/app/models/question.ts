export class Question{
    
    public title: string;
    public description: string;
    public overallRating?: number;
    public typicalAnswer: string;
    public difficulty: number;
    public followupQuestion?: Question;

    constructor(){}
}