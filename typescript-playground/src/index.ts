// import express, {type Request, type Response} from "express"
//
// const app = express()
// const port = 3000;
//
// app.get('/', (request: Request, response:Response) => {
//     response.send('Hello, Typescript with Express!');
// });
//
// app.listen(port, () => console.log(`Server running on port ${port} ( Hi! ) `));
// ----------------

var iubi = "te iubesc mult de tot";

function iubiIubestePe(nume: string) {
    console.log(`Iubii iubeste mult de tot pe ${nume}`);
}

iubiIubestePe("Alexandraaaa");

function adunare(numar1: number, numar2: number): number {
    return numar1 + numar2;
}

var rezultat = adunare(569, 1659);
console.log(rezultat)




