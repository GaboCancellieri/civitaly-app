import { useState } from "react";
import Modal from "../Modal/Modal"; // Ajusta la ruta según la ubicación de tu componente
import { FaBell, FaUserPlus, FaEnvelope, FaSearch } from "react-icons/fa";
import styles from "./navBar.module.scss";
import userProfileImage from "../../../assets/images/user/userProfileImg.jpg";
import logo from "../../../assets/images/NavBar/logoNavBar.png";
import { ModalPosition } from "./types";
const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState("");
  const [modalPosition, setModalPosition] = useState({});
  const [buttonTitle, setButtonTitle] = useState("");

  const openModal = (
    title: string,
    content: any,
    position: ModalPosition,
    button: string
  ) => {
    setModalTitle(title);
    setModalContent(content);
    setModalPosition(position);
    setIsModalOpen(true);
    setButtonTitle(button);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleIconClick = (
    title: string,
    content: any,
    event: any,
    buttonTitle?: string
  ) => {
    const iconRect = event.currentTarget.getBoundingClientRect();
    const position = {
      top: iconRect.bottom,
      left: iconRect.left,
    };
    openModal(title, content, position, buttonTitle || "");
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navBarLeft}>
        <div className={styles.navbarLogo}>
          <img src={logo} alt="Logo" />
          <span>Civitaly</span>
        </div>
        <div>
          <ul className={styles.navbarLinks}>
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/option2">Option2</a>
            </li>
            <li>
              <a href="/option3">Option3</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.searchBar}>{/* ¿¿¿¿¿ searchBar ????*/}</div>
      <div className={styles.navBarRight}>
        <div className={styles.navbarIcons}>
          <li
            onClick={(event) =>
              handleIconClick(
                "Busqueda",
                <p>Componente de busqueda</p>,
                event,
                "Ver más"
              )
            }
          >
            <FaSearch />
          </li>
          <li
            onClick={(event) =>
              handleIconClick(
                "Solicitudes de amistad",
                <p>Componente de solicitudes de amistad</p>,
                event,
                "Ver más"
              )
            }
          >
            <FaUserPlus />
          </li>
          <li
            onClick={(event) =>
              handleIconClick(
                "Mensajes",
                <p>Componente de mensajes </p>,
                event,
                "Ver todos"
              )
            }
          >
            <FaEnvelope />
          </li>
          <li
            onClick={(event) =>
              handleIconClick(
                "Notificaciones",
                <p>Componente de Notificaciones </p>,
                event,
                "Ver Todas"
              )
            }
          >
            <FaBell />
          </li>
        </div>
        <li
          onClick={(event) =>
            handleIconClick(
              "Hola UserName",
              <>
                {" "}
                <div>Componente de Notificaciones </div>{" "}
                <div>Componente de config Chat</div>{" "}
              </>,
              event
            )
          }
        >
          <img
            src={userProfileImage}
            alt="User"
            className={styles.navbarProfileImage}
          />
        </li>
      </div>
      <ul className={styles.bottomNavBar}>
        <li>
          <FaSearch />
        </li>
        <li>
          <FaUserPlus />
        </li>
        <li>
          <FaEnvelope />
        </li>
        <li>
          <FaBell />
        </li>
      </ul>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        title={modalTitle}
        position={modalPosition as { top: number; left: number }}
        buttonTitle={buttonTitle}
      >
        {modalContent}
      </Modal>
    </nav>
  );
};

export default Navbar;
