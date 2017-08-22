import * as mcalc from './calc'

class App {
    
    public static main():void{
        let num1 = 15;
        let num2 = 3;

        let calc = new mcalc.Calc(num1, num2);

        console.log(calc.Sum());
        console.log(calc.Minus());
        console.log(calc.Times());
        console.log(calc.Division());
        
    }

}

App.main()