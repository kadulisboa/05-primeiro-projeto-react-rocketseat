import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
    transition: 0.4s color ease;

    &:hover {
      color: #666;
    }

    svg {
      margin-right: 5px;
    }
  }
`;

export const RepositoryInfo = styled.section`
  margin-top: 80px;

  header {
    display: flex;
    align-items: center;

    img {
      width: 120px;
      height: 120px;
      border-radius: 100%;
    }

    div {
      margin-left: 20px;

      strong {
        font-size: 34px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #737380;
        margin-top: 5px;
      }
    }
  }

  ul {
    display: flex;
    list-style: none;
    margin-top: 40px;

    li {
      & + li {
        margin-left: 80px;
      }

      strong {
        font-size: 34px;
        color: #3d3d4d;
        display: block;
      }

      span {
        font-size: 16px;
        color: #6c6c80;
        display: block;
      }
    }
  }
`;

export const Issues = styled.div`
  margin-top: 80px;

  a {
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.1);
    background: white;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: 0.2s transform ease;

    &:hover {
      transform: translateX(15px);
    }

    & + a {
      margin-top: 16px;
    }

    div {
      margin: 0 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
      }
    }
    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;
