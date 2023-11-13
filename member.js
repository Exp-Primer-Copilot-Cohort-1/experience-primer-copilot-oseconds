function skillsMember() {
    var member = document.getElementById("member").value;
    var skills = document.getElementById("skills").value;
    var member = member.split(" ");
    var skills = skills.split(" ");
    var final = "";
    for (var i = 0; i < member.length; i++) {
        if (skills.includes(member[i])) {
            final += "Yes, " + member[i] + " is a member of the team. <br>";
        } else {
            final += "No, " + member[i] + " is not a member of the team. <br>";
        }
    }
    document.getElementById("final").innerHTML = final;
}