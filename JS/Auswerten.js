
                // Begrüßungstext für Kunde
                document.getElementById("kunde").innerHTML ="Hallo " + anrede + " " + name + ", <br><br>" +
                "unser wichtiges Feedback kommt von Ihnen. <br>" +
                "Mit sieben schnellen Antworten helfen Sie uns, unseren Servie f&uuml;r Sie fortw&auml;hrend zu optimieren und Ihre Anforderungen und Erwartungen (noch) besser erf&uuml;llen zu k&uuml;nnen. <br>" +
                bearbeiter + " und das gesamte Service-Team freut sich auf Ihre R&uuml;ckmeldung. <br><br>" +
                "Ihr HENRICHSEN Serviemanagement <br>" + 
                "der HENRICHSEN Gruppe";

                bearbeiter = unescape(bearbeiter).replace(" ", "");
                const bearbeiter_split = bearbeiter.split(",");
                
                var mail = bearbeiter_split[1] + "." + bearbeiter_split[0] + "@henrichsen.de";
                
                if ( mail == "undefined." + bearbeiter_split[0] + "@henrichsen.de") {

                         mail = "bastian.adam@henrichsen.de"
                         
                }

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
    To: mail + ", support@henrichsen.de, jeannette.bastian@henrichsen.de, christian.sagmeister@henrichsen.de, andre.baltheiser@henrichsen.de" ,
    From: "noreplayhen@gmail.com",
    Subject: ticket + " wurde bewertet",
    Body:  " Alle Daten: <br><br> Name: " + anrede + " " + name + " <br> Unternehmen: " + unternehmen + "<br> Ticketnummer: " + ticket + "<br> Bearbeiter: " + bearbeiter + "<br> <br> Ergebnis: <br> <br> " + 
        
            "<table>" + 
            "<tr><th>Bearbeitungszeit:</th><th>" + Bearbeitungszeit + "</th></tr>" +
            "<tr><th>L&ouml;sung::</th><th>" + Lösung + "</th></tr>" +
            "<tr><th>Freundlichkeit:</th><th>" + Freundlichkeit + "</th></tr>" +
            "<tr><th>Klarheit:</th><th>" + Klarheit + "</th></tr>" +
            "<tr><th>Schwierigkeit:</th><th>" + Schwierigkeit + "</th></tr>" +
            "<tr><th>Verbesserungen:</th><th>" + Verbesserungen + "</th></tr>" +
            "<tr><th>Sterne:</th><th>" +  Sterne + " Sterne" + "</th></tr>" +
            "</table>" ,

            
   })

   
}  



function createLink(id, Sterne) {
    var Link ="https://henrichsen.topdesk.net/solutions/five-star-review-1/process/" + id + "/" + Sterne + "/TcmtnqxCxR_EfAeEyw2K53ypMz_23UhCa2ZRq2_QF62qb1VqEiVGqS9mqGJPI_5T9wWlf2YSoUC_ywhLuiTNBg";
    window.open(Link);
}

