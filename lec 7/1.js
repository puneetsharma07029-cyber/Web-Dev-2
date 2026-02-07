const para = document.createElement("p");
para.textContent = "This is a dynamically added paragraph";
console.log(para);

document.getElementById("content").appendChild(para)

document.querySelector("#content p").remove()

const image = document.createElement("img");
image.setAttribute("src", "https://static.vecteezy.com/system/resources/previews/040/888/771/large_2x/ai-generated-examine-the-significance-of-debugging-tools-and-techniques-in-the-programming-workflow-and-evaluate-how-they-contribute-to-improving-code-quality-and-efficiency-free-photo.jpg")
image.setAttribute("alt", "javascript")
const gallery = document.getElementById("gallery");
gallery.appendChild(image);