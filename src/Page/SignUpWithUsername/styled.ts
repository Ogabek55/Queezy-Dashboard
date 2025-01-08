import styled from "styled-components";

export const SignUp = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 143px;

  .login_page {
    display: flex;
    justify-content: space-around;
  } 

  h4 {
    font-family: "Rubik", sans-serif;
    font-size: 32px;
    font-weight: 700;
    line-height: 48px;
    padding: 72px 0px 12px 0px;
  }

  h5 {
    font-family: "Rubik", sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #858494;
  }

  .form_email {
    padding: 24px 0px 0px 0px;
    font-family: "Rubik", sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
  }
`;

export const ButtonFooter = styled.div`
  .ButtonFooter {
    width: 440px;
    height: 56px;
    border-radius: 20px;
    text-align: center;
    margin-top: 24px;
    background: rgba(106, 90, 224, 1);
    font-family: Rubik;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    text-align: center;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
  }
`;
