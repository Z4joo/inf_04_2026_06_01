
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


import {
  Container,
  Row,
  Col,
  Form,
  Button
} from 'react-bootstrap';

export default function Hasla() {
  const [adresStrony, ustawAdresStrony] = useState('');
  const [login, ustawLogin] = useState('');
  const [haslo, ustawHaslo] = useState('');
  const [generujHaslo, ustawGenerujHaslo] = useState(true);
  const [podsumowanie, ustawPodsumowanie] = useState(null);

  /*
   * nazwa funkcji: zapiszDane
   * opis funkcji: Zapisuje dane formularza i wyświetla ich podsumowanie
   * parametry: zdarzenie - zdarzenie wysłania formularza
   * zwracany typ i opis: brak - funkcja nie zwraca wartości
   * autor: 000000000000
   */
  const zapiszDane = (zdarzenie) => {
    zdarzenie.preventDefault();

    ustawPodsumowanie({
      adresStrony,
      login,
      haslo,
      generujHaslo
    });
  };

  return (
    <Container className="kontener-aplikacji">
      <Row>
        <Col md={9}>
          <h1 className="naglowek-aplikacji">
            Menedżer haseł - wykonał 000000000000
          </h1>

          <Form onSubmit={zapiszDane}>
            <Form.Group className="grupa-pola" controlId="adresStrony">
              <Form.Label>Adres WWW:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Adres strony WWW"
                value={adresStrony}
                onChange={(zdarzenie) =>
                  ustawAdresStrony(zdarzenie.target.value)
                }
                required
              />
            </Form.Group>

            <Form.Group className="grupa-pola" controlId="login">
              <Form.Label>Login:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Twój login"
                value={login}
                onChange={(zdarzenie) =>
                  ustawLogin(zdarzenie.target.value)
                }
                required
              />
            </Form.Group>

            <Form.Check
              type="checkbox"
              id="generujHaslo"
              label="Wygeneruj hasło"
              className="pole-wyboru"
              checked={generujHaslo}
              onChange={(zdarzenie) =>
                ustawGenerujHaslo(zdarzenie.target.checked)
              }
            />

            <Form.Group className="grupa-pola" controlId="haslo">
              <Form.Label>Hasło:</Form.Label>
              <Form.Control
                type="password"
                value={haslo}
                onChange={(zdarzenie) =>
                  ustawHaslo(zdarzenie.target.value)
                }
                disabled={generujHaslo}
                required={!generujHaslo}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Zapisz
            </Button>
          </Form>

          {podsumowanie && (
            <div className="podsumowanie">
              <p className="adres-podsumowania">
                Adres: {podsumowanie.adresStrony}
              </p>

              <p className="paragraf-podsumowania">
                Login: {podsumowanie.login}
              </p>

              <p className="paragraf-podsumowania">
                {podsumowanie.generujHaslo
                  ? 'Hasło automatycznie generowane'
                  : `Hasło: ${podsumowanie.haslo}`}
              </p>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
}
