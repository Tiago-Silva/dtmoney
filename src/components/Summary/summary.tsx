import { useContext } from 'react';
import { Container } from './style';
import IncomeImg from '../../assets/income.svg';
import OutcommeImg from '../../assets/outcome.svg';
import TotalImg from '../../assets/total.svg';
import { TransactionsContext } from '../../contexts/TransactionContext';


export function Summary() {
    const { transactions } = useContext(TransactionsContext);

    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={IncomeImg} alt="Entradas" />
                </header>
                <strong>R$1000,00</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={OutcommeImg} alt="Saídas" />
                </header>
                <strong>- R$500,00</strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={TotalImg} alt="Total" />
                </header>
                <strong>R$500,00</strong>
            </div>
        </Container>
    );
}