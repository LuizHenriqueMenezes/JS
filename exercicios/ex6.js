let opition

do {
    opition = prompt("Escolha uma opção:\n a) Corinthians\n b) Real Madrid\n c) Newclastle\n d)Roma\n e) SAIR").toUpperCase()

    if(opition === "A"){
        alert("VAI CORINTHIANS ⚫️⚪️")
    }
    if(opition === "B"){
        alert("HALA MADRID 🤍🏆")
    }
    if(opition === "C"){
        alert("COME ON NEWCASTLE ⚫️⚪️")
    }
    if(opition === "D"){
        alert("AS ROMA 💛❤️")
    }
} while (opition !== "E" );

alert("saindo...")

