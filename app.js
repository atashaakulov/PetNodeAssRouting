/**
 * @file app.js
 *  
 * students:
 * -------- 
 * @author  1: Natalia Akulov
 * @author 2: Aviran Amormin
 * 
 * @description A Node.js web server to handle different routes, serve static files,
 *          and manage error handling.
 * 
 * Notes:
 * - HTML templates are in the 'templates' folder.
 * - CSS files are in the 'styles' folder.
 * - Image files (PNG) are in the 'images' folder.
 * - Server listens on port 3000.
 */

// Import required modules
const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    // Parse the requested URL and extract the pathname
    let pathNameFull = req.url;
    const { pathname } = url.parse(pathNameFull, true);

    /**
     * Route: Home Page
     * Serves the main page (page.html) from the 'templates' directory.
     */
    if (pathname === '/') {
        try {
            const htmlPath = path.join(__dirname, 'templates', 'page.html');
            const fileStream = fs.createReadStream(htmlPath, 'UTF-8');
            res.writeHead(200, { 'Content-Type': 'text/html' });
            fileStream.pipe(res);
        } catch (err) {
            res.writeHead(500, { 'Content-Type': 'text/html' });
            res.end('<h1>Internal Server Error</h1>');
        }

    }
    /**
     * Route: About Page
     * Serves the about.html file from the 'templates' directory.
     */
    else if (pathname === '/about') {
        try {
            const htmlPath = path.join(__dirname, 'templates', 'about.html');
            const fileStream = fs.createReadStream(htmlPath, 'UTF-8');
            res.writeHead(200, { 'Content-type': 'text/html' });
            fileStream.pipe(res);
        } catch (err) {
            res.writeHead(500, { 'Content-Type': 'text/html' });
            res.end('<h1>Internal Server Error</h1>');
        }
    }
    /**
    * Route: Contact Page
    * Serves the contact.html file from the 'templates' directory.
    */
    else if (pathname === '/contact') {
        try {
            const htmlPath = path.join(__dirname, 'templates', 'contact.html');
            const fileStream = fs.createReadStream(htmlPath, 'UTF-8');
            res.writeHead(200, { 'Content-type': 'text/html' });
            fileStream.pipe(res);
        } catch (err) {
            res.writeHead(500, { 'Content-Type': 'text/html' });
            res.end('<h1>Internal Server Error</h1>');
        }
    }
    /**
    * Route: CSS Files
    * Serves static CSS files from the 'styles' folder.
    */
    else if (pathNameFull.match('[.]css$')) {
        try {
            const cssPath = path.join(__dirname, 'styles', pathname); // Path to the CSS file
            const fileStream = fs.createReadStream(cssPath, 'UTF-8');
            res.writeHead(200, { 'Content-type': 'text/css' });
            fileStream.pipe(res);
        } catch (err) {
            res.writeHead(500, { 'Content-Type': 'text/html' });
            res.end('<h1>Internal Server Error</h1>');
        }
    }

    /**
      * Route: Image Files
      * Serves PNG image files from the 'images' folder.
      */
    else if (pathNameFull.match('[.]png$')) {
        try {
            const imgPath = path.join(__dirname, 'images', pathNameFull); // Path to the image
            const fileStream = fs.createReadStream(imgPath);
            res.writeHead(200, { 'Content-type': 'image/png' });
            fileStream.pipe(res);
        } catch (err) {
            res.writeHead(500, { 'Content-Type': 'text/html' });
            res.end('<h1>Internal Server Error</h1>');
        }
    }
    /**
     * Default Route: 404 Not Found
     * Handles unknown routes with a 404 error message.
     */
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('<h1>Page Not Found</h1>');
    }
});

/**
 * Starts the server and listens on port 3000.
 */
server.listen(3000, () => {
    console.log('Server running on port 3000');
});
