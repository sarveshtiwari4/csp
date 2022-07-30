export interface ResultDisplay {
    advt_no:number;
    advt_details:string;

    latest:[{
        advt_no:number;
        details:string;
        link:string;
    }];
    advertisement:[{
        advt_no:number;
        details:string;
        link:string;
    }];
    notification:[{
        advt_no:number;
        details:string;
        link:string;
    }];

   modelanswer:[{
        advt_no:number;
        details:string;
        link:string;
    }];

    onlineapplication:[{
        advt_no:number;
        details:string;
        link:string;
    }];

    result:[{
        advt_no:number;
        details:string;
        link:string;}]

}
