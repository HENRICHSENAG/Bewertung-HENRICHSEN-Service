
                // Begrüßungstext für Kunde
                document.getElementById("kunde").innerHTML ="Guten Tag " + anrede + " " + name + ", <br><br>" +
                " vielen Dank, dass Sie sich kurz Zeit nehmen, um unserem Service zu bewerten. Mit nur sieben kurzen Antworten, können sie mitthelfen, dass unser Service enorm verbessert wird. <br>" + 
                "Bitte bewerten Sie auch den Bearbeiter, der ihr Ticket gelöst hat. In diesem fall ist es Herr/Frau " + bearbeiter + ". <br><br>" +
                "Vielen Dank :) <br>" +
                "Ihr Serviceteam";


function createEmail() {
    
    var  Bearbeitungszeit, Lösung, Freundlichkeit, Klarheit, Schwierigkeit, Verbesserungen, Sterne;
    
    Bearbeitungszeit = document.querySelector('input[name="Bearbeitungszeit"]:checked').value;
    
    Lösung           = document.querySelector('input[name="Loesung"]:checked').value;
    
    Freundlichkeit   = document.querySelector('input[name="Freundlichkeit"]:checked').value;
    
    Klarheit         = document.querySelector('input[name="Klarheit"]:checked').value;
    
    Schwierigkeit    = document.querySelector('input[name="Schwierigkeit"]:checked').value;
    
    Verbesserungen   = document.getElementById("text").value;
  
    Sterne           = document.querySelector('input[name="Sternebewertung"]:checked').value;

    
    sendEmail(name, unternehmen, ticket, bearbeiter, anrede, Bearbeitungszeit, Lösung, Freundlichkeit, Klarheit, Schwierigkeit, Verbesserungen, Sterne);
    
    createLink(id, Sterne);

}
                              
function sendEmail( name, unternehmen, ticket, bearbeiter, anrede, Bearbeitungszeit, Lösung, Freundlichkeit, Klarheit, Schwierigkeit, Verbesserungen, Sterne) {

    Email.send({
    Host: "smtp.gmail.com",
    Username: "noreplayhen@gmail.com",
    Password: "Email123!",
    To: 'bastian.adam@henrichsen.de',
    From: "noreplayhen@gmail.com",
    Subject: "Das Ticket " + ticket + " wurde von " + anrede + " " + name + " bewertet",
    Body:  " Alle Daten: <br><br> Name: " + anrede + " " + name + " <br> Unternehmen: " + unternehmen + "<br> Ticketnummer: " + ticket + "<br> Bearbeiter: " + bearbeiter + "<br> <br> Ergebnis: <br> <br> " + 
            "Bearbeitungszeit: " + Bearbeitungszeit + "<br> Lösung: " + Lösung + "<br> Freundlichkeit: " + Freundlichkeit + "<br> Klarheit: " + Klarheit + "<br> Schwierigkeit: " + Schwierigkeit + "<br> Verbesserungen: " + Verbesserungen + "<br> Sternebewertung: " + Sterne + " Sterne",

            
   })

   
}  



function createLink(id, Sterne) {
    var Link ="https://henrichsen.topdesk.net/solutions/five-star-review-1/process/" + id + "/" + Sterne + "/TcmtnqxCxR_EfAeEyw2K53ypMz_23UhCa2ZRq2_QF62qb1VqEiVGqS9mqGJPI_5T9wWlf2YSoUC_ywhLuiTNBg";
    window.open(Link);
}
