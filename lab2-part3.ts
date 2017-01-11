class Account {
    ownerName:string;
    initialBalance:number;

    constructor(ownerName:string, initialBalance:number){
        this.ownerName = ownerName;
        this.initialBalance = initialBalance;
    }

    deposit(money:number):void{
        this.initialBalance += money;
    }

    withdraw(money:number):void{
        this.initialBalance -= money;
    }

    checkBalance():void{
        console.log("${this.ownerName} has ${this.initialBalance} in the account.")
    }
}

class CheckingsAccounts extends Account{
    constructor(ownerName:string, initialBalance:number){
        super(ownerName, initialBalance);
    }
}

class SavingsAccounts extends Account {
    private withdrawals:number;

    constructor(ownerName:string, initialBalance:number){
        super(ownerName, initialBalance);
        this.withdrawals = 0;
    }

    withdraw(money:number):void{
        if(this.withdrawals <= 3){
            this.initialBalance -= money;
            this.withdrawals++;
        } else {
            console.log("error, no more withdrawals");
        }
    }
}