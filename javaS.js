                                                      // CHAPTER 3: Loops And String 
//  // Prompt is used same as alert but it take any input from user
//  let i= prompt("Enter you name");
//  console.log("Hello,", i);                                                     

//                 // FOR-OF loop is used to iterate through strings and array
// let str="HafsaSarfaraz";
// let size= 0;
// for(let val of str){
//     console.log("val : ", val);
//     size++;
// }

// console.log("String size: ", size);

              // FOR-IN loop is used to iterate through object and array
// let stud={
//     name : "Hafsa",
//     age : 20,
//     ispass: true
// }

// for(let key in stud){
//     console.log("key: ",key, ", value: ", stud[key]);
// }

                        //String
// Strings : Has propertise and function " let str= "Hafsa" "
// Propertise: str.lenght,, str[0], str[1]...etc
//String literal(string CAn also be used in this way if we want to print the input satment in it): let str= ` Hafsa ${1+2+3} `;
//Methods: str.toUpperCase(), str.toLowerCase(), str.trim()-> to remove the starting and ending spaces
//         str.slice(start, end?)-> this only give that part of string which index is starting from start and end mentioned in end but does not give end value
//         str1.concat(str2), str.replace(valueToBeReplace, TheReplacedValue) forExa= str.replace("H","N")
//         str.charAt(index)
// Practise question for string
// let username= prompt("Enter your full name");

// let newname= "@" + `${username}` + username.length;
// console.log(newname);

//                              Array
// Practise question for array using for of loop
// let marks= [3,4,2,1,1];
// let sum=0;
// for(let mark of marks){
//     sum=sum+mark;
// }

// let avg= sum/5;
// console.log(`The avg marks is ${avg}`);

//practise #2 array

// let items= [250,645,300,900,50];
// let i=0;
// for(let item of items){
//     let a= item/10;
//     items[i]=items[i]-a;
//     console.log(`Items after offer = ${items[i]}`);
//     i++;
// }

// Array Method:
//      arrName.push()->add to end in array,, arrName.pop()->delete from end
//      arrName.toString()-->Convert array into string
//     arrName.unshift()-->Add to start in array,, arrName.shift()-->delete from start in array
//     arrName.concat(secondArray)-->To join 2 arrays
//     arrName.slice(startinfIndex, endingINdex)-->to give only that part which index is mentioned
//     arrName.splice(startingIndex, noOfElementsToDelete, ReplaceElement)-->is used to add ,delete,or replace element
// let companies= ["Bloomberg", "Microsoft", "uber", "Google", "IBM", "Netflix"];
// companies.shift();
// console.log(companies);
// companies.splice(1,1,"OLA");
// console.log(companies);
// companies.push("Amazon");
// console.log(companies);

//                        Functions
//->Arrow function= const arrow= (a,b)=>{console.log(a+b)};

//Practice 1:
// function vowel(str,count){
//     str.toLowerCase();
//     for(let str1 of str){
//         if(str1==="a" || str1==="e" || str1==="i" || str1==="o" || str1==="u"){
//           count++;
//         }
//     }

//     console.log(`The no of vowels in ${str} = ${count}`);
// }

// count=0;
// vowel("Hafsa",count);

// Paractise 2 -> using forEachLoop to print the square of each value in given array

// let arr=[2,1,3,4,1];
// arr.forEach((val,indx,arr)=>{
//     arr[indx]=val*val;
//     console.log(arr[indx]);
// })

//Array Methods: 1-arrName.forEach(callBackFunc(value, index, array))-->Array ky ik ik index py ja ky operation perform krta hy jesy hm ny uper ik ik no ka square liya hy
//               2-arrName.map(callBackFunc(value, index, array))-->same as foreach but the 
//               diff is that ky ya ik naya array bna ky deta hy-->Example     let newarr= arr.map((val)=>{
//                                                                                       return val*val})
//               3-arrName.filter((callBachFunc(value,index,arr)))-->is ky function mn hm koi condition dety hain ur jis value py condition true hui vo new arry mn ja ky store ho jaye gi 
//                                                                   ForExample: let newArr= arr.filter((val)=>{
    //                                                                                            return val % 2===0 });
    //           4- arrName.reduce((callBackFunc(prev , current)))-->is used jb hmy output mn sirk ik value chahiya like sum , maxNum, MinNum etc
    //                                                         ForExampe: const output= arr.reduce((prev,curr)=>{
        //                                                                               return prev+curr;});

//Practice1: using filter
// let arr1=[90,34,89,99,100];
// let newArr= arr1.filter((val)=>{
//     return val>=90;
// })

// console.log(newArr);

 //                             DOM Concept
 //               1-Acsessing the element of html in JS has 3 different ways
 // document.getElementById(), document.getElementsByClassName(), document.getElementByTagName()
 // The best way og accessing elemnt is = document.querySelector(), document.querySelectorAll()-->This can access element wheather it's id, class, or tagname
 //               
 //               2-Propertise of DOM
 //1-tagName-->display the tags name for elements like for paragraph (p), for heading1(h1)etc
 //2-innerText-->Display the inner text of the element plus its children also and also to change its values like h1.innerText()="abcd"; 
 //3-innerHTML-->Display the inner text of element and its children with tags
 //4-textContent-->same as inner text but Display the element even it is hidden
 //5-element.getAttribute(attribute-->like class, id etc)-->to get the attribute(like class, id, values) or element.setAttribute(attr, value)-->To set the attribute value
//6-element.style--> to add styling same as css
//7--->Create & insert Elements:first we create element by let el= document.createElement("div")
                            //and then insert element (4 ways to insert element)
                        //1-element.append(el)-->Add at the end of node/element(div,button etc) inside
                        //2-element.prepend(el)-->Add at the start of node inside
                        //3-element.before(el)-->add before the node outside
                        //4-element.after(el)-->add after the node outside
//8--> delete Element: element.remove();                        

//Practise 1:
// let heading= document.querySelector("h2");
// console.log(heading);

// heading.innerText = heading.innerText + " From Apna College Students";

//Practise 2:
// let btn= document.createElement("button");
// btn.innerText= "Click me";
// btn.style.backgroundColor="red";
// btn.style.color= "white";
// document.querySelector("body").prepend(btn);

//                           Events in JS
//1- element.event=()=>{   //event can be (onclick, ondblclick, onmouseover etc), element can be button, heading, paragraph etc
 //                any statment   };
 //
 //There is 2nd way to use event listener
 //element.addEventListener(event,callBack)-->this is more better way to add event listener
 //element.removeEventListener(event, callBack)--this is used to remove eventlistener

 //Practise 1 : Create a toggle button
 let mods= document.querySelector("button");
 let currmode= "light";

 mods.addEventListener("click", ()=>{
    if(currmode==="light"){
        currmode= "dark";
        document.querySelector("body").style.backgroundColor="black";
    }else{
        currmode="light";
        document.querySelector("body").style.backgroundColor= "white";
    }

    console.log(currmode);
 });

