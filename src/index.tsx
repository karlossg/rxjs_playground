import * as React from "react";
import { render } from "react-dom";
import { interval, map } from "rxjs";
import map from "rxjs/operators/map";
import { componentFromStream } from "recompose";

const numbers = interval(100);
// console.log(numbers.subscribe(item => console.log(item)));

const App = componentFromStream(props$ =>
  numbers.pipe(map((item: number) => <div>{item}</div>))
);

// const App = (props: any) => (
//   <div>
//     <h1>{props.message}</h1>
//   </div>
// );

// const createTypeWriter = (message: any, speed: any) =>
//   Observable.zip(from(message), from(speed), letter => letter).scan(
//     (acc, curr) => acc + curr
//   );

// const StreamingApp = componentFromStream(props$ =>
//   props$.pipe(
//     switchMap(props => createTypeWriter(props.message, props.speed)),
//     map(message => ({ message }), map(App))
//   )
// );

render(<App />, document.getElementById("root"));
