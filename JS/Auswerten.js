
                // Begrüßungstext für Kunde
                document.getElementById("kunde").innerHTML ="Guten Tag " + anrede + " " + name + ", <br><br>" +
                " vielen Dank, dass Sie sich kurz Zeit nehmen, um unserem Service zu bewerten. Mit nur sieben kurzen Antworten, k&ouml;nnen sie mitthelfen, dass unser Service enorm verbessert wird. <br>" + 
                "Bitte bewerten Sie auch den Bearbeiter, der ihr Ticket gel&ouml;st hat. In diesem fall ist es " + bearbeiter + ". <br><br>" +
                "Vielen Dank :) <br>" +
                "Ihr Serviceteam";

                
function createEmail() {
    var allCorrect = true;
    var  Bearbeitungszeit, Lösung, Freundlichkeit, Klarheit, Schwierigkeit, Verbesserungen, Sterne;

    Bearbeitungszeit = document.querySelector('input[name="Bearbeitungszeit"]:checked').value;

    Lösung           = document.querySelector('input[name="Loesung"]:checked').value;
    
    Freundlichkeit   = document.querySelector('input[name="Freundlichkeit"]:checked').value;
    
    Klarheit         = document.querySelector('input[name="Klarheit"]:checked').value;
    
    Schwierigkeit    = document.querySelector('input[name="Schwierigkeit"]:checked').value;
    
    Verbesserungen   = document.getElementById("text").value;

    try {
        Sterne           = document.querySelector('input[name="Sternebewertung"]:checked').value;
    }
    catch (e) {

        allCorrect = false;
    }

    if (allCorrect == true) {
        sendEmail(name, unternehmen, ticket, bearbeiter, anrede, Bearbeitungszeit, Lösung, Freundlichkeit, Klarheit, Schwierigkeit, Verbesserungen, Sterne, mail);
    
        createLink(id, Sterne);
    }
    else  {
        document.getElementById("star").innerHTML = "Bitte Sternebewertung abgeben" ;
    }    
}
                              
function sendEmail( name, unternehmen, ticket, bearbeiter, anrede, Bearbeitungszeit, Lösung, Freundlichkeit, Klarheit, Schwierigkeit, Verbesserungen, Sterne, mail) {

    Email.send({
    Host: "smtp.gmail.com",
    Username: "noreplayhen@gmail.com",
    Password: "Email123!",
    To: mail,
    From: "noreplayhen@gmail.com",
    Subject: ticket + " wurde bewertet",
    Body:  " Alle Daten: <br><br> Name: " + anrede + " " + name + " <br> Unternehmen: " + unternehmen + "<br> Ticketnummer: " + ticket + "<br> Bearbeiter: " + bearbeiter + "<br> <br> Ergebnis: <br> <br> " + 
        "Bearbeitungszeit: " + Bearbeitungszeit + "<br> L&ouml;sung: " + Lösung + "<br> Freundlichkeit: " + Freundlichkeit + "<br> Klarheit: " + Klarheit + "<br> Schwierigkeit: " + Schwierigkeit + "<br> Verbesserungen: " + Verbesserungen + "<br> Sternebewertung: " + Sterne + " Sterne",

            
   })

   alert("EMAIL SEND TO " + mail);
}  



function createLink(id, Sterne) {
   /* var Link ="https://henrichsen.topdesk.net/solutions/five-star-review-1/process/" + id + "/" + Sterne + "/TcmtnqxCxR_EfAeEyw2K53ypMz_23UhCa2ZRq2_QF62qb1VqEiVGqS9mqGJPI_5T9wWlf2YSoUC_ywhLuiTNBg";
    window.open(Link);*/
    alert("INSERT TOPDESK");
}

