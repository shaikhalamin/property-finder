import React from "react";
import { Row, Col } from "react-bootstrap";
import styles from "./home.module.css";

interface TitleLinkProps {
  title: string;
  linkTitle: string;
  link: string;
}

const SectionTitleLink: React.FC<TitleLinkProps> = ({
  title,
  linkTitle,
  link = "#",
}) => {
  return (
    <>
      <Row>
        <Col md="6">
          <h2 className={`mb-2 text-start ft-30`}>{title}</h2>
        </Col>
        <Col md="6">
          <h2 className={`mb-2 text-end`}>
            <a
              href={link}
              className={`text-decoration-none text-dark ft-14 text-uppercase font-weight-bold ${styles.featureViewMore}`}
            >
              {linkTitle}
            </a>
          </h2>
        </Col>
      </Row>
    </>
  );
};

export default SectionTitleLink;
