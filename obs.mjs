import { Observable } from 'rxjs';

let myObs = new Observable(subscriber => {
    let count = 1;
    let myInterval = setInterval(() => subscriber.next(count++), 1000);
    setTimeout(() => {
        clearInterval(myInterval);
        subscriber.error("Majot Issue");
    }, 7000)
    setTimeout(() => {
        clearInterval(myInterval);
        subscriber.complete();
    }, 8000)
})

myObs.subscribe(
    data => console.log(data),
    err => console.log(err),
    () => console.log("Observable Compeleted")
    );

