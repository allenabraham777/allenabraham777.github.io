let projects = [
  {
     "title" : "TheAbstraction.Co",
     "description" : "Official website for The Abstraction",
     "style" : "background: linear-gradient(#0072FF,#00C6FF);",
     "image" : "theabstractionco.png",
     "tags" : [
       "ReactJS",
       "GatsbyJS",
       "GraphQl",
       "Netlify"
     ]
   },
  {
     "title" : "Speech to text app",
     "description" : "A react speech to text app made with the use of SpeechRecognition instance of Web api",
     "style" : "background: linear-gradient(#F78FAD,#FDE882);",
     "image" : "speech2text.png",
     "tags" : [
       "ReactJS",
       "BrowserAPI",
       "SpeechRecognition"
     ]
   },
  {
    "title" : "FOCE",
    "description" : "Food Observation and Calorie Prediction is a system that takes up the food image, identifies it and predicts the total calories it provides",
    "style" : "background: linear-gradient(#564592,#CA7DF9);",
    "image" : "foce.png",
    "tags" : [
      "Flutter",
      "Python Flask",
      "NodeJS",
    ]
  },
  {
    "title" : "STAGE 20 Website",
    "description" : "STAGE 2020 is an International conference hosted by NSS College of Engineering, Palakkad.",
    "style" : "background: linear-gradient(#333333,#F896D8);",
    "image" : "stage20.png",
    "tags" : [
      "NodeJS",
      "Bootstrap",
      "EJS",
    ]
  },
  {
    "title" : "Doctor on Tap",
    "description" : "An app that provides a platform for patients to book and consult a doctor, it also predicts the estimated consulting time",
    "style" : "background: linear-gradient(#C18C5D,#E7AD99);",
    "image" : "doc.png",
    "tags" : [
      "HTML",
      "CSS",
      "JS",
      "Apache Cordova"
    ]
  },
  {
    "title" : "Dyuksha 20 Website",
    "description" : "Dyuksha.org is the official website for the nss college of engineering palakkad",
    "style" : "background: linear-gradient(#254D32,#69B578);",
    "image" : "dyuksha20.png",
    "tags" : [
      "VueJS",
      "Bootstrap",
      "PostgreSQL",
      "Docker"
    ]
  },
  {
    "title" : "Dyuksha 18 Website",
    "description" : "Dyuksha.org is the official website for the nss college of engineering palakkad",
    "style" : "background: linear-gradient(#5C5346,#8C6057);",
    "image" : "dyuksha18.png",
    "tags" : [
      "HTML",
      "CSS",
      "JS",
      "PHP",
      "MySQL"
    ]
  },
  {
    "title" : "Attendance Manager",
    "description" : "An attendance manager system for the National Service Scheme Units of NSS College of Engineering to keep track of attendance and assign point to volunteers.",
    "style" : "background: linear-gradient(#83E8BA,#B2E6D4);",
    "image" : "nss.png",
    "tags" : [
      "HTML",
      "CSS",
      "JS",
      "PHP",
      "MySQL"
    ]
  },
  {
    "title" : "Digital TC",
    "description" : "This system was built for Bhavan’s Munshi Vidyashram, Ernakulam to give the Transfer Certificates to its students in digital form.",
    "style" : "background: linear-gradient(#ECC8AF,#E7AD99);",
    "image" : "bmvtc.png",
    "tags" : [
      "Visual C#",
      "dotNet",
      "MS Access",
    ]
  },
]


let projectContent = ''
let tags = ''


projects.forEach(project => {
  tags = ''
  project["tags"].forEach(tag => {
    tags += `<span>${tag}</span>`
  })
  projectContent += `<div class="project-card" style="${project["style"]}"><img src="./assets/images/projects/${project["image"]}" alt=""><h2>${project["title"]}</h2><p class="description">${project["description"]}</p><div class="tags">${tags}</div></div>`
});

document.getElementById("project-wrapper").innerHTML = projectContent

var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

function resize() {
    var box = c.getBoundingClientRect();
    c.width = box.width;
    c.height = box.height;
}

var light = {
    x: 160,
    y: 200
}

var colors = ["#f5c156", "#e6616b", "#5cd3ad"];

function drawLight() {
    ctx.beginPath();
    ctx.arc(light.x, light.y, 1000, 0, 2 * Math.PI);
    var gradient = ctx.createRadialGradient(light.x, light.y, 0, light.x, light.y, 1000);
    gradient.addColorStop(0, "#101010");
    gradient.addColorStop(1, "#101010");
    ctx.fillStyle = gradient;
    ctx.fill();

    ctx.beginPath();
    ctx.arc(light.x, light.y, 20, 0, 2 * Math.PI);
    gradient = ctx.createRadialGradient(light.x, light.y, 0, light.x, light.y, 5);
    gradient.addColorStop(0, "#101010");
    gradient.addColorStop(1, "#101010");
    ctx.fillStyle = gradient;
    ctx.fill();
}

