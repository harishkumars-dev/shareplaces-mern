import { useRef } from "react";
import ReactDOM from "react-dom";
import Backdrop from "../UIElements/Backdrop";
import { CSSTransition } from "react-transition-group";
import "./Modal.css";

const ModalOverlay = (props) => {
  const content = (
    <div
      ref={props.ref}
      className={`modal ${props.className}`}
      style={props.style}
    >
      <header className={`modal__header ${props.headerClass}`}>
        <h2>{props.header}</h2>
      </header>
      <form
        onSubmit={
          props.onSubmit ? props.onSubmit : (event) => event.preventDefault()
        }
      >
        <div className={`modal__content ${props.contentclass}`}>
          {props.children}
        </div>
        <footer className={`modal__footer ${props.footerClass}`}>
          {props.footer}
        </footer>
      </form>
    </div>
  );
  return ReactDOM.createPortal(content, document.getElementById("modal-hook"));
};

const Modal = (props) => {
  const nodeRef = useRef(null);

  return (
    <>
      {props.show && <Backdrop onClick={props.onCancel} />}
      <CSSTransition
        in={props.show}
        nodeRef={nodeRef}
        timeout={200}
        mountOnEnter
        unmountOnExit
        classNames="modal"
      >
        <ModalOverlay ref={nodeRef} {...props} />
      </CSSTransition>
    </>
  );
};

export default Modal;
