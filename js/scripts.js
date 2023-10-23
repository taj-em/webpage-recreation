function rebuild(event) {
 document.querySelector("h1").remove();
 const body = document.querySelector("body");
 const h1 = document.createElement("h1");
 const secondH1 = document.createElement("h1")
 const h2 = document.createElement("h2");
 const ul = document.createElement("ul");
 const li1 = document.createElement("li");
 const li2 = document.createElement("li");
 const a = document.createElement("a");
 const p = document.createElement("p");
 const img = document.createElement("img");
 h1.append("Website Recreation Practice");
 h2.append("Source");
 p.append("The HTML of this webpage was created with javaScript.");
 li1.append("It is endemic to the mountains of Colombia.");
 li2.append("It usually searches for insects on the underside of leaves of outer limbs while clinging to leaves with its feet.");
 ul.append(li1, li2);
 a.append("Wikipedia");
 a.setAttribute("href", "https://en.wikipedia.org/wiki/Multicoloured_tanager");
 img.setAttribute("src","https://cdn.download.ams.birds.cornell.edu/api/v1/asset/202984001/900");
 img.setAttribute("alt","This is an image of a Multicolored Tanager bird from birdsoftheworld.org");
 img.setAttribute("style", "width:50%");
 secondH1.append(" Facts about the Multicolored Tanager")
 body.append(h1);
 body.append(p);
 body.append(img);
 body.append(secondH1);
 body.append(ul);
 body.append(h2);
 body.append(a);
}






window.addEventListener("load", function () {
  rebuild();
});