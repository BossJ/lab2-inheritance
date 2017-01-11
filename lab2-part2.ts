class SavingsAccount {
    private withdrawals:number;

    constructor(private initialBalance:number, private ownerName:string){

    }

    deposit(money:number):void{
        this.initialBalance += money;
    }

    withdraw(money:number):void{
        if(this.withdrawals <= 3){
            this.initialBalance -= money;
            this.withdrawals += 1;
        }
        else{
            console.log("Error, max number of withdrawals met.")
        }
    }

    checkBalance():void{
        console.log("${this.ownerName} has ${this.initialBalance} in the account.")
    }
}

