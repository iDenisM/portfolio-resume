/*
This is empty on purpose! Your code to build the resume will go here.
 */

// Bio var
var bio = {
  "name": "Denis Mitiliuc",
  "role": "Padawan Front-End Developer",
  "contacts": {
    "mobile": "+393283387028",
    "email": "denis.mitiliuc@gmail.com",
    "github": "iDenisM",
    "twitter": "twitter.com/iDenis",
    "blog": "ideniswebdev.blogspot.com",
    "location": "Italy"
  },
  "welcomeMessage": "hey fellow web developer want to became a ninja master",
  "skills": ["awesomeness", "developing things", "repair what's broken", "padawan", "transformation"],
  "biopic": "images/fry.jpg",
};

// Displaying Bio
bio.display = function() {
  var formatedRole = HTMLheaderRole.replace("%data%", bio.role);
  $("#header").prepend(formatedRole);
  var formatedName = HTMLheaderName.replace("%data%", bio.name);
  $("#header").prepend(formatedName);
  var formatedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  $("#topContacts, #footerContacts").append(formatedMobile);
  var formatedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  $("#topContacts, #footerContacts").append(formatedEmail);
  var formatedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
  $("#topContacts, #footerContacts").append(formatedTwitter);
  var formatedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
  $("#topContacts, #footerContacts").append(formatedGithub);
  var formatedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
  $("#topContacts, #footerContacts").append(formatedBlog);
  var formatedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
  $("#topContacts, #footerContacts").append(formatedLocation);
  var formatedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
  $("#header").append(formatedBiopic);
  var formatedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
  $("#header").append(formatedWelcomeMsg);
  $("#header").append(HTMLskillsStart);
  bio.skills.forEach(function(skill) {
    var formattedSkill = HTMLskills.replace("%data%", skill);
    $("#skills").append(formattedSkill);
  });
};

// Work var
var work = {
  "jobs": [
    {
      "employer": "Carrefour",
      "title": "worker",
      "location": "Italy",
      "dates": "October 2013 - Future",
      "description": "Working hard to pay the bills and online courses. Looking forward for a better job and a better life."
    },
    {
      "employer": "Trans-Oil",
      "title": "Lawer",
      "dates": "September 2006 - September 2008",
      "location": "Moldova",
      "description": "Warked as a law represnatat of the company solving all the possible and impossible problems."
    }
  ]
};

// Displaying the work
work.display = function() {
  work.jobs.forEach(function(job) {
    //create new div with work experience
    $("#workExperience").append(HTMLworkStart);
    //formated emplyer and title
    var formatedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
    var formatedTitle = HTMLworkTitle.replace("%data%", job.title);
    var formatedEmplyerTitle = formatedEmployer + formatedTitle;
    $(".work-entry:last").append(formatedEmplyerTitle);
    //formated dates
    var formatedDates = HTMLworkDates.replace("%data%", job.dates);
    $(".work-entry:last").append(formatedDates);
    //formated location
    var formatedLocation = HTMLworkLocation.replace("%data%", job.location);
    $(".work-entry:last").append(formatedLocation);
    //formated description
    var formatedDescription = HTMLworkDescription.replace("%data%", job.description);
    $(".work-entry:last").append(formatedDescription);
  });
};

//Projects var
var projects = {
	"projects": [
  	{
  		"title": "First portfolio web page",
  		"dates": "2017",
  		"description": "Create your first web page as a project for the Front-End Developer Nanodegree program. Present the project in time and make so it looks and works awesome.",
      "images": ["images/projects/portfolio.jpg"]
  	},
    {
  		"title": "My profile Project",
  		"dates": "2017",
  		"description": "Create a profile true of invented following the instructions at Udacity course",
      "images": ["images/projects/profile.jpg"]
  	},
	]
};

// Display the projects
projects.display = function() {
  //create the cards holder
  $("#projects").append(HTMLcardStart);
  projects.projects.forEach(function(project) {
    //projects start
    $("#card__main").append(HTMLprojectStart);
    //projects title
    var formatedTitle = HTMLprojectTitle.replace("%data%", project.title);
    $(".project-entry:last").append(formatedTitle);
    //projects dates
    var formatedDates = HTMLprojectDates.replace("%data%", project.dates);
    $(".project-entry:last").append(formatedDates);
    //projects description
    var formatedDescription = HTMLprojectDescription.replace("%data%", project.description);
    $(".project-entry:last").append(formatedDescription);
    //append project image
    project.images.forEach(function(image) {
      var formatedImage = HTMLprojectImage.replace("%data%", image);
      $(".project-entry:last").append(formatedImage);
    });
  });
};

