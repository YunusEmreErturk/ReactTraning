import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import alertify from "alertifyjs";

export default class KomplexForm extends Component {
  state = {
    email: "",
    password: "",
    city: "",
    description: ""
  };

  onChangHandler = event => {
    let name = event.target.name;
    let value = event.target.value;

    this.setState({ [name]: value });
  };

  onSubmitHandler = event => {
    event.preventDefault();
    alertify.success(this.state.email + " başarı ile kayıt edildi");
  };
  render() {
    return (
      <div>
        <Form onSubmit={this.onSubmitHandler}>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Email giriniz"
              onChange={this.onChangHandler}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label for="password">Parola</Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Parola giriniz"
              onChange={this.onChangHandler}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label for="description">Açıklama</Label>
            <Input
              type="textarea"
              name="description"
              id="description"
              placeholder="Açıklama giriniz"
              onChange={this.onChangHandler}
            ></Input>
          </FormGroup>
          <FormGroup>
              <Label for="city">Şehir</Label>
              <Input type="select" name="city" id="city" onChange={this.onChangHandler}>
                  <option>İstanbul</option>
                  <option>Tekirdağ</option>
                  <option>Denizli</option>
                  <option>Manisa</option>
                  <option>Kastamonu</option>
              </Input>
          </FormGroup>
          <Button color="info" type="submit" >Kaydet</Button>
        </Form>
      </div>
    );
  }
}
