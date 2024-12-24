AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "What is the course about?",
    cardImage: "assets/images/experience-page/empathize.avif",
    place: "",
    time: "",
    desp: "<li>Focuses on principles of designing efficient algorithms and analyzing their performance.</li> <li>Teaches evaluation of time and space complexity for algorithms.</li> <li>Emphasizes understanding algorithm correctness through theoretical analysis.</li> <li>Explores graph traversal techniques, sorting, searching, and advanced data structures.</li>",
  },
  {
    title: "What kind of data structures have you studied?",
    cardImage: "assets/images/experience-page/types.jpg",
    place: "",
    time: "",
    desp: "<li>Arrays (like a collection of items stored in memory).</li><li>Stacks (like a stack of plates, Last In First Out).</li><li>Queues (like a line of people, First In First Out).</li><li>Linked Lists (a chain of nodes connected by pointers).</li><li>Trees (hierarchical structures like family trees, including AVL, Red-Black, and 2-3 Trees).</li><li>Graphs (networks with nodes and edges, like maps).</li><li>Heaps (special trees used for priority tasks).</li><li>Advanced structures like Tries, Fenwick Trees, Segment Trees, and Skip Lists.</li>",
  },
  {
    title: "What kind of algorithms have you studied?",
    cardImage: "assets/images/experience-page/types1.jpg",
    place: "",
    time: "",
    desp: "<li>Sorting and Searching: Organizing data (e.g., Bubble Sort, Quick Sort, Merge Sort) and finding items (e.g., Binary Search, KMP Algorithm)..</li><li>Graph Algorithms: Shortest path algorithms (Dijkstra’s, Bellman-Ford) and Minimum Spanning Trees (Prim’s, Kruskal’s).</li><li>Pathfinding: Algorithms to determine routes (e.g., Floyd-Warshall).</li><li>Optimization Problems: Knapsack, Travelling Salesperson Problem, and Huffman Coding.</li><li>Recursion and Backtracking: Problem-solving using function calls (e.g., N-Queens Problem).</li><li>String Matching: Algorithms like Rabin-Karp, Boyer-Moore, and Brute Force for searching patterns in text.</li><li>Divide and Conquer: Techniques like Merge Sort and Strassen’s Matrix Multiplication.</li><li>Dynamic Programming: Solving problems by breaking them into overlapping subproblems (e.g., Fibonacci, Longest Common Subsequence).</li>",
  },
  {
    title: "How do you connect the course with real time applications?",
    cardImage: "assets/images/experience-page/world.avif",
    place: "",
    time: "",
    desp: "<li>Graph Algorithms: Use Dijkstra's or Kruskal's algorithms for route optimization in transportation networks or telecommunication systems.</li><li>Sorting and Searching: Implement efficient algorithms in e-commerce platforms for inventory management and quick product searches.</li><li>Data Structures: Apply heaps, trees, and hash tables in database indexing and real-time data retrieval systems like caching.</li><li>Optimization Problems: Solve real-world scenarios like the Knapsack problem for resource allocation in project management.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3 style="color:#976FC7;font-weight:bold;">${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "GirlScript Summer Of Code 2020",
    cardImage: "assets/images/experience-page/1.jpg",
    description:
      "Responsible for handling the projects GirlScript App and GirlScript Website Boilerplate.",
  },
  {
    title: "StudentCode-in 2020",
    cardImage: "assets/images/experience-page/2.jpg",
    description:
      "Responsible for handling open source contributions for the project Awesome Developer Portfolio.",
  },
  {
    title: "PClub Summer Of Code 2020",
    cardImage: "assets/images/experience-page/3.jpg",
    description:
      "Mentoring for the projects Deep Pixel, AutoVaidya, Just Resume and Doc2pen.",
  },
  {
    title: "Hakin-Codes",
    cardImage: "assets/images/experience-page/4.jpg",
    description:
      "Mentoring for the open source projects Deeppixel, Awesome Developer Portfolios and Doc2Pen.",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "DAA Principles",
    subtitle: "",
    image: "assets/images/experience-page/pitchteen.png",
    desp: "",
    href: "assets/images/experience-page/principles.jpg",
  },
  {
    title: "Main Programs",
    subtitle: " ",
    image: "assets/images/experience-page/1.png",
    desp: "Sortings and Searching Programs.",
    href: "assets/docs/DAA-Printouts.pdf",
  },
  {
    title: "Iteration-analysis",
    subtitle: "",
    image: "assets/images/experience-page/6.png",
    desp: "Efficiency Analysis.",
    href: "assets/docs/efficiency-analysis.pdf",
  },
  {
    title: "Recursion",
    subtitle: "",
    image: "assets/images/experience-page/9.png",
    desp: "Factors, N-queens Problem, Subset sum problem, Tower of Hanoi.",
    href: "assets/docs/Recursion.pdf",
  },
  {
    title: "Trees",
    subtitle: "",
    image: "assets/images/experience-page/7.png",
    desp: "Red-Black Tree.",
    href: "assets/docs/tree.pdf",
  },
  {
    title: "DFS-BFS",
    subtitle: "",
    image: "assets/images/experience-page/10.png",
    desp: "Tracing.",
    href: "assets/docs/dfs-bfs-traversal.pdf",
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp, href }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="${href}" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
