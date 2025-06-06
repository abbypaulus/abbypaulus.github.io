let typeEffect = [];
for(let i = 0; i < 15; i++){
    typeEffect.push('a');
    
    //document.getElementById('typeEffect').innerHTML = abigail_paulus;
}


window.onload = function(){
    //Get current date
    var year = new Date().getFullYear();
    document.getElementById("currentYear").innerHTML = year;
    //tagline
    var textTagline = "I am currently an Engineering Intern at Dometic, Programing Teacher at Code/Art, Student at Florida Atlantic University and Atlantic Technical College. Ambitious, detail-oriented mechanical engineering student focused on drafting, aspiring to be a design engineer.";
    document.getElementById("tagline").innerHTML = taglineText;
    ('#footer').load('footer.html');
}