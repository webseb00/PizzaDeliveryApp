import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP } from 'react-icons/fa'
const Footer = () => {
  return (
    <footer>
      <div>
        <p>Copyright &copy; 2022. All Rights Reserved.</p>
      </div>
      <ul>
        <li>
          <a href="/">
            <FaFacebookF />
          </a>
        </li>
        <li>
          <a href="/">
            <FaTwitter />
          </a>
        </li>
        <li>
          <a href="/">
            <FaInstagram />
          </a>
        </li>
        <li>
          <a href="/">
            <FaPinterestP />
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer