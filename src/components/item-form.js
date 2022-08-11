import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, Button } from "react-bootstrap";

const itemForm = (props) => {
    const validationSchema = Yup.object().shape({
        name: Yup.string().required("Required"),
        description:Yup.string().required("Enter more than 50 words"),
        type:Yup.string().required("required")
    });
    console.log(props);
    return (
        <div className="form-wrapper">
          <Formik {...props} validationSchema={validationSchema}>
            <Form>
              <FormGroup>
                <Field name="name" type="text" 
                    className="form-control" />
                <ErrorMessage
                  name="name"
                  className="d-block invalid-feedback"
                  component="span"
                />
              </FormGroup>
              <FormGroup>
                <Field name="description" type="text" 
                    className="form-control" />
                <ErrorMessage
                  name="description"
                  className="d-block invalid-feedback"
                  component="span"
                />
              </FormGroup>
              <FormGroup>
                <Field name="type" type="text" 
                    className="form-control" />
                <ErrorMessage
                  name="type"
                  className="d-block invalid-feedback"
                  component="span"
                />
              </FormGroup>
              <Button variant="danger" size="lg" 
                block="block" type="submit">
                {props.children}
              </Button>
            </Form>
          </Formik>
        </div>
      );
};

export default itemForm;