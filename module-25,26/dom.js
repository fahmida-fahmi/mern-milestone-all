const newsection = document.createElement("section");
const ul = document.createElement("ul");
const li1 = document.createElement("li");
li1.innerText = "hello";
const li2 = document.createElement("li");
li2.innerText = "hola";
const li3 = document.createElement("li");
li3.innerText = "nihow";

ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
newsection.appendChild(ul);
const placelist = document.getElementById("main");
placelist.appendChild(newsection);

const section2 = document.createElement("section");
section2.innerHTML = `
<h1>My dynamic html list</h1>
<ul>
    <li>set</li>
    <li>get</li>
    <li>pet</li>
  </ul>
`;

placelist.appendChild(section2);

