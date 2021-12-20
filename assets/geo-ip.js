var ip = sessionStorage.getItem("ip");
var country_name = sessionStorage.getItem("country_name");
var country_code2 = sessionStorage.getItem("country_code2");
var status_value = sessionStorage.getItem('status_value');
        
if (!ip || !country_name || !country_code2) {
    setAsync(false);
    setFieldsParameter("country_name,country_code2");
    getGeolocation(handleGeolocationResponse, "2568dcb423584ca0a00ce9f7fff66a9d");
}

function handleGeolocationResponse(json) {
    ip = json.ip;
    country_name = json.country_name;
    country_code2 = json.country_code2;

    sessionStorage.setItem("ip", ip);
    sessionStorage.setItem("country_name", country_name);
    sessionStorage.setItem("country_code2", country_code2);
}
            
$(document).ready(function() {

    $('#ip').html('IP: ' + ip);
    $('#country_name').html(country_name);

    var el = document.getElementById(country_code2);
    if(el !== null && el !== undefined) {
      el.style.display = 'block';
    }

    if (country_name === "Germany" && status_value !== "closed") {
      $('#daily-paper').prepend("<div class=dp-modal id=dp-modal><div class=dp-modal-header><div class=dp-modal-title><p>Welcome! We noticed that you're visiting from Germany. Do you wish to continue to our webshop in German?</p></div><button class=dp-close-modal-button>&times;</button></div><div class=dp-modal-body><div class=dp-goLocal><a href=#Weglot-de class=dp-weglot><p>Yes, please!</p></a><a href=#Weglot-de class=dp-weglot><div class=dp-deFlag></div></a></div><div class=dp-goInternational><a href=#Weglot-en class=dp-weglot><p>No, thanks.</p></a><a href=#Weglot-en class=dp-weglot><div class=dp-enFlag></div></a></div></div></div>");
      $('.dp-modal').addClass('active');
      $('.dp-modal').after($('<div class=dp-overlay></div>'));
      $('.dp-overlay').addClass('active');
    };

    $(".dp-overlay, .dp-close-modal-button, .dp-weglot").click(function() {
      $('.dp-modal').remove('.active');
      $('.dp-overlay').remove('.active');
      sessionStorage.setItem('status_value', 'closed');
    });
});