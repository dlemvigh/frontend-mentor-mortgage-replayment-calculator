import "./MortgageResult.css"
import resultEmptyUrl from "../../assets/images/illustration-empty.svg"

type MortgageResultProps = {
    hasResult: true;
    monthlyPayment: number;
    totalPayment: number;
} | {
    hasResult: false;
    monthlyPayment: undefined;
    totalPayment: undefined;
}

export function MortgageResult({ hasResult, monthlyPayment, totalPayment }: MortgageResultProps) {

    return (
        <div className="result">
            {!hasResult && (
                <div className="result-empty">
                    <img className="result-empty-img" src={resultEmptyUrl} alt="" />
                    <h2>Results shown here</h2>
                    <p>
                        Complete the form and click “calculate repayments” to see what
                        your monthly repayments would be.
                    </p>
                </div>
            )}
            {hasResult && (<>
                <h2>Your results</h2>
                <p>
                    Your results are shown below based on the information you provided.
                    To adjust the results, edit the form and click “calculate repayments” again.
                </p>

                <div className="result-details">
                    <span>Your monthly repayments</span>
                    <span>£{monthlyPayment.toFixed(2)}</span>
                    <span>Total you'll repay over the term</span>
                    <span>£{totalPayment.toFixed(2)}</span>
                </div>
            </>)}
        </div>
    )
}