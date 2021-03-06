import React, { useState } from "react";

const Groups = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="groups chats">
        <div onClick={() => toggle()} className="project__desc project__close">
          <h2 className="project__title">Groups</h2>
          <svg
            className={isOpen ? "arrow" : "active"}
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0)">
              <path
                d="M20.7434 15.9309C20.4013 16.273 19.8483 16.273 19.5062 15.9309L10.5 6.92474L1.49382 15.9309C1.15171 16.273 0.598713 16.273 0.256609 15.9309C-0.0854955 15.5888 -0.0854955 15.0358 0.256609 14.6937L9.88142 5.0689C10.052 4.89828 10.276 4.81252 10.5 4.81252C10.7241 4.81252 10.948 4.89828 11.1187 5.0689L20.7435 14.6937C21.0855 15.0358 21.0855 15.5888 20.7434 15.9309Z"
                fill="#E0E0E0"
              />
            </g>
            <defs>
              <clipPath id="clip0">
                <rect
                  width="21"
                  height="21"
                  fill="white"
                  transform="matrix(1 0 0 -1 0 21)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className={isOpen ? "group__items" : "active"}>
          <div className="conversation__block user">
            <div className="user__image" />
            <h3 className="user__name">C++</h3>
          </div>
          <div className="conversation__block user">
            <div className="user__image" />
            <h3 className="user__name">Java Script</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Groups;
