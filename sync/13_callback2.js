class Counter {
    constructor(runEveryFiveTimes) {
        this.counter = 0;
        this.callback = runEveryFiveTimes;
    }

    increase() {
        this.counter++;
        console.log(this.counter);
        if (this.counter % 5 === 0) {
            this.callback && this.callback(this.counter); // 아래 code와 같음!!
            // if (this.callback){
            //     this.callback(this.counter);
            // }            
        }
    }
}

function printSomething(num) {
    console.log(`Wow! ${num}`);
}

function alertNum(num) {
    alert(`Wow! ${num}`);
}

const coolCounter = new Counter(printSomething);

coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();

coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();

const coolCounter2 = new Counter(alertNum);

coolCounter2.increase();
coolCounter2.increase();
coolCounter2.increase();
coolCounter2.increase();
coolCounter2.increase();

coolCounter2.increase();
coolCounter2.increase();
coolCounter2.increase();
coolCounter2.increase();
coolCounter2.increase();

const coolCounter3 = new Counter();

coolCounter3.increase();
coolCounter3.increase();
coolCounter3.increase();
coolCounter3.increase();
coolCounter3.increase();

coolCounter3.increase();
coolCounter3.increase();
coolCounter3.increase();
coolCounter3.increase();
coolCounter3.increase();