export class Post {
    loveIts = 0;
    created_at = new Date();
    constructor(public title: string,
                public content: string
                ) {}
}