import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Jonathan | Todos los derechos reservados
        </p>
        <div className="mt-4">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-600 mx-2"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white mx-2"
          >
            GitHub
          </a>
          <a
            href="mailto:your-email@example.com"
            className="text-green-400 hover:text-green-600 mx-2"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
