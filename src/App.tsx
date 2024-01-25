import React from 'react';
import logo from './logo.svg';
import './App.css';
import { isNullOrUndefined } from 'util';
import DATA from './data.json';
import TestComp from './TestComp';
/*
const aaa = 'hello';//型は‘hello’という具体的な文字列、つまり文字列リテラル
//次のやり方と同じ効果
let ccc: 'hello' 
ccc = 'hi'
// このような場合、型は推論してくれるので、特に型を指定しなくても大丈夫。
let bbb: string = 'hello';
bbb = 'hi';
// 型を指定するやつはアノテーションという

// 配列
// 複数型が交ぜている場合、
const arr1 = [1, 'heloo'];
// →
const arr2: (string | number)[] = [1, 'hello'];

// オブジェクト
interface NAME {
  first :string;
  last: string | null;
}

const nameObj: NAME = {
  first: 'yamada',
  last: null
}

// 関数
const func = (x:number, y:number): number => {
  return x+y;
}

// intersectione type

type PROFILE = {
  age: number;
  city:string;
}

type LOGIN = {
  username:string;
  password:number;
}

type USER = PROFILE & LOGIN

const usrtA: USER ={
  age: 20,
  city: "tokyo",
  username: "A",
  password: 123
}

// union types
let value: boolean | number;
value =true;
value = 10;

let company : "facebook" | "Google" | "Amazon";
company = "facebook" // OK
company = "Apple" // NG

type KEYS = {
  facebook: string;
  Google: string;
  Amazon: string;
}
let key: keyof KEYS;
key = 'facebook' // OK
key = 'Apple' //NG

// typeoff
let mes: string = "hi";
let mes2: typeof mes;
mes2 = "hello";

let animal = {cat: "small cat"};
let newAnimal: typeof animal= {dog: "big dog"}; // NG
let newAnimal: typeof animal= {cat: "big cat"}; //OK

// enum 列举类型 自动赋予连续编号
enum OS {
  Windows,
  Mac,
  Linux,
}

interface PC {
  id: number;
  OStype: OS;
}

const pc1: PC = {
  id:1,
  OStype: OS.Mac
}

//互換性
const a = 'aaa';
let b:string;
b = a; // OK 抽象的なものにリテラル型を代入できる。逆はダメ
let c:string = 'bbb';
let d: 'bbb' = c //NG

// generics. 型を定義した時点で、型を固定せず、使用時に都度指定する
interface GEN<type> {
  item: type;
}

const obj: GEN<string> = {
  item: 'hello'
};

//  デフォルトの型を指定することもできる
interface GEN2<T = string> {
  item: T;
}
const obj2: GEN2 = {
  item: 'hello'
};// デフォルトの型を使用
const obj3: GEN2<number> = {
  item: 1
};//　デフォルト以外の型を指定できる

// 固定したい場合
interface GEN3<T extends string | number> {
  item: T;
}

// functionで使用する場合
function funGEN<T>(props: T) {
  return {item: props};
}
const callFun = funGEN<string>('test');

function funGen1<T extends string | null>(props: T){};
const callFunGen1 = funGen1(null);

interface Props {
  value: number;
}
const funGen2 = <T extends Props>(props: T) => {
  return {value: props.value};
}
const gen2 = funGen2({value:123});

// Json データの型を一括定義する
type USERS = typeof DATA;

// React 
// rafce を入力し選択すると、React ファンクションコンポーネントのテンプレートが挿入される

*/

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TestComp text='hello'/>
      </header>
    </div>
  );
}

export default App;