// Studies var
var education = {
	"schools": [
	{
		"name": "Ion Creanga",
		"location": "Chisinau",
		"degree": "high school diploma",
		"dates": "2002",
		"url": "http://ioncreanga.starnet.md/",
    "majors": "High School Degree - Finally"
	},
	{
		"name": "USEM",
		"location": "Chisinau",
		"degree": "university diploma",
		"dates": "2006",
		"url": "http://www.usem.md/",
    "majors": "Lawer in the City"
	}
	],
	"onlineCourses": [
	{
		"title": "Front-End Developer Nanodegree",
		"school": "Udacity",
		"dates": "2017",
		"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
	},
	{
		"title": "CSS Cross-Country",
		"school": "codeschool",
		"dates": "2017",
		"url": "https://www.codeschool.com/courses/css-cross-country"
	},
	{
		"title": "Front-end Formations",
		"school": "codeschool",
		"dates": "2017",
		"url": "https://www.codeschool.com/courses/front-end-formations"
	},
	{
		"title": "Front-end Foundations",
		"school": "codeschool",
		"dates": "2017",
		"url": "https://www.codeschool.com/courses/front-end-foundations"
	},
	{
		"title": "Try jQuery",
		"school": "codeschool",
		"dates": "2017",
		"url": "https://www.codeschool.com/courses/try-jquery"
	}
	]
};

//Displaying the school and onLineCourses
education.display = function() {
  education.schools.forEach(function(school) {
    //start new school
    $("#education").append(HTMLschoolStart);
    //append name
    var formatedName = HTMLschoolName.replace("%data%", school.name).replace("#", school.url);
    var formatedDegree = HTMLschoolDegree.replace("%data%", school.degree);
    var formatedNameDegree = formatedName + formatedDegree;
    $(".education-entry:last").append(formatedNameDegree);
    //append dates
    var formatedDates = HTMLschoolDates.replace("%data%", school.dates);
    $(".education-entry:last").append(formatedDates);
    //append location
    var formatedLocation = HTMLschoolLocation.replace("%data%", school.location);
    $(".education-entry:last").append(formatedLocation);
    //append major
    var formatedMajor = HTMLschoolMajor.replace("%data%", school.majors);
    $(".education-entry:last").append(formatedMajor);
  });
  $(".education-entry:last").append(HTMLonlineClasses);
    education.onlineCourses.forEach(function(course) {
    //append title and school
    var formatedTitle = HTMLonlineTitle.replace("%data%", course.title).replace("#", course.url);
    var formatedSchool = HTMLonlineSchool.replace("%data%", course.school);
    var formatedTitleSchool = formatedTitle + formatedSchool;
    $(".education-entry:last").append(formatedTitleSchool);
    //append date
    var formatedDate = HTMLonlineDates.replace("%data%", course.dates);
    $(".education-entry:last").append(formatedDate);
    //append url
    var formatedUrl = HTMLonlineURL.replace("%data%", course.url).replace("#", course.url);
    $(".education-entry:last").append(formatedUrl);
  });
};

// Your code goes here! Let me help you get started
function locationizer(work_obj) {
  var locationsArray = [];
  work_obj.jobs.forEach(function(job) {
    locationsArray.push(job.location);
  });
  return locationsArray;
}

// Did locationizer() work? This line will tell you!
console.log(locationizer(work));

//Adding the internationalized button
$("#main").append(internationalizeButton);

function inName() {
  var finalName = bio.name;
  //make all to lower case and remote the white spaces from the beggining and end
  finalName.toLowerCase().trim();
  //split the final name
  var split = finalName.split(" ");
  //first name first letter tu uppercase and all rest to lowercase
  split[0] = split[0].slice(0, 1).toUpperCase() + split[0].slice(1).toLowerCase();
  //last name all to uppercase
  split[1] = split[1].toUpperCase();
  //join all together and return
  finalName = split.join(" ");
  return finalName;
}

//displaying all to the profile
bio.display();
work.display();
projects.display();
education.display();

// Adding the map
$("#mapDiv").append(googleMap);
