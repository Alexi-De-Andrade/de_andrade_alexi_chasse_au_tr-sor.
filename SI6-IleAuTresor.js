function Tableau2D(x, y) {
	var array2D = new Array(x);
	for (var i = 0; i < array2D.length; i++) {
		array2D[i] = new Array(y);
		}
		return array2D;
}

let monTableau = new Tableau2D(10, 10);

monTableau[5][2] = "Tresor" ;

let nombreFace = 6
let De6 = Math.floor(Math.random() * nombreFace + 1) ;

let unTexte = "<p>Code <strong>HTML</strong> généré via JavaScript.</p>"
document.getElementById("ici").value = unTexte


function drawTableau2D(x, y, emplacement) {
	let idString = ""
	let texte = "<table>"
	for (let xx=0; xx < x; xx++) {
		texte += `<tr>`
		for (let yy=0; yy < y; yy++) {
			idString = xx+"-"+yy
			texte += `<td id="${idString}"></td>`
			}
			texte += `</tr>`
			}
			texte += `</table>`
			document.getElementById(emplacement).innerHTML = texte
			let idCase = String(y) + "-" + String(x);
}

drawTableau2D(10,10,"ici")

let corpsTable = ""
let idCase = ""
let enteteTable = ""
let finTable = ""
corpsTable = corpsTable + '<td onclick="choix(this.id);" id="' + idCase +'"></td>';
document.getElementById("emplacementTable").innerHTML = enteteTable +corpsTable + finTable;

caseTable = document.getElementById(idCellule);
caseTable.setAttribute('class', 'good');

let nomGagnant = window.prompt("Indiquez votre nom pour le score","anonyme")
document.getElementById('nom').value = nomGagnant
document.getElementById('score').value = nobreCoup // variable de comptage des coups joués
document.getElementById('appelScore').submit()
