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
    font-family: "Graphik";
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    text-align: left;
    color: #858494;
  }
  .firthbutton {
    text-align: center;
    width: 440px;
    height: 56px;
    gap: 16px;
    border-radius: 20px;
    border-color: rgba(230, 230, 230, 1);
    border: 2px;
    opacity: 0px;
    background-color: white;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
  }
  .secondbutton {
    text-align: center;
    width: 440px;
    height: 56px;
    gap: 16px;
    border-radius: 20px;
    border: none;
    opacity: 0px;
    color: white;
    background: rgba(0, 86, 178, 1);
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
  }
  .separator {
    padding: 24px 0px 0px 0px;
    display: flex;
    align-items: center;
    justify-content: center;

    text-align: center;
    color: rgba(133, 132, 148, 1);
  }

  .separator::before,
  .separator::after {
    content: "";
    flex-grow: 1;
    height: 1px;
    background-color: rgba(204, 204, 204, 1);
  }

  .separator span {
    margin: 0 10px;
    font-size: 14px;
    font-weight: bold;
  }
  .form_password {
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
  width: 440px;
  border-radius: 20px;
  text-align: center;
  margin-top: 24px;
  button {
    width: 100%;
    height: 56px;
    background: rgba(106, 90, 224, 1);
    color: white;
    font-weight: bold;
    border-radius: 20px;
    font-family: "Rubik";
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    text-align: center;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    
  }
`;
export const PasswordForgot = styled.div`
  display: flex;
  justify-content: center;
  h5 {
    font-family: "Rubik", sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 24s;
    text-align: center;
    color: rgba(106, 90, 224, 1);
    padding: 24px 0px 0px 0px;
  }
`;
export const PasswordForgotInformation = styled.div`
  width: 364px;
  display: flex;
  justify-content: center;
  text-align: center;
  padding: 24px 0px 0px 0px;
  h4 {
    display: flex;
    justify-content: center;
    font-family: "Rubik", sans-serif;
    font-size: 16px;
    font-weight: 200;
    line-height: 24px;
    text-align: center;
    color: rgba(133, 132, 148, 1);
  }
  .text_footer_span {
    font-family: "Graphik";
    font-size: 14px;
    font-weight: 900;
    line-height: 19.6px;
    text-align: center;
    color: rgb(63, 60, 81);
  }
`;
export const BgImg = styled.div`
  width: 200px;
  position: relative;
  bottom: 800px;
  right: -150px;

  .bgImg2 {
    position: relative;
    right: 500px;
    bottom: 100px;
    transform: rotate(180deg);
  }
  .bgImg2_2 {
    position: relative;
    bottom: 700px;
    right: 270px;
  }
  .bgImg2_3 {
    position: relative;
    top: -250px;
    right: 80px;
  }
`;
export const BUttonWithGoogle = styled.div`
  padding: 40px 0px 0px 0px;
`;
