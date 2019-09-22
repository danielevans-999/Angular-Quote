export class Quote {
    viewDetails:boolean;
    constructor(public submitter:string,public author:string,public quote:string,public upvote:number,public downvote:number,public elapse :Date){
        this.viewDetails = false;

    }
}
