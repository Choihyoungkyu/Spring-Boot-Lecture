import React, { useEffect, useRef, useState } from "react";
import "./Modal.css";
import Btn from "../btn/Btn";

export default function Modal({
  isOpen,
  title,
  handleModalClose,
  handleModalConfirm,
}) {
  const modalRef = useRef(null);
  const [content, setContent] = useState("");

  /** 모달 바깥을 클릭 시 모달을 닫는 함수 */
  function handleModalOutsideClick(e) {
    if (modalRef.current && !modalRef.current.contains(e.target))
      handleModalClose();
  }

  // Todo 내용 입력하기
  const handleContentUpdate = (e) => {
    setContent(e.target.value);
  };

  // Todo 만들기
  const handleTodoCreate = () => {
    handleModalConfirm(content);
    handleModalClose();
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleModalOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleModalOutsideClick);
    };
  }, []);

  return (
    <div>
      {isOpen ? (
        <div className="ModalContainer" ref={modalRef}>
          {/* 모달 컨텐츠 */}
          <div className="ModalContent">
            <div className="modalTitle">{title}</div>
            <div className="modalContent">
              <textarea
                value={content}
                onChange={handleContentUpdate}
                placeholder="Write Your Todo"
              />
            </div>

            <div className="btnBox">
              <Btn className="btn" content="Create" fn={handleTodoCreate} />
              <Btn className="btn" content="Cancel" fn={handleModalClose} />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
