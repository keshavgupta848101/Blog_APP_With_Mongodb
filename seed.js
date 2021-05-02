const mongoose = require('mongoose');
const Blog = require('./models/blog');

const blogsData = [
    {
        title: "How are you ?",
        img: "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29kZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        author: "Keshav",
        article:"Hey  my name is keshav and i am good. How are you? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    },
    {
        title: "This is me",
        img: "https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGFwcHklMjBtYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        author: "Ankit",
        article:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
    },
    {
        title: "Fair Game",
        img: "https://images.unsplash.com/photo-1617170508836-e5d89c04f78b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGNyaWNrZXQlMjBtYXRjaHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        author: "Madhav",
        article:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas venenatis in neque eget faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam diam diam, pellentesque non dignissim quis, venenatis ac ex. Pellentesque in ex et lorem egestas gravida. Nunc commodo tristique luctus. Etiam ut eleifend neque, ac interdum nulla. Integer a tellus id lorem tincidunt mattis. Sed rhoncus tincidunt augue sit amet viverra"
    },
    {
        title: "Sundar hai?",
        img: "https://images.unsplash.com/photo-1509909756405-be0199881695?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aGFwcHl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        author: "Jetha Lal",
        article:"Praesent at erat eget magna iaculis pretium. Cras nunc risus, lobortis at lacus at, tristique lobortis diam. Nam volutpat vel ipsum vitae pretium. Nullam justo metus, hendrerit non lacinia sed, tincidunt ac eros. Pellentesque commodo, sem id lacinia placerat, augue risus tincidunt tortor, eget dictum neque lectus et nulla. Nunc in ex urna. Sed faucibus massa id feugiat pellentesque. Vestibulum malesuada purus velit, nec tincidunt urna sollicitudin dapibus. In consequat eleifend ligula ut imperdiet. Ut ornare mi ut metus mattis, vel maximus lorem fringilla. Phasellus fermentum nibh vitae dolor vehicula ornare. Etiam varius accumsan luctus. Duis in massa commodo, sodales erat sit amet, aliquam risus."
    },
    {
        title: "My Money",
        img: "https://images.unsplash.com/photo-1561414927-6d86591d0c4f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9uZXl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        author: "Karma",
        article:"Pellentesque aliquet purus quam, eu sodales arcu egestas id. Aliquam pharetra nulla diam, et mattis justo convallis convallis. Proin non fermentum eros. Cras non vulputate turpis. Nam ut mi pellentesque ex aliquam lobortis. Curabitur orci sapien, vehicula sit amet quam in, laoreet posuere ante. Donec ornare lorem vitae nulla tempus, sit amet elementum ipsum consectetur. Vivamus vel mi vitae orci egestas porttitor mattis a nisi. Nulla mollis aliquam metus, vel maximus justo. Morbi dictum lacus lacus, condimentum volutpat tortor dignissim nec."
    }
] 

const seedDb = async()=>{
    await Blog.insertMany(blogsData);
    console.log("DB seeded");
};

module.exports = seedDb;




