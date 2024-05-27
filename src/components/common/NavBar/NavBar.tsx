import { useState } from "react";
import Modal from "../Modal/Modal"; // Ajusta la ruta según la ubicación de tu componente
import styles from "./navBar.module.scss";
import userProfileImage from "../../../assets/images/user/userProfileImg.jpg";
import logo from "../../../assets/images/NavBar/logoNavBar.png";
import { ModalPosition } from "./types";
import { Button, Icon, Typography, Image } from "..";
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
      <div className={styles.navbarContent}>
        <div className={styles.navBarLeft}>
          <div className={styles.navbarLogo}>
            <Image src={logo} alt="Logo" />
            <Typography variant="smallTitle">Civitaly</Typography>
          </div>
          <div>
            <ul className={styles.navbarLinks}>
              <li>
                <a href="#home">
                  <Button type="transparent">
                    <Typography variant="buttonText">Home</Typography>
                  </Button>
                </a>
              </li>
              <li>
                <a href="#features">
                  <Button type="transparent">
                    <Typography variant="buttonText">Features</Typography>
                  </Button>
                </a>
              </li>
              <li>
                <a href="#testimonials">
                  <Button type="transparent">
                    <Typography variant="buttonText">Testimonials</Typography>
                  </Button>
                </a>
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
              <Icon iconDesign="FontAwesome5" iconId="FaSearch" />
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
              <Icon iconDesign="FontAwesome5" iconId="FaUserPlus" />
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
              <Icon iconDesign="FontAwesome5" iconId="FaEnvelope" />
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
              <Icon iconDesign="FontAwesome5" iconId="FaBell" />
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
            <Image
              src={userProfileImage}
              alt="User"
              className={styles.navbarProfileImage}
            />
          </li>
        </div>
        <ul className={styles.bottomNavBar}>
          <li>
            <Icon iconDesign="FontAwesome5" iconId="FaSearch" />
          </li>
          <li>
            <Icon iconDesign="FontAwesome5" iconId="FaUserPlus" />
          </li>
          <li>
            <Icon iconDesign="FontAwesome5" iconId="FaEnvelope" />
          </li>
          <li>
            <Icon iconDesign="FontAwesome5" iconId="FaBell" />
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
      </div>
    </nav>
  );
};

export default Navbar;
