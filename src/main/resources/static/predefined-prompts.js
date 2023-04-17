const prompts = [
  "Generate a class diagram for a car rental system that includes classes like Car, Rental, and Customer. A rental is associated with one car and one customer. A customer can rent multiple cars, and a car can be rented by multiple customers.\n",
  "Create a class diagram for a chat application that has classes like User, Conversation, and Message. A user can participate in multiple conversations, and a conversation can have multiple users. A message is associated with a single conversation.\n",
  "Generate a class diagram for an online store that includes classes like Product, Cart, and Order. A cart can contain multiple products, and an order is associated with one cart. A product can be included in multiple carts, and an order can contain multiple products.\n",
  "Create a class diagram for a music streaming service that has classes like User, Song, and Playlist. A user can create multiple playlists and add multiple songs to a playlist. A song can be included in multiple playlists.\n",
  "Generate a class diagram for a hotel reservation system that includes classes like Room, Reservation, and Guest. A reservation is associated with one room and one guest. A guest can make multiple reservations, and a room can be reserved by multiple guests.\n",
  "Generate a class diagram for a library system that includes classes like Book, Author, and Borrower. A book can have multiple authors, and a borrower can borrow multiple books. A book can only be borrowed by one borrower at a time.\n",
  "Create a class diagram for a job application system that has classes like Job, Applicant, and Recruiter. A job can have multiple applicants, and an applicant can apply to multiple jobs. A recruiter can review multiple applications.\n",
  "Generate a class diagram for an airline reservation system that includes classes like Flight, Passenger, and Reservation. A flight can have multiple passengers, and a passenger can book multiple flights. A reservation is associated with one passenger and one flight.\n",
  "Create a class diagram for a school enrollment system that has classes like Student, Course, and Teacher. A student can enroll in multiple courses, and a course can have multiple students. A teacher can teach multiple courses.\n",
  "Generate a class diagram for a payroll system that includes classes like Employee, Department, and Salary. An employee can belong to one department, and a department can have multiple employees. An employee can have one salary, and a salary is associated with one employee.\n",
  "Create a class diagram for a game engine that includes classes like Game and Renderer. The Renderer class inherits from the Game class, and the Game class has a composition relationship with the Renderer class.\n",
  "Generate a class diagram for an e-commerce website that includes classes like Product and Category. The Category class has an aggregation relationship with the Product class, where multiple products can belong to the same category.\n",
  "Create a class diagram for a music player that has classes like Song and Playlist. The Playlist class has a composition relationship with the Song class, where multiple songs can belong to the same playlist.\n",
  "Generate a class diagram for a restaurant management system that includes classes like Restaurant and Menu. The Menu class has an aggregation relationship with the Restaurant class, where the menu is associated with one restaurant.\n",
  "Create a class diagram for a company that has classes like Employee and Manager. The Manager class inherits from the Employee class, where a manager is a specific type of employee.\n"
]

export function getRandomPrompt() {
  const randomIndex = Math.floor(Math.random() * prompts.length);
   document.getElementById("prompt-uml").value  = prompts[randomIndex]
}