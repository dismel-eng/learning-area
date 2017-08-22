export class Calc {
    private _a: number;
    private _b: number;

    constructor(a:number, b:number) {
        this._a = a;
        this._b = b;
    }

    get A(): number{ return this._a; }
    get B(): number{ return this._b; }

    set A(value: number){ this._a = value; }
    set B(value: number){ this._b = value; }

    Sum(): number{ return this.A + this.B; }

    Minus(): number{ return this.A - this.B; }

    /** There is not '*' & '/' operands */
    Times(): number{
        let product = 0;

        for (var i = 0; i < this.B; i++) {
            product += this.A;            
        }

        return product;
    }

    /** There is not '*' & '/' operands */
    Division(): number{
        let rest = this.A;
        let quotient = 0;

        while (rest >= this.B) {
            rest = rest - this.B;
            quotient++;
        }
        return quotient;
    }
}
