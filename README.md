# Assignment: Routing with Node.js  
### Created By: Aviran Amormin and Natalia Akulov  
---

Overview  
This project demonstrates a simple routing application using Node.js. The application serves multiple static files (HTML, CSS, and images) and handles basic routing for different web pages.  

### Components:  

1. HTML Pages:  
   - **page.html**: The main webpage.  
   - **about.html**: About Us page.  
   - **contact.html**: Contact Us page.  
   - Styled using an external CSS file (`styles.css`).  

2. Node.js Server (`app.js`):  
   - A server script that handles routing and serves static files based on URL requests.  
   - Includes basic error handling for unknown routes and server issues.  

### Features:  

**HTML Pages:**  
- Consistent layout across all pages.  
- Each page contains:  
  - Navigation links for seamless routing between pages.  
  - A footer with copyright information.  

**Server Functionality:**  
- Routes:  
  - `/` serves the main page (`page.html`).  
  - `/about` serves the About Us page (`about.html`).  
  - `/contact` serves the Contact Us page (`contact.html`).  
  - `/styles/styles.css` serves the external CSS file.  
  - `/images/` serves image files used in the pages.  
- Error Handling:  
  - 404: Responds with "Page Not Found" for invalid routes.  
  - 500: Displays "Internal Server Error" if a file cannot be accessed.  

  **Thank you**