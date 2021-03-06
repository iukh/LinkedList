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
      let currentObj = this.list;
      if (this.length == 1) {
        var delElement = currentObj.value;
        currentObj.value = null;
        currentObj.next = null;
      } else {
        //move to the penultimate element
        currentObj = this.each(this.length-2);
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
      //select element with position-1
      currentElement = this.each(position);
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
      let currentLastElement = this.list;
      //move to  the last element
      currentLastElement = this.each(this.length-1);
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

  //add elements at the beginning of the list
  unshift() {
    for (let i = arguments.length - 1; i >= 0; --i) {
      console.log(arguments[i] + " element is added to LinkedList");
      this.set(0,arguments[i]);
    }
  }

  //remove the first element from list
  shift() {
    if (this.length == 0){
      console.log('Error: It is impossible to remove element. The list is empty')
    } else {
      let currentElement = this.list;
      let delElement = currentElement.value;
      this.list = currentElement.next;
      currentElement = {};
      this.length--;
      console.log(delElement+" element is removed from LinkedList");
      this.toString();
    }
  }

  contains(value) {
    let flag =false;
    let i =0;
    var  currentObj = this.list;
    while (i < this.length){
      if (currentObj.value == value)
      flag=true; break;
      currentObj = currentObj.next;
      i++;
    }
    console.log(flag);
  }

  reverse() {
    if (this.length > 1) {
      var  currentElement = this.list; //a
      var nextElement = currentElement.next; //b
      var tmpElement = nextElement.next; //c
      for (let i = 0; i < this.length - 1; i++) {
        if (i==0) currentElement.next = null;
        nextElement.next = currentElement;
        currentElement = nextElement;
        nextElement = tmpElement;
        if (tmpElement !== null )
        tmpElement  = tmpElement.next;
      }
      this.list = currentElement;
    }
    this.toString();
  }

  //  each method. Returns element from position
  each(position) {
    if (position > this.length-1) {
      console.log('Error: there is no element on such position');
    } else {
      let i = 0;
      let currentObj = this.list;
      while (i < position){
        currentObj=currentObj.next;
        i++;
      }
      return currentObj;
    }
  }
//
  forEach(callback) {
    let currentObj= this.list;
    let arr =[];
    for (let i = 0; i < this.length; i++) {
      arr[i]=this.each(i).value;
    }
    return Array.prototype.forEach.call(arr,callback);
  }
  // additional method to display the result
  toString() {
    let arr =[];
    for (let i = 0; i < this.length; i++) {
      arr[i]=this.each(i).value;
      if (typeof arr[i] == "string") {
        arr[i] = '"' + arr[i] + '"';
      }
      if (typeof arr[i] == "object") {
        let b = "";
        for( let p in arr[i]) {
          b = b + p + ": " + arr[i][p];
        }
        arr[i] = "{" + b + "}";
      }
    }
    let stringArray = arr.join(', ')
    console.log("Current List: [" + stringArray + "]");
  }
}
console.log("%cMETHOD: new LinkedList(11,'123',{ 'a': 'abc'});","color:green;font-weight:bold;");
let List = new LinkedList(11,"123",{ "a": "abc"});
List.toString();
console.log("%cTASK: remove last element from the list.","color:blue;font-weight:bold;");
console.log("%cMETHOD: List.pop();","color:green;font-weight:bold;");
List.pop();
List.toString();
console.log("%cTASK: set an element to specific position.","color:blue; font-weight:bold;");
console.log("%cMETHOD: List.set(1, 'aaaaa')","color:green; font-weight:bold;");
List.set(1, 'aaaaa');
console.log("%cTASK: add elements at the end of the list.","color:blue;font-weight:bold;");
console.log("%cMETHOD: List.push('dsdf', 12);","color:green;font-weight:bold;");
List.push('dsdf', 12);
console.log("%cTASK: add elements at the beginning of the list.","color:blue;font-weight:bold;");
console.log("%cMETHOD: List.unshift('sdd', 222);","color:green;font-weight:bold;");
List.unshift('sdd', 222);
console.log("%cTASK: remove the first element from the list.","color:blue;font-weight:bold;");
console.log("%cMETHOD: List.shift();","color:green;font-weight:bold;");
List.shift();
console.log("%cTASK: Contains element in the list, returns boolean.","color:blue;font-weight:bold;");
console.log("%cMETHOD: List.contains('222');","color:green;font-weight:bold;");
List.contains('222');
console.log("%cMETHOD: List.contains('error');","color:green;font-weight:bold;");
List.contains('error');
console.log("%cTASK: reverse the list.","color:blue;font-weight:bold;");
console.log("%cMETHOD: List.reverse();","color:green;font-weight:bold;");
List.reverse();
console.log("%cTASK: return element from position.","color:blue;font-weight:bold;");
console.log("%cMETHOD: List.each(3);","color:green;font-weight:bold;");
console.log(List.each(3));
console.log("%cTASK: forEach method;","color:blue; font-weight:bold;");
console.log("%cMETHOD: List.forEach((element, index, array) => console.log(element));","color:green; font-weight:bold;");
List.forEach((element, index, array) => console.log(element));
