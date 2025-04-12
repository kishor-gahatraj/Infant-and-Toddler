document.getElementById("navbar").innerHTML = `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container-fluid">
        <!-- Toggle on far left -->
        <button
          class="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Brand centered or left for desktop -->
        <a
          class="navbar-brand d-flex align-items-center text-white mx-auto mx-lg-0"
          href="#"
        >
          <img
            src="images/logo2.png"
            alt="Logo"
            class="img-fluid"
            style="max-width: 120px; height: auto; margin-right: 15px"
            class="me-2"
          />
          <h4 class="mb-0">Infant and Toddlers</h4>
        </a>

        <!-- Desktop menu -->
        <div class="d-none d-lg-block ms-auto">
          <ul class="navbar-nav flex-row gap-3">
            <li class="nav-item">
              <a class="nav-link text-white" href="Index.html">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="TeachingInfanandToddleEducation.html"
                >Teaching Infant and Toddler Education</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="InfantandToddlerPlayEnv.html"
                >Infant and Toddler Play Environments
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="PromtingInfant.html">Promoting Infant</a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle text-white"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                More
              </a>
              <ul class="dropdown-menu dropdown-menu-left-shift">
                <li>
                  <a class="dropdown-item" href="#"
                    >Supporting Cognitive Development</a
                  >
                </li>
                <li>
                  <a class="dropdown-item" href="#"
                    >Fostering Social Development</a
                  >
                </li>
                <li>
                  <a class="dropdown-item" href="#"
                    >Fostering Emotional Development</a
                  >
                </li>
                <li>
                  <a class="dropdown-item" href="FacilitatingLanandlitDev.html"
                    >Facilitating Language and Literacy Development</a
                  >
                </li>
                <li>
                  <a class="dropdown-item" href="#"
                    >Perceptual Development and the Five Senses</a
                  >
                </li>
                <li><a class="dropdown-item" href="#">References</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Offcanvas Menu -->
    <div
      class="offcanvas offcanvas-start bg-dark"
      tabindex="-1"
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
    >
      <div
        class="offcanvas-header d-flex align-items-center justify-content-start gap-2"
      >
        <h5 class="offcanvas-title mb-0" id="offcanvasNavbarLabel">Menu</h5>
        <button
          type="button"
          class="btn-close text-white"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
          style="filter: invert(1)"
        ></button>
      </div>

      <div class="offcanvas-body">
        <ul class="navbar-nav">
         <li class="nav-item">
            <a class="nav-link" href="Index.html"
              >Home</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="TeachingInfanandToddleEducation.html"
              >Teaching Infant and Toddler Education</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="InfantandToddlerPlayEnv.html"
              >Infant and Toddler Play Environments</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="PromtingInfant.html">Promoting Infant</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Fostering Social Development</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Fostering Emotional Development</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="FacilitatingLanandlitDev.html"
              >Facilitating Language and Literacy Development</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"
              >Perceptual Development and the Five Senses</a
            >
          </li>
          <li class="nav-item"><a class="nav-link" href="#">References</a></li>
        </ul>
      </div>
    </div>
`;

document.getElementById("footer").innerHTML = `
<footer class="footer bg-dark text-white py-4 mt-5">
      <div class="container text-center">
        <h3>About Us | Contact Information</h3>
        <h4>Krishala Gahatraj | Second | Third | Fourth</h4>
        <p class="mb-1">&copy; 2025 Infant and Toddler Education. All rights reserved.</p>
        <p class="small">
          Designed with ❤️ for educational purposes.
        </p>
        <p class="mb-1">
          IKON Institute of Australia
        </p>
      </div>
    </footer>
`;
document.addEventListener("DOMContentLoaded", function () {
  const currentPage = window.location.pathname.split("/").pop(); // Get current page filename
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    const linkPage = link.getAttribute("href");

    // Match exact page, and not just #
    if (linkPage === currentPage) {
      link.classList.add("active");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const currentPath = window.location.pathname.split("/").pop();
  document.querySelectorAll(".dropdown-menu .dropdown-item").forEach((link) => {
    const linkPath = link.getAttribute("href");
    if (linkPath === currentPath) {
      link.classList.add("active");
    }
  });
});
