import resultEmptyUrl from "../../assets/images/illustration-empty.svg"
import classes from "./MortgageResult.module.css"

type MortgageResultProps = {
    hasResult: boolean;
    monthlyPayment?: number;
    totalPayment?: number;
}

const numberFormatter = new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
})

export function MortgageResult({ hasResult, monthlyPayment, totalPayment }: MortgageResultProps) {

    const showResult = hasResult && monthlyPayment != undefined && totalPayment != undefined

    return (
        <div className={classes.result}>
            {!showResult && (
                <div className={classes.resultEmpty}>
                    <img className={classes.resultEmptyImg} src={resultEmptyUrl} alt="" />
                    <h2>Results shown here</h2>
                    <p>
                        Complete the form and click “calculate repayments” to see what
                        your monthly repayments would be.
                    </p>
                </div>
            )}
            {showResult &&  (<>
                <h2>Your results</h2>
                <p>
                    Your results are shown below based on the information you provided.
                    To adjust the results, edit the form and click “calculate repayments” again.
                </p>

                <div className={classes.resultDetails}>
                    <span>Your monthly repayments</span>
                    <strong className={classes.monthly}>{numberFormatter.format(monthlyPayment)}</strong>
                    <hr className={classes.resultSeparator} />
                    <span>Total you'll repay over the term</span>
                    <strong className={classes.total}>{numberFormatter.format(totalPayment)}</strong>
                </div>
            </>)}
        </div>
    )
}