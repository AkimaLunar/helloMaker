Meteor.startup(function () {
  if (Classes.find().count() === 0) {
    Classes.insert({
      title: 'About Me',
      description: 'We are going to build a simple About Me page with links to you social profiles and resume.',
      tags: ["tag1", "tag2"],
      time: new Date(),
      level: "L1"
    });

    Classes.insert({
      title: 'Business Page',
      description: 'http://sachagreif.com/introducing-telescope/',
      tags: ["tag1", "tag2"],
      time: new Date(),
      level: "L2"
    });

    Classes.insert({
      title: 'Portfolio',
      description: 'http://sachagreif.com/introducing-telescope/',
      tags: ["tag1", "tag2"],
      time: new Date(),
      level: "L3"
    });

    Classes.insert({
      title: 'Personal Project',
      description: 'http://sachagreif.com/introducing-telescope/',
      tags: ["tag1", "tag2"],
      time: new Date(),
      level: "A"
    });
  }

});