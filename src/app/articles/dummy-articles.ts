import { Article } from "./model/article";
import { Subject } from './model/subject';


/* Hey Team we changed the schema for article a bit,
the comments added author: {
            userType: string,
            name: string
        }*/



export const ARTICLES: Article[] = [
  {
    id: 1,
    subject: Subject.Angular,
    publish_date: new Date(),
    title: "Shiba facts",
    content:
      "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting",
    likes: 20,
    image: "https://material.angular.io/assets/img/examples/shiba2.jpg",
    author: {
      userId: 1,
      name: "Josh Bloch",
      avatar: "assets/default_avatar.png"
    },
    comments: [
      {
        id: 1,
        authorinfo: {
          userType: "Content Creaator",
          name: "Someo"
        },

        comment: "Good",
        datetime: new Date()
      }
    ],
    timeToRead: 6,
    tags: ["JavaScript", "Shiba"],
    assessmentURL: ""
  },
  {
    id: 2,
    subject: Subject.JavaScript,
    publish_date: new Date(),
    title: "Lorem 2",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mi nisl, pharetra sit amet nulla nec, lobortis auctor nisl. Proin vestibulum urna nisl, non ultrices nisl malesuada ac. Suspendisse laoreet libero eu neque tristique, eu hendrerit nisl dapibus. Vestibulum aliquet nisl diam, vitae commodo magna egestas dapibus",
    likes: 9,
    image: "https://www.bigstockphoto.com/images/homepage/module-6.jpg",
    author: {
      userId: 1,
      name: "Josh Bloch",
      avatar: "assets/default_avatar.png"
    },
    comments: [
      {
        id: 1,
        authorinfo: {
          userType: "Content Creaator",
          name: "Someo"
        },

        comment: "Good",
        datetime: new Date()
      }
    ],
    timeToRead: 6,
    tags: ["JavaScript", "Shiba"],
    assessmentURL: ""
  },
  {
    id: 3,
    subject: Subject.JavaScript,
    publish_date: new Date(),
    title: "Lorem 3",
    content:
      "Nunc a convallis leo. Nunc convallis, odio semper lacinia lacinia, neque dolor pharetra tellus, quis porttitor dui risus id metus. Nullam sed risus eleifend, ornare risus mattis, molestie quam. Cras sed urna at sapien fringilla molestie ac vel leo. Integer et rutrum arcu",
    likes: 2,
    image:
      "https://image.shutterstock.com/image-photo/colorful-flower-on-dark-tropical-260nw-721703848.jpg",
    author: {
      userId: 1,
      name: "Josh Bloch",
      avatar: "assets/default_avatar.png"
    },
    comments: [
      {
        id: 1,
        authorinfo: {
          userType: "Content Creaator",
          name: "Someo"
        },

        comment: "Good",
        datetime: new Date()
      }
    ],
    timeToRead: 6,
    tags: ["JavaScript", "Shiba"],
    assessmentURL: ""
  },
  {
    id: 4,
    subject: Subject.JavaScript,
    publish_date: new Date(),
    title: "Lorem 4",
    content:
      "Integer scelerisque massa at mauris consequat aliquet. Phasellus euismod efficitur erat quis tincidunt. Vivamus ac scelerisque ligula. Praesent bibendum neque elit, iaculis dapibus tellus rutrum at. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas",
    likes: 13,
    image:
      "https://image.shutterstock.com/image-photo/beautiful-water-drop-on-dandelion-260nw-789676552.jpg",
    author: {
      userId: 1,
      name: "Josh Bloch",
      avatar: "assets/default_avatar.png"
    },
    comments: [
      {
        id: 1,
        authorinfo: {
          userType: "Content Creaator",
          name: "Someo"
        },

        comment: "Good",
        datetime: new Date()
      }
    ],
    timeToRead: 6,
    tags: ["JavaScript", "Shiba"],
    assessmentURL: ""
  },
  {
    id: 5,
    subject: Subject.JavaScript,
    publish_date: new Date(),
    title: "Lorem 5",
    content:
      "Donec tempus nisl a dolor vestibulum, sed rutrum massa ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc laoreet augue et augue viverra tincidunt. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque egestas porta enim sed vehicula",
    likes: 29,
    image:
      "https://image.shutterstock.com/image-photo/white-transparent-leaf-on-mirror-260nw-1029171697.jpg",
    author: {
      userId: 1,
      name: "Josh Bloch",
      avatar: "assets/default_avatar.png"
    },
    comments: [
      {
        id: 1,
        authorinfo: {
          userType: "Content Creaator",
          name: "Someo"
        },
        comment: "Good",
        datetime: new Date()
      }
    ],
    timeToRead: 6,
    tags: ["JavaScript", "Shiba"],
    assessmentURL: ""
  },
  {
    id: 6,
    subject: Subject.JavaScript,
    publish_date: new Date(),
    title: "Lorem 6",
    content:
      "Mauris sit amet diam id velit pulvinar tristique sit amet vel lectus. Morbi ut finibus ex, quis eleifend erat. Integer urna tellus, finibus eu nulla in, volutpat pharetra felis. Nunc ac dapibus risus. Duis viverra, lectus in egestas lobortis, tortor ex malesuada urna, vitae faucibus ligula magna eu leo. Donec sed velit auctor, placerat velit sed, auctor diam. Nunc blandit elementum mi. In faucibus ullamcorper luctus",
    likes: 45,
    image:
      "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png",
    author: {
      userId: 1,
      name: "Josh Bloch",
      avatar: "assets/default_avatar.png"
    },
    comments: [
      {
        id: 1,
        authorinfo: {
          userType: "Content Creaator",
          name: "Someo"
        },

        comment: "Good",
        datetime: new Date()
      }
    ],
    timeToRead: 6,
    tags: ["JavaScript", "Shiba"],
    assessmentURL: ""
  },
  {
    id: 7,
    subject: Subject.JavaScript,
    publish_date: new Date(),
    title: "Lorem 7",
    content:
      "Sed in sem nulla. Sed vulputate neque in diam gravida, id consectetur dolor ultrices. Morbi ornare magna quis vulputate pretium. Proin semper vel dui vel scelerisque. Fusce hendrerit varius massa, ut facilisis enim aliquet ac. Etiam sed ex felis. Pellentesque rutrum eleifend arcu id auctor. Nullam sagittis ultricies risus in bibendum",
    likes: 60,
    image:
      "https://as.ftcdn.net/r/v1/pics/7b11b8176a3611dbfb25406156a6ef50cd3a5009/home/discover_collections/optimized/image-2019-10-11-11-36-27-681.jpg",
    author: {
      userId: 1,
      name: "Josh Bloch",
      avatar: "assets/default_avatar.png"
    },
    comments: [
      {
        id: 1,
        authorinfo: {
          userType: "Content Creaator",
          name: "Someo"
        },
        comment: "Good",
        datetime: new Date()
      }
    ],
    timeToRead: 6,
    tags: ["JavaScript", "Shiba"],
    assessmentURL: ""
  },
  {
    id: 8,
    subject: Subject.JavaScript,
    publish_date: new Date(),
    title: "Lorem 8",
    content:
      "Phasellus venenatis felis fringilla viverra faucibus. Suspendisse interdum ligula odio, non tempus ligula tempor vel. Aliquam ligula lacus, rhoncus nec porttitor ut, vestibulum in libero. Praesent ac ipsum sodales nibh ultrices sollicitudin ac non ligula. Nam sit amet odio justo",
    likes: 150,
    image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
    author: {
      userId: 1,
      name: "Josh Bloch",
      avatar: "assets/default_avatar.png"
    },
    comments: [
      {
        id: 1,
        authorinfo: {
          userType: "Content Creaator",
          name: "Someo"
        },

        comment: "Good",
        datetime: new Date()
      }
    ],
    timeToRead: 6,
    tags: ["JavaScript", "Shiba"],
    assessmentURL: ""
  },
  {
    id: 9,
    subject: Subject.JavaScript,
    publish_date: new Date(),
    title: "Lorem 9",
    content:
      "Phasellus sit amet placerat neque, eget ornare ante. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla facilisi. Sed dignissim sed tortor non posuere. Aliquam placerat nisi sit amet nisi pellentesque accumsan",
    likes: 140,
    image:
      "https://thumbs.dreamstime.com/b/autumn-oak-leaf-fantastic-beautiful-spray-bubbles-blue-background-magic-autumn-blue-background-yellow-oak-leaf-158238643.jpg",
    author: {
      userId: 1,
      name: "Josh Bloch",
      avatar: "assets/default_avatar.png"
    },
    comments: [
      {
        id: 1,
        authorinfo: {
          userType: "Content Creaator",
          name: "Someo"
        },
        comment: "Good",
        datetime: new Date()
      }
    ],
    timeToRead: 6,
    tags: ["JavaScript", "Shiba"],
    assessmentURL: ""
  }
];
