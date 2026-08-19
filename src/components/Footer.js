function Footer() {
  return (
    <footer>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/menu">Menu</a></li>
        <li><a href="/reservations">Reservations</a></li>
        <li><a href="/order-online">Order Online</a></li>
        <li><a href="/login">Login</a></li>
      </ul>
      <p>&copy; {new Date().getFullYear()} Little Lemon. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
