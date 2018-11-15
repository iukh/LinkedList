/*
you should implement data structure called Linked list (in can be doubly linked or singly linked)
and all methods that listed below
*/
class Node {
  constructor(value,next) {
    this.value = value;
    this.next = next;
  }
}
class LinkedList {
  constructor() {
    this.length = arguments.length;
    let obj = new Node(null,null);
    for(let i = this.length; i; --i) {
      obj.value = arguments[i-1];
      obj = new Node(null,obj);
    }
    this.list = obj.next;
    console.log("%cLinked List is created","color:purple;font-weight:bold;");
  }

  //removes last element from the list
  pop() {
    if (this.length == 0) {
      console.log('Error: It is impossible to remove element. The list is empty')
    } else {
      let position = 0;
      let currentObj = this.list;
      if (this.length == 1) {
        var delElement = currentObj.value;
        currentObj.value = null;
        currentObj.next = null;
      } else {
        //move to the penultimate element
        while (position < this.length - 2) {
          currentObj = currentObj.next;
          position++;
        };
        var delElement = currentObj.next.value;
        currentObj.next = null;
      }
      this.length--;
      console.log( delElement + " element is removed from LinkedList");
    }
  }

  //set an element with value to specific position
  set(position, value) {
    if (position > this.length) {
      this.push(value);
    } else {
      let currentElement = this.list;
      //move to element with position-1
      let i=0;
      while(i < position) {
        currentElement = currentElement.next;
        i++;
      }
      let saveCurrentElement = new Node(currentElement.value, currentElement.next );
      currentElement.value = value;
      currentElement.next = saveCurrentElement;
      this.length++;
      this.toString();
    }
  }

  // adds elements at the end of the list
  push() {
    if (this.length == 0) {
      for( let i = arguments.length-1; i >= 0; --i) {
        this.set(0, arguments[i]);
      };
    } else {
      let position = 0;
      let currentLastElement = this.list;
      //move to  the last element
      while(position < this.length-1) {
        currentLastElement = currentLastElement.next;
        position++;
      }
      for(var i = 0; i < arguments.length; i++) {
        currentLastElement.next = {
          value: arguments[i],
          next: null
        };
        console.log(arguments[i] + " element is added to LinkedList");
        currentLastElement = currentLastElement.next;
        this.length++;
      }
      this.toString();
    }
  }

  unshift() {
    for(var i=arguments.length-1;i>=0;--i) {
      console.log(arguments[i] +" element is added to LinkedList");
      this.set(0,arguments[i]);
    }
  }

  shift() {
    if (this.length==0){
      console.log('Error: It is impossible to remove element. The list is empty')
    } else {
      var currentElement= this.list;
      let delElement = currentElement.value;
      this.list=currentElement.next;
      currentElement = {};
      this.length--;
      console.log(delElement+" element is removed from LinkedList");
      console.log(this.toString());
      return delElement;
    }
  }

  contains(value) {
    var flag =false;
    var i =0;
    var  currentObj = this.list;
    while (i<this.length){
      if (currentObj.value == value) { flag=true; break;}
      currentObj = currentObj.next;
      i++;
    }
    console.log(flag);
  }

  reverse() {
    var arr =[];
    for (var i = 0; i < this.length; i++) {
      arr[i]=this.get(i);
    }
    arr.reverse();
    this.length = 0;
    this.list = null;
    let obj = {next: null};
    for(var i=arr.length;i;--i) {
      obj.value = arr.pop();
      obj = {next: obj};
      this.length++;
    }
    obj=obj.next;
    this.list =obj;
    return this.toString()
  }
  // additional method to display the result
  toString() {
    let arr =[];
    for (var i = 0; i < this.length; i++) {
      arr[i]=this.get(i);
      if (typeof arr[i] == "string") {
        arr[i] = '"' + arr[i] + '"';
      }
      if (typeof arr[i] == "object") {
        var b = "";
        for( let p in arr[i]) {
          b = b + p + ": " + arr[i][p];
        }
        arr[i] = "{" + b + "}";
      }
    }
    var stringArray = arr.join(', ')
    console.log("Current List: [" + stringArray + "]");
    console.log("");
  }

  //  each method. Returns element from position
  each(value) {
    if (value>this.length-1) {
      console.log('Error: there is no element on such position');
    } else {
      var i =0;
      var currentObj = this.list;
      while (i<value){
        currentObj=currentObj.next;
        i++;
      }
      console.log(currentObj);
    }
  }

  get(value) {
    if (value>this.length-1) {
      console.log('Error: there is no such element');
    } else {
      var i =0;
      var currentObj = this.list;
      while (i<value){
        currentObj=currentObj.next;
        i++;
      }
      return currentObj.value;
    }
  }

  forEach(callback) {
    var currentObj= this.list;
    var arr =[];
    for (var i = 0; i < this.length; i++) {
      arr[i]=this.get(i);
    }
    return Array.prototype.forEach.call(arr,callback);
  }
}
console.log("%cMETHOD: new LinkedList(11,'123',{ 'a': 'abc'});","color:green;font-weight:bold;");
let List = new LinkedList(11,"123",{ "a": "abc"});
List.toString();
console.log("%cTASK: to remove last element from the list.","color:blue;font-weight:bold;");
console.log("%cMETHOD: List.pop();","color:green;font-weight:bold;");
List.pop();
List.toString();
console.log("%cTASK: set an element to specific position.","color:blue; font-weight:bold;");
console.log("%cMETHOD: List.set(1, 'aaaaa')","color:green; font-weight:bold;");
List.set(1, 'aaaaa');
console.log("%cTASK: adds elements at the end of the list.","color:blue;font-weight:bold;");
console.log("%cMETHOD: List.push('dsdf', 12);","color:green;font-weight:bold;");
List.push('dsdf', 12);
console.log("%cTASK: adds element or elements at the beginning of the list.","color:blue;font-weight:bold;");
console.log("%cMETHOD: list.unshift('sdd', 222);","color:green;font-weight:bold;");
List.unshift('sdd', 222);

// console.log("%cTASK: forEach method METHOD: list.forEach((element, index, array) => console.log(element));","color:blue; font-weight:bold;");
// List.forEach((element, index, array) => console.log(element));
// List.each(1);
// console.log("%cTASK: adds element or elements at the end of the list. METHOD: list.push('dsdf', 12);","color:blue;font-weight:bold;");
// List.push('dsdf', 12);
//

// console.log("%cTASK: adds element or elements at the beginning of the list.","color:blue;font-weight:bold;");
// console.log("%cMETHOD: list.unshift('sdd', 222);","color:green;font-weight:bold;");
// List.unshift('sdd', 222);
//
// console.log("%cTASK: removes first element from the list.","color:blue;font-weight:bold;");
// console.log("%cMETHOD: list.shift();","color:blue;font-weight:bold;");
// List.shift();
//
// console.log("%cTASK: Contains, returns boolean.","color:blue;font-weight:bold;");
// List.toString();
// console.log("%cMETHOD: list.contains('222');","color:green;font-weight:bold;");
// List.contains('222');
// console.log("%cMETHOD: list.contains('error');","color:green;font-weight:bold;");
// List.contains('error');
//
// console.log("%cTASK: reverse list.","color:blue;font-weight:bold;");
// console.log("%cMETHOD: List.reverse();","color:green;font-weight:bold;");
// List.reverse();
