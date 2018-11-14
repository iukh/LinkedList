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
    this.list =obj.next;
    console.log("%cLinked List is created","color:red;");
  }
  forEach(callback) {
    var currentObj= this.list;
    var arr =[];
    for (var i = 0; i < this.length; i++) {
      arr[i]=this.get(i);
    }
    return Array.prototype.forEach.call(arr,callback);
  }

//removes last element from the list
  pop() {
     if (this.length==0){
     console.log('Error: It is impossible to remove element. The list is empty')
     } else {
         var position=0;
         let currentObj = this.list;
         while(position<this.length-2) {
             currentObj=currentObj.next;
             position++;
         }
         var delElement = currentObj.next.value;
         currentObj.next = null;
         this.length--;
         console.log(delElement+" element is removed from LinkedList");
   }
 }

// adds element or elements at the end of the list
  push() {
   if (this.length==0) {
           for(let i=arguments.length-1;i>=0;--i) {
               this.set(0,arguments[i]);
           };
       }else {
           let position=0;
           let currentLastElement = this.list;
           while(position<this.length-1) {
               currentLastElement=currentLastElement.next;
               position++;
           }
           for(var i=0;i<arguments.length;i++) {
               currentLastElement.next = {
                   value: arguments[i],
                   next: null
               };
               console.log(arguments[i] +" element is added to LinkedList");
               currentLastElement=currentLastElement.next;
               this.length++;
           }
          console.log(this.toString());
       }
 }

 set(position, value) {
   if (position>this.length) {
          this.push(value);
      } else {
          let currentElement = this.list;
          var i=0;
          while(i<position) {
              currentElement=currentElement.next;
              i++;
          }
          let saveCurrentElement = {
              value: currentElement.value,
              next: currentElement.next
          };
          currentElement.value = value;
          currentElement.next =saveCurrentElement;
          this.length++;
          console.log(this.toString());
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
            arr[i] = '"'+arr[i]+'"';
      }
      if (typeof arr[i] == "object") {
        var b = "";
        for(p in arr[i]) {
            b=b+p+": "+arr[i][p];
        }
        arr[i]="{"+b+"}";
      }
    }
    var stringArray = arr.join(', ')
    console.log("Current List: ["+stringArray+"]");
  }

//each method. Returns element from position
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
}
var List = new LinkedList(1,2,3);
List.toString();
console.log("%cTASK: removes last element from the list. METHOD: List.pop();","color:blue;font-weight:bold;");
List.pop();
List.toString();
console.log("%cTASK: forEach method METHOD: list.forEach((element, index, array) => console.log(element));","color:blue; font-weight:bold;");
List.forEach((element, index, array) => console.log(element));
List.each(1);
console.log("%cTASK: adds element or elements at the end of the list. METHOD: list.push('dsdf', 12);","color:blue;font-weight:bold;");
List.push('dsdf', 12);

console.log("%cTASK: set an element to specific position. METHOD: list.set(1, 'aaaaa')","color:blue; font-weight:bold;");
List.set(1, 'aaaaa');

console.log("%cTASK: adds element or elements at the beginning of the list.","color:blue;font-weight:bold;");
console.log("%cMETHOD: list.unshift('sdd', 222);","color:green;font-weight:bold;");
List.unshift('sdd', 222);

console.log("%cTASK: removes first element from the list.","color:blue;font-weight:bold;");
console.log("%cMETHOD: list.shift();","color:blue;font-weight:bold;");
List.shift();

console.log("%cTASK: Contains, returns boolean.","color:blue;font-weight:bold;");
List.toString();
console.log("%cMETHOD: list.contains('222');","color:green;font-weight:bold;");
List.contains('222');
console.log("%cMETHOD: list.contains('error');","color:green;font-weight:bold;");
List.contains('error');

console.log("%cTASK: reverse list.","color:blue;font-weight:bold;");
console.log("%cMETHOD: List.reverse();","color:green;font-weight:bold;");
List.reverse();


