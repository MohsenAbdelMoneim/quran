 // }
//  };
// ("   اضافه و تعديل العناصر خصايص العنصر  ")
// var imge = document.getElementById("imge");
// imge.setAttribute('alt', 'mo');
// imge.setAttribute('title', 'mo');
// console.log(imge.title); // هتطبع "mo"



// ("  sibling - parent ")
// var elemant=document.getElementById("second");
// elemant.nextElementSibling.innerHTML='mohsen'
// console.log(elemant.previousElementSibling);
// console.log(elemant.nextElementSibling);
// console.log(elemant.parentElement);

// ("innerhtml - outerhtml"  "الفرق بين")
// var contaner =document.getElementById("contaner");
// contaner.outerText= '<p>  mohsen tarek </p>'


// (css style)
// var contaner = document.getElementById("contaner");
// // contaner.style.background= '#444'
// contaner.style.color ="#fa0"
// contaner.style.padding='10px'
// contaner.style.borderLeft="4px solid #fa0"
// contaner.style.cssText = `
// background:#444;
//     color:red;
//     border:4px solid #fa0;
//     padding:10px;
// `
// contaner.style.removeProperty("color")
// contaner.style.removeProperty("background")
// contaner.style.removeProperty("padding")



// // ("  creat element by javascript  ")
// // 1 ("انشاء العنصر ")
// var container=document.createElement("div");
// var head=document.createElement("h1");
// var img = document.createElement("img");
// // 2(  " اضافه المحتوي ")
// var content =document.createTextNode("mohsen tarek")
// head.appendChild(content)
// // head.appendChild(content); // يعني بحط المحتوى جوا العنصر كأنه ابنه
// img.src='img/1.jpg'
// img.style.width='100px'
// // 3("اضافه العنصر ف مكان المراد")
// container.appendChild(head)
// container.appendChild(img)
//  document.body.appendChild(container) //   ("هتشوف صوره في صفحه ")

//  console.log(container);
// // ("  اضافه ث س س   ")
//  container.style.background='#666';
//  container.style.color='#800';
//   container.style.padding='10px';
//    container.style.textAlign='center';


// (  project-creat cards )
// var con =document. createElement("div");
// container.body.appendChild(container);
// container.style.textAlign="center"
// function elemantt(){
// // elemantt

// var card =document.createElement("div");
// var title= document.createElement("h2");
// var age = document.createElement("p")
// var img = document.createElement("img")
// // content

// var head=document.createTextNode("title")
// var agecontant=document.createTextNode("age")
// img.src="img/1.jpg"
// title.appendChild("head")
// age.appendChild("agecontant")



// card.appendChild(title);
// card.appendChild(age);
// card.appendChild(img);

// container.appendChild(card);
// }

// elemantt()










