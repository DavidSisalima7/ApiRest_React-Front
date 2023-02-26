import React, { useContext, useState } from "react";
import { Panel } from "primereact/panel";
import { DataTable } from "primereact/datatable";
import { Card } from "primereact/card";
import { Container } from "react-bootstrap";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { ProductContext } from "../contexts/ProductContext";
import ProductForm from "./ProductForm";

const ProductList = () => {


  const { products, findProduct } = useContext(ProductContext);

  const [isVisible, setIsVisible] = useState(false);

  const saveProduct = (id) => {
    findProduct(id);
    setIsVisible(true);
  };

  const footer = (
    <div className="d-flex align-content-center justify-content-center ">
      <Button
        className=" p-button-success p-button-sm"
        style={{ float: "left" }}
        icon="pi pi-plus"
        label="Agregar"
        onClick={() => setIsVisible(true)}
      />
    </div>
  );

  return (
    <>
      <Container className=" mb-5">
        <label className="labelTitulo">
          <h2>TABLA DE PRODUCTOS</h2>{" "}
        </label>
        <Card className="card">
          <div>
            <DataTable
              value={products}
              selectionMode="single"
              onSelectionChange={(e) => saveProduct(e.value._id)}
              footer={footer}
              scrollable
              scrollHeight="28rem"
              className="p-datatable-customers"
              emptyMessage="Sin registros"
              style={{ fontSize: "0.8rem"}}
            >
              <Column
                field="_id"
                header="Id"
                style={{
                  maxWidth: "20rem",
                  flexGrow: 1,
                  flexBasis: "100px",
                  width: "20px",
                
                }}
                align="left"
              />
              <Column
                field="name"
                header="Nombre"
                style={{ maxWidth: "10rem", flexGrow: 1, flexBasis: "100px" }}
                align="center"
              />
              <Column
                field="price"
                header="Precio"
                style={{ maxWidth: "10rem", flexGrow: 1, flexBasis: "100px" }}
                align="center"
              />
              <Column
                field="expiry_date"
                header="Fecha de Caducidad"
                style={{ maxWidth: "10rem", flexGrow: 1, flexBasis: "100px" }}
                align="center"
              />
            </DataTable>

            <ProductForm isVisible={isVisible} setIsVisible={setIsVisible} />
          </div>
        </Card>
      </Container>
    </>
  );
};

export default ProductList;