//
// function LinkedList() {
//     this.length = 0;
//     this.head = null;
//     obj = {next: null};
//     for(var i=arguments.length;i;--i) {
//         obj.value = arguments[i-1];
//         obj = {next: obj};
//         this.length++;
//     }
//     obj=obj.next;
//     this.head =obj;
//     console.log("%cLinked List is created","color:red;");
//     this.toString();
// }
// //returns element from position
// LinkedList.prototype.get= function(value) {
//     if (value>this.length-1) {
//         console.log('Error: there is no such element');
//     } else {
//         var i =0;
//         currentObj = this.head;
//         while (i<value){
//             currentObj=currentObj.next;
//             i++;
//         }
//         return currentObj.value;
//     }
// }
// // removes last element from the list
// LinkedList.prototype.pop = function() {
//     if (this.length==0){
//     console.log('Error: It is impossible to remove element. The list is empty')
//     } else {
//         var position=0;
//         currentObj = this.head;
//         while(position<this.length-2) {
//             currentObj=currentObj.next;
//             position++;
//         }
//         delElement =currentObj.next.value;
//         currentObj.next = null;
//         this.length--;
//         console.log(delElement+" element is removed from LinkedList");
//         console.log(this.toString());
//         return delElement;
//     }
// }
// // removes first element from the list
// LinkedList.prototype.shift = function() {
//     if (this.length==0){
//         console.log('Error: It is impossible to remove element. The list is empty')
//         } else {
//             var currentElement= this.head;
//             delElement = currentElement.value;
//             this.head=currentElement.next;
//             currentElement = {};
//             this.length--;
//             console.log(delElement+" element is removed from LinkedList");
//             console.log(this.toString());
//             return delElement;
//     }
// }
// // adds element or elements at the end of the list
// LinkedList.prototype.push = function() {
//     if (this.length==0) {
//         for(var i=arguments.length-1;i>=0;--i) {
//             this.set(0,arguments[i]);
//         };
//     }else {
//         var position=0;
//         currentLastElement = this.head;
//         while(position<this.length-1) {
//             currentLastElement=currentLastElement.next;
//             position++;
//         }
//         for(var i=0;i<arguments.length;i++) {
//             currentLastElement.next = {
//                 value: arguments[i],
//                 next: null
//             };
//             console.log(arguments[i] +" element is added to LinkedList");
//             currentLastElement=currentLastElement.next;
//             this.length++;
//         }
//        console.log(this.toString());
//     }
// }
// // adds element or elements at the beginning of the list
// LinkedList.prototype.unshift = function() {
//     for(var i=arguments.length-1;i>=0;--i) {
//             console.log(arguments[i] +" element is added to LinkedList");
//             this.set(0,arguments[i]);
//         }
// }
// // set an element to specific position
// LinkedList.prototype.set = function(position,value) {
//     if (position>this.length) {
//         this.push(value);
//     } else {
//         currentElement = this.head;
//         var i=0;
//         while(i<position) {
//             currentElement=currentElement.next;
//             i++;
//         }
//         saveCurrentElement = {
//             value: currentElement.value,
//             next: currentElement.next
//         };
//         currentElement.value = value;
//         currentElement.next =saveCurrentElement;
//         this.length++;
//         console.log(this.toString());
//     }
// }
// // forEach on list
// LinkedList.prototype.forEach = function(callback) {
//     var currentObj= this.head;
//     var arr =[];
//     for (var i = 0; i < this.length; i++) {
//       arr[i]=this.get(i);
//     }
//     return Array.prototype.forEach.call(arr,callback);
// }
// //reverse list
// LinkedList.prototype.reverse = function() {
//     var arr =[];
//         for (var i = 0; i < this.length; i++) {
//           arr[i]=this.get(i);
//         }
//     arr.reverse();
//     this.length = 0;
//     this.head = null;
//     obj = {next: null};
//     for(var i=arr.length;i;--i) {
//         obj.value = arr.pop();
//         obj = {next: obj};
//         this.length++;
//     }
//     obj=obj.next;
//     this.head =obj;
//     return this.toString()
// }
// // returns boolean
// LinkedList.prototype.contains = function(value) {
//     var flag =false;
//     var i =0;
//     currentObj = this.head;
//     while (i<this.length){
//     if (currentObj.value == value) { flag=true; break;}
//     currentObj = currentObj.next;
//     i++;
//     }
//     return flag;
// }
// const list = new LinkedList(1, 23, 44, 'dsfs', {});
//
// // loop on list. Use in another methods (e.g. toString)
// /*for (let i = 0; i < list.length; i++) {
//   console.log(list.get(i));
// }*/
//
// // forEach on list
// console.log("%cTASK: forEach on list METHOD: list.forEach((element, index, array) => console.log(element));","color:blue; font-weight:bold;")
// list.forEach((element, index, array) => console.log(element));
//
// // set an element to specific position
// console.log("%cTASK: set an element to specific position. METHOD: list.set(1, 'aaaaa')","color:blue; font-weight:bold;")
// list.set(1, 'aaaaa');
//
// // adds element or elements at the end of the list
// console.log("%cTASK: adds element or elements at the end of the list. METHOD: list.push('dsdf', 12);","color:blue;font-weight:bold;")
// list.push('dsdf', 12);
//
// // adds element or elements at the beginning of the list
// console.log("%cTASK: adds element or elements at the beginning of the list. METHOD: list.unshift('sdd', 222);","color:blue;font-weight:bold;")
// list.unshift('sdd', 222);
//
// // removes last element from the list
// console.log("%cTASK: removes last element from the list. METHOD: list.pop();","color:blue;font-weight:bold;")
// list.pop();
//
// // removes first element from the list
// console.log("%cTASK: removes first element from the list. METHOD: list.shift();","color:blue;font-weight:bold;")
// list.shift();
//
// // returns string representation of a list
// console.log("%cTASK: returns string representation of a list. METHOD: list.toString();","color:blue;font-weight:bold;")
// list.toString();
//
// // reverse list
// console.log("%cTASK: reverse list. METHOD: list.reverse();","color:blue;font-weight:bold;")
// list.reverse();
//
// // returns boolean
// console.log("%cTASK: Contains, returns boolean. METHOD: list.contains('222');","color:blue;font-weight:bold;")
// list.contains('222');
// ----- advanced tasks -----

//list.sort();

// you can experiment on that with "property descriptors"
//for (i in list) {
//  console.log(i);
//}
