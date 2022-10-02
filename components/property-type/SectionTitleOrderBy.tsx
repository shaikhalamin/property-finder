import React from "react";
import { Row, Col, Form } from "react-bootstrap";

interface TitleLinkProps {
  title: string;
  titleCls?: string;
  orderTitle?: string;
}

const SectionTitleOrderBy: React.FC<TitleLinkProps> = ({
  title,
  titleCls,
  orderTitle,
}) => {
  return (
    <section>
      <Row className="py-1 px-3 mb-3">
        <Col md="6">
          <h2 className={`mb-2 ${!titleCls ? "text-start" : titleCls} ft-30`}>
            {title}
          </h2>
        </Col>
        <Col md="6">
          <Row>
            <Col>
              <h2 className={`mb-2 text-end`}>
                <span className={`text-black ft-14 fw-bold`}>
                  {orderTitle} <span>:</span>
                </span>
              </h2>
            </Col>
            <Col>
              <Form.Group controlId="purposeId">
                <Form.Select defaultValue="Ordinary" className="rounded-0 mt-2">
                  <option>Price : High to Low</option>
                  <option>Price : Low to High</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
        </Col>
      </Row>
    </section>
  );
};

export default SectionTitleOrderBy;
