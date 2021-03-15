import React from 'react';

import { Container } from './styles';

import income from '../../assets/income.svg';
import outcome from '../../assets/outcome.svg';
import total from '../../assets/total.svg';

const Summary: React.FC = () => {
  return (
      <Container>
          <div>
            <header>
              <p>Entradas</p>
              <img alt="Entradas" src={income}/>
            </header>
            <strong>R$ 17.400,00</strong>
          </div>

          <div>
            <header>
              <p>Saidas</p>
              <img alt="Saídas" src={outcome}/>
            </header>
            <strong>R$ 1.259,00</strong>
          </div>

          <div className="highlight-background">
            <header>
              <p>Total</p>
              <img alt="Total" src={total}/>
            </header>
            <strong>R$ 16.141,00</strong>
          </div>
      </Container>
  )
}

export default Summary;