function Box() {
    this.half_size = Math.floor((Math.random() * 50) + 1);
    this.x = Math.floor((Math.random() * c.width) + 1);
    this.y = Math.floor((Math.random() * c.height) + 1);
    this.r = Math.random() * Math.PI;
    this.shadow_length = 2000;
    this.color = colors[Math.floor((Math.random() * colors.length))];
  
    this.getDots = function() {

        var full = (Math.PI * 2) / 4;


        var p1 = {
            x: this.x + this.half_size * Math.sin(this.r),
            y: this.y + this.half_size * Math.cos(this.r)
        };
        var p2 = {
            x: this.x + this.half_size * Math.sin(this.r + full),
            y: this.y + this.half_size * Math.cos(this.r + full)
        };
        var p3 = {
            x: this.x + this.half_size * Math.sin(this.r + full * 2),
            y: this.y + this.half_size * Math.cos(this.r + full * 2)
        };
        var p4 = {
            x: this.x + this.half_size * Math.sin(this.r + full * 3),
            y: this.y + this.half_size * Math.cos(this.r + full * 3)
        };

        return {
            p1: p1,
            p2: p2,
            p3: p3,
            p4: p4
        };
    }
    this.rotate = function() {
        var speed = (60 - this.half_size) / 20;
        this.r += speed * 0.002;
        this.x += speed;
        this.y += speed;
    }
    this.draw = function() {
        var dots = this.getDots();
        ctx.beginPath();
        ctx.moveTo(dots.p1.x, dots.p1.y);
        ctx.lineTo(dots.p2.x, dots.p2.y);
        ctx.lineTo(dots.p3.x, dots.p3.y);
        ctx.lineTo(dots.p4.x, dots.p4.y);
        ctx.fillStyle = this.color;
        ctx.fill();


        if (this.y - this.half_size > c.height) {
            this.y -= c.height + 100;
        }
        if (this.x - this.half_size > c.width) {
            this.x -= c.width + 100;
        }
    }
    this.drawShadow = function() {
        var dots = this.getDots();
        var angles = [];
        var points = [];

        for (dot in dots) {
            var angle = Math.atan2(light.y - dots[dot].y, light.x - dots[dot].x);
            var endX = dots[dot].x + this.shadow_length * Math.sin(-angle - Math.PI / 2);
            var endY = dots[dot].y + this.shadow_length * Math.cos(-angle - Math.PI / 2);
            angles.push(angle);
            points.push({
                endX: endX,
                endY: endY,
                startX: dots[dot].x,
                startY: dots[dot].y
            });
        };

        for (var i = points.length - 1; i >= 0; i--) {
            var n = i == 3 ? 0 : i + 1;
            ctx.beginPath();
            ctx.moveTo(points[i].startX, points[i].startY);
            ctx.lineTo(points[n].startX, points[n].startY);
            ctx.lineTo(points[n].endX, points[n].endY);
            ctx.lineTo(points[i].endX, points[i].endY);
            ctx.fillStyle = "#0f0f0f";
            ctx.fill();
        };
    }
}

var boxes = [];

function draw() {
    ctx.clearRect(0, 0, c.width, c.height);
    drawLight();

    for (var i = 0; i < boxes.length; i++) {
        boxes[i].rotate();
        boxes[i].drawShadow();
    };
    for (var i = 0; i < boxes.length; i++) {
        collisionDetection(i)
        boxes[i].draw();
    };
    requestAnimationFrame(draw);
}

resize();
draw();

while (boxes.length < 14) {
    boxes.push(new Box());
}



function collisionDetection(b){
	for (var i = boxes.length - 1; i >= 0; i--) {
		if(i != b){	
			var dx = (boxes[b].x + boxes[b].half_size) - (boxes[i].x + boxes[i].half_size);
			var dy = (boxes[b].y + boxes[b].half_size) - (boxes[i].y + boxes[i].half_size);
			var d = Math.sqrt(dx * dx + dy * dy);
			if (d < boxes[b].half_size + boxes[i].half_size) {
			    boxes[b].half_size = boxes[b].half_size > 1 ? boxes[b].half_size-=1 : 1;
			    boxes[i].half_size = boxes[i].half_size > 1 ? boxes[i].half_size-=1 : 1;
			}
		}
	}
}
