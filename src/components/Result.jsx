import { calculateInvestmentResults, formatter } from "../util/investment"
export default function Result({ sentInput }) {
    console.log(sentInput);
    const FormatInput = {

        initialInvestment: sentInput.initialInvestment,
        annualInvestment: sentInput.AnnualInvestment,
        expectedReturn: sentInput.ExpectedReturn,
        duration: sentInput.duration
    }
    const resultData = calculateInvestmentResults(FormatInput);
    const initialInvestment =
        resultData[0].valueEndOfYear -
        resultData[0].interest -
        resultData[0].annualInvestment;
    console.log(resultData);


    return (
        <>
            <table id="result">
                <thead>
                    <tr>
                        <th>
                            Year
                        </th>
                        <th>
                            Investment
                        </th>
                        <th>
                            Interest(Year)
                        </th>
                        <th>
                            Total Interest
                        </th>
                        <th>
                            Invested Capital
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {resultData.map(yearData => {
                        const totalInterest =
                            yearData.valueEndOfYear -
                            yearData.annualInvestment * yearData.year -
                            initialInvestment;
                        const totalAmountInvested = yearData.valueEndOfYear - totalInterest;

                        return <tr key={yearData.year}>
                            <td>{yearData.year}</td>
                            {/* <td>{formatter.format(yearData.year)}</td> */}
                            <td>{formatter.format(yearData.valueEndOfYear)}</td>
                            <td>{yearData.interest}</td>
                            <td>{totalInterest}</td>
                            <td>{totalAmountInvested}</td>
                        </tr>
                    })}
                </tbody>

            </table>
        </>
    )
}