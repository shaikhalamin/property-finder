import SubmitButton, {
  ButtonSize,
} from "@/components/common/form/SubmitButton";
import { Property } from "@/data/model/property";
import { useRouter } from "next/router";
import React, { SyntheticEvent } from "react";
import { useState } from "react";
import { Row, Col, Button, Table } from "react-bootstrap";

type Properties = {
  data: Property[];
};

const AdminPropertyList: React.FC<Properties> = ({ data }) => {
  const router = useRouter();
  const [buttonRef, setButtonRef] = useState<number | string>("");
  const [loading, setLoading] = useState(false);
  return (
    <Row className="py-4 px-2">
      <Col className="">
        <Row>
          <Col className="mb-3 mt-2">
            <SubmitButton
              title="Add Property"
              variant="warning"
              loadingTitle="Redirecting"
              onClick={() => {
                setLoading(true);
                router.push("/admin/properties/create");
              }}
              isLoading={loading}
              buttonCls="rounded-0 ft-13 fw-normal"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Table className="border" responsive>
              <thead>
                <tr>
                  <th className="ft-14 text-uppercase">Name</th>
                  <th className="ft-14 text-uppercase">Address</th>
                  <th className="ft-14 text-uppercase">Price</th>
                  <th className="ft-14 text-uppercase">Purpose</th>
                  <th className="ft-14 text-uppercase">Property Type</th>
                  <th className="ft-14 text-uppercase">Edit</th>
                  <th className="ft-14 text-uppercase">Preview Button</th>
                </tr>
              </thead>
              <tbody>
                {data.length > 0 &&
                  data.map((property) => (
                    <tr key={property.id}>
                      <td>{property.name}</td>
                      <td>{property.address}</td>
                      <td>${property.price}</td>
                      <td>{property.purpose}</td>
                      <td>{property.propertyType.name}</td>
                      <td>
                        <SubmitButton
                          title="Edit"
                          variant="warning"
                          isLoading={false}
                          size={ButtonSize.SM}
                          buttonCls={`rounded-0`}
                          loadingTitle="Redirecting"
                          btnId={property.id}
                          btnRef={buttonRef}
                          onClick={() => {
                            setButtonRef(property.id);
                            router.push(
                              `/admin/properties/edit/${property.id}`
                            );
                          }}
                        />
                      </td>
                      <td>
                        <SubmitButton
                          title="Preview"
                          variant="info"
                          isLoading={false}
                          buttonCls={`rounded-0`}
                          size={ButtonSize.SM}
                          loadingTitle="Previewing"
                          btnId={`${property.id}_preview`}
                          btnRef={buttonRef}
                          onClick={() => {
                            setButtonRef(`${property.id}_preview`);
                            router.push(`/properties/${property.slug}`);
                          }}
                        />
                      </td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default AdminPropertyList;
