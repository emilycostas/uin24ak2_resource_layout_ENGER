//Konsollogger først resources for å se at sammenkoblingen av de ulike filene fungerer.
console.log(resources)

//Lager først en tom let variabel for resourceHTML som senere kan fylles med innhold.
let resourcesHTML = ""

/*Bruker map for å gå gjennom resources-arrayen og setter resource som parameter, og limer inn html-struktur.
Html-strukturen blir tatt med fra start av article til og med start av ul for at det skal bli riktig struktur på siden.*/
//Kilde: Legodudes fra forelesning og https://lms.webtricks.blog/kurs/innforing-i-programmering/arrayer-og-objekter/map-og-filter
resources.map((resource) => {
  resourcesHTML += `<article id="${resource.category}" class="article kategori">
    <h2>${resource.category}</h2>
    <p>${resource.text}</p>
    <ul>`
  
  //Jeg går så gjennom array på andre nivå (mapper sources i resource) for å hente linkene og titlene som ligger i sources.
  resource.sources.map((source) => {
    resourcesHTML += `<li id="linker"><a href="${source.url}">${source.title}</a></li>`
  })

  /*Avslutter så listen ved å legge ved sluttag til ul og article.
  Kilde her og ovenfor: Oblig 2 Innføring i Programmering*/
  resourcesHTML += `</ul></article>`
})

//Bruker querySelector for å hente opp HTML-elementet main.
const main = document.querySelector("main")

//Skriver så ut dette til resourcesHTML.
main.innerHTML = resourcesHTML

//Deklarerer så en variabel kalt meny og henter opp verdien til meny og menyknapp.
const meny = document.querySelectorAll("#meny .menyknapp")


/*Bruker forEach-løkke med menyKnapp som parameter, og deretter bruker jeg addEventListener for å
lytte til om elementet menyKnapp blir klikket på.
Kilde: https://lms.webtricks.blog/kurs/innforing-i-programmering/lokker/foreach-lokker*/
meny.forEach((menyKnapp) => {
  menyKnapp.addEventListener("click", () => {

/*Deklarerer en variabel kalt kategori som henter verdien til menyKnapp.
Kilde: https://www.freecodecamp.org/news/innerhtml-vs-innertext-vs-textcontent/*/
    const kategori = menyKnapp.innerText
    
    /*Deretter henter jeg elementene med klassen article og går gjennom dem med bruk av forEach.
    Bruker så toggle-funksjonen for å kunne toggle mellom kategoriene slik at en og en kategori sitt innhold vises av gangen.
    Deretter bruker jeg != for å si at dersom article sin id ikke er lik verdien til kategori blir den skjult.
    Kilde: https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/toggle og https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Inequality*/
    document.querySelectorAll(".article").forEach((article) => {
      article.classList.toggle("kategori", article.id != kategori)
    })

    /*Går så gjennom hvert element i meny og bruker igjen toggle-funksjonen for å se om kategori
    er lik verdien til menyKnapp. Hvis den er det skal innholdet vises.*/
    meny.forEach((kategori) => {
      kategori.classList.toggle("show", kategori === menyKnapp)
    })
  })
})