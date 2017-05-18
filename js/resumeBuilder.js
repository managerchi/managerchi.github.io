/*
This is empty on purpose! Your code to build the resume will go here.
 */

// $("#main").append("Chi");
// $("#main").append(299792458 * 100 * 1.0/1000000000);
// var awesomeThoughts = "I am Chi and I am AWESOME!";
// awesomeThoughts = awesomeThoughts.replace("AWESOME","FUN");
// $("#main").append(awesomeThoughts);

formattedName = HTMLheaderName.replace("%data%","Chi");
formattedRole = HTMLheaderRole.replace("%data%","CEO");
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
