Meteor.startup(function () {
  if (Classes.find().count() === 0) {
    Classes.insert({
      title: 'About Me',
      description: 'We are going to build a simple About Me page with links to you social profiles and resume.',
      tags: ["HTML", "CSS"],
      time: new Date(),
      level: "L1"
    });

    Classes.insert({
      title: 'Business Page',
      description: 'We are going to build a simple About Me page with links to you social profiles and resume.',
      tags: ["HTML", "CSS", "Sass"],
      time: new Date(),
      level: "L2"
    });

    Classes.insert({
      title: 'Portfolio',
      description: 'We are going to build a simple About Me page with links to you social profiles and resume.',
      tags: ["HTML", "Sass", "jQuery"],
      time: new Date(),
      level: "L3"
    });

    Classes.insert({
      title: 'Personal Project',
      description: 'We are going to build a simple About Me page with links to you social profiles and resume.',
      tags: ["HTML", "CSS", "JavaScript"],
      time: new Date(),
      level: "A"
    });
  }

});