class CheckingsAccount {

    constructor(private initialBalance:number, private ownerName:string){

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