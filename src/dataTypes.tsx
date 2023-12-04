import React from 'react'

const dataTypes = () => {
    let data: any; //not recommended ;can take any data type
    let data1: unknown;
    let name: string;
    let age: number | string; // UNION ; can contain numbeer or string value
    let isStudent: boolean;
    let hobbies: string[]; //contains array of string elmts only
    let role: [number, string]; //TUPLE ;contains 1 number elmt and 1 string elmt
    function printName(name: string) {
      //FUNCTION
      console.log(name);
    }
    let printName4:Function

    let printName1: (name: string) => void; //returns void
    let printName2: (name: string) => number;
    let printName3: (name: string) => never; //returns nothing
    printName("Muskan");

    type Person = {
      // definig type for OBJECT
      name: string;
      age?: number; // OPTIONAL ...even if we remove age from from person obj then we won't get error
    };
    let person: Person = {
      //OBJECT
      name: "Muskan",
      age: 22,
    };

    let lotsOfPeople: Person[]; //ARRAY

    type X = {
      a: string;
      b: number;
    };

    type Y = X & {
      //X is extended i.e. Y can use properties of X
      c: string;
      d: number;
    };

    let y: Y = {
      // if we remove  a/b it will throw error as Y contains X and all properties of X &Y inside y should be used
      c: "hello",
      d: 42,
      a: "nice",
      b: 25,
    };

    interface Human {
      //interface and type works the same,syntax difference
      name: string;
      age: number;
    }
    interface Guys extends Human {
      profession: string;
    }

    type L = Human & {
      //extending property of interface
      a: string;
      b: number;
    };
    interface Individual extends L {
      //extending property of type
      a: string;
      b: number;
    }
  return (
    <div>dataTypes</div>
  )
}

export default dataTypes