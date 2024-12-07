import React from "react";
import logo from "../assets/img/logo.png";
import { useLocation, Link } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const toggleSidebar = () => {
    const toggleButton = document.getElementById("toggle-btn");
    const sidebar = document.getElementById("sidebar");

    sidebar.classList.toggle("close");
    toggleButton.classList.toggle("rotate");

    closeAllSubMenus();
  };

  function toggleSubMenu(button) {
    if (!button.nextElementSibling.classList.contains("show")) {
      closeAllSubMenus();
    }

    button.nextElementSibling.classList.toggle("show");
    button.classList.toggle("rotate");

    if (sidebar.classList.contains("close")) {
      sidebar.classList.toggle("close");
      toggleButton.classList.toggle("rotate");
    }
  }

  function closeAllSubMenus() {
    Array.from(sidebar.getElementsByClassName("show")).forEach((ul) => {
      ul.classList.remove("show");
      ul.previousElementSibling.classList.remove("rotate");
    });
  }

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <nav id="sidebar">
        <ul>
          <li>
            <img className="logo" src={logo} width="160px" alt="Logo" />
            <button onClick={toggleSidebar} id="toggle-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#e8eaed"
              >
                <path d="m313-480 155 156q11 11 11.5 27.5T468-268q-11 11-28 11t-28-11L228-452q-6-6-8.5-13t-2.5-15q0-8 2.5-15t8.5-13l184-184q11-11 27.5-11.5T468-692q11 11 11 28t-11 28L313-480Zm264 0 155 156q11 11 11.5 27.5T732-268q-11 11-28 11t-28-11L492-452q-6-6-8.5-13t-2.5-15q0-8 2.5-15t8.5-13l184-184q11-11 27.5-11.5T732-692q11 11 11 28t-11 28L577-480Z" />
              </svg>
            </button>
          </li>
          <li className={isActive("/home") ? "active" : ""}>
            <Link to="/home">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#e8eaed"
              >
                <path d="M240-200h120v-200q0-17 11.5-28.5T400-440h160q17 0 28.5 11.5T600-400v200h120v-360L480-740 240-560v360Zm-80 0v-360q0-19 8.5-36t23.5-28l240-180q21-16 48-16t48 16l240 180q15 11 23.5 28t8.5 36v360q0 33-23.5 56.5T720-120H560q-17 0-28.5-11.5T520-160v-200h-80v200q0 17-11.5 28.5T400-120H240q-33 0-56.5-23.5T160-200Zm320-270Z" />
              </svg>
              <span>INÍCIO</span>
            </Link>
          </li>
          <li className={isActive("/materias") ? "active" : ""}>
            <Link to="/materias">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#e8eaed"
              >
                <path d="M520-640v-160q0-17 11.5-28.5T560-840h240q17 0 28.5 11.5T840-800v160q0 17-11.5 28.5T800-600H560q-17 0-28.5-11.5T520-640ZM120-480v-320q0-17 11.5-28.5T160-840h240q17 0 28.5 11.5T440-800v320q0 17-11.5 28.5T400-440H160q-17 0-28.5-11.5T120-480Zm400 320v-320q0-17 11.5-28.5T560-520h240q17 0 28.5 11.5T840-480v320q0 17-11.5 28.5T800-120H560q-17 0-28.5-11.5T520-160Zm-400 0v-160q0-17 11.5-28.5T160-360h240q17 0 28.5 11.5T440-320v160q0 17-11.5 28.5T400-120H160q-17 0-28.5-11.5T120-160Zm80-360h160v-240H200v240Zm400 320h160v-240H600v240Zm0-480h160v-80H600v80ZM200-200h160v-80H200v80Zm160-320Zm240-160Zm0 240ZM360-280Z" />
              </svg>
              <span>MATÉRIAS</span>
            </Link>
          </li>
          <li className={isActive("/desempenho") ? "active" : ""}>
            <Link to="/desempenho">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#e8eaed"
              >
                <path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-40q0-17 11.5-28.5T280-880q17 0 28.5 11.5T320-840v40h320v-40q0-17 11.5-28.5T680-880q17 0 28.5 11.5T720-840v40h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Zm280 240q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm-160 0q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480q17 0 28.5 11.5T360-440q0 17-11.5 28.5T320-400Zm320 0q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-160 0q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240Zm320 0q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 -17-11.5 28.5T640-240Z" />
              </svg>
              <span>DESEMPENHO</span>
            </Link>
          </li>
          <li className={isActive("/ranking") ? "active" : ""}>
            <Link to="/ranking">
              <svg
                width="24px"
                viewBox="0 0 39 39"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 21.125C13 18.8256 13 17.6767 13.715 16.965C14.4284 16.25 15.5772 16.25 17.875 16.25H21.125C23.4244 16.25 24.5732 16.25 25.285 16.965C26 17.6784 26 18.8272 26 21.125V35.75V30.875C26 28.5756 26 27.4268 26.715 26.715C27.4284 26 28.5756 26 30.875 26C33.1744 26 34.3232 26 35.035 26.715C35.75 27.4284 35.75 28.5772 35.75 30.875V35.75M13 27.625V35.75C13 33.4522 13 32.3034 12.285 31.59C11.5732 30.875 10.4244 30.875 8.125 30.875C5.82562 30.875 4.67837 30.875 3.965 31.59C3.25 32.3018 3.25 33.4506 3.25 35.75"
                  stroke="#001F3F"
                  stroke-width="3"
                  stroke-linecap="round"
                />
                <path
                  d="M18.1122 4.91237C18.7297 3.8025 19.0385 3.25 19.5 3.25C19.9615 3.25 20.2702 3.8025 20.8877 4.91237L21.047 5.19837C21.2225 5.51362 21.3102 5.66962 21.4467 5.77362C21.5848 5.87762 21.7555 5.91662 22.0967 5.993L22.4055 6.0645C23.6047 6.33587 24.2043 6.47075 24.3473 6.929C24.4903 7.38725 24.0808 7.86662 23.2635 8.82212L23.0522 9.06912C22.8198 9.3405 22.7028 9.47537 22.6508 9.64437C22.5988 9.81337 22.6167 9.99375 22.6508 10.3561L22.6833 10.686C22.8068 11.9616 22.8686 12.6002 22.4965 12.883C22.1227 13.1674 21.5605 12.9074 20.4376 12.3906L20.1483 12.2574C19.8282 12.1111 19.669 12.0364 19.5 12.0364C19.331 12.0364 19.1717 12.1111 18.8516 12.2574L18.5623 12.3906C17.4395 12.9074 16.8772 13.1674 16.5035 12.883C16.1297 12.6002 16.1931 11.9616 16.3166 10.686L16.3491 10.3561C16.3832 9.99375 16.4011 9.81337 16.3491 9.64437C16.2971 9.47537 16.1801 9.3405 15.9477 9.06912L15.7365 8.82212C14.9191 7.86662 14.5096 7.38887 14.6526 6.929C14.7956 6.47075 15.3952 6.33587 16.5945 6.0645L16.9032 5.993C17.2445 5.91662 17.4151 5.87925 17.5532 5.77362C17.6897 5.66962 17.7775 5.51362 17.953 5.19837L18.1122 4.91237Z"
                  stroke="#001F3F"
                  stroke-width="2.5"
                />
              </svg>
              <span>RANKING</span>
            </Link>
          </li>
          <li className={isActive("/perfil") ? "active" : ""}>
            <Link to="/perfil">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#e8eaed"
              >
                <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-240v-32q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v32q0 33-23.5 56.5T720-160H240q-33 0-56.5-23.5T160-240Zm80 0h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z" />
              </svg>
              <span>PERFIL</span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;