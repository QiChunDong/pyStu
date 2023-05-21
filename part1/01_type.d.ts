declare let v1: number;
declare let v2: string | number;
declare let v3: "male" | "female";
declare let v4: any;
declare let v5: any;
declare let v6: unknown;
declare let v7: string;
declare function f2(): never;
declare let v8: object;
declare let v9: {
    name: string;
};
declare let v10: {
    name: string;
    age?: number;
};
declare let v11: {
    name: string;
    [xxx: string]: any;
};
declare let v12: {
    name: string;
    [yyyy: number]: boolean;
};
declare let f3: (a: string, b: number) => number;
declare let v13: string[];
declare let v14: Array<number>;
declare let v15: [string, number];
declare enum v16 {
    A = 0,
    B = 1
}
declare let v17: {
    name: string;
    gender: v16;
};
declare enum v18 {
    A = 1,
    B = 2
}
declare let v19: string | number;
declare let v20: string & number;
declare let v21: {
    name: string;
} & {
    age: number;
};
type t1 = string;
declare let v23: t1;
type t2 = 1 | 2 | 3 | 4 | 5;
declare let v24: t2;
