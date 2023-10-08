import { Summary } from "../Summary/summary";
import { TransactionsTable } from "../TransactionsTable/transacation";
import { Container } from "./style";


export function Dashboard() {
    return (
        <Container>
            <Summary />
            <TransactionsTable />
        </Container>
    );
